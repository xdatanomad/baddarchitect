# Website Agent Guide

## Purpose

This directory contains the Astro website for AI Adoption Blueprint. Keep website implementation work isolated here unless a task explicitly requires changes elsewhere.

## Stack

- Astro
- TypeScript
- MDX
- Astro content collections
- Static deployment to Cloudflare Pages

## Rules

- Preserve the root `content/` workspace as the editorial source area.
- Preserve root `docs/` as the project source-of-truth area.
- Do not delete or move root notes, ready content, research, or docs as part of routine website work.
- Copy or adapt only launch-ready content into `src/content/`.
- Keep the site static-first and lightweight.
- Prefer semantic HTML, accessible navigation, and readable mobile layouts.
- Keep design calm, credible, and practical for technical leaders.
- Avoid hype language, generic AI imagery, and decorative effects that distract from reading.
- Cite factual claims inside article content when the article depends on external research.

## Commands

- `npm run dev` - local development server.
- `npm run check` - Astro type and content checks.
- `npm run build` - production build.
- `npm run preview` - preview production build locally.

## Deployment

Cloudflare Pages should use:

- Project root: `website`
- Build command: `npm run build`
- Build output directory: `dist`
