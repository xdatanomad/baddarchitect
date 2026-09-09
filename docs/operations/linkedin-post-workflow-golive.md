# LinkedIn Post Workflow — Go-Live Runbook

Step-by-step setup to take the pipeline from "merged code" to "running weekly in
dry-run", and then — as a separate, deliberate final step — to "publishing for
real".

Companion docs:
- `docs/operations/linkedin-post-workflow.md` — how the workflow behaves day to day.
- `.agents/skills/linkedin-post-workflow/SKILL.md` — the orchestrator SOP.
- `scripts/social/README.md` — what each script does.

**Time budget:** ~45–60 min for Steps 1–7. Step 8 (go live) is 2 minutes, later.

**End state after Step 7:** every Monday the routine opens one draft issue and
runs a *dry-run* publish-sweep (preview comment only, nothing posted). You
review and shape drafts with `/commands` during the week. No post reaches
LinkedIn until you do Step 8.

---

## 0. Prerequisites

- [ ] You can create a LinkedIn app (any LinkedIn account can; a Company Page
      helps verification but a personal app works for `w_member_social`).
- [ ] Admin on the `xdatanomad/baddarchitect-notes` GitHub repo (to add secrets
      and merge).
- [ ] `gh` CLI authenticated locally (`gh auth status`).
- [ ] Node ≥ 18 locally (`node --version`) — only for Step 2.
- [ ] An Anthropic API key with Claude access, OR a Claude Code OAuth token, for
      the GitHub Action. (Action runs are billed AI usage — a few short runs per
      week.)
- [ ] A Claude environment that can host a **Routine** (scheduled cloud agent)
      with this repo checked out. This is where Step 6 runs.

---

## 1. Create the LinkedIn developer app

1. Go to <https://www.linkedin.com/developers/apps> → **Create app**.
2. Fill in:
   - **App name:** e.g. `AI Adoption Blueprint — social`
   - **LinkedIn Page:** associate a Page you control (required by the form; it
     does not change where posts go — posts publish to *your member profile*).
   - **App logo:** any square image.
   - Accept the API Terms → **Create app**.
3. Open the app → **Products** tab. Request access to:
   - **Share on LinkedIn** — grants the `w_member_social` scope (post as you).
   - **Sign In with LinkedIn using OpenID Connect** — grants `openid profile`,
     used once to resolve your member URN.
   Both are self-serve and usually approve within a minute or two. Wait until
   both show **Added**.
4. **Auth** tab:
   - Copy the **Client ID** and **Client Secret** (you will paste these in
     Steps 2 and 3). Treat the secret like a password.
   - Under **OAuth 2.0 settings → Authorized redirect URLs for your app**, add
     exactly:
     ```
     http://localhost:8923/callback
     ```
     (Override with `LINKEDIN_REDIRECT_URI` if you must use a different port;
     it must match what `li-oauth.mjs` uses.)
   - Save.
5. **Auth** tab → **OAuth 2.0 scopes**: confirm `w_member_social`, `openid`,
   `profile` are listed. If not, revisit Step 3.

> If "Share on LinkedIn" is not offered for your app, your account may need a
> verified Company Page. Add one under the Page's Settings → verify, then
> re-open the Products tab.

---

## 2. Mint the first tokens

Run locally from the repo root (or a checkout of `main` after merge — the
script only needs `scripts/social/`):

```bash
LINKEDIN_CLIENT_ID='paste-client-id' \
LINKEDIN_CLIENT_SECRET='paste-client-secret' \
node scripts/social/li-oauth.mjs
```

What happens:

1. It prints `Listening on http://localhost:8923/callback` and opens your
   browser to LinkedIn's consent screen.
2. Approve. LinkedIn redirects to `localhost:8923`; the script exchanges the
   code and calls `/v2/userinfo`.
3. It prints, and then exits:
   ```
   LINKEDIN_ACCESS_TOKEN=AQV...        (~60 days)
   LINKEDIN_REFRESH_TOKEN=AQW...       (~365 days)
   LINKEDIN_AUTHOR_URN=urn:li:person:ABC123
   ```

**Copy all three.** You need them in Step 3.

Troubleshooting:
- *Browser did not open* — copy the `visit:` URL from the terminal manually.
- *`redirect_uri does not match`* — the URL in Step 1.4 must be exactly
  `http://localhost:8923/callback`, no trailing slash.
- *`invalid_client`* — client id/secret typo, or the app's products are not
  fully "Added" yet.
- *No `LINKEDIN_REFRESH_TOKEN` printed* — the app lacks refresh-token support;
  make sure "Share on LinkedIn" is added, then re-run. Without a refresh token
  you would have to re-auth every ~60 days.
- Nothing is written to disk. If you lose the values, just run it again.

---

## 3. Configure GitHub secrets and variables

### 3a. Secrets (encrypted, used by the Action)

Repo → **Settings → Secrets and variables → Actions → Secrets → New repository
secret**, or via `gh`:

```bash
gh secret set ANTHROPIC_API_KEY       --repo xdatanomad/baddarchitect-notes   # or a Claude Code OAuth token
gh secret set LINKEDIN_CLIENT_ID      --repo xdatanomad/baddarchitect-notes
gh secret set LINKEDIN_CLIENT_SECRET  --repo xdatanomad/baddarchitect-notes
gh secret set LINKEDIN_ACCESS_TOKEN   --repo xdatanomad/baddarchitect-notes
gh secret set LINKEDIN_REFRESH_TOKEN  --repo xdatanomad/baddarchitect-notes
gh secret set LINKEDIN_AUTHOR_URN     --repo xdatanomad/baddarchitect-notes
```

(`gh secret set NAME` prompts for the value on stdin — paste, then Enter,
Ctrl-D.)

`GITHUB_TOKEN` is provided automatically by Actions; you do not set it.

### 3b. Variables (plain, used by the Action)

Repo → **Settings → Secrets and variables → Actions → Variables**, or:

```bash
gh variable set LI_TZ          --repo xdatanomad/baddarchitect-notes --body 'America/Los_Angeles'   # your timezone
gh variable set LI_POST_DRYRUN --repo xdatanomad/baddarchitect-notes --body '1'                     # optional — dry-run is already the default everywhere
```

`LI_POST_DRYRUN` is **fail-safe**: unset (or `1`) means dry-run in the config,
the Action, and the routine. Only an explicit `0` in the Action variable *and*
the routine env makes it publish. Setting the variable to `1` now is just
belt-and-braces.

### 3c. Confirm

```bash
gh secret list   --repo xdatanomad/baddarchitect-notes
gh variable list --repo xdatanomad/baddarchitect-notes
```

You should see the six secrets and two variables.

---

## 4. Create the labels and merge

```bash
# from a checkout of the branch (or main after merge)
scripts/social/li-labels.sh create
scripts/social/li-labels.sh list     # expect linkedin-post + 17 li:* labels
```

Then merge the PR (`feat/linkedin-post-workflow` → `main`). On merge:

- `.github/workflows/linkedin-comment.yml` becomes active on `main`.
- `.github/workflows/lint-social-scripts.yml` becomes active.
- Nothing publishes — there is no routine yet and `LI_POST_DRYRUN=1`.

If issue #14 still exists and you do not want it as the first post, comment
`/unschedule` on it now (or `/drop the pipeline dry-run draft`).

---

## 5. Smoke-test the comment Action (dry run)

1. Open a throwaway issue in the repo, add the label `linkedin-post` and
   `li:needs-review`, and put a `## Post copy` block in the body between
   `<!-- li:copy:start -->` / `<!-- li:copy:end -->` markers (copy the shape
   from `.agents/skills/linkedin-post-workflow/references/issue-template.md`).
   Also add `li:type-text`.
2. Comment `/status` on it.
3. Within ~1–2 minutes the **Actions** tab shows a `LinkedIn workflow — comment`
   run, and the bot replies with the issue's state and next action.
4. Try `/revise make the hook punchier` → expect a `li:revising` → `li:needs-review`
   cycle and an updated body.
5. Try `/approve` then `/schedule <a Monday>` → expect `li:scheduled` and a
   worklog commit on `main` (check `content/social/worklog/INDEX.md`).
6. `/drop smoke test` to close it. Delete the throwaway issue's labels if you
   like.

If the run does not start: check the comment author is the repo owner, the
issue has the `linkedin-post` label, and the comment begins with `/`. If it
starts but errors: open the run logs — usually a missing secret or an
`anthropics/claude-code-action` input-name change (the workflow has a comment
about this; compare against the action's current README and adjust
`claude_args` / input keys, commit to `main`).

---

## 6. Create the weekly routine

In your Claude Routine environment (the cloud agent that has this repo checked
out, `gh` authenticated, and the `LINKEDIN_*` + `LI_TZ` + `LI_POST_DRYRUN`
values available as env vars):

- **Schedule (cron, local time):** `33 8 * * 1` — Mondays 08:33.
- **Environment:** `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`,
  `LINKEDIN_ACCESS_TOKEN`, `LINKEDIN_REFRESH_TOKEN`, `LINKEDIN_AUTHOR_URN`,
  `LI_TZ`, `LI_POST_DRYRUN=1`. Plus repo write via `gh`.
- **Prompt:**

  > Load the `linkedin-post-workflow` skill and run it in `auto` mode for
  > `xdatanomad/baddarchitect-notes`. Follow
  > `.agents/skills/linkedin-post-workflow/SKILL.md` exactly:
  > (1) respond to any unhandled owner `/commands` on open `linkedin-post`
  > issues, (2) run the publish-sweep for due `li:scheduled` issues, (3) if no
  > idea is in flight and today is a generation day, generate one new post
  > idea. Commit worklog changes to `main`. Do not publish anything if
  > `LI_POST_DRYRUN=1`.

Using the `schedule` skill from a Claude session:

```
/schedule create a weekly routine "linkedin-post-workflow" cron "33 8 * * 1"
  running the prompt above, for repo xdatanomad/baddarchitect-notes
```

(Adjust to the exact `schedule` skill syntax your environment uses.)

---

## 7. Run one full cycle in dry-run

You do not have to wait for Monday:

1. Manually trigger the routine once (or run the skill in `auto` mode yourself
   against the repo).
2. Expect: one new `[LinkedIn] …` issue in `li:needs-review`, a worklog
   `ideas/` entry + `INDEX.md` row, and a first comment listing your options.
3. Shape it during the week with `/commands`.
4. `/approve` then `/schedule <next Monday>`.
5. On the next routine run: the publish-sweep finds it `due` and, because
   `LI_POST_DRYRUN=1`, posts a **PREPARE** preview comment and leaves it
   `li:scheduled`. Read the preview — that is exactly what would go to LinkedIn.

Stay in this mode for as many weeks as you want. It is the safe steady state.

---

## 8. Go live (do this later, deliberately)

When you have seen a few PREPARE previews you are happy with:

**Pre-flight checklist**

- [ ] The last 2–3 PREPARE previews read correctly and match house voice.
- [ ] `node scripts/social/li-token-check.mjs` (with the env vars) prints `OK`.
- [ ] No `li:scheduled` issue has a stale/unwanted date. Re-date or `/unschedule`
      anything you are not ready to publish — **the next sweep will post every
      due one.**
- [ ] You are OK with the routine posting to your real LinkedIn profile
      unattended on its schedule.

**The change (two places — both required, because dry-run is fail-safe):**

```bash
gh variable set LI_POST_DRYRUN --repo xdatanomad/baddarchitect-notes --body '0'
```

…and set `LI_POST_DRYRUN=0` in the routine's environment. If either is still
unset or `1`, that path stays in dry-run.

**First live run:** prefer to publish the first one yourself with `/post` on a
draft you have approved, and watch the Action run + the resulting LinkedIn post,
before letting the weekly sweep do it unattended.

After a live publish: the issue gets a permalink comment, `li:published`, is
closed, and `content/social/worklog/published/` + `INDEX.md` are updated on
`main`.

---

## Ongoing operations

**Pause everything**
- Comment `/hold` on any in-flight issue (automation ignores it until `/resume`).
- Set `LI_POST_DRYRUN=1` (secret/var + routine env) to stop publishing while
  keeping drafting.
- Disable the routine, and/or disable the `linkedin-comment` workflow in the
  Actions tab.

**Kill switch (full stop):** disable the routine + disable the workflow +
`LI_POST_DRYRUN=1`. Nothing can publish.

**Token maintenance**
- Every routine run does a `li-token-check`. When it prints
  `WARN … refresh token expires in ~Nd`, or a publish fails with `li:blocked` +
  `li:linkedin-auth`: re-run Step 2, then update `LINKEDIN_ACCESS_TOKEN` and
  `LINKEDIN_REFRESH_TOKEN` in **both** the GitHub secrets and the routine env.
  Then comment `/post` on the blocked issue.

**Costs**
- Action: one short Claude run per `/command` you send (a handful per week).
- Routine: one Claude run per week.
- LinkedIn API: free.

**Where things live**
- Drafts / discussion: GitHub issues labelled `linkedin-post`.
- Durable log: `content/social/worklog/` on `main`.
- Behavior: `.agents/skills/linkedin-post-workflow/SKILL.md`.
- Knobs: `scripts/social/config.sh` (repo) and the `LI_*` vars/env.

**Common issues**
| Symptom | Fix |
|---|---|
| Comment did nothing | Author not repo owner, or command not first token on its line, or issue lacks `linkedin-post`. |
| Action errors on `claude-code-action` inputs | The action's input names changed; align `claude_args` / keys with its current README, commit to `main`. |
| `li:blocked` + `li:linkedin-auth` | Refresh-token expired/revoked → redo Step 2 + update secrets + routine env. |
| Post published but no permalink recorded | Check the Action/routine logs for the `li-worklog.sh publish` step; re-run it manually with the permalink. |
| Two drafts open at once | `LI_MAX_OPEN_IDEAS` (default 1); `/park` or `/drop` one. |
