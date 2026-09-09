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

| Script | Kind | Purpose |
|---|---|---|
| `config.sh` | lib | Shared settings, paths, label table. Sourced by the rest. |
| `li-labels.sh` | setup | Create/update the `linkedin-post` + `li:*` GitHub labels. |
| `li-context.sh` | read | Emit the compact JSON context pack for generate mode. _(Phase 1)_ |
| `li-state.sh` | gate | The only way labels change; validates against `state-machine.md`. _(Phase 1)_ |
| `li-comments.sh` | read | List unhandled owner commands on an issue as JSON. _(Phase 1)_ |
| `li-issue.sh` | write | Create a workflow issue / rewrite a body section / post a comment. _(Phase 1)_ |
| `li-worklog.sh` | gate | Write/move a worklog entry + append one `INDEX.md` row. _(Phase 1)_ |
| `li-guard.sh` | gate | `preflight <issue>`: re-check every publish precondition. _(Phase 1)_ |
| `li-oauth.mjs` | setup | One-time: mint the first LinkedIn access + refresh token. _(Phase 3)_ |
| `li-token-check.mjs` | read | Warn when the LinkedIn access token is near expiry. _(Phase 3)_ |
| `li-post.mjs` | gate | Publish to LinkedIn. `--prepare` = dry run. _(Phase 3)_ |
| `li-render-check.mjs` | gate | Image text-fidelity check + attempt cap. _(Phase 5)_ |

Phase labels track the build plan; scripts appear as their phase lands.
