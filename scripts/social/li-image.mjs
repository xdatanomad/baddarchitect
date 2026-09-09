#!/usr/bin/env node
// Render one image for a LinkedIn post from a prompt file. Provider-configurable
// via IMAGE_API_* env vars; defaults to the OpenAI-compatible images shape.
//
// Usage:
//   node li-image.mjs --prompt-file <txt> --panel-text <json> --out <png> [--prepare]
//
//   --prepare  Print the resolved request (model, size, prompt) and exit 0
//              without calling any API. For wiring/debugging.
//
// Env:
//   IMAGE_API_KEY    (required for a real render)
//   IMAGE_API_URL    default https://api.openai.com/v1/images/generations
//   IMAGE_API_MODEL  default gpt-image-1
//
// Other providers differ in request/response shape — if you use one, set the
// env vars and adjust the fetch block below to match its API.
//
// Exit: 0 ok / 64 usage / 71 API error / 78 missing IMAGE_API_KEY.

import { readFileSync, writeFileSync } from "node:fs";
import { parseArgs } from "./lib.mjs";

const a = parseArgs(process.argv.slice(2), ["prepare"]);
if (!a["prompt-file"] || !a.out) {
  console.error("usage: li-image.mjs --prompt-file <txt> --panel-text <json> --out <png> [--prepare]");
  process.exit(64);
}

const prompt = readFileSync(a["prompt-file"], "utf8").trim();
let size = "1200x1200";
if (a["panel-text"]) {
  try {
    const d = JSON.parse(readFileSync(a["panel-text"], "utf8")).dimensions;
    if (d && /^\d+x\d+$/.test(d)) size = d;
  } catch { /* keep default */ }
}

const url = process.env.IMAGE_API_URL || "https://api.openai.com/v1/images/generations";
const model = process.env.IMAGE_API_MODEL || "gpt-image-1";

if (a.prepare) {
  console.log(JSON.stringify({ url, model, size, out: a.out, promptChars: prompt.length }, null, 2));
  console.log("--- prompt ---");
  console.log(prompt);
  console.log("\n(prepare mode: no API call, no file written)");
  process.exit(0);
}

const key = process.env.IMAGE_API_KEY;
if (!key) {
  console.error("missing IMAGE_API_KEY");
  process.exit(78);
}

const res = await fetch(url, {
  method: "POST",
  headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  body: JSON.stringify({ model, prompt, size, n: 1, response_format: "b64_json" }),
});
const text = await res.text();
if (!res.ok) {
  console.error(`image API failed (${res.status}): ${text}`);
  process.exit(71);
}

let b64;
try {
  const j = JSON.parse(text);
  b64 = j?.data?.[0]?.b64_json || j?.data?.[0]?.image || j?.images?.[0]?.b64_json;
} catch {
  console.error("image API returned non-JSON");
  process.exit(71);
}
if (!b64) {
  console.error("no image data in response (check the provider's response shape)");
  process.exit(71);
}

writeFileSync(a.out, Buffer.from(b64, "base64"));
console.log(a.out);
process.exit(0);
