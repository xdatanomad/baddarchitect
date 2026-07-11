# Agent Operating Guide

## Project Mission

Build a minimal, high-value website for AI architects and companies adopting AI. The site should work as a practical blueprint from strategy and operating model through production-grade AI systems, agents, security, and governance.

## Audience

- AI architects and solution architects.
- CTOs, engineering leaders, product leaders, and AI practice leaders.
- Mid-market and enterprise teams moving AI from experiments into production.
- Consultants and internal champions who need practical adoption playbooks.

## Editorial Position

Use a direct, candid, professional, and humble voice. Avoid hype, inflated claims, and "AI will solve everything" framing. The site should be practical, skeptical where needed, and useful to serious builders. The site should provide actionable guidance, architecture, strategy grounded on real-world examples and evidence. If feasible and right, always provide an actionable take away; could be a strategy to remember, a short exercise, a checklist to follow, a decision rule to apply, or a solid technical architecture blueprint and tools.

**Core stance:**

- What it takes to deploy real AI applications with ROI.
- AI adoption is a systems problem, not a tooling problem.
- Workflow, data, permissions, evaluation, governance, and operating model matter as much as models.
- Production AI requires reliability, security, observability, evals, human review, and clear ROI.

## Approval Boundaries

- Do not delete existing files or loose content.
- Do not revise the approved project milestones without direct user approval.
- Proposed changes to milestones, strategy, site architecture, or skill inventory should be written after user approval.
- If moving content, preserve the original text in an organized location and leave a clear pointer from the old location when practical.

## Main Project Pillars

READ `content/strategy/project-brief.md`.

**IMPORTANT:** The content will be divided into the following pillars, which will also be reflected in the website structure:
1. AI Adoption Stages & Challenges.
2. AI Adoption Operating Manual.
3. Production AI Engineering Blueprint.
4. AI Security & Governance.

## Current Content Map

- `content/notes/website.md` - early site preamble and framing.
- `content/strategy/` - project metadata, milestones, phases, and architecture planning.
- `content/notes/bottlenecks.md` - major source essay on AI-native bottlenecks. Ideas on the general site content strategy and article topics.
- `content/notes/NOTES.md` - raw milestone, adoption-stage, security, team, and tool notes.
- `content/notes/articles_outline.md` - article backlog and article concepts. A mind draft space for article outlines and ideas.
- `content/articles/...` - sub dirs to hold polished articles. Follows the structure of the website. 

## Suggested Working Flow

1. Read this file.
2. Read `content/strategy/project-brief.md`.
3. Read only the source notes relevant to the task under under `content/strategy/` and `content/notes/`.
5. Preserve source material and separate raw notes from publishable content.
6. Add citations for factual claims that depend on external research.
7. Keep content concise and actionable.

## Content Quality Bar

**IMPORTANT:** Every publishable page should have:

- A clear reader and job-to-be-done.
- A concrete takeaway in the first screen.
- Practical examples, checklists, diagrams, or decision rules where useful.
- Clear separation between opinion, experience, and cited external claims.
- SEO-ready title, description, canonical slug, and internal links.

## Website Quality Bar

The website should be:

- Minimal and fast.
- Static-first where possible.
- Easy to add Markdown or MDX content to.
- Accessible, responsive, and readable on mobile.
- Structured for SEO with clean URLs, metadata, sitemap, schema where useful, and strong internal linking.
- Visually calm, credible, and not overly promotional.

## Website Direction

The likely stack is:

- Next.js or Astro for the main marketing and landing pages.
- Docusaurus or an MDX documentation system for long-form guides.
- Markdown/MDX as the primary content format.
- Static-first deployment on Vercel, Netlify, Cloudflare Pages, or similar.

The final stack decision is not locked yet. See `content/strategy/site-architecture.md`.

## Project Skills

The local project skill inventory lives in `.agents/skills/`.

Pending approval only:
- Additional content, SEO, AI security, or production-agent architecture skills.

## Tone and style

The tone should be:
- Direct and candid, without hype or inflated claims.
- Professional and humble, acknowledging the complexity and challenges of AI adoption.
- Practical and skeptical, providing actionable guidance based on real-world examples and evidence.

For an example of the tone and style, see the article: [Moving Forward](articles/challenges/02_moving_forward.md).
