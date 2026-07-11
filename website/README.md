# AI Adoption Blueprint Website

This is the MVP website for AI Adoption Blueprint: a static-first Astro site with a small marketing surface and MDX-powered articles and lessons.

## Local Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - start the Astro development server.
- `npm run check` - validate Astro, TypeScript, and content collections.
- `npm run build` - build the static site.
- `npm run preview` - preview the built site.

## Content Workflow

Publishable website content lives in `src/content/`.

- Articles: `src/content/articles/*.mdx`
- Lessons: `src/content/lessons/*.mdx`

The root repository `content/` directory remains the editorial source workspace. Root project direction lives in `../docs/`, and research lives in `../research/`. Do not delete, move, or rewrite those source files as part of routine website publishing.

Each article or lesson must include complete frontmatter. Draft content should use `draft: true` so it is excluded from production lists.

See `docs/content-guide.md` for the full content checklist.

## Deployment

The MVP target is Cloudflare Pages.

- Project root: `website`
- Build command: `npm run build`
- Output directory: `dist`

No environment variables are required for the MVP.
