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
| `li-issue.sh` | write | `create` \| `body-set` \| `comment` (`--handled`) \| `react`. Refuses issues not labelled `linkedin-post`. | landed |
| `li-worklog.sh` | gate | `idea` \| `schedule` \| `publish` \| `park` \| `drop` — write/move the entry file + append one `INDEX.md` row. `--commit` to commit. | landed |
| `li-guard.sh` | gate | `preflight <issue>` — re-check every publish precondition; exit 0 only if no FAILs. | landed |
| `li-oauth.mjs` | setup | One-time: mint the first LinkedIn access + refresh token. | Phase 3 |
| `li-token-check.mjs` | read | Warn when the LinkedIn access token is near expiry. | Phase 3 |
| `li-post.mjs` | gate | Publish to LinkedIn. `--prepare` = dry run. | Phase 3 |
| `li-render-check.mjs` | gate | Image text-fidelity check + attempt cap. | Phase 5 |

## Handled-comment protocol

The agent replies to a processed comment and appends `<!-- li:handled <id> -->`
(via `li-issue.sh comment --handled <id>`). `li-comments.sh unhandled` skips any
comment whose id appears in such a marker, so each run only sees new commands.
