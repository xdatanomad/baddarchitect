# Image Style Library

> **Status: Phase 5, not yet authored.** v1 is text-only (`LI_MEDIA=0`). This
> file exists so `SKILL.md` has a real target; it is filled in when the media
> path is enabled. Until then the orchestrator never generates an image.

When authored, each style entry carries: name, when to use, composition rules,
palette (from a fixed project palette), typography, panel count, text-placement
rules, negative prompts, and an example prompt skeleton.

## Seed styles (planned)

| Name | Kind | Use for |
|---|---|---|
| `comic-noir-4` | comic, Spawn-influenced | tension / cautionary arc (3–4 panels, terse all-caps captions) |
| `comic-bronze-age` | comic, classic DC | hopeful / instructive arc, "hero does the boring discipline" (2–4 panels) |
| `comic-explainer-3` | comic, muted editorial | before → change → after process contrast (3 panels) |
| `diagram-isometric` | non-comic | architecture / workflow-readiness maps |
| `quadrant-card` | non-comic | decision rules, authority ladder, exposure gate (2×2 or ladder) |
| `typographic-statement` | non-comic | one strong claim, large type, small attribution |

## Rules for every style (already binding when media is enabled)

- Project tone: credible, calm, not promotional. No stock-art gloss, no hype
  iconography (no glowing brains, no robot handshakes).
- Every visible string goes into `panel-text.json` **before** rendering; the
  image is generated to match, then verified by
  `scripts/social/li-render-check.mjs` (cap: `LI_IMAGE_ATTEMPT_CAP`).
- Safe margins for LinkedIn 1200×1200 (square) or 1200×628 (landscape).
