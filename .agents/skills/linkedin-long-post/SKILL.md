---
name: linkedin-long-post
description: Generate a long LinkedIn post description from an already published AI Adoption Blueprint article. Use when the user asks for a long LinkedIn post, article summary post, or LinkedIn description that turns an article into a shorter social version.
---

# LinkedIn Long Post

Use this skill to create a long LinkedIn post description from an already published article. The output should read like a shorter, social-native version of the article, not a full repost.

## Required Context

Before generating a post, read:

1. `AGENTS.md`
2. `docs/vision.md`
3. The published article

Read `docs/content-map.md` only when needed to understand the article's pillar, ID, or planned role.

## Output Location

Store generated posts in:

`content/linkedin-long-posts/`

Use one markdown file per post. Keep the directory flat.

Name files to match the source article numbering and name:

- If the article filename starts with a number, preserve it: `02_moving_forward.md` -> `02_moving_forward_linkedin_long.md`.
- If the article has a content-map ID, use it as the prefix: `p1-01_article_slug_linkedin_long.md`.
- If neither exists, use the article slug: `the_fear.md` -> `the_fear_linkedin_long.md`.

Do not overwrite an existing post file unless the user explicitly asks to revise it.

## Generation Standard

Create a long LinkedIn post description that:

- Compresses the article into a clear, shorter social version.
- Uses multiple short paragraphs.
- Opens with a strong, specific first two lines.
- Explains the main concept without requiring the reader to open the article.
- Ends with a practical takeaway, question, or calm call to read the article.
- Stays useful to AI architects, CTOs, engineering leaders, product leaders, or AI practice leaders.
- Preserves the article's direct, candid, professional, humble tone.

Keep it easy to read. Simplicity and effectiveness matter more than cleverness.

## LinkedIn Best Practices

Prefer:

- A concrete hook that names a real tension or mistake.
- Short paragraphs, usually 1-3 sentences each.
- Plain language and strong verbs.
- One clear argument.
- One practical takeaway.
- Specificity from the article.

Avoid:

- Engagement bait.
- Hype-heavy AI claims.
- Generic thought-leadership phrasing.
- Hashtag stuffing.
- Fake personal anecdotes.
- Claims or statistics not present in the article unless separately cited.
- Turning the post into a dense article copy-paste.

## File Shape

Use this markdown structure:

```markdown
# LinkedIn Long Post: Article Title

- Source article: `path/to/article.md`
- Status: draft

## Post Description

[LinkedIn long post text.]

## Notes

- Hook:
- Core argument:
- Practical takeaway:
- Suggested hashtags:
```

Use 1-3 relevant hashtags at most. Hashtags are optional if they do not add value.
