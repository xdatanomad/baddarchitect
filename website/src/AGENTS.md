# Website Source Guide

## Implementation Rules

- Prefer Astro components and static rendering.
- Add client-side JavaScript only when the user-facing feature requires it.
- Keep components small, readable, and accessible.
- Use semantic HTML first.
- Keep CSS in `styles/global.css` for global tokens and shared prose styles; use scoped styles for component-specific layout.
- Avoid oversized marketing patterns. This site should feel editorial, practical, and credible.

## Route Rules

- Static pages belong in `pages/`.
- Shared layouts belong in `layouts/`.
- Reusable UI belongs in `components/`.
- Data helpers belong in `lib/`.

