---
name: linkedin-short-post
description: Generate a short LinkedIn video post script and accompanying post description from an already published AI Adoption Blueprint article. Use when the user asks for a short LinkedIn post, short video script, or LinkedIn promo derived from a published article.
---

# LinkedIn Short Post

Use this skill to create a short LinkedIn video script and post description from an already published article. The output is a companion social post, not a rewrite of the article.

## Required Context

Before generating a post, read:

1. `AGENTS.md`
2. `docs/vision.md`
3. The published article

Read `docs/content-map.md` only when needed to understand the article's pillar, ID, or planned role.

## Output Location

Store generated scripts in:

`content/linkedin-short-posts/`

Use one markdown file per post. Keep the directory flat.

Name files to match the source article numbering and name:

- If the article filename starts with a number, preserve it: `02_moving_forward.md` -> `02_moving_forward_linkedin_short.md`.
- If the article has a content-map ID, use it as the prefix: `p1-01_article_slug_linkedin_short.md`.
- If neither exists, use the article slug: `the_fear.md` -> `the_fear_linkedin_short.md`.

Do not overwrite an existing post file unless the user explicitly asks to revise it.

## Generation Standard

Create both:

1. A short video script for a 10-20 second LinkedIn video.
2. A LinkedIn post description that can be longer than the script.

The post must be:

- Short, direct, and specific.
- Useful to AI architects, CTOs, engineering leaders, product leaders, or AI practice leaders.
- Grounded in the article's actual argument.
- Optimized for LinkedIn traction without clickbait, hype, or inflated claims.
- Clear enough to understand without reading the article first.

Prefer:

- A sharp opening hook.
- One concrete tension or mistake.
- One practical takeaway.
- A calm, credible call to continue the conversation or read the article.

Avoid:

- Engagement bait.
- Generic AI optimism.
- Overclaiming.
- Hashtag stuffing.
- Fake personal anecdotes.
- Claims or statistics not present in the article unless separately cited.

## File Shape

Use this markdown structure:

```markdown
# LinkedIn Short Post: Article Title

- Source article: `path/to/article.md`
- Target length: 10-20 seconds
- Status: draft

## Video Script

[Short spoken script.]

## Post Description

[LinkedIn description text.]

## Notes

- Hook:
- Core takeaway:
- Suggested hashtags:
```

Use 1-3 relevant hashtags at most. Hashtags are optional if they do not add value.

## Writing Guidance

The script should sound like a person talking, not a press release. Keep sentences short enough to speak clearly on video.

The post description can add context, but it should still be concise, practical, and grounded. Make the first two lines strong because LinkedIn truncates posts in the feed.
