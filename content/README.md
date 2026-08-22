# Content Workspace

This is the editorial workspace for AI Adoption Blueprint. It holds raw notes, active drafts, ready source material, social derivatives, and content assets. Live website MDX lives separately in `website/src/content/`.

## Directories

- `inbox/` - uncategorized captures to triage.
- `notes/` - preserved raw source material, rough ideas, research prompts, and unpolished thinking.
- `drafts/` - active essay, field note, and guide drafts.
- `ready/` - polished source material ready to adapt into `website/src/content/`.
- `social/` - LinkedIn and other social derivatives tied to source content.
- `assets/` - future images, diagrams, source files, and visual references.

## Draft and Ready Structure

`drafts/` and `ready/` share the same three format directories, matching the
website collections:

```
essays/                     flat; filenames are route slugs
field-notes/<stage>/        s1-fn01_<slug>.md
guides/<stage>/             s1-g01_<slug>.md
```

Stage directories use the website stage slugs: `foundation`,
`personal-leverage`, `shared-team-practice`, `managed-workflows`,
`governed-capability`.

Field notes and guides are numbered per stage and per format. `s0` is
Foundation. Essays are not numbered. `docs/content-map.md` is the ID registry -
check it before assigning a new number.

Durable project strategy now lives in `docs/`. Research and evidence maps live in `research/`. Treat private memory files, if present, as private context and not website content.
