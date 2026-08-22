# Content Workflow

## Flow

1. Capture rough ideas in `content/inbox/` or `content/notes/`.
2. Move active writing into `content/drafts/essays/`, `content/drafts/field-notes/`,
   or `content/drafts/guides/`.
3. Promote polished source drafts into the matching directory under `content/ready/`.
4. Adapt publishable content into `website/src/content/` as MDX with complete frontmatter.
5. Keep social derivatives in `content/social/`.

## Directory Shape

`content/drafts/` and `content/ready/` use the same three format directories,
matching the website collections:

- `essays/` - flat, no stage directories. Filenames are route slugs.
- `field-notes/` - one directory per adoption stage.
- `guides/` - one directory per adoption stage.

Stage directory names match the website stage slugs: `foundation`,
`personal-leverage`, `shared-team-practice`, `managed-workflows`,
`governed-capability`.

Field notes and guides carry a stage-based content ID as their filename prefix,
for example `s1-fn01_` and `s1-g01_`. See the Content Numbering section in
`docs/content-map.md`, which is the ID registry.

## Rules

- Do not overwrite raw notes when extracting publishable material.
- Cite factual claims that depend on external evidence.
- Add a practical takeaway near the start of publishable content.
- Keep `website/src/content/` limited to content intended for the Astro build.
