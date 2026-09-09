# LinkedIn Post Workflow (Operator Guide)

A semi-automated pipeline that proposes a LinkedIn post from this project's
recent work, opens a GitHub issue for review, takes your `/commands` in the
issue comments, and — once you approve — publishes to LinkedIn through a
deterministic gate. Every idea, park, and publish is logged under
`content/social/worklog/`.

Design and rationale: see the approved plan. This file is the running-it
reference.

- **Skill / SOP:** `.agents/skills/linkedin-post-workflow/SKILL.md`
- **State machine (source of truth):** `.agents/skills/linkedin-post-workflow/references/state-machine.md`
- **Command reference:** `.agents/skills/linkedin-post-workflow/references/commands.md`
- **Scripts (gates + plumbing):** `scripts/social/`
- **Worklog:** `content/social/worklog/`

## Scope in v1

- **Text-only posts.** The image and video paths are built into the design but
  disabled. Set `LI_MEDIA=1` in `scripts/social/config.sh` to enable them once
  Phase 5 is done.
- Two triggers: a GitHub Action on issue comments (fast response to your
  commands) and a Claude Routine on a schedule (proposes ideas, publishes
  scheduled posts).

## One-time setup

### 1. GitHub labels

```bash
scripts/social/li-labels.sh create
```

Creates `linkedin-post` and all `li:*` labels. Safe to re-run.

### 2. LinkedIn developer app

1. Create an app at <https://www.linkedin.com/developers/apps>.
2. Add the **Share on LinkedIn** and **Sign In with LinkedIn using OpenID
   Connect** products. "Share on LinkedIn" grants the `w_member_social` scope
   needed to post as yourself.
3. Add an OAuth redirect URL of `http://localhost:8923/callback` (used only by
   the local token script).
4. Note the **Client ID** and **Client Secret**.

### 3. Mint the first tokens

```bash
LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node scripts/social/li-oauth.mjs
```

Opens a browser, you authorize, and it prints:

- `LINKEDIN_ACCESS_TOKEN` (valid ~60 days)
- `LINKEDIN_REFRESH_TOKEN` (valid ~365 days)
- `LINKEDIN_AUTHOR_URN` (`urn:li:person:XXXX`)

### 4. Store secrets

Set these as **GitHub Actions repository secrets** and in the **Claude Routine
environment**:

| Secret | Purpose |
|---|---|
| `ANTHROPIC_API_KEY` | Runs Claude in the GitHub Action (billed usage). A Claude Code OAuth token works too. |
| `LINKEDIN_CLIENT_ID` / `LINKEDIN_CLIENT_SECRET` | Token refresh |
| `LINKEDIN_ACCESS_TOKEN` / `LINKEDIN_REFRESH_TOKEN` | Posting |
| `LINKEDIN_AUTHOR_URN` | The `author` of every post |

`GITHUB_TOKEN` (auto-provided in Actions) covers issue, label, and comment
writes. For local runs, `gh auth login` is enough.

### 5. Configure

Edit `scripts/social/config.sh`:

- `LI_OWNERS` — GitHub logins whose issue comments are honored (default:
  `xdatanomad`).
- `LI_TZ` — timezone for dates in `/schedule` (no default; set it).
- `LI_GENERATE_DAYS` — cron-style day list for idea generation (default `1,3` =
  Mon, Wed).
- `LI_MEDIA` — `0` in v1.
- `LI_IMAGE_ATTEMPT_CAP` — image text-fidelity retry cap (default `3`).

### 6. Install the triggers

- **Action:** `.github/workflows/linkedin-comment.yml` is committed; nothing to
  do once secrets are set.
- **Routine:** create it with the `schedule` skill / Cron tooling, pointing at
  the `linkedin-post-workflow` skill. Recommended: once daily ~08:00 `LI_TZ`.
  It runs generate mode on `LI_GENERATE_DAYS` and the publish-sweep every run.

## Daily use

1. On a generation day, the routine opens an issue titled
   `[LinkedIn] <working title>` with the draft, a supporting-material block, and
   a first comment listing your options. State: `li:needs-review`.
2. You reply with commands (full list:
   `.agents/skills/linkedin-post-workflow/references/commands.md`):
   - `/revise <notes>`, `/caption <notes>`, `/research <notes>`,
     `/regenerate <notes>` to shape it.
   - `/approve` when it is right.
   - `/schedule 2026-09-15` to queue it, or `/post` to publish now.
   - `/park <reason>` to shelve it (a fresh idea is generated), `/drop <reason>`
     to kill it.
   - `/hold` / `/resume` to pause automation on that issue.
3. The Action responds to each command within about a minute. The routine
   publishes `li:scheduled` issues on their date.
4. On publish, the issue gets the LinkedIn permalink, is labeled `li:published`,
   and is closed. A row lands in `content/social/worklog/INDEX.md`.

## Runbook

### A command did nothing
Check the comment author is in `LI_OWNERS` and the command is the first token on
its line. Out-of-state commands get a reply explaining what is valid.

### `li:blocked` + `li:linkedin-auth`
The access token could not be refreshed. Re-run `li-oauth.mjs`, update
`LINKEDIN_ACCESS_TOKEN` / `LINKEDIN_REFRESH_TOKEN` in both secret stores, then
comment `/post` again.

### `li:blocked` after a publish failure
Read the error comment. Fix the cause, then `/post` to retry. `li-post.mjs`
never leaves a partial post, so retrying is safe.

### Publish the post yourself
`/post done https://www.linkedin.com/feed/update/urn:li:activity:XX:` records a
manual publish without calling the API (used for video, or if the API is down).

### Stop everything
Add `li:hold` to open issues (or comment `/hold`), and pause the routine. The
Action no-ops on held issues.

## Non-collision

The automation only ever touches issues labeled `linkedin-post`. Other issues in
this repo are unaffected, and none of the `li:*` labels are used elsewhere.
