# LinkedIn Worklog

Durable record of every LinkedIn post idea produced by the
`linkedin-post-workflow` pipeline. Written and moved by
`scripts/social/li-worklog.sh`; humans normally only read it.

## Layout

```
worklog/
  INDEX.md      append-only ledger, newest last
  ideas/        every proposed idea, written at generation
  parked/       shelved ideas (may be revisited)
  dropped/      killed ideas (no replacement)
  scheduled/    approved and queued for a publish date
  published/    live on LinkedIn, with permalink
```

One Markdown file per idea: `YYYY-MM-DD_<slug>.md`, where the date is the
**creation** date and stays fixed. The file **moves** between lane directories
as the idea changes state (`git mv`, so history follows). Its frontmatter
`state` is updated on each move.

## Entry frontmatter

```yaml
---
date: 2026-09-08          # creation date, fixed
issue: 42                 # GitHub issue number
state: published          # matches the lane directory
type: text                # text | image | video
title: "Working title"
source_content:           # repo paths the idea drew on
  - content/ready/essays/xxx.md
citation: "https://..."   # or "none"
linkedin_url: "https://www.linkedin.com/feed/update/..."   # set on publish
parked_reason: ""         # set on /park
dropped_reason: ""        # set on /drop
---
```

Body: the post copy. It is written at idea time and refreshed from the issue
(`li-issue.sh copy-get`) on `schedule` and `publish`, so a `published/` entry
always holds the copy that actually went out. While an idea is still in review,
the GitHub issue — not this file — is the source of truth for the current draft.

## INDEX.md

Pipe-delimited, one row per state change, newest at the bottom:

```
| date | issue | state | type | title | url |
```

Generation mode reads only the **last ~20 rows** of `INDEX.md` (plus, if needed,
a couple of recent `ideas/` bodies) to avoid repeating a recent angle. It never
scans the whole tree.
