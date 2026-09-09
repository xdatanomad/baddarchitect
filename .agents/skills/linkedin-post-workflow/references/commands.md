# LinkedIn Post Workflow — In-Issue Command Reference

These commands are typed by the repo owner as **GitHub issue comments** on a
`linkedin-post` issue. They are not Claude slash commands. The orchestrator
parses them and acts.

## Syntax

- A command is the **first token on a line**, starting with `/`.
- Text after the command on the same line, plus any following lines up to the
  next command, is the **note** passed to the agent.
- Multiple commands in one comment run top to bottom.
- Only comments from an allowed owner login (`LI_OWNERS` in `config.sh`) are
  honored. All other comments are ignored.
- After handling, the agent reacts 👀 on the comment and replies with a comment
  ending in `<!-- li:handled <comment-id> -->`. Only comments newer than the
  last such marker are processed on the next run.

## Review / copy

| Command | Effect | Valid from |
|---|---|---|
| `/revise <notes>` | Rewrite the post copy per the notes. | needs-review, revising |
| `/caption <notes>` | Revise only the post text; leave media as-is. | needs-review, revising |
| `/research <notes>` | Redo or extend the supporting search; may swap the single citation. | needs-review, revising |
| `/regenerate <notes>` | Abandon this idea's angle, choose a different one; same issue, history kept. | needs-review, revising |

## Media (v1: parsed and acknowledged; acts only when `LI_MEDIA=1`)

| Command | Effect | Valid from |
|---|---|---|
| `/type text\|image\|video` | Force the post type; regenerate media accordingly. | needs-review, revising, blocked |
| `/image <notes>` | Regenerate the image with direction; resets the retry counter. | needs-review, revising, blocked |
| `/image-style <name>` | Regenerate in a named house style (see `style-library.md`). | needs-review, revising, blocked |
| `/script <notes>` | Revise the video script. | needs-review, revising |

## Decision / lifecycle

| Command | Effect | Valid from |
|---|---|---|
| `/approve` | Approve current copy + media → `li:approved`. Refused if `li:image-check-failed`. | needs-review, revising, blocked |
| `/schedule <YYYY-MM-DD> [notes]` | Approve if needed, set the publish date → `li:scheduled`. | approved (auto-approves from needs-review/revising) |
| `/unschedule` | Return a scheduled post to `li:approved`. | scheduled |
| `/post [notes]` | Approve if needed, publish now through the `li-post` gate. | approved, blocked (publish-related) |
| `/post done <permalink>` | Record a post the human published by hand (video, or fallback). | approved, scheduled, blocked |
| `/park <reason>` | Shelve this idea, log it, close the issue, open a fresh idea issue. | any non-terminal |
| `/drop <reason>` | Kill this idea, log it, close the issue, no replacement. | any non-terminal |

## Meta

| Command | Effect |
|---|---|
| `/status` | Post current state, what the workflow is waiting on, and the next action. |
| `/help` | Post this command reference (short form). |
| `/hold` | Pause automation for this issue. |
| `/resume` | Resume automation for this issue. |

## Notes

- `/schedule` and `/post` are the **explicit publish authorization**. The
  `li-post.mjs` gate and `li-guard.sh preflight` re-verify every precondition
  before anything is sent.
- Dates are `YYYY-MM-DD`, interpreted in `LI_TZ` (`config.sh`).
- If a command is not valid from the current state, the agent says so and lists
  what is valid; it does not change state.
