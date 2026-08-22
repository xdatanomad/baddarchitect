---
name: linkedin-content-planner
description: Plan a LinkedIn content sequence for a published AI Adoption Blueprint article, including several short posts and usually one long post, with a recommended posting schedule. Use when the user asks to plan LinkedIn promotion, post cadence, or a post series for an article.
---

# LinkedIn Content Planner

Use this skill to plan a LinkedIn post sequence for a published article. This skill creates the plan only. The `linkedin-short-post` and `linkedin-long-post` skills can use the plan as guidance, but they must still work independently.

## Required Context

Before planning, read:

1. `AGENTS.md`
2. `docs/vision.md`
3. The published article

Also inspect existing planned/generated LinkedIn content when present:

- `content/linkedin-content-plans/`
- `content/linkedin-short-posts/`
- `content/linkedin-long-posts/`

Read `docs/content-map.md` only when needed to understand the article's pillar, ID, or planned role.

## Output Location

Store plans in:

`content/linkedin-content-plans/`

Use one markdown file per article plan. Keep the directory flat.

Name files to match the source article numbering and name:

- If the article filename starts with a number, preserve it: `02_moving_forward.md` -> `02_moving_forward_linkedin_plan.md`.
- If the article has a content-map ID, use it as the prefix: `p1-01_article_slug_linkedin_plan.md`.
- If neither exists, use the article slug: `the_fear.md` -> `the_fear_linkedin_plan.md`.

Do not overwrite an existing plan unless the user explicitly asks to revise it.

## Planning Standard

Create a short, practical sequence:

- Usually 3-5 short posts.
- Usually 1 long post.
- Each post should have one clear angle, audience, and takeaway.
- Avoid repeating the same hook or argument.
- Keep the sequence grounded in the article's actual content.

The plan should help the post generators create content later. Do not write full post scripts or full long-post descriptions here.

## Schedule Guidance

Recommend a posting schedule based on:

- Existing planned LinkedIn posts in `content/linkedin-content-plans/`.
- Existing generated posts in `content/linkedin-short-posts/` and `content/linkedin-long-posts/`.
- Avoiding multiple posts from the same article too close together.
- Spacing the sequence over days or weeks so each post has a clear purpose.

If there is no existing schedule context, recommend a simple default cadence:

- Long post first or second.
- Short posts spaced 2-4 business days apart.
- Do not schedule more than one post per business day unless the user asks.

Use exact dates only when the user provides a start date or an existing plan has dated posts. Otherwise use relative timing such as `Day 1`, `Day 3`, or `Week 2`.

## File Shape

Use this markdown structure:

```markdown
# LinkedIn Content Plan: Article Title

- Source article: `path/to/article.md`
- Status: planned
- Recommended cadence:

## Article Positioning

- Reader:
- Main argument:
- Core takeaway:

## Planned Posts

### short-01 Title

- Type: short video script
- Angle:
- Hook:
- Takeaway:
- Recommended timing:
- Generator guidance:

### long-01 Title

- Type: long post description
- Angle:
- Hook:
- Takeaway:
- Recommended timing:
- Generator guidance:

## Schedule Notes

- 
```

Use `short-01`, `short-02`, and `long-01` IDs within the plan. Keep the plan concise enough for the short and long generator skills to follow without extra interpretation.

## Quality Bar

Prefer:

- Practical angles for AI architects and technical leaders.
- Specific operational tensions from the article.
- Simple hooks that do not overpromise.
- A mix of strategic, technical, and implementation angles when the article supports it.

Avoid:

- Engagement bait.
- Generic thought-leadership calendars.
- Overposting the same point.
- Unsupported claims, invented metrics, or fake anecdotes.
- Turning the plan into finished post copy.
