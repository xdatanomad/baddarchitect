# 0002: Astro Static Site

Date: 2026-07-11

## Status

Accepted

## Context

The project originally compared Next.js, Docusaurus, Astro, and MDX-based options. The MVP now has a working Astro site under `website/` with MDX content collections, static routes, sitemap, RSS, and Cloudflare Pages deployment defaults.

## Decision

Use Astro as the MVP website framework.

- Keep the Astro app in `website/`.
- Keep deployable MDX content in `website/src/content/`.
- Keep editorial source material in the root `content/` workspace.
- Deploy as a static site to Cloudflare Pages.

## Consequences

Astro is the default website stack unless a future decision replaces it. Docusaurus, Starlight, or Next.js should only be reconsidered if the site becomes a much larger documentation system or starts requiring app-like interactivity.
