# scripts/social — LinkedIn post workflow gates & plumbing

Deterministic scripts behind the `linkedin-post-workflow` skill. The skill makes
judgement calls; these scripts do the irreversible or outward-facing steps and
enforce the rules. Operator guide: `docs/operations/linkedin-post-workflow.md`.

## Conventions

- Bash + `gh` + `jq` for GitHub plumbing (no install step).
- Node (`.mjs`) only where an HTTP API or image work is unavoidable
  (`li-post.mjs`, `li-oauth.mjs`, `li-token-check.mjs`, `li-render-check.mjs`).
- Every script sources `config.sh` for shared settings and label definitions.
- Read-only scripts print JSON to stdout. Mutating scripts exit non-zero on any
  precondition failure and never leave partial state.

## Scripts

| Script | Kind | Purpose | Status |
|---|---|---|---|
| `config.sh` | lib | Shared settings, paths, label table. | landed |
| `common.sh` | lib | Helpers: `gh` wrapper, slug, label/state queries, state-machine parser, `/command` parser. Sources `config.sh`. | landed |
| `li-labels.sh` | setup | Create/update the `linkedin-post` + `li:*` GitHub labels (`create` \| `list`). | landed |
| `li-context.sh` | read | Emit the compact JSON context pack for generate mode. | landed |
| `li-state.sh` | gate | The only way labels change; validates every edge against `state-machine.md` (`current` \| `check` \| `transition` \| `edges`). Closes the issue on terminal states. | landed |
| `li-comments.sh` | read | `unhandled <issue>` — owner comments with `/commands` not yet marked handled, as JSON. | landed |
| `li-issue.sh` | write | `create` \| `body-set` \| `comment` (`--handled`) \| `react` \| `copy-get` (print the current post-copy block). Refuses issues not labelled `linkedin-post`. | landed |
| `li-worklog.sh` | gate | `idea` \| `schedule` \| `publish` \| `park` \| `drop` (write/move the entry + one `INDEX.md` row, `--commit` to commit) \| `due` (list issue numbers whose `scheduled_date` ≤ today). | landed |
| `li-guard.sh` | gate | `preflight <issue>` — re-check every publish precondition; exit 0 only if no FAILs. | landed |
| `lib.mjs` | lib | Shared Node helpers: env, `gh` shell-out, LinkedIn token refresh + text post + userinfo. No deps (Node ≥ 18). | landed |
| `li-oauth.mjs` | setup | One-time local OAuth: mint the first access + refresh token + author URN. | landed |
| `li-token-check.mjs` | read | Refresh the token, confirm it works, `WARN` when the refresh token is near expiry; exit 77 if auth is broken. | landed |
| `li-post.mjs` | gate | Publish a workflow issue's copy to LinkedIn. Re-checks preconditions, mints a fresh token, posts, writes the permalink back. `--prepare` = dry run (preview comment, no API call). Exit 0 posted / 75 precondition / 77 auth / 71 API. | landed |
| `li-image.mjs` | render | Generate one post image from a prompt file via `IMAGE_API_*` (OpenAI-compatible shape by default). `--prepare` prints the request, no call. | landed (LI_MEDIA=1) |
| `li-render-check.mjs` | gate | Verify a rendered image's on-image text against `panel-text.json`. Anthropic vision, `tesseract` fallback. Exit 0 PASS/NEAR-PASS, 1 FAIL (`--json` for a diff), 2 no backend. Attempt cap is enforced by the orchestrator loop. | landed (LI_MEDIA=1) |

## LinkedIn credentials

`li-post.mjs` / `li-token-check.mjs` always mint a fresh access token from
`LINKEDIN_REFRESH_TOKEN` (+ `LINKEDIN_CLIENT_ID` / `LINKEDIN_CLIENT_SECRET`) at
the start of every run — LinkedIn refresh tokens are reusable for ~365 days, so
no access token is persisted between runs. When the refresh token itself
expires, re-run `li-oauth.mjs` and update the secrets. `LINKEDIN_ACCESS_TOKEN`
alone is honored as a fallback for a one-off manual test.

## Handled-comment protocol

The agent replies to a processed comment and appends `<!-- li:handled <id> -->`
(via `li-issue.sh comment --handled <id>`). `li-comments.sh unhandled` skips any
comment whose id appears in such a marker, so each run only sees new commands.
