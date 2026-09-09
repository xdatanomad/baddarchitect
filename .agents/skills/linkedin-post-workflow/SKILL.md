---
name: linkedin-post-workflow
description: Run the scheduled, semi-automated LinkedIn post pipeline for this project — propose one high-value post from recent work, open a GitHub issue for review, act on the owner's /commands, and publish through a deterministic gate once approved. Use when a schedule/routine or a GitHub Action invokes the workflow, or when the user asks to run, advance, or debug the LinkedIn post pipeline.
---

# LinkedIn Post Workflow

The exact runbook for the pipeline described in
`docs/operations/linkedin-post-workflow.md`. Follow it step by step. The
judgement calls are yours; the irreversible and outward-facing steps belong to
the scripts in `scripts/social/`.

## Companion files (read as needed, do not duplicate)

- `references/state-machine.md` — labels + the legal transition table. Source of
  truth. `scripts/social/li-state.sh` enforces it.
- `references/commands.md` — every in-issue `/command`, its effect, and which
  states it is valid from. `/help` posts a short form of this.
- `references/issue-template.md` — the issue body layout and first comment.
- `references/idea-scout.md` — brief for the idea-selection subagent.
- `references/researcher.md` — brief for the supporting-material subagent.
- `references/style-library.md` — image house styles + project palette (`LI_MEDIA=1`).
- `references/visual-designer.md` — brief for the image subagent.
- `references/video-scripter.md` — brief for the video-script subagent.
- `references/panel-text.schema.md` — the `panel-text.json` contract the image
  checker verifies.

## Invocation contract

Invoked with a mode:

| Mode | Who sends it | Does |
|---|---|---|
| `respond` | GitHub Action on `issue_comment` | Act on unhandled owner `/commands` for the given issue. |
| `generate` | Weekly routine, on a generation day (`LI_GENERATE_DAYS`) | If no idea is in flight, propose one new post and open its issue. |
| `publish` | Weekly routine | Publish `li:scheduled` issues that are due (`scheduled_date` ≤ today). |
| `auto` | Weekly routine, or manual (`/linkedin-run`) | `respond` for every open workflow issue → `publish` → `generate`. |

If no mode is given, assume `auto`. The workflow runs on a **weekly** cron, so
`publish` fires at most once a week: a due date that is not the routine's
weekday publishes on the next routine run on or after that date.

## Hard rules

1. **Never publish without an explicit owner command.** A post goes live only
   after the owner comments `/post` or `/schedule <date>` on that issue.
   Before any publish, `scripts/social/li-guard.sh preflight <issue>` must exit 0.
2. **Only touch `linkedin-post` issues.** Ignore every issue without that label.
3. **Only obey owner comments.** Commands from logins not in `LI_OWNERS`
   (`scripts/social/config.sh`) are ignored. `scripts/social/li-comments.sh`
   already filters; do not second-guess it.
4. **One state label at a time.** Change state only via `li-state.sh transition`.
   If it exits 2, the move is illegal — post the "not valid from here" reply and
   stop; do not force labels with `gh`.
5. **One external citation, maximum.** The idea is original; a citation is
   backing only. No invented metrics, quotes, or anecdotes. Match the project's
   direct, candid, non-hype voice (`AGENTS.md`, `docs/vision.md`,
   `.agents/skills/linkedin-short-post/SKILL.md` for post-copy patterns).
6. **Token discipline.** Use `scripts/social/li-context.sh` for the context
   pack. Deep-read only the 1–2 source files the chosen idea actually draws on.
   Never bulk-read `content/`.
7. **v1 is text-only.** If `LI_MEDIA=0` (default), post type is always `text`;
   acknowledge `/image`, `/type image|video`, `/script` but explain media is not
   enabled yet and make no image. When `LI_MEDIA=1`, follow §Media.
8. **Bounded work.** Never loop a step more than its cap (image retries:
   `LI_IMAGE_ATTEMPT_CAP`). When capped, set `li:blocked` and ask the owner.
9. **Report faithfully.** If a script fails, say so with its output. Do not
   claim a post is published unless `li-post.mjs` returned a permalink.

## Preconditions (check once per run)

- `scripts/social/` is present and `gh`, `jq` are available.
- Labels exist (`scripts/social/li-labels.sh list`). If missing, run
  `li-labels.sh create`.
- `git` working tree is clean enough to commit worklog changes on `main`
  (the routine/Action run on `main`).

---

## RESPOND MODE

Input: one issue number (Action) or "all open workflow issues" (`auto`).

For each issue:

1. `state=$(scripts/social/li-state.sh current <n>)`.
   If the issue has `li:hold`: do nothing, exit.
2. `cmds=$(scripts/social/li-comments.sh unhandled <n>)`. If `[]`, nothing to
   do — exit.
3. For each comment object in `cmds`, oldest first, and for each command in its
   `.commands` array (top to bottom):
   a. Look up the command in `references/commands.md`. If it is **not valid from
      `state`**, post one comment: what was asked, why it can't run from
      `state`, and the commands that are valid now. Do not change state. Mark
      the comment handled (step 4) and continue.
   b. Otherwise run the command's procedure (§Command procedures).
4. After processing a comment, mark it handled and acknowledge:
   `scripts/social/li-issue.sh react <n> <comment-id> eyes` then
   `scripts/social/li-issue.sh comment <n> --body-file <reply> --handled <comment-id>`.
   The reply says what you did and the new state. End every reply body with a
   one-line "Next: …".
5. If a command changed the draft, rewrite the issue body from
   `references/issue-template.md` via `li-issue.sh body-set` **before** posting
   the reply, so the body always shows the current draft.

Return the issue to a waiting state when done: after any `/revise`-class command
the issue must end in `li:needs-review` (transition `li:revising -> li:needs-review`
once the updated draft is posted).

---

## GENERATE MODE

Skip entirely if any open `linkedin-post` issue is in
`li:idea|li:needs-review|li:revising|li:approved|li:scheduled`
(cap: `LI_MAX_OPEN_IDEAS`). Also skip if today is not in `LI_GENERATE_DAYS`
unless invoked manually.

1. **Context.** `ctx=$(scripts/social/li-context.sh)`. Read it. Note the last
   ~20 `worklog_index_tail` rows — do not repeat a recent angle.
2. **Pick an idea.** Dispatch a subagent with `references/idea-scout.md` as its
   brief, passing `ctx`. It returns ONE idea: working title, angle, hook,
   reader/job, adoption stage, 1–2 `source_content` paths, draft thesis (3–5
   sentences), recommended type, and a "why now / how it differs from recent
   posts" note. If it returns nothing usable, exit quietly (no issue).
3. **Deep-read** only the returned `source_content` files (1–2). Confirm the
   idea is faithful to them and to `docs/vision.md`. Adjust or discard.
4. **Write the post copy.** House voice. One sharp idea, a concrete tension or
   decision rule, one practical takeaway, a calm close. Follow the copy rules in
   `.agents/skills/linkedin-short-post/SKILL.md`. Keep it self-contained (no
   "link in comments" dependency). Save to a temp file.
5. **Supporting material.** Dispatch a subagent with `references/researcher.md`,
   passing the idea + copy. It returns a "Supporting material" block: the one
   claim it backs, one source (title + URL), a one-line note — or `none`.
   At most one source. If it cannot find a credible one, use `none`.
6. **Type.** If `LI_MEDIA=0` → `text`. Else apply §Media `decide_type`.
7. **Render the issue body** from `references/issue-template.md` (state
   `li:idea`, chosen type) to a temp file. It MUST start with `<!-- li:managed -->`.
8. **Create the issue:**
   `n=$(scripts/social/li-issue.sh create --title "[LinkedIn] <working title>" --body-file <body> --type <type>)`.
9. **Worklog:**
   `scripts/social/li-worklog.sh idea --issue <n> --title "<working title>" --type <type> --source <path> [--source <path>] --citation "<url|none>" --copy-file <copy> --commit`.
10. **First pass done:**
    `scripts/social/li-state.sh transition <n> li:needs-review --from li:idea --note "first pass"`.
11. Post the first comment from `references/issue-template.md` via
    `li-issue.sh comment <n> --body-file <first-comment>` (it already carries
    `<!-- li:handled 0 -->`).

Exactly one idea per generate run.

---

## PUBLISH MODE

1. **Token check.** Skip this step entirely when `LI_POST_DRYRUN=1` (no API is
   touched). Otherwise `node scripts/social/li-token-check.mjs`:
   - prints `WARN …` → post that line as a note on the newest open workflow
     issue, continue.
   - exits non-zero (77) → LinkedIn auth is broken. For every `li:scheduled`
     issue: `gh issue edit <n> --add-label li:linkedin-auth`, post the re-auth
     steps, do **not** publish anything this run. Stop PUBLISH MODE.
2. **Due posts.** `dues=$(scripts/social/li-worklog.sh due)` — issue numbers
   whose `scheduled_date` is today or earlier. For each `<n>`:
   a. `scripts/social/li-guard.sh preflight <n>` — if it exits non-zero, post
      the failing lines, `li-state.sh transition <n> li:scheduled li:blocked`,
      continue.
   b. **Dry-run gate.** If `LI_POST_DRYRUN=1` (`scripts/social/config.sh`):
      `node scripts/social/li-post.mjs --issue <n> --prepare` (posts a preview
      comment), leave the issue on `li:scheduled`, continue. Do not transition.
   c. `scripts/social/li-state.sh transition <n> li:publishing --from li:scheduled`.
   d. `node scripts/social/li-post.mjs --issue <n>` (prints the permalink on its
      last stdout line).
      - exit 0: it already wrote a permalink comment. Then
        `scripts/social/li-issue.sh copy-get <n> > <copy>`,
        `scripts/social/li-worklog.sh publish --issue <n> --url "<permalink>" --copy-file <copy> --commit`,
        `li-state.sh transition <n> li:publishing li:published` (closes the issue).
      - exit non-zero: post its stderr,
        `li-state.sh transition <n> li:publishing li:blocked`; if the exit code
        is 77 also `gh issue edit <n> --add-label li:linkedin-auth`.

`/post` (publish now) runs steps a, c, d for this issue from RESPOND MODE,
starting from `li:approved` (auto-`/approve` first if needed) or a
publish-related `li:blocked`. `/post` ignores `LI_POST_DRYRUN` — an explicit
"publish now" always attempts a real post.

---

## Command procedures

Cite `references/commands.md` for validity. Procedures:

| Command | Procedure |
|---|---|
| `/revise <notes>` | `transition <n> <state> li:revising`. Rewrite the post copy per notes (house voice). `body-set`. `transition li:revising li:needs-review`. Reply with a short diff of what changed. |
| `/caption <notes>` | Same as `/revise` but only touch the post text; leave the Idea/Media sections. |
| `/research <notes>` | Re-dispatch `references/researcher.md` with the notes. Replace the Supporting material block (still ≤1 source). `body-set`. Stay in review loop. |
| `/regenerate <notes>` | `transition -> li:revising`. Re-run idea-scout with the notes as a hard constraint, on the SAME issue: new angle, new copy, new supporting material, new body (keep the issue number and title prefix; the title text may change). The worklog `ideas/` entry already exists — leave its file in place; note the pivot in the issue body's "Notes for review". `transition -> li:needs-review`. |
| `/type text\|image\|video` | If `LI_MEDIA=0` and not `text`: reply that media is disabled, no change. Else `transition -> li:revising`, swap the `li:type-*` label with `gh issue edit`, rebuild media per §Media, `body-set`, `transition -> li:needs-review`. |
| `/image <notes>` / `/image-style <name>` | `LI_MEDIA=0`: reply disabled. Else §Media image loop with the direction; reset attempt counter. |
| `/script <notes>` | `LI_MEDIA=0`: reply disabled. Else revise the video script in the Media section. |
| `/approve` | `li-guard`-style check: refuse if `li:image-check-failed` present (tell the owner to fix the image or `/type text`). Else `transition <n> <state> li:approved`. Reply: "Approved. `/schedule <YYYY-MM-DD>` to queue, or `/post` to publish now." |
| `/schedule <YYYY-MM-DD> [notes]` | Parse the date (must be today or later, `LI_TZ`). If state is `needs-review`/`revising`, auto-`/approve` first. Add/update a `\| **Scheduled** \| <d> \|` row in the issue body meta table (and set the `State` row to `li:scheduled`). `scripts/social/li-issue.sh copy-get <n> > <copy>` then `li-worklog.sh schedule --issue <n> --date <d> --copy-file <copy> --commit`. `transition -> li:scheduled`. Reply with the date **and** note that the weekly sweep publishes it on the first routine run on or after that date (so a non-routine-weekday date slips to the next routine day). |
| `/unschedule` | `transition li:scheduled li:approved`. |
| `/post [notes]` | If needed auto-`/approve`. Run PUBLISH MODE steps a–c for this issue now. |
| `/post done <permalink>` | Record a manual publish: validate the URL looks like a LinkedIn post. `li-issue.sh copy-get <n> > <copy>` then `li-worklog.sh publish --issue <n> --url <permalink> --copy-file <copy> --commit`. `transition -> li:published`. |
| `/park <reason>` | `li-worklog.sh park --issue <n> --reason "<reason>" --commit`. `transition <n> <state> li:parked` (closes issue). Then run GENERATE MODE to open a replacement (ignore the generation-day check for a park-triggered generate). |
| `/drop <reason>` | `li-worklog.sh drop --issue <n> --reason "<reason>" --commit`. `transition -> li:dropped` (closes issue). No replacement. |
| `/status` | Post: current state, post type, what the workflow is waiting on, and the single next action the owner can take. No state change. |
| `/help` | Post the short command list from `references/commands.md`. No state change. |
| `/hold` | `gh issue edit <n> --add-label li:hold`. Reply: automation paused; `/resume` to continue. |
| `/resume` | `gh issue edit <n> --remove-label li:hold`. Reply with current state. |

After every command that is not `/status`, `/help`, `/hold`, `/resume`: rewrite
the body with `body-set` if the draft changed, then mark the comment handled.

---

## Media (only when `LI_MEDIA=1`; default `LI_MEDIA=0` → always `text`)

`decide_type`:
- `text` — a single sharp idea, decision rule, or contrarian claim.
- `image` — a process, a contrast, or a multi-step model a 2–4 panel comic or a
  diagram sharpens; a checklist or a 2×2.
- `video` — a short narrative or "reason through this with me" beat that a
  10–30s talking clip serves better than a static frame.

### Image (`li:type-image`)

`build_media` image loop. Attempt count is tracked by this loop; also write
`<!-- li:image-attempts=N -->` into the Media section each render so a later run
can see it. `/image` / `/image-style` reset the count to 0.

1. Dispatch a subagent with `references/visual-designer.md` (which pulls in
   `references/style-library.md` and `references/panel-text.schema.md`), passing
   the idea, the post copy, and a style (or "choose"). On a retry also pass the
   previous `panel-text.json`, the previous image, and the diff.
2. The subagent returns `IMAGE`, `PANEL_TEXT`, `PROMPT` paths. It has already
   run `scripts/social/li-image.mjs`.
3. `node scripts/social/li-render-check.mjs --image <IMAGE> --expect <PANEL_TEXT> --json`.
   - exit 0 (`PASS` / `NEAR-PASS`) → put the image, the chosen style, the
     `panel-text.json` contents, and `<!-- li:image-attempts=N -->` in the
     Media section. Done.
   - exit 1 (`FAIL`) → if attempts < `LI_IMAGE_ATTEMPT_CAP`, re-dispatch the
     subagent with the JSON diff as direction; loop.
   - exit 2 → no extraction backend or bad input: post the error,
     `transition -> li:blocked`, stop.
4. Attempts reach `LI_IMAGE_ATTEMPT_CAP` without a pass →
   `gh issue edit <n> --add-label li:image-check-failed`,
   `transition -> li:blocked`, post the last diff + attach the best attempt, and
   ask the owner to `/image <clearer, shorter caption text>` (resets the count)
   or `/type text` (drop the image). `li:image-check-failed` blocks `/approve`
   until cleared by one of those.

Attaching the image to the LinkedIn post itself is done by `li-post.mjs` when
`LI_MEDIA=1` (image upload → asset URN → post `content`); that path is a Phase 5
addition to `li-post.mjs` and is not exercised while `LI_MEDIA=0`.

### Video (`li:type-video`)

Dispatch a subagent with `references/video-scripter.md`. Put its full return
(runtime, hook, beats, takeaway, on-screen text, shot note, end card) in the
Media section. v1 does **not** render a video: publishing a `li:type-video` post
sends the **text**; the owner records and attaches the clip in LinkedIn and
replies `/post done <permalink>`.

---

## Worklog checkpoints (always `--commit` from the routine/Action)

| When | Call |
|---|---|
| New idea issue created | `li-worklog.sh idea …` |
| `/schedule` accepted | `li-worklog.sh schedule --issue <n> --date <d>` |
| Published (auto or `/post done`) | `li-worklog.sh publish --issue <n> --url <permalink>` |
| `/park` | `li-worklog.sh park --issue <n> --reason <r>` |
| `/drop` | `li-worklog.sh drop --issue <n> --reason <r>` |

---

## Failure handling

- Script exits non-zero → stop that command, post the script's stderr as a
  comment, leave the issue in a safe state (`li:blocked` if it was mid-publish,
  otherwise unchanged), mark the triggering comment handled so it is not
  retried in a loop.
- `li-state.sh` exit 2 → illegal transition; post the valid-commands reply, no
  label change.
- `git` commit of the worklog fails → post a note; do not block the issue state
  change (the worklog can be reconciled later).
- Anything ambiguous or outside these procedures → post a comment asking the
  owner, set nothing.
