# Project Constitution and Planning for Coding Agents

**SEO title:** Project Constitution and Planning for Coding Agents  
**Description:** A technical guide for turning vague product ideas into architecture, capability maps, feature contracts, and implementation tasks that coding agents can execute reliably.  
**Canonical slug:** `/guides/project-constitution-and-agent-planning`  
**Reader/job:** Hands-on builders using Codex, Claude Code, or other coding agents to plan production software before implementation begins.

**Technical executive summary:** Coding agents work best when they inherit durable project context, not scattered chat history. This guide shows how to move from a vague idea to a project constitution, system design, capabilities, dependency graph, epics, feature contracts, and implementation tasks. The sequence matters because each phase removes a different kind of ambiguity before code is generated. The practical takeaway is to [download and use the Badd Project Planner skill](../../.agents/skills/badd-project-planner/SKILL.md) as the operating loop for this process.

**Core takeaway:** Do not ask a coding agent to build the product until it knows the product's constitution, architecture, capability boundaries, dependencies, and feature contracts.

## What You Will Learn

You will learn how to turn a project idea into artifacts that future agents can inherit. The goal is not to create heavy process. The goal is to prevent agents from guessing product behavior, architecture, permissions, data ownership, or acceptance criteria while they are writing code.

You will also learn the phase order used by the `badd-project-planner` skill:

```text
Intake
Artifact Audit
Phase 0: Project Constitution
Phase 1: System Design
Phase 2: Capabilities
Phase 3: Dependency Graph
Phase 4: Epics
Phase 5: Feature Contracts
Phase 6: Implementation Tasks
```

The most important rule is simple: Phase 5 feature contracts are required before Phase 6 implementation tasks. A task without a contract is usually just a request for the agent to invent missing product decisions.

## Running Example

This guide uses a fictional product called `Maison Verre Concierge`.

Maison Verre is a 38-seat boutique French restaurant. It wants a multi-turn agentic waiter that helps guests explore menus, discuss dietary constraints, request wine pairings, and make or modify reservations.

The agent can recommend, collect information, and prepare actions. It cannot confirm allergy exceptions, billing decisions, unavailable reservation slots, or special kitchen requests without staff approval.

This example is intentionally small but serious. It has real product constraints: safety-sensitive requests, source-of-truth decisions, auditability, staff approval, and external system integration.

## Intake: Establish The Project Mode

Start by identifying the project mode. A new project, an existing project with weak docs, and an existing project with mature docs need different handling.

Ask only the smallest useful set of questions. The planner skill recommends starting with the project goal, target users, product type, and known constraints.

Good intake questions:

```text
What problem should this project solve first?
Who are the primary users or operators?
What is explicitly out of scope?
Which decisions are already made and should not be revisited?
```

For Maison Verre, a useful intake answer might be:

```text
The first problem is reducing routine guest coordination before service.
Primary users are guests, hosts, waitstaff, and managers.
Out of scope: payments, medical advice, replacing staff judgment, and final table assignment.
The agent must never approve safety-sensitive exceptions without staff review.
```

## Artifact Audit: Inspect Before Drafting

Before writing new docs, inspect what already exists. For an existing project, this prevents the agent from replacing intentional architecture with a generic framework.

Check for:

```text
AGENTS.md
docs/vision.md
docs/architecture.md
docs/principles.md
docs/glossary.md
docs/roadmap.md
docs/decisions/
docs/capabilities.md
docs/dependency-map.md
docs/epics/
docs/features/
docs/tasks/
```

Classify each artifact as present and usable, present but stale, missing, or needing a user decision before editing. Do not automatically rewrite an existing root `AGENTS.md`; explain what is missing and get approval first.

## Phase 0: Create The Project Constitution

Phase 0 creates persistent context for future agents. This is where you define what the project is, who it serves, what it will not do, and which rules agents must obey.

Minimum structure:

```text
project/
+-- AGENTS.md
+-- docs/
    +-- vision.md
    +-- architecture.md
    +-- principles.md
    +-- glossary.md
    +-- roadmap.md
    +-- decisions/
        +-- 0001-project-initiation.md
```

Each file has a job. `AGENTS.md` tells agents how to work in the repo. `vision.md` explains the product and non-goals. `architecture.md` names system boundaries. `principles.md` captures project-specific engineering rules. `glossary.md` defines domain terms. `roadmap.md` tracks capabilities, epics, dependencies, status, and next steps.

For Maison Verre, the constitution should make the agent's authority boundary explicit:

```markdown
## Agent Authority

- The agent may recommend menu items, collect guest details, and prepare reservation actions.
- The agent may not approve allergy exceptions, unavailable slots, billing changes, or special kitchen requests.
- Staff approval is required before safety-sensitive notes become operational instructions.
```

Phase 0 gate:

```text
A future agent can explain the project without asking what it is.
Out-of-scope items are explicit.
Stack choices are decided or recorded as open decisions.
AGENTS.md exists or an approved update plan exists.
```

## Phase 1: Design The System

Phase 1 stabilizes the architecture before code. The agent should act like a staff architect, not a scaffolding tool.

Ask it to identify core domains, major subsystems, risks, technical unknowns, likely scaling constraints, and architecture options. Do not write application code in this phase.

For Maison Verre, the core domains might be:

```text
Guest conversation
Reservation availability
Guest profile and preferences
Menu and wine knowledge
Staff review
Audit trail
```

Architecture should cover frontend, backend, storage, external systems, authentication, AI components, observability, and deployment. If an area is not applicable, say so directly instead of leaving it implied.

Phase 1 gate:

```text
Major boxes and boundaries are named.
Business logic ownership is clear.
External systems are isolated behind adapters or contracts.
Data, auth, observability, deployment, and AI components are addressed.
Known unknowns are recorded.
```

## Phase 2: Identify Capabilities

Capabilities are durable areas of system behavior. They are not buttons, screens, or isolated feature requests.

Bad capability:

```text
Add reservation button
```

Better capability:

```text
Reservation Management
```

Create `docs/capabilities.md`. For each capability, capture purpose, users or actors, responsibilities, data owned, external dependencies, risks, and what is not included.

Example:

```markdown
## Capability: Staff Review

- Purpose: Route sensitive or uncertain actions to humans before they affect service.
- Users or actors: Hosts, managers, waitstaff, agent runtime.
- Core responsibilities: Review cases, approval decisions, comments, status changes.
- Data owned: Review case records, approval history, reviewer notes.
- External dependencies: Audit log, guest conversation, reservation management.
- Risks: Unclear approval authority, delayed review, incomplete audit trail.
- Not included: Payment approval, kitchen ticketing, medical advice.
```

Phase 2 gate:

```text
Capabilities are independent enough to plan separately.
Capabilities are not just UI features.
Shared data ownership and boundaries are explicit.
MVP capabilities are separated from later work.
```

## Phase 3: Build The Dependency Graph

The dependency graph turns planning into execution value. It shows what must be built first, what can happen in parallel, and where contracts are needed.

Create `docs/dependency-map.md`. Use a simple text graph before reaching for elaborate diagrams.

Example:

```text
Guest Profile
 +-- None

Menu and Wine Knowledge
 +-- None

Reservation Management
 +-- Guest Profile
 +-- Reservation Provider Adapter

Staff Review
 +-- Guest Conversation
 +-- Reservation Management
 +-- Audit and Observability

Agent Runtime
 +-- Guest Conversation
 +-- Tool Contracts
 +-- Staff Review
 +-- Audit and Observability
```

Then classify the work:

```text
Sequential first:
- Guest profile model
- Reservation provider protocol
- Audit event model

Parallel after contracts:
- Reservation adapter
- Menu knowledge ingestion
- Staff review queue
- Conversation API

Risk-driven early work:
- Source of truth for reservation availability
- Allergy and sensitive-data handling
- Human approval policy
```

Phase 3 gate:

```text
No capability has hidden upstream dependencies.
Parallel work has contracts or explicit contract tasks.
Critical-path capabilities are obvious.
Risk-driven work is visible.
```

## Phase 4: Define Epics

An epic is a meaningful work package inside a capability. It should take days or weeks, contain multiple features, and produce useful system behavior.

Create one epic file per important epic in `docs/epics/`. Each epic should include parent capability, outcome, domain model notes, API or interface contract notes, dependencies, acceptance criteria, and review checklist.

Bad epic:

```text
Implement reservations.
```

Better epic:

```text
Allow the system to check availability, create temporary holds, and request staff-approved changes while preserving the reservation provider as the source of truth.
```

Example epic summary:

```markdown
# Epic: Reservation Holds

## Parent Capability

- Reservation Management

## Outcome

Guests can temporarily hold an available slot while the system collects required details.

## Acceptance Criteria

- The system can query available slots.
- The system can create a time-limited hold.
- Expired holds cannot be confirmed.
- Large parties route to staff review.
- All reservation actions emit audit events.
```

Phase 4 gate:

```text
Each epic has a clear capability parent.
Each epic has concrete acceptance criteria.
Dependencies and review gates are visible.
Domain, API, data, security, testing, and documentation concerns are named.
```

## Phase 5: Write Feature Contracts

Feature contracts are the key handoff between planning and implementation. A feature request says what someone wants; a feature contract defines behavior an agent can implement without inventing product rules.

Each feature contract in `docs/features/` should include:

```text
Feature name
Parent capability and epic
Actor or trigger
Requirements
Inputs
Outputs
Errors and edge cases
Data and state changes
Permissions and security
Observability
Acceptance criteria
Out of scope
Open questions
```

Bad feature request:

```text
Add allergy support.
```

Better feature contract summary:

```text
When a guest mentions an allergy, classify the conversation as safety-sensitive, collect structured allergy details, avoid giving medical certainty, and create a staff review case before any reservation note is confirmed.
```

For Maison Verre, a `Reservation Hold` contract should define the hold duration, provider source of truth, duplicate-hold behavior, large-party review rule, audit events, errors, and tests. The agent should know exactly what it may implement and what it must leave alone.

Phase 5 gate:

```text
Inputs, outputs, errors, and acceptance criteria are clear.
Security and permissions are addressed.
Observability is included.
Out-of-scope behavior is explicit.
The contract is stable enough for implementation.
```

## Phase 6: Generate Implementation Tasks

Only now should you generate implementation tasks. The task list should be derived from feature contracts, not from a vague product idea.

Good task size is a few hours of focused work. Each task should include source feature contract, requirements, dependencies, deliverables, likely files or areas, verification steps, and definition of done.

Good coding-agent task:

```text
Implement ReservationHoldService from docs/features/reservation-hold.md.

Constraints:
- Service layer owns business logic.
- Use ReservationProvider protocol.
- Use AuditSink protocol.
- No API route in this task.
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

Phase 6 gate:

```text
Every task traces to a feature contract.
No task requires unresolved architecture decisions.
Deliverables and verification steps are clear.
The project is ready for code generation.
```

## Review Gate For Every Phase

At the beginning of every major phase, ask the planner skill's inheritance question:

```text
Assume you are inheriting this project six months from now.
What information would you wish existed before implementation begins?
```

Before starting a new epic or implementation phase, review architecture impact, dependency impact, API or interface impact, data model impact, security impact, testing impact, and documentation impact.

For Maison Verre, this review should surface questions like:

```text
Are allergy notes treated as sensitive data?
Can a guest delete remembered preferences?
Which staff roles can approve exceptions?
Is the reservation provider the final source of truth?
What is logged when the model gives a recommendation?
What happens if the model provider is unavailable during a conversation?
```

These are not details. They are the difference between a demo and a system.

## Common Red Flags

Pause when you see broad tasks like `Build the whole app`. That is not a task; it is an ambiguity bundle.

Also pause when architecture is only a stack list, business logic has no owner, external systems have no adapter boundary, or AI components have no evaluation, observability, and human review story.

Security and privacy are not cleanup items. If permissions, sensitive data, or auditability matter, they belong in the constitution, architecture, contracts, and tasks.

## Appendix A: Longer Constitution Example

Use this prompt to create the first planning artifacts:

```text
We are starting a new project called Maison Verre Concierge.

Create only the project constitution and planning docs.
Do not scaffold application code.

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
- docs/architecture.md
- docs/principles.md
- docs/glossary.md
- docs/roadmap.md
- docs/decisions/0001-project-initiation.md

Keep each file concise.
Mark assumptions clearly.
```

Expected `docs/principles.md` excerpt:

```markdown
# Engineering Principles

- Service layer owns business logic.
- API routes stay thin.
- Adapters isolate external systems.
- Domain models should be testable without infrastructure.
- Staff approval is required for safety-sensitive actions.
- Agent decisions must be auditable.
- External model and reservation providers are replaceable adapters.
```

## Appendix B: Longer Feature Contract Example

Use this shape when a feature is ready to become implementation work:

```markdown
# Feature Contract: Reservation Hold

## Parent

- Capability: Reservation Management
- Epic: Reservation Holds

## Actor Or Trigger

- Actor: Guest in an active conversation
- Trigger: Guest asks to reserve an available time

## Requirements

- Create a temporary hold through the reservation provider adapter.
- Treat the reservation provider as the source of truth.
- Expire holds after 10 minutes.
- Route parties larger than 6 to staff review.
- Describe the hold as temporary in guest-facing language.

## Inputs

| Input | Required | Validation |
| --- | --- | --- |
| guest_id | yes | Existing guest or active anonymous session |
| party_size | yes | Positive integer |
| requested_date | yes | Valid service date |
| requested_time | yes | Valid service time |
| conversation_id | yes | Active conversation |

## Outputs

| Output | Notes |
| --- | --- |
| hold_id | Stable hold identifier |
| expires_at | Expiration timestamp |
| reservation_slot | Held slot details |
| message | Guest-facing explanation |

## Errors And Edge Cases

- `slot_unavailable`: return alternatives when available.
- `party_too_large`: create staff review case.
- `provider_timeout`: preserve conversation state and retry safely.
- `duplicate_active_hold`: require explicit guest confirmation before replacing.
- `expired_hold`: reject confirmation and ask the guest to check availability again.

## Audit Events

- `ReservationHoldRequested`
- `ReservationHoldCreated`
- `ReservationHoldRejected`
- `ReservationHoldExpired`

## Acceptance Criteria

- Available slots can be held for 10 minutes.
- Unavailable slots return a clear rejection or alternatives.
- Expired holds cannot be confirmed.
- Large parties create a staff review case.
- Every outcome emits an audit event.

## Out Of Scope

- Real reservation provider integration.
- Payment collection.
- Final table assignment.
- Frontend UI.
```

## Appendix C: Longer Task Example

Once the feature contract passes the Phase 5 gate, generate tasks like this:

```markdown
# Task: Implement Reservation Hold Service

## Source Contract

- `docs/features/reservation-hold.md`

## Goal

Create service-layer behavior for validating, creating, expiring, and auditing reservation holds.

## Requirements

- Enforce party-size rules before creating the hold.
- Use the `ReservationProvider` protocol for availability and hold creation.
- Use the `AuditSink` protocol for audit events.
- Return structured success and failure results.
- Do not implement the API route in this task.

## Deliverables

- Reservation hold service.
- Domain errors or result types.
- Fake reservation provider for tests.
- Unit tests for each acceptance criterion.

## Verification

- Run the relevant unit tests.
- Confirm the service works without a real external provider.
- Confirm no API endpoint owns business logic.
```

## Takeaway: Use The Skill

The fastest way to apply this guide is to use the [Badd Project Planner skill](../../.agents/skills/badd-project-planner/SKILL.md). It encodes the phase order, operating loop, questions, quality gates, examples, and templates.

Use it when starting a new project, preparing an existing repo for coding agents, repairing weak project docs, or turning vague features into agent-sized implementation tasks.

The skill's practical rule is the rule of this guide: do not generate application code during planning. First create the constitution, architecture, capabilities, dependency graph, epics, and feature contracts; then generate implementation tasks.
