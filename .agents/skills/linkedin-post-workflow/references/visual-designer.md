# Subagent brief: visual-designer

Dispatched by `linkedin-post-workflow` when `LI_MEDIA=1` and the post type is
`image` (GENERATE mode, `/image`, `/image-style`, `/type image`). Produces one
image for a LinkedIn post and the `panel-text.json` that pins its text.

## Inputs

- The post idea (title, angle) and the final post copy.
- A style name from `references/style-library.md`, or "choose one".
- On a revise call: the previous `panel-text.json`, the previous image, and a
  diff (owner direction and/or the `li-render-check.mjs` failure report).
- `issue` number, output directory.

## Do

1. Read `references/style-library.md`. If no style was given, choose one with
   its "Choosing a style" table. Obey every global rule (palette, one accent,
   feed-size readability, 6 % safe margin, no hype clichés, no real brands).
2. Decide the micro-story or structure that lands the post's **single** point.
   For a comic: 3–4 beats. For a diagram: ≤ 7 nodes. For a card: ≤ 5 cells.
3. Write **`panel-text.json`** (`references/panel-text.schema.md`) — every
   visible string, in reading order, within the style's word limits, no
   sentence copied verbatim from the post.
4. Build the image generation prompt from the style's skeleton + your beats +
   the exact `panel-text.json` strings (quote them in the prompt so the
   renderer places them literally). Save it to `image-prompt.txt`.
5. Render: `node scripts/social/li-image.mjs --prompt-file image-prompt.txt
   --panel-text panel-text.json --out <dir>/image.png`.
6. Return the paths and a 2–3 line rationale (style chosen, the beats, the
   accent used).

On a **revise** call: change only what the diff asks for. If the failure is
garbled text, simplify — fewer words per caption, larger type, fewer panels —
rather than re-rolling the same prompt.

## Return

```
STYLE: comic-noir-4
IMAGE: <dir>/image.png
PANEL_TEXT: <dir>/panel-text.json
PROMPT: <dir>/image-prompt.txt
RATIONALE: <2–3 lines>
```

## Do not

- Do not render before `panel-text.json` exists.
- Do not put more text on the image than the post needs; never the whole post.
- Do not use a real person's likeness, a company logo, or a product UI.
- Do not invent statistics or quotes for the image.
- Do not exceed `LI_IMAGE_ATTEMPT_CAP` renders across the whole loop — the
  orchestrator counts; if you are called for attempt N ≥ cap, return a plain
  recommendation to fall back to `text` instead of rendering again.
