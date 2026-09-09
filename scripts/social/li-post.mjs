#!/usr/bin/env node
// Publish a workflow issue's post to LinkedIn. THE publish gate.
//
// Usage:
//   node li-post.mjs --issue <n>
//       Re-verify preconditions, mint a fresh access token, publish the text
//       post, write the permalink back to the issue as a comment, print the
//       permalink on the last stdout line. Exit 0 only on a confirmed post.
//
//   node li-post.mjs --issue <n> --prepare
//       Dry run. Assemble and print the exact payload, post a "PREPARE" comment
//       on the issue with the copy that would be sent, and exit 0 WITHOUT
//       calling the LinkedIn API. Never transitions state.
//
// Exit codes:
//   0  posted (or prepared, with --prepare)
//   64 usage    71 LinkedIn/API error    77 auth (token) error
//   75 precondition failed                78 missing configuration
//
// Preconditions (re-checked here, independent of li-guard.sh):
//   - issue labelled `linkedin-post`
//   - state label is `li:publishing` (the caller transitions first) OR
//     `--prepare` and state is `li:scheduled`/`li:approved`
//   - an owner `/post` or `/schedule` command exists in the issue history
//   - `li:image-check-failed` is absent
//   - post copy is non-empty and within LinkedIn's length limit

import {
  parseArgs, die, env, gh, repoFlag, issueJSON, issueLabels, issueCopy,
  issueComment, linkedinAccessToken, linkedinPostText,
} from "./lib.mjs";

const LINKEDIN_MAX = 3000; // commentary hard limit

const args = parseArgs(process.argv.slice(2), ["prepare"]);
const n = args.issue;
if (!n) die("usage: li-post.mjs --issue <n> [--prepare]", 64);
const prepare = !!args.prepare;

// --- preconditions -------------------------------------------------------

const labels = issueLabels(n);
if (!labels.includes("linkedin-post")) die(`issue #${n} is not a linkedin-post issue`, 75);
if (labels.includes("li:image-check-failed")) die("li:image-check-failed is set", 75);

const state = labels.find((l) => /^li:(idea|needs-review|revising|approved|scheduled|publishing|blocked)$/.test(l));
if (prepare) {
  if (!["li:scheduled", "li:approved", "li:publishing"].includes(state))
    die(`--prepare needs state approved/scheduled/publishing, got ${state}`, 75);
} else if (state !== "li:publishing") {
  die(`expected state li:publishing (caller transitions first), got ${state}`, 75);
}

const owners = (process.env.LI_OWNERS || "xdatanomad").split(/\s+/).filter(Boolean);
const comments = issueJSON(n, "comments").comments || [];
const authorized = comments.some(
  (c) =>
    owners.includes(c.author?.login) &&
    /^\s*\/(post|schedule)(\s|$)/m.test(c.body || ""),
);
if (!authorized) die("no owner /post or /schedule command in issue history", 75);

const commentary = issueCopy(n);
if (!commentary) die("post copy is empty", 75);
if (commentary.length > LINKEDIN_MAX)
  die(`post copy is ${commentary.length} chars (LinkedIn max ${LINKEDIN_MAX})`, 75);

// --- prepare (dry run) -------------------------------------------------

if (prepare) {
  const preview = [
    "**PREPARE MODE — nothing was posted.**",
    "",
    `Would publish this as a text post (${commentary.length} chars):`,
    "",
    "```",
    commentary,
    "```",
  ].join("\n");
  issueComment(n, preview);
  console.log("--- li-post.mjs --prepare ---");
  console.log(JSON.stringify({ issue: n, chars: commentary.length }, null, 2));
  console.log(commentary);
  process.exit(0);
}

// --- publish -------------------------------------------------------

const authorUrn = env("LINKEDIN_AUTHOR_URN", { required: true });

const { accessToken } = await linkedinAccessToken();
const { urn, permalink } = await linkedinPostText({
  token: accessToken,
  authorUrn,
  commentary,
});

issueComment(
  n,
  [
    "Published to LinkedIn. ✅",
    "",
    `**Post:** ${permalink}`,
    `**URN:** \`${urn}\``,
  ].join("\n"),
);

// last stdout line = permalink, for the caller to capture
console.error(`posted ${urn}`);
console.log(permalink);
process.exit(0);
