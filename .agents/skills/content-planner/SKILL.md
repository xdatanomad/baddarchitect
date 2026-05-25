---
name: content-planner
description: Plan, revise, prioritize, or evaluate content ideas and outlines for the AI Adoption Blueprint site. Use when the user asks to build, refine, challenge, or update the content plan, content map, article backlog, pillar outlines, or planned content strategy for this project.
---

# Content Planner

Use this skill to plan content for the AI Adoption Blueprint site. The job is to maintain a short, high-value content plan, not to write the content.

## Hard Boundaries

- Only modify `content/strategy/content-map.md`.
- Do not create article drafts, publishable pages, outlines in `content/articles/`, or long-form content.
- Do not edit raw notes in `content/notes/`.
- Do not edit milestones, project phases, site architecture, AGENTS files, or skill inventory files unless the user explicitly asks outside this skill.
- Preserve source material. Treat notes as inputs, not destinations.

## Required Context

Before changing the content map, read:

1. `AGENTS.md`
2. `content/strategy/project-brief.md`
3. `content/strategy/content-map.md`

Then read only the relevant source files from:

- `content/strategy/`
- `content/notes/`

Use the notes to identify useful planning candidates, but keep raw phrasing and unfinished thinking out of the content map unless it has been shaped into a clear plan.

## Planning Standard

Be strict. The content map is not an idea dump.

Only add or keep planned content that clearly serves at least one of these:

- Helps serious teams move from AI experiments to measurable, governed, production-grade adoption.
- Explains AI adoption as a systems problem: workflow, data, permissions, evaluation, governance, operating model, and ROI.
- Gives AI architects, CTOs, product leaders, or practice leaders a concrete decision rule, checklist, blueprint, model, or implementation path.
- Fits one of the four approved pillars:
  1. AI Adoption Stages & Challenges.
  2. AI Adoption Operating Manual.
  3. A Blueprint for building Production AI Systems and Agents with ROI.
  4. AI Security Best Practices.

Challenge weak content. If an idea is generic, hype-driven, purely opinion-based, too broad, too tactical without strategic value, or disconnected from the project quality bar, do not add it as planned content. If it may be useful later, list it briefly as a challenged candidate with the reason it is not ready.

## Content Map Shape

Keep `content/strategy/content-map.md` concise and scannable. Organize planned content under the approved pillars.

For each planned item, prefer this compact shape:

```markdown
### Title

- Reader/job: Who this helps and what decision or task it supports.
- Goal: The specific outcome the content should create.
- Outline: 3-5 bullets covering the planned argument or structure.
- Source notes: Relevant source files or anchors.
- Status: planned | candidate | challenged
```

Use `planned` only for high-confidence, high-value content. Use `candidate` for promising ideas that need evidence, sharper scope, or sequencing. Use `challenged` for ideas that should not be added until their value is proven.

## Revision Behavior

When revising the map:

- Prefer pruning, merging, and sharpening over expanding.
- Keep the total list short enough to guide actual delivery.
- Avoid duplicating the same idea across pillars.
- Preserve useful existing map content unless it fails the quality bar.
- Make goals and outlines actionable, not promotional.
- Mark factual claims that need external research instead of presenting them as settled.

The planner builds, revises, and suggests content to be delivered later. It does not create the content itself.

## Numbering System

Use stable content IDs in item headings. The prefix comes from the top-level content-map section:

- `p1` for Pillar 1: AI Adoption Stages & Challenges.
- `p2` for Pillar 2: AI Adoption Operating Manual.
- `p3` for Pillar 3: Production AI Systems and Agents with ROI.
- `p4` for Pillar 4: AI Security Best Practices.
- `cc` for Challenged / Later Candidates.

Follow the prefix with a two-digit sequence, such as `p1-01`, `p2-03`, or `cc-01`.

Use the ID at the start of the content item heading:

```markdown
### p1-01 Title
```

When adding a new item, use the next available number within that section. Do not renumber existing items unless the user explicitly asks for a full renumbering pass.
