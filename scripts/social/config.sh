#!/usr/bin/env bash
# Shared configuration for the LinkedIn post workflow scripts.
# Source this file: `. "$(dirname "$0")/config.sh"`
# Every value can be overridden by an environment variable of the same name.
#
# shellcheck disable=SC2034  # many vars here are consumed only by sibling scripts

set -euo pipefail

# --- Identity / access -------------------------------------------------------

# GitHub logins whose issue comments are honored as commands. Space-separated.
: "${LI_OWNERS:=xdatanomad}"

# Repository in "owner/name" form. Empty = let `gh` infer from the checkout.
: "${LI_REPO:=}"

# --- Scheduling ------------------------------------------------------------

# Timezone for /schedule dates and generation-day checks (IANA name).
# No safe default; set this in your environment or here before going live.
: "${LI_TZ:=UTC}"

# Days of week the routine may generate a new idea (0=Sun .. 6=Sat), comma list.
# Default: Monday only (the workflow runs once a week).
: "${LI_GENERATE_DAYS:=1}"

# Max number of open, non-terminal idea issues allowed at once.
: "${LI_MAX_OPEN_IDEAS:=1}"

# --- Media ---------------------------------------------------------------

# 0 = text-only (v1). 1 = enable image/video paths (Phase 5).
: "${LI_MEDIA:=0}"

# 1 = publish-sweep runs li-post.mjs in --prepare (dry run) only: it posts a
# preview comment and leaves the issue on li:scheduled. Default 1 (fail-safe).
# Set to 0 — in the routine env and the GitHub repo variable — to post live.
: "${LI_POST_DRYRUN:=1}"

# Image text-fidelity retry cap (attempts before the issue is blocked).
: "${LI_IMAGE_ATTEMPT_CAP:=3}"

# Image generation provider (used only when LI_MEDIA=1). Defaults to the
# OpenAI-compatible /v1/images/generations shape; set these for another
# provider and adjust scripts/social/li-image.mjs to match its API.
: "${IMAGE_API_URL:=https://api.openai.com/v1/images/generations}"
: "${IMAGE_API_MODEL:=gpt-image-1}"
# IMAGE_API_KEY — set in the environment, never commit it.

# --- Paths -------------------------------------------------------------

# Repo root (resolved from this file's location).
LI_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
: "${LI_WORKLOG_DIR:=$LI_ROOT/content/social/worklog}"
: "${LI_STATE_MACHINE:=$LI_ROOT/.agents/skills/linkedin-post-workflow/references/state-machine.md}"

# --- Labels ---------------------------------------------------------------

LI_UMBRELLA_LABEL="linkedin-post"

# state label | hex color | description
LI_STATE_LABELS=(
  "li:idea|fbca04|Idea created; first full pass not yet attached"
  "li:needs-review|0e8a16|Full draft attached; awaiting human review"
  "li:revising|1d76db|Human requested changes; agent working"
  "li:approved|0e8a16|Approved; not scheduled or posted yet"
  "li:scheduled|5319e7|Publish date set; awaiting the due date"
  "li:publishing|d4c5f9|Publish gate running"
  "li:published|0b6b21|Live on LinkedIn; issue closed"
  "li:parked|c2e0c6|Shelved; replacement idea opened"
  "li:dropped|e6e6e6|Killed with no replacement"
  "li:blocked|d73a4a|Needs human input"
)

LI_MODIFIER_LABELS=(
  "li:hold|000000|Automation paused for this issue"
  "li:type-text|c5def5|Post type: text"
  "li:type-image|c5def5|Post type: image"
  "li:type-video|c5def5|Post type: video"
  "li:image-check-failed|d93f0b|Last image failed the text-fidelity check"
  "li:linkedin-auth|d73a4a|Publish blocked on LinkedIn token re-auth"
  "li:needs-agent|ededed|Set by the comment trigger; cleared when a run starts"
)

# gh repo flag helper: expands to "--repo owner/name" or nothing.
li_repo_flag() {
  if [ -n "${LI_REPO:-}" ]; then printf -- '--repo\n%s\n' "$LI_REPO"; fi
}
