---
name: relatable-example
description: Generate and insert one simple, relatable real-world example or short story into a polished AI Adoption Blueprint article. Use when the user asks to make an article easier to grasp through a practical example, scenario, or reader-relevant story.
---

# Relatable Example

Use this skill to add one real-world example or short story to a polished or ready-to-ship article. The goal is not to edit the article broadly. The goal is to help the reader understand the idea by seeing it in a realistic situation they can recognize.

## Required Context

Before recommending examples, read:

1. `AGENTS.md`
2. `docs/vision.md`
3. The article the user wants to improve

Read `docs/content-map.md` or relevant notes only when needed to understand the article's planned role or source material.

## Hard Workflow

1. Review the article for its reader, job-to-be-done, main argument, and abstract or hard-to-grasp ideas.
2. Recommend no more than 3 example/story options to the user.
3. Wait for the user to choose one option.
4. Add exactly one example/story to the article.

Do not add multiple examples. Do not rewrite the whole article. Do not insert an example before the user chooses.

## Recommendation Standard

Every recommended example must be:

- Easy to understand.
- Relatable to the article's intended reader.
- Directly tied to the article's main idea.
- Practical enough to feel real, not theatrical.
- Simple enough to explain in a few paragraphs or less.
- Grounded in common real-world operating experience.

Prefer examples from:

- Enterprise adoption meetings.
- Architecture reviews.
- Product, engineering, security, support, or customer-success workflows.
- Production AI failure modes and recovery.
- Team behavior, governance, approval, measurement, or rollout decisions.

Avoid:

- Overdramatic stories.
- Fake case studies presented as real.
- Named companies unless the article already cites them accurately.
- Complex scenarios that require too much setup.
- Examples that distract from the article's main argument.
- Generic "imagine a company" filler.

## Recommendation Format

Present recommendations in this format:

```markdown
## Example Options

1. **Title**
   - Type: scenario | short story | analogy | workflow example
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

- Add only the chosen example/story.
- Keep it short, concrete, and easy to follow.
- Place it where it improves comprehension, usually immediately after the abstract claim or before the practical takeaway it supports.
- Use a clear heading when helpful, such as `## Example`, `## A Common Scenario`, or `## What This Looks Like`.
- Preserve the article's tone: direct, candid, professional, humble, and not hype-driven.
- Do not fabricate citations, case studies, metrics, or proof.
