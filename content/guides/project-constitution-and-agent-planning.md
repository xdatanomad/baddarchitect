# Project Constitution and Planning for Coding Agents

**SEO title:** Project Constitution and Planning for Coding Agents  
**Description:** A concise guide for turning vague product ideas into architecture, capability maps, feature contracts, and implementation tasks that Codex and Claude can execute reliably.  
**Canonical slug:** `/guides/project-constitution-and-agent-planning`  
**Reader/job:** Hands-on builders using coding agents to plan and implement production software without letting ambiguity leak into the codebase.

**Takeaway:** Do not ask a coding agent to build a product before you have taught it the product's constitution, architecture, capabilities, dependencies, and feature contracts.

Coding agents are fast.

That is useful, but it also makes a weak plan fail faster.

The common mistake is to jump straight into epics and features:

```text
Build an AI waiter app for my restaurant.
```

That prompt looks productive. It is not.

It asks the agent to guess the product, the architecture, the data model, the security boundaries, the operational rules, and the acceptance criteria. The agent may still produce code, but the code will carry the ambiguity you failed to remove.

The better approach is to plan by decision layers:

```text
Vision
  ↓
Architecture
  ↓
Capabilities
  ↓
Dependency Graph
  ↓
Epics
  ↓
Feature Contracts
  ↓
Implementation Tasks
```

The goal is not bureaucracy. The goal is to eliminate unknowns in the right order.

## The Running Example

We will use a fictional product:

```text
Maison Verre Concierge
```

Maison Verre is a 38-seat boutique French restaurant. It wants a multi-turn agentic waiter that helps guests explore menus, discuss dietary constraints, request wine pairings, and make or modify reservations.

It also helps staff review risky requests, approve exceptions, see guest preferences, and audit agent decisions.

The agent can recommend, collect information, and prepare actions. It cannot confirm allergy exceptions, billing decisions, unavailable reservation slots, or special kitchen requests without staff approval.

The default technical stack:

```text
Python 3.12
uv
FastAPI
Pydantic v2
PostgreSQL
Redis
pytest
ruff
mypy
Protocol-based interfaces
Services
Adapters
Dependency injection
```

## The Planning Strip

Use this as the mental model:

```text
┌────────────────────┐
│ "Build the app"    │
│ vague feature jump │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Constitution       │
│ durable context    │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Architecture       │
│ major boxes        │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Capabilities       │
│ system slices      │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Dependency Graph   │
│ safe sequencing    │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Epics              │
│ meaningful chunks  │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Feature Contracts  │
│ agent boundaries   │
└─────────┬──────────┘
          ↓
┌────────────────────┐
│ Tasks              │
│ implementation     │
└────────────────────┘
```

Imagine it as a comic strip: the first panel is a builder yelling "build the thing" into a terminal. Each later panel gives the agent one more map: principles, architecture, contracts, tests. By the final panel, the agent is no longer guessing. It is executing inside constraints.

Illustration brief for the final site:

```text
Wide comic-book-style strip with seven panels:

1. A builder types "Build app" into a terminal while messy code spills out.
2. A document labeled "Constitution" anchors the workspace.
3. Architecture boxes are arranged on a wall.
4. Capability cards are sorted into clear groups.
5. Dependency lines connect the cards.
6. A "Feature Contract" checklist defines inputs, outputs, errors, and tests.
7. The coding agent calmly implements small tasks with passing tests.

Style: crisp editorial comic, restrained color, professional technical tone.
Alt text: Comic strip showing a vague coding-agent prompt becoming structured planning artifacts before implementation begins.
```

## Phase 0: Create the Project Constitution

Before scaffolding code, create persistent project context.

Recommended structure:

```text
project/
├── AGENTS.md
├── docs/
│   ├── vision.md
│   ├── architecture.md
│   ├── principles.md
│   ├── glossary.md
│   ├── roadmap.md
│   ├── capabilities.md
│   ├── dependency-map.md
│   ├── epics/
│   │   ├── reservations.md
│   │   ├── guest-profile.md
│   │   └── agent-runtime.md
│   ├── features/
│   │   ├── reservation-hold.md
│   │   ├── allergy-review.md
│   │   └── wine-pairing-request.md
│   └── decisions/
│       ├── 0001-agent-boundaries.md
│       ├── 0002-reservation-source-of-truth.md
│       └── 0003-human-review-policy.md
└── src/
```

What each file does:

```text
AGENTS.md
Rules for coding agents: stack, architecture principles, edit boundaries, test expectations, approval rules.

docs/vision.md
One-page product purpose, users, outcomes, non-goals.

docs/architecture.md
Major system boxes and boundaries. Not implementation detail.

docs/principles.md
Engineering rules that prevent drift.

docs/glossary.md
Shared language: guest, service, hold, allergy review, staff approval, table turn.

docs/roadmap.md
Capability, epic, status, dependencies, next step.

docs/capabilities.md
Independent slices of the system.

docs/dependency-map.md
What must happen first and what can happen in parallel.

docs/epics/
One file per capability area.

docs/features/
Feature contracts ready for coding agents.

docs/decisions/
Short architecture decision records.
```

Prompt:

```text
We are starting a new project called Maison Verre Concierge.

Create the initial project constitution for a Pythonic web application.

The product is a multi-turn agentic waiter for a 38-seat boutique French restaurant.

It helps guests:
- explore menus
- discuss dietary constraints
- request wine pairings
- make or modify reservations

It helps staff:
- review risky requests
- approve exceptions
- see guest preferences
- audit agent decisions

The agent may recommend and prepare actions.
It may not confirm allergy exceptions, unavailable reservations, billing changes, or special kitchen requests without staff approval.

Produce:
- AGENTS.md
- docs/vision.md
- docs/principles.md
- docs/glossary.md
- docs/roadmap.md

Keep each file concise.
Do not scaffold application code.
```

Expected `docs/vision.md` shape:

```markdown
# Vision

## Problem

High-touch restaurants handle guest questions, dietary constraints, wine preferences, and reservation changes through fragmented phone, email, and staff memory.

## Users

- Guests planning a visit.
- Hosts managing reservations.
- Waitstaff preparing for service.
- Managers reviewing exceptions.

## Product

Maison Verre Concierge is a multi-turn agentic waiter that helps guests plan a visit and helps staff review service-sensitive requests.

## Success in 12 Months

- Fewer routine calls handled manually.
- Faster guest response times.
- Cleaner staff handoffs before service.
- Auditable handling of allergy and exception requests.

## Out of Scope

- Replacing staff judgment.
- Taking payments.
- Diagnosing medical or allergy safety.
- Confirming unavailable tables.
```

Expected `docs/principles.md` shape:

```markdown
# Engineering Principles

- Service layer owns business logic.
- API routes stay thin.
- Adapters isolate external systems.
- Protocols define contracts between layers.
- Pydantic v2 models validate inputs and outputs.
- Domain models should be testable without infrastructure.
- Staff approval is required for safety-sensitive actions.
- Agent decisions must be auditable.
- External model and reservation providers are replaceable adapters.
```

Bad prompt:

```text
Create a repo for my restaurant AI agent.
```

Better prompt:

```text
Create only the project constitution and planning docs.
Do not scaffold code.
Make the agent's authority boundaries explicit.
```

## Phase 1: Design the System

Now use the coding agent as a staff architect.

Do not build yet.

Prompt:

```text
Read AGENTS.md and docs/vision.md.

Analyze Maison Verre Concierge as a production system.

Identify:
- core domains
- major subsystems
- external systems
- safety and compliance risks
- technical unknowns
- scaling constraints

Propose 2 architecture options.

For each option, include:
- major boxes
- tradeoffs
- risks
- what should be decided before implementation

Do not write code.
```

Expected output:

```text
Core domains
- Guest conversation
- Reservation availability
- Guest profile and preferences
- Menu and wine knowledge
- Staff review
- Audit trail

Major subsystems
- Web/API interface
- Conversation orchestration service
- Reservation service
- Menu knowledge service
- Staff review queue
- Audit/event log
- Model provider adapter
- Reservation provider adapter

Key risks
- Agent confirms unsafe allergy guidance.
- Reservation source of truth is unclear.
- Guest memory stores sensitive preference data without policy.
- Staff cannot audit why a recommendation was made.

Decision needed
- Is the internal database or reservation provider the source of truth for availability?
```

Architecture should stabilize before code begins. If the agent proposes a framework too quickly, slow it down:

```text
Challenge your own architecture.

Where is it over-designed?
Where is it under-specified?
Which decision would be expensive to reverse after implementation?
```

## Phase 2: Identify Capabilities

Capabilities are independent slices of the system. They are not features.

Bad:

```text
Add reservation button.
```

Better capability:

```text
Reservation Management
```

Prompt:

```text
Based on the stabilized architecture, define the system capabilities.

For each capability, include:
- purpose
- primary users
- owned data
- external dependencies
- examples of features it may later contain

Do not define implementation tasks yet.
```

Expected `docs/capabilities.md`:

```markdown
# Capabilities

## Guest Conversation

- Purpose: Manage multi-turn guest interactions.
- Users: Guests, staff reviewing transcripts.
- Owned data: Conversation sessions, messages, intent state.
- Dependencies: Agent runtime, menu knowledge, reservation management.
- Possible features: Start conversation, continue conversation, summarize handoff.

## Reservation Management

- Purpose: Check availability, create holds, request modifications.
- Users: Guests, hosts.
- Owned data: Reservation requests, temporary holds, reservation status.
- Dependencies: Guest profile, reservation provider adapter.
- Possible features: Create hold, cancel hold, request modification.

## Staff Review

- Purpose: Route sensitive or uncertain actions to humans.
- Users: Hosts, managers, waitstaff.
- Owned data: Review cases, approvals, rejections, comments.
- Dependencies: Audit log, guest conversation, reservations.
- Possible features: Allergy review, exception approval, staff note.

## Menu and Wine Knowledge

- Purpose: Provide current menu, pairing, and policy context.
- Users: Guests, waitstaff, agent runtime.
- Owned data: Menu items, wine inventory references, pairing rules.
- Dependencies: Staff-managed content source.
- Possible features: Menu question answering, pairing request, unavailable item guard.

## Audit and Observability

- Purpose: Record decisions, tool calls, approvals, failures, and costs.
- Users: Managers, engineers.
- Owned data: Events, traces, model calls, approval records.
- Dependencies: All action-producing capabilities.
- Possible features: Conversation audit, tool-call trace, daily risk report.
```

## Phase 3: Build the Dependency Graph

This is where planning starts to create execution value.

Prompt:

```text
Create a capability dependency graph for Maison Verre Concierge.

Separate:
- sequential work
- parallelizable work
- risky dependencies
- contracts needed before parallel implementation

Output as docs/dependency-map.md.
```

Expected output:

```markdown
# Capability Dependency Map

## Graph

Guest Profile
└── None

Menu and Wine Knowledge
└── None

Audit and Observability
└── None for first version

Reservation Management
├── Guest Profile
└── Reservation Provider Adapter

Staff Review
├── Guest Conversation
├── Reservation Management
└── Audit and Observability

Guest Conversation
├── Menu and Wine Knowledge
├── Reservation Management
├── Staff Review
└── Audit and Observability

Agent Runtime
├── Guest Conversation
├── Tool Contracts
├── Staff Review
└── Audit and Observability

## Sequential First

1. Domain glossary.
2. Guest profile model.
3. Menu knowledge model.
4. Reservation provider protocol.
5. Audit event model.

## Parallel After Contracts

- Reservation provider adapter.
- Menu knowledge ingestion.
- Staff review queue.
- Conversation API.
```

The important part is not the diagram. The important part is knowing what can safely happen in parallel.

Parallel agent work without contracts creates merge conflicts in the architecture, not just in Git.

## Phase 4: Define Epics

Each capability can now become one or more epics.

An epic should produce meaningful capability. It is larger than a feature but smaller than "build the product."

Prompt:

```text
Using docs/capabilities.md and docs/dependency-map.md, define epics for the Reservation Management capability.

For each epic, include:
- goal
- included features
- excluded work
- dependencies
- acceptance criteria
- open decisions

Do not generate implementation tasks yet.
```

Expected `docs/epics/reservations.md`:

```markdown
# Epic: Reservation Management

## Goal

Allow the system to check availability, create temporary reservation holds, and request staff-approved reservation changes without making the agent the source of truth for final availability.

## Included Features

- Reservation provider protocol.
- Availability query.
- Temporary reservation hold.
- Hold expiration.
- Staff-approved modification request.

## Excluded Work

- Payment collection.
- Final table assignment optimization.
- Walk-in waitlist management.
- Private dining events.

## Dependencies

- Guest profile model.
- Reservation provider decision record.
- Audit event model.

## Acceptance Criteria

- The system can query available slots.
- The system can create a time-limited hold.
- Expired holds cannot be confirmed.
- Unavailable slots produce a clear rejection.
- Staff can review modification requests.
- All reservation actions emit audit events.

## Open Decisions

- Which reservation system is the source of truth?
- How long should holds last?
- Which changes require staff approval?
```

Bad epic:

```text
Implement reservations.
```

Better epic:

```text
Allow the system to check availability, create temporary holds, and request staff-approved changes while preserving the reservation provider as the source of truth.
```

## Phase 5: Write Feature Contracts, Not Feature Requests

This is the key phase.

A traditional feature request describes what someone wants. A feature contract defines the boundary a coding agent can implement against.

Feature contracts should answer:

```text
What behavior is required?
What inputs are accepted?
What outputs are returned?
What data changes?
What events are emitted?
What errors can occur?
What is out of scope?
What tests prove it works?
```

Bad feature:

```text
Add allergy support.
```

Better feature contract:

```text
When a guest mentions an allergy, classify the conversation as safety-sensitive, collect structured allergy details, avoid giving medical certainty, and create a staff review case before any reservation note is confirmed.
```

Prompt:

```text
Create a feature contract for Reservation Hold.

Context:
- The restaurant has limited seating and service pacing.
- The reservation provider remains the source of truth.
- The agent may create a temporary hold but may not guarantee final seating after expiration.
- Holds expire after 10 minutes.

Include:
- purpose
- user story
- inputs
- outputs
- domain rules
- errors
- audit events
- acceptance criteria
- test cases
- implementation boundaries

Do not write code.
```

Expected `docs/features/reservation-hold.md`:

```markdown
# Feature Contract: Reservation Hold

## Purpose

Create a short-lived reservation hold while a guest confirms details during a conversation.

## User Story

As a guest, I want the concierge to temporarily hold an available reservation slot while I confirm party size, dietary constraints, and contact details.

## Inputs

- guest_id
- party_size
- requested_date
- requested_time
- seating_preference, optional
- conversation_id

## Outputs

Success:
- hold_id
- expires_at
- reservation_slot
- guest-facing confirmation message

Failure:
- error_code
- user-facing explanation
- recovery options

## Domain Rules

- Holds last 10 minutes.
- Holds must be created through the reservation provider adapter.
- Holds must not be created for unavailable slots.
- Holds for parties larger than 6 require staff review.
- The agent must describe the hold as temporary.
- Expired holds cannot be confirmed.

## Errors

- slot_unavailable
- party_too_large
- provider_timeout
- duplicate_active_hold
- invalid_guest_contact

## Audit Events

- ReservationHoldRequested
- ReservationHoldCreated
- ReservationHoldRejected
- ReservationHoldExpired

## Acceptance Criteria

- Available slots can be held for 10 minutes.
- Unavailable slots return alternatives.
- Duplicate active holds are rejected or replaced by explicit user confirmation.
- Party sizes above 6 create a staff review case.
- Every outcome emits an audit event.

## Test Cases

- create hold for available table
- reject unavailable slot
- reject expired hold confirmation
- route large party to staff review
- handle provider timeout without losing conversation state

## Implementation Boundaries

- Implement domain service, repository protocol, provider protocol, and tests.
- Do not implement frontend UI.
- Do not implement real reservation provider integration.
- Use an in-memory fake provider for tests.
```

This is where Codex and Claude become much more effective. They can work inside the contract instead of inventing the contract while coding.

## Phase 6: Generate Implementation Tasks

Only now should you create implementation tasks.

Prompt:

```text
Read:
- AGENTS.md
- docs/principles.md
- docs/features/reservation-hold.md

Break the Reservation Hold feature contract into coding-agent-sized implementation tasks.

Each task must include:
- goal
- files likely touched
- deliverables
- tests
- done criteria

Keep each task small enough for a focused coding agent session.
```

Expected output:

```markdown
# Implementation Tasks: Reservation Hold

## Task 1: Define Reservation Domain Models

- Goal: Add typed domain models for reservation slots, holds, statuses, and errors.
- Likely files: `src/reservations/domain.py`, `tests/reservations/test_domain.py`
- Deliverables: Pydantic models or dataclasses, validation rules, unit tests.
- Done: Invalid party sizes and expired holds are rejected by tests.

## Task 2: Define Provider Protocol

- Goal: Create a protocol for checking availability and creating holds.
- Likely files: `src/reservations/ports.py`, `tests/reservations/test_ports.py`
- Deliverables: `ReservationProvider` protocol and fake test provider.
- Done: Service tests can run without a real external provider.

## Task 3: Implement ReservationHoldService

- Goal: Implement hold creation rules.
- Likely files: `src/reservations/service.py`, `tests/reservations/test_hold_service.py`
- Deliverables: service, errors, audit event calls.
- Done: All acceptance criteria pass through unit tests.

## Task 4: Add API Endpoint

- Goal: Expose hold creation through a thin FastAPI route.
- Likely files: `src/api/routes/reservations.py`, `tests/api/test_reservations.py`
- Deliverables: request/response models, route, tests.
- Done: Route delegates business logic to the service layer.
```

Good coding-agent task:

```text
Implement ReservationHoldService from docs/features/reservation-hold.md.

Constraints:
- Service layer owns business logic.
- Use ReservationProvider protocol.
- Use AuditSink protocol.
- No FastAPI route in this task.
- Include unit tests for each acceptance criterion.
```

Too large:

```text
Build reservation management.
```

Too small:

```text
Rename hold_id to id.
```

The right unit of work is a few hours of bounded implementation with clear tests.

## The Review Gate

Before each epic or feature implementation, ask:

```text
Assume you are inheriting this project six months from now.

Review this feature contract for:
- architecture impact
- dependency impact
- API impact
- data model impact
- security impact
- observability impact
- testing impact
- missing decisions

What would you want clarified before implementation begins?
```

For Maison Verre Concierge, this should surface questions like:

```text
- Are allergy notes treated as sensitive data?
- Can a guest delete remembered preferences?
- Which staff roles can approve exceptions?
- Is the reservation provider the final source of truth?
- What is logged when the model gives a recommendation?
- What happens if the model provider is down during a conversation?
```

These are not details. They are the difference between a demo and a system.

## Appendix: Decision Logs and Context Hygiene

Coding agents need durable memory. Chat history is not enough.

Add a decision log:

```text
docs/decisions/
├── 0001-agent-boundaries.md
├── 0002-reservation-source-of-truth.md
└── 0003-human-review-policy.md
```

Decision record template:

```markdown
# 0001 Agent Boundaries

## Status

Accepted

## Context

The concierge can help guests and staff, but some actions require human judgment.

## Decision

The agent may recommend, collect information, and prepare actions.
The agent may not approve allergy exceptions, unavailable slots, billing changes, or special kitchen requests.

## Consequences

- Staff review is required for sensitive requests.
- Feature contracts must state whether human approval is required.
- Audit events must capture prepared actions and approvals.
```

Add context hygiene rules to `AGENTS.md`:

```markdown
## Documentation Hygiene

- If implementation changes architecture, update `docs/architecture.md`.
- If a new domain term appears, update `docs/glossary.md`.
- If a feature contract changes, update the related file in `docs/features/`.
- If a decision becomes durable, add or update an ADR in `docs/decisions/`.
- If a task changes sequencing, update `docs/dependency-map.md` or `docs/roadmap.md`.
- Do not leave important decisions only in chat.
```

Add a phase-end prompt:

```text
Before we move to the next phase, review the docs changed in this phase.

Identify:
- decisions that should become ADRs
- terms that should be added to the glossary
- architecture assumptions that are not documented
- feature contracts that are missing acceptance criteria
- roadmap or dependency updates needed

Then propose the minimal documentation updates.
Do not edit files until I approve the list.
```

This keeps the repository as the source of truth.

## The Rule

Start every major phase with this question:

```text
Assume you are inheriting this project six months from now.

What information would you wish existed before implementation begins?
```

The answer usually reveals the missing contracts, decisions, and boundaries.

That is the point of the project constitution.

It gives the agent enough context to stop guessing.

And it gives you enough structure to know whether the generated code actually belongs in the system.
