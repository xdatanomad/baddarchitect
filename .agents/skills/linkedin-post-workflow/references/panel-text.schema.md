# `panel-text.json` contract

The exact, ordered list of every string that must appear on a generated image.
Written by the `visual-designer` subagent **before** rendering. Read by
`scripts/social/li-render-check.mjs` to verify the render.

## Shape

```json
{
  "issue": 42,
  "style": "comic-noir-4",
  "dimensions": "1200x1200",
  "slots": [
    { "id": "p1-caption", "kind": "caption", "text": "THE DEMO WORKED." },
    { "id": "p2-caption", "kind": "caption", "text": "NOBODY OWNED THE WORKFLOW." },
    { "id": "p3-caption", "kind": "caption", "text": "IT NEVER SHIPPED." },
    { "id": "p3-sign",    "kind": "label",   "text": "PROD" }
  ]
}
```

- `slots` is **ordered** — top-to-bottom, then left-to-right (reading order).
- `kind`: `caption` (narration box), `balloon` (dialogue), `label` (on an object
  or axis), `title` (a single heading).
- `text` is the exact string as it should read on the image, including case and
  punctuation. Keep it inside the style's word limits.
- Every string the viewer will read must have a slot. Do not list decorative
  glyphs, textures, or the signature line.
- No string may duplicate a full sentence from the post copy.

## Pass / fail (li-render-check.mjs)

The checker extracts the visible text from the rendered image (vision model;
`tesseract` fallback), normalizes case / whitespace / smart quotes / hyphens,
and compares:

- **PASS** — every slot's normalized text is found in the extracted text, in
  slot order, and no *caption/title* slot contains text that is not in the
  expected set (extra labels on incidental objects are tolerated).
- **NEAR-PASS** — all slots match except for punctuation or spacing → treated as
  PASS with a note.
- **FAIL** — a slot's text is missing, garbled, misspelled, or out of order.

On FAIL the subagent re-renders with the diff as direction, up to
`LI_IMAGE_ATTEMPT_CAP` total attempts. On the cap, the issue goes `li:blocked` +
`li:image-check-failed`.
