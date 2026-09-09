#!/usr/bin/env node
// Verify that a generated image contains exactly the text it is supposed to.
// Pure: image + expected strings -> pass / near-pass / fail. The attempt cap is
// enforced by the orchestrator loop (SKILL.md build_media), not here.
//
// Usage:
//   node li-render-check.mjs --image <png> --expect <panel-text.json> [--json]
//
// Text extraction backend, in order of preference:
//   1. Anthropic vision (needs ANTHROPIC_API_KEY) — robust on stylized fonts.
//   2. `tesseract` on PATH — fallback.
//
// Exit: 0 pass or near-pass (prints "PASS" / "NEAR-PASS: ..."),
//       1 fail (prints a diff; add --json for machine-readable),
//       2 no extraction backend / bad input.

import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { parseArgs } from "./lib.mjs";

const a = parseArgs(process.argv.slice(2), ["json"]);
if (!a.image || !a.expect) {
  console.error("usage: li-render-check.mjs --image <png> --expect <panel-text.json> [--json]");
  process.exit(2);
}

const spec = JSON.parse(readFileSync(a.expect, "utf8"));
const slots = (spec.slots || []).filter((s) => s && s.text);
if (!slots.length) {
  console.error("panel-text.json has no slots");
  process.exit(2);
}

// --- normalize -------------------------------------------------------------

function norm(s) {
  return s
    .toLowerCase()
    .replace(/[‘’‛]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐-―]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/[.,;:!?]+/g, "")
    .trim();
}
// looser: also drop apostrophes/quotes/hyphens for a "punctuation-only" retry
function loose(s) {
  return norm(s).replace(/['"()-]/g, "").replace(/\s+/g, " ").trim();
}

// --- extract text --------------------------------------------------------

async function extractText(imgPath) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (key) {
    const b64 = readFileSync(imgPath).toString("base64");
    const media =
      imgPath.toLowerCase().endsWith(".jpg") || imgPath.toLowerCase().endsWith(".jpeg")
        ? "image/jpeg"
        : "image/png";
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_VISION_MODEL || "claude-sonnet-5",
        max_tokens: 500,
        messages: [
          {
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: media, data: b64 } },
              {
                type: "text",
                text:
                  "Transcribe every piece of text visible in this image. One string per line, " +
                  "in reading order (top-to-bottom, then left-to-right). Output only the text, " +
                  "no numbering, no commentary. If there is no text, output NONE.",
              },
            ],
          },
        ],
      }),
    });
    const j = await res.json();
    if (!res.ok) {
      console.error(`vision extract failed (${res.status}): ${JSON.stringify(j)}`);
      process.exit(2);
    }
    return (j.content || []).map((c) => c.text || "").join("\n");
  }

  // tesseract fallback
  try {
    return execFileSync("tesseract", [imgPath, "stdout"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
  } catch (e) {
    if (e.code === "ENOENT") {
      console.error("no text-extraction backend: set ANTHROPIC_API_KEY or install tesseract");
    } else {
      console.error(`tesseract failed: ${(e.stderr || e.message || "").toString().trim()}`);
    }
    process.exit(2);
  }
}

// --- compare -----------------------------------------------------------

const raw = await extractText(a.image);
const hayN = norm(raw);
const hayL = loose(raw);

const result = { pass: true, near: false, slots: [] };
let cursor = 0; // enforce order on the normalized haystack

for (const s of slots) {
  const nN = norm(s.text);
  const nL = loose(s.text);
  let status = "missing";
  let at = hayN.indexOf(nN, cursor);
  if (at >= 0) {
    status = "ok";
    cursor = at + nN.length;
  } else if (hayN.indexOf(nN) >= 0) {
    status = "out-of-order";
  } else if (hayL.indexOf(nL) >= 0) {
    status = "near"; // punctuation/spacing only
    result.near = true;
  }
  if (status === "missing" || status === "out-of-order") result.pass = false;
  result.slots.push({ id: s.id, kind: s.kind, text: s.text, status });
}

// caption/title slots must not be wildly wrong; extra object labels are fine.
if (a.json) {
  console.log(JSON.stringify({ ...result, extracted: raw.trim() }, null, 2));
}

if (result.pass && !result.near) {
  if (!a.json) console.log("PASS");
  process.exit(0);
}
if (result.pass && result.near) {
  if (!a.json)
    console.log(
      "NEAR-PASS: " +
        result.slots
          .filter((s) => s.status === "near")
          .map((s) => `"${s.text}"`)
          .join(", ") +
        " (punctuation/spacing only)",
    );
  process.exit(0);
}

if (!a.json) {
  console.log("FAIL");
  for (const s of result.slots) {
    if (s.status !== "ok") console.log(`  [${s.status}] ${s.kind}: "${s.text}"`);
  }
  console.log("--- extracted ---");
  console.log(raw.trim());
}
process.exit(1);
