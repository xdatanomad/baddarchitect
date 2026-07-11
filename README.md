# AI Adoption Blueprint

This project is a notes-to-website repository for a practical AI adoption blueprint aimed at AI architects, technical leaders, and companies trying to move AI projects from experiments into production.

The website is a static-first Astro app under `website/`. The broader repository remains the source workspace for strategy, research, editorial drafts, social derivatives, and agent scaffolding.

## Goals

- Create a clear operating manual for becoming an AI-native company.
- Explain AI adoption stages, bottlenecks, and organizational design patterns.
- Provide practical production guides for AI agents, workflows, evals, observability, and deployment.
- Define security and governance practices for AI systems, including MCP usage, audit trails, review workflows, and approved patterns.

## Current Structure

- `AGENTS.md` - operating instructions for AI agents working in this repo.
- `.agents/` - local agent assets, skills, checklists, and workflows.
- `docs/` - durable project direction, roadmap, architecture, decisions, and operating workflows.
- `content/` - editorial workspace for notes, drafts, ready-to-publish source content, social derivatives, and content assets.
- `content/notes/` - raw notes, research prompts, and rough source material.
- `content/ready/` - polished source drafts ready to adapt into website MDX.
- `research/` - evidence, learning notes, market maps, and source tracking.
- `website/` - deployable Astro website and live MDX content.

## Project Pillars

READ `docs/vision.md` for the project brief and core pillars.

1. AI Adoption Stages & Challenges.
2. AI Adoption Operating Manual.
3. Production AI Engineering Blueprint.
4. AI Security & Governance.

## Milestones

The user-approved milestones are documented in `docs/roadmap.md`. Do not revise those milestone definitions without direct approval. Proposed refinements should be added as pending proposals only.

## Website Direction

The current MVP stack is Astro, TypeScript, MDX, Astro content collections, and static deployment to Cloudflare Pages. See `docs/architecture.md` and `docs/decisions/0002-astro-static-site.md`.

## Agent Use

Agents should start with `AGENTS.md`, then read `docs/vision.md` and only the relevant files under `docs/`, `content/`, `research/`, or `website/` for the task. Keep edits scoped, preserve all existing content, and maintain a direct, practical, non-hype tone.
