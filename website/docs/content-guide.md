# Website Content Guide

Publishable MDX content lives in `website/src/content/`.

## Rules

- Use MDX for essays. Field notes, guides, and stage pages are Markdown.
- Keep frontmatter complete and valid.
- Use `draft: true` for content that should not appear in production lists.
- Keep factual claims cited when they rely on external evidence.
- Add a concrete takeaway near the start of each publishable article.
- Use fenced code blocks with language identifiers when showing code.
- Do not treat `website/src/content/` as the raw notes area; raw notes belong in the root `content/` workspace.

## Essay Frontmatter

`src/content.config.ts` is authoritative. As of this writing the `essays`
collection requires:

- `title`
- `description`
- `routeSlug`
- `publishedDate`
- `updatedDate`
- `status`

Optional:

- `canonical`
- `tags`
- `summary`
- `draft`

Field notes, guides, and stages use different schemas in the same file. Field
notes reference a `stage`; guides reference a `primaryStage` and may list
`crossListedStages`.
