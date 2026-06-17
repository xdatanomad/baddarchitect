# Website Content Guide

Publishable MDX content lives in `website/src/content/`.

## Rules

- Use MDX for articles and lessons.
- Keep frontmatter complete and valid.
- Use `draft: true` for content that should not appear in production lists.
- Keep factual claims cited when they rely on external evidence.
- Add a concrete takeaway near the start of each publishable article.
- Use fenced code blocks with language identifiers when showing code.
- Do not treat `website/src/content/` as the raw notes area; raw notes belong in the root `content/` workspace.

## Article Frontmatter

Required:

- `title`
- `description`
- `routeSlug`
- `publishedDate`
- `updatedDate`
- `pillar`
- `status`

Optional:

- `canonical`
- `tags`
- `summary`
- `draft`
