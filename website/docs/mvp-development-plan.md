# MVP Website Development And Deployment Plan

## Summary

Build the first public version of AI Adoption Blueprint as a static-first Astro site in this `website/` directory. The MVP includes a compact marketing surface, MDX-powered articles and lessons, SEO basics, code formatting, and deployment to Cloudflare Pages.

The existing root `content/` workspace remains the editorial source area. Launch-ready content is copied or adapted into `website/src/content/`.

## Milestones

1. Website workspace scaffold.
2. Astro frontend stack setup.
3. Site information architecture.
4. Visual system and layout.
5. Content model and MDX workflow.
6. MVP marketing pages.
7. Launch content integration.
8. SEO, feeds, and metadata.
9. Quality gates.
10. Cloudflare Pages deployment.
11. Post-launch operations.

## MVP Routes

- `/`
- `/about`
- `/articles`
- `/lessons`
- `/topics`
- `/topics/adoption-stages`
- `/topics/operating-manual`
- `/topics/production-ai-systems`
- `/topics/ai-security`
- `/articles/[slug]`
- `/lessons/[slug]`

## Deployment Defaults

- Platform: Cloudflare Pages
- Project root: `website`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none for MVP

## Acceptance Criteria

- `npm run check` passes.
- `npm run build` passes.
- At least three articles are published.
- Code blocks render correctly in MDX.
- Draft content is excluded from production lists.
- Core pages have unique metadata.
- Sitemap, RSS, and robots file are generated.

