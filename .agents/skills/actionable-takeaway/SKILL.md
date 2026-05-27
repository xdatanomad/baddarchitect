---
name: actionable-takeaway
description: Add one simple actionable takeaway, exercise, checklist, or reader todo to a polished AI Adoption Blueprint article. Use when the user asks to make ready-to-ship content more actionable without broadly rewriting the article.
---

# Actionable Takeaway

Use this skill to add one practical action item to a polished or ready-to-ship article. The goal is not to edit the article broadly. The goal is to help the reader do one useful thing after reading.

## Required Context

Before recommending action items, read:

1. `AGENTS.md`
2. `content/strategy/project-brief.md`
3. The article the user wants to improve

Read `content/strategy/content-map.md` or relevant notes only when needed to understand the article's planned role or source material.

## Hard Workflow

1. Review the article for its reader, job-to-be-done, main argument, and existing practical guidance.
2. Recommend no more than 3 actionable items to the user.
3. Wait for the user to choose one item.
4. Add exactly one actionable item to the article.

Do not add multiple action items. Do not rewrite the whole article. Do not add the item before the user chooses.

## Recommendation Standard

Every recommended item must be:

- Easy to understand.
- Easy to implement.
- Directly tied to the article's main argument.
- Useful for the article's intended reader.
- Grounded in practical, trusted, real-world operating experience.
- Small enough to complete without a major program, new tool rollout, or large organizational change.

Prefer:

- A short exercise.
- A checklist.
- A decision rule.
- A concrete reader todo.
- A concise takeaway box.

Avoid:

- Generic advice.
- Motivational slogans.
- Complex frameworks.
- Unverified claims.
- Big transformation programs.
- Anything that requires pretending there is proof the article does not provide.

## Recommendation Format

Present recommendations in this format:

```markdown
## Actionable Item Options

1. **Title**
   - Type: exercise | checklist | decision rule | todo | takeaway
   - Why it fits:
   - Where it should go:

2. **Title**
   - Type:
   - Why it fits:
   - Where it should go:
```

Use only as many options as are genuinely strong. It is acceptable to recommend one or two options instead of three.

## Insertion Behavior

After the user chooses an option:

- Add only the chosen item.
- Keep it short and practical.
- Place it where it supports the article's flow, usually near the first practical section, before the conclusion, or immediately after the point it reinforces.
- Use a clear heading such as `## Actionable Takeaway`, `## Quick Exercise`, or `## Decision Rule`.
- Preserve the article's tone: direct, candid, professional, humble, and not hype-driven.
- Do not fabricate citations, case studies, metrics, or proof.
