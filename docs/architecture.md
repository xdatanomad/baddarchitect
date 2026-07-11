# Architecture

## Current Decision

The MVP website is a static-first Astro app under `website/`.

- Framework: Astro
- Language: TypeScript
- Content: MDX via Astro content collections
- Deployment target: Cloudflare Pages
- Website root: `website/`
- Build command: `npm run build`
- Build output: `website/dist`

See `docs/decisions/0002-astro-static-site.md` for the decision record.

## Site Goals

- Minimal and fast.
- Easy to deploy.
- Easy to maintain.
- Easy to add Markdown or MDX content.
- Strong SEO foundations.
- Practical, readable, and credible for technical leaders.

## Repository Boundaries

- `docs/` is the project source of truth for vision, roadmap, architecture, decisions, and workflows.
- `content/` is the editorial workspace for notes, drafts, ready source material, social derivatives, and content assets.
- `research/` is for evidence, learning notes, source maps, and market maps.
- `website/` is the deployable Astro application. Live website content lives in `website/src/content/`.
- `.agents/` is for local agent skills, checklists, workflows, and agent project configuration.

## Website Subsystems

- Pages: file-based Astro routes in `website/src/pages/`.
- Content collections: articles and lessons configured in `website/src/content.config.ts`.
- Layouts: shared page shells in `website/src/layouts/`.
- Components: reusable UI in `website/src/components/`.
- Site data/helpers: `website/src/lib/`.
- Global styles: `website/src/styles/global.css`.

## Content Flow

1. Capture raw ideas in `content/inbox/` or `content/notes/`.
2. Develop active drafts in `content/drafts/`.
3. Promote polished Markdown source to `content/ready/`.
4. Adapt launch-ready content into MDX under `website/src/content/`.
5. Generate social derivatives under `content/social/`.

## Open Architecture Questions

- Whether to add Starlight or another docs layer if the manual grows into a large nested guide library.
- Whether to add analytics, newsletter capture, or contact/consulting forms after the MVP content launch.
- Whether single sign-on is ever needed; current references to "SEO optimized" are treated as search-engine optimization, not SSO.
