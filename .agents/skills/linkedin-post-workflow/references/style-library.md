# Image Style Library

The house styles the workflow draws from for `li:type-image` posts. Active only
when `LI_MEDIA=1` (`scripts/social/config.sh`); until then no image is made.

Every image obeys the **global rules** below. Each **style** adds composition,
palette, and typography direction. The `visual-designer` subagent
(`references/visual-designer.md`) picks or is told a style, writes
`panel-text.json` first, then renders to match; `scripts/social/li-render-check.mjs`
verifies the on-image text.

---

## Global rules (every style)

1. **Tone matches the project:** credible, calm, a little dry. Not promotional,
   not hype. No glowing brains, no robot handshakes, no "AI swirl" clichés, no
   faux-3D chrome, no stock-photo gloss.
2. **Text is exact and minimal.** Every visible string is decided in
   `panel-text.json` before rendering. Aim for ≤ 7 words per caption, ≤ 4 words
   per label. No lorem, no invented stats, no logos or real brand marks.
3. **One idea per image.** A comic tells a 3–4 beat micro-story that lands the
   post's single point. A diagram shows one structure. Do not cram.
4. **Readable at feed size.** Assume it is seen ~500 px wide on a phone. Big
   type, high contrast, generous margins.
5. **Dimensions:** default **1200 × 1200** (square). Use **1200 × 628**
   (landscape) only for wide diagrams. Keep all text inside a 6 % safe margin.
6. **Palette:** use the project palette below. One accent per image. Backgrounds
   are paper/graphite, never pure `#000`/`#fff`.
7. **People:** generic, non-identifiable, varied. No real person's likeness.
8. **No text the post already says verbatim** — the image reinforces the idea
   visually, it is not a screenshot of the caption.

### Project palette

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1A1A1E` | linework, body text |
| `paper` | `#F4F1EA` | primary background |
| `graphite` | `#2B2F36` | dark panels, night scenes |
| `bone` | `#E7E2D6` | secondary fills, caption boxes |
| `signal` | `#C8492E` | the accent — one per image (alerts, emphasis) |
| `slate` | `#3D5A73` | diagrams, calm structure |
| `moss` | `#6C7A53` | "after / resolved" states |
| `gold` | `#C9A227` | sparingly — a single highlighted element |

Pick **one** of `signal` / `slate` / `moss` / `gold` as the accent for a given
image; the rest of the image stays in `ink` / `paper` / `graphite` / `bone`.

---

## Comic styles

Comics are 2–4 panels, left-to-right (or 2×2), with rectangular caption boxes.
Captions carry the narration; speech balloons only when a line of dialogue is
the point. Letter captions in a clean condensed sans, not a novelty comic font.

### `comic-noir-4`  — Spawn-influenced

- **Use for:** a cautionary or tension arc — the demo that never shipped, the
  unreviewed output that caused an incident, scope creep, on-call dread.
- **Panels:** 3 or 4.
- **Look:** heavy spotted blacks, high-contrast chiaroscuro, rim light from one
  hard source, rain / grain / halftone texture, deep shadows eating detail.
  Low angles, cramped framing, a lot of `graphite` and `ink`.
- **Accent:** `signal`, used once — a warning light, a screen, a stop sign.
- **Captions:** white condensed sans, all-caps, in solid `ink` boxes pinned to
  a corner. Terse and grim-dry.
- **Negative:** no bright daylight, no clean gradients, no cheerful faces, no
  neon cyberpunk palette.
- **Prompt skeleton:** `4-panel noir comic, heavy inked blacks, chiaroscuro rim
  light, halftone grain, rain; {beat 1} / {beat 2} / {beat 3} / {beat 4};
  all-caps caption boxes; muted graphite and bone, one red accent; flat print
  look, no gloss`.

### `comic-bronze-age`  — classic DC house style

- **Use for:** an instructive or quietly hopeful arc — the engineer who writes
  the eval first, the team that adds the review gate, discipline paying off.
- **Panels:** 2 to 4.
- **Look:** bold confident ink outlines, flat color fills, visible Ben-Day dot
  shading, clear staging, mid shots, honest daylight. Slightly retro.
- **Accent:** `slate` or `moss` (calm), or `signal` for one "before" panel.
- **Captions:** rectangular `bone` boxes, dark serif or clean sans, sentence
  case. First-person or wry third-person.
- **Negative:** no grit texture, no photoreal rendering, no muddy palette, no
  extreme angles.
- **Prompt skeleton:** `2–4 panel classic bronze-age superhero comic, bold ink
  outlines, flat colors, Ben-Day dots, clear daytime staging; {beats};
  rectangular caption boxes, sentence case; primary palette with a single slate
  accent; print-flat`.

### `comic-explainer-3`  — muted editorial

- **Use for:** a before → change → after contrast (any process point).
- **Panels:** exactly 3, equal width, read left to right.
- **Look:** flat geometric shapes, minimal linework, lots of `paper`
  negative space, one repeated character or object across the three panels so
  the change is legible. Editorial-illustration restraint.
- **Accent:** `signal` in panel 1 (the problem), `moss` in panel 3 (resolved),
  neutral panel 2.
- **Captions:** a thin strip under each panel, `ink` on `bone`, ≤ 5 words.
- **Negative:** no comic grit, no dramatic lighting, no clutter.
- **Prompt skeleton:** `3-panel flat editorial illustration, geometric shapes,
  generous negative space, one recurring figure showing before / change /
  after; thin caption strip under each; paper background, red-to-moss shift;
  calm, restrained`.

---

## Non-comic styles

### `diagram-isometric`

- **Use for:** architecture, a workflow-readiness map, "where the pieces sit".
- **Look:** isometric blocks and connectors on a `paper` grid, `slate` line
  work, subtle drop shadows, one `signal` element for the part under discussion.
- **Type:** single clean sans, labels ≤ 3 words, a short title top-left.
- **Format:** 1200 × 628 allowed.
- **Negative:** no 3D chrome, no glow, no dense mesh of arrows (≤ 7 nodes).

### `quadrant-card`

- **Use for:** a decision rule, an authority ladder, an exposure gate, a 2×2.
- **Look:** a single `bone` card on `paper`, thin `ink` rules, axis labels,
  four (or N) cells with a 2–4 word label each; one cell tinted `signal` or
  `moss` to mark the recommended position.
- **Type:** generous, one sans, high contrast.
- **Negative:** no icons-per-cell zoo, no gradient fills, no more than 4–5 cells.

### `typographic-statement`

- **Use for:** a single contrarian line — the post's sharpest sentence, made
  visual.
- **Look:** one short sentence set very large in `ink` on a textured `paper` or
  `graphite` field, tight leading, one word or phrase in `signal`. A small
  attribution line bottom-left (`— AI Adoption Blueprint`). Nothing else.
- **Negative:** no illustration, no multiple sentences, no decorative frame.

---

## Choosing a style

| The post is… | Style |
|---|---|
| a warning / failure story | `comic-noir-4` |
| discipline / a good habit / a hopeful arc | `comic-bronze-age` |
| a before/after or process contrast | `comic-explainer-3` |
| about how components fit together | `diagram-isometric` |
| a decision rule / ladder / matrix | `quadrant-card` |
| one blunt sentence worth staring at | `typographic-statement` |

Default when unsure and the post has a mini-narrative: `comic-explainer-3`.
Default when it is structural: `quadrant-card`.

The owner overrides any time with `/image-style <name>` or `/type text`.
