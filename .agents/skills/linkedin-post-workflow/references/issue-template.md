# LinkedIn Post Workflow — Issue Body Template

The orchestrator renders the issue body from this layout. It rewrites the body
in place on each revision (via `li-issue.sh body-set`), so the body always shows
the **current** draft. Discussion and commands live in comments.

Keep HTML comment markers exactly as written — scripts and the agent key off
them.

```markdown
<!-- li:managed -->
# <working title>

| | |
|---|---|
| **State** | `li:needs-review` |
| **Type** | text |
| **Reader** | <primary reader / job-to-be-done> |
| **Stage** | <adoption stage the idea sits in, or "cross-cutting"> |
| **Source** | `<repo path(s) the idea draws on>` |
| **Created** | <YYYY-MM-DD> |

## Idea

<2–4 sentences: the angle, why it is worth posting now, how it differs from
recent worklog entries.>

<!-- li:copy:start -->
## Post copy

<the exact LinkedIn post text, ready to publish>
<!-- li:copy:end -->

<!-- li:research:start -->
## Supporting material

- **Backs:** <the one claim in the post this source supports>
- **Source:** <title> — <url>
- **Note:** <one line: what the source says and why it is relevant>

_(At most one external source. The idea is presented as original; the citation
is backing only. "none" if no source was needed.)_
<!-- li:research:end -->

<!-- li:media:start -->
## Media

**Type:** text — no media.

_(For image: chosen style, `panel-text.json` contents, attempt count, and the
attached image. For video: the 10–30s script, on-screen text list, shot notes.)_
<!-- li:media:end -->

## Notes for review

<anything the reviewer should know: open questions, alternative hooks
considered, what was cut.>

---
_Reply with a command. `/help` lists them. `/approve` to accept, `/revise
<notes>` to change, `/park <reason>` to shelve._
```

## First comment (posted right after creation)

```markdown
Draft ready for review. Current state: **needs-review**, type **text**.

**Do one of:**
- `/approve` then `/schedule 2026-09-15` or `/post`
- `/revise <what to change>`
- `/research <angle>` / `/regenerate <different take>`
- `/park <reason>` / `/drop <reason>`

`/help` for the full list. `/status` any time.

<!-- li:handled 0 -->
```
