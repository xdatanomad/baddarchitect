# 0001: Project Initiation

Date: 2026-07-11

## Status

Accepted

## Context

AI Adoption Blueprint is a content and website project for AI architects, technical leaders, and companies moving AI from experiments into production. The project needs to preserve source notes while steadily turning them into practical, publishable guidance.

## Decision

The repository will remain both an editorial workspace and a deployable website project.

- Durable project direction lives in `docs/`.
- Editorial material lives in `content/`.
- Research and evidence maps live in `research/`.
- The deployable website lives in `website/`.
- Agent assets live in `.agents/`.

## Consequences

Future agents should not treat the root as only an Astro app. Website implementation should stay inside `website/`, while content planning, research, and source drafts remain outside the app until intentionally published.
