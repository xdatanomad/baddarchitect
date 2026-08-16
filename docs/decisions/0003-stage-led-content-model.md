# 0003: Stage-Led Content Model

Date: 2026-08-11

## Status

Accepted

## Context

The project previously organized its content around four durable disciplines:
adoption challenges, operating manual, production engineering, and security
and governance. Those disciplines remain important, but they describe the
site's expertise more readily than they describe where a reader is in their
adoption journey.

The primary audience is a leader or architect helping people and teams adopt
AI. They need a clearer path from safe individual use to trustworthy
organizational capability. Individual guidance should be an accessible entry
point without turning the project into a generic prompt or tool-list site.

## Decision

The top-level editorial model is now:

- Foundation: Safe Participation.
- Stage 1: Personal Leverage.
- Stage 2: Shared Team Practice.
- Stage 3: Managed Workflows.
- Stage 4: Governed Organizational Capability.

Stages describe the next bottleneck for a specific team or workflow; they are
not a company-wide maturity score. Safety, trust, quality and evaluation,
permissions and context, ownership, observability, ROI, and operating model
are cross-cutting practices taught at the depth appropriate to each stage.

AI authority is a separate continuum:

Advisory → Human-approved → Bounded action → Delegated action.

Higher authority is not an assumed destination. Each workflow stops at the
level justified by risk, reversibility, and business value.

The future content library will use concise stage orientations and focused field
notes, supplemented by detailed implementation guides. Every guide will have
one primary stage and may be cross-listed for stages where it applies. The
project will not create a rigid parent-to-sub-article tree or duplicate guide
content.

## Consequences

- Living project documents and the roadmap use the stage-led model.
- The content map shows the canonical top-level stages but retains all legacy
  article briefs unchanged until a separate article-by-article migration.
- The current Astro website, live content schema, routes, navigation, published
  articles, and URL/archive strategy remain unchanged until a later refactor.
- Decisions 0001 and 0002 remain historical records. This ADR records the
  strategic change without rewriting their context.
- Future content planning must assign one primary narrative stage to each
  field note or guide and may cross-list guides only when it improves discovery.
