# AI Adoption Blueprint

This project is a notes-to-website repository for a practical AI adoption blueprint aimed at AI architects, technical leaders, and companies trying to move AI projects from experiments into production.

The intended website should be minimal, SEO-first, easy to deploy, and easy to maintain. The current repository is in the content and agent-scaffolding stage; no website framework has been initialized yet.

## Goals

- Create a clear operating manual for becoming an AI-native company.
- Explain AI adoption stages, bottlenecks, and organizational design patterns.
- Provide practical production guides for AI agents, workflows, evals, observability, and deployment.
- Define security and governance practices for AI systems, including MCP usage, audit trails, review workflows, and approved patterns.

## Current Structure

- `AGENTS.md` - operating instructions for AI agents working in this repo.
- `.agents/` - local agent assets, skills, checklists, and workflows.
- `content/` - organized canonical working area for notes, articles, strategy, and future site content.
- `content/articles/` - polished articles ready for publication.
- `content/notes/` - raw notes, research, and drafts.

## Project Pillars

READ `content/strategy/project-brief.md` for the project brief and core pillars.

1. AI Adoption Stages & Challenges.
2. AI Adoption Operating Manual.
3. Production AI Engineering Blueprint.
4. AI Security & Governance.

## Milestones

The user-approved milestones are documented in `content/strategy/milestones.md`. Do not revise those milestone definitions without direct approval. Proposed refinements should be added as pending proposals only.

## Website Direction

The likely stack is:

- Next.js or Astro for the main marketing and landing pages.
- Docusaurus or an MDX documentation system for long-form guides.
- Markdown/MDX as the primary content format.
- Static-first deployment on Vercel, Netlify, Cloudflare Pages, or similar.

The final stack decision is not locked yet. See `content/strategy/site-architecture.md`.

## Agent Use

Agents should start with `AGENTS.md`, then read only the relevant files under `content/strategy/` and `content/notes/` for the task. Keep edits scoped, preserve all existing content, and maintain a direct, practical, non-hype tone.
