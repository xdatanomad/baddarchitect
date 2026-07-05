# Workflow

Use this workflow to initiate a new project or stabilize an existing one for coding-agent collaboration.

## Table Of Contents

- Intake
- Artifact Audit
- Phase 0: Project Constitution
- Phase 1: Design The System
- Phase 2: Identify Capabilities
- Phase 3: Build The Dependency Graph
- Phase 4: Define Epics
- Phase 5: Define Feature Contracts
- Phase 6: Generate Tasks
- Working With Existing Projects

## Intake

Start by identifying the project mode:

- New project: no meaningful docs or code yet.
- Existing project with weak docs: code exists, agent context is missing.
- Existing project with docs: artifacts exist and need validation or completion.

Ask for the user's preferred project goal, target users, rough product type, and any known constraints. If the user has already provided enough context, proceed with assumptions and mark them clearly.

Do not ask all questions at once. Ask for the minimum information needed to complete the current phase.

## Artifact Audit

Inspect the repository for:

- `AGENTS.md`
- `docs/vision.md`
- `docs/architecture.md`
- `docs/principles.md`
- `docs/glossary.md`
- `docs/roadmap.md`
- `docs/decisions/`
- `docs/capabilities.md`
- `docs/dependency-map.md`
- `docs/epics/`
- `docs/features/`
- `docs/tasks/`

Report:

- Present and usable.
- Present but incomplete or stale.
- Missing.
- Needs user decision before editing.

For an existing `AGENTS.md`, do not edit automatically. If it lacks essential agent operating guidance, explain the missing items and ask for approval before changing it.

## Phase 0: Project Constitution

Goal: create persistent context for future coding agents.

Required artifacts:

- `AGENTS.md`
- `docs/vision.md`
- `docs/architecture.md`
- `docs/principles.md`
- `docs/glossary.md`
- `docs/roadmap.md`
- `docs/decisions/0001-project-initiation.md`

Use templates from `assets/templates/`.

Keep `vision.md` to about one page. It must answer:

- What problem are we solving?
- Who are the users?
- Why does this product exist?
- What does success look like in 12 months?
- What is explicitly out of scope?

Keep `architecture.md` at the system-boundary level. Cover:

- Frontend
- Backend
- Storage
- External systems
- Authentication
- AI components
- Observability
- Deployment

Keep `principles.md` project-specific. Include only principles the user intends future agents to obey. Stack-specific principles are allowed only when a stack is known.

Use `glossary.md` to define domain terms, not generic technical vocabulary.

Use `roadmap.md` as the project source of truth:

- Capability
- Epic
- Status
- Dependencies
- Next steps

Use ADRs for decisions that future agents must not rediscover.

Phase gate:

- A future agent can explain the project without asking the user what it is.
- Out-of-scope items are explicit.
- Stack choices are either decided or recorded as open decisions.
- The root `AGENTS.md` exists or a user-approved update plan exists.

## Phase 1: Design The System

Goal: stabilize architecture before code.

Prompt the agent to analyze:

- Core domains
- Major subsystems
- Risks
- Technical unknowns
- Likely scaling constraints
- Architecture options

Do not write code. Do not scaffold.

Update:

- `docs/architecture.md`
- `docs/decisions/*.md` for major choices
- `docs/glossary.md` for domain vocabulary

Capture unresolved options clearly:

```markdown
## Open Architecture Questions

- Question:
- Why it matters:
- Options:
- Recommended default:
- Decision needed by:
```

Phase gate:

- Major boxes and boundaries are named.
- Ownership of business logic is clear.
- External systems are isolated behind adapters or contracts.
- Data, auth, observability, deployment, and AI components are not hand-waved.
- Known unknowns are recorded.

## Phase 2: Identify Capabilities

Goal: break the system into independent capability slices, not features.

Create or update `docs/capabilities.md`.

A capability is a durable area of system behavior such as:

- Authentication
- User management
- Workspaces
- Billing
- Notifications
- AI agent runtime
- Knowledge base
- Integrations
- Reporting

For each capability, capture:

- Purpose
- Users or actors
- Core responsibilities
- Data owned
- External dependencies
- Risks
- Not included

Phase gate:

- Capabilities are independent enough to plan separately.
- Capabilities are not just UI features.
- Shared data ownership and boundaries are explicit.

## Phase 3: Build The Dependency Graph

Goal: identify sequential and parallel work.

Create or update `docs/dependency-map.md`.

Represent dependencies like:

```text
Authentication
 +-- None

Users
 +-- Authentication

Workspaces
 +-- Users

Knowledge Base
 +-- Workspaces

AI Agent Runtime
 +-- Knowledge Base

Reporting
 +-- AI Agent Runtime
```

Also classify:

- Sequential work: must happen first.
- Parallel work: can happen independently once contracts exist.
- Risk-driven work: should be spiked or decided early.

Phase gate:

- No capability has hidden upstream dependencies.
- Parallel work has contracts or explicit contract tasks.
- Critical-path capabilities are obvious.

## Phase 4: Define Epics

Goal: turn capabilities into meaningful multi-feature work packages.

Create one epic file per important epic in `docs/epics/`.

An epic should:

- Take days or weeks, not minutes.
- Contain multiple features.
- Produce meaningful capability.
- Have domain, API, data, security, testing, and documentation considerations.

Every epic needs three artifacts before implementation:

- Domain model
- API or interface contract
- Acceptance criteria

Phase gate:

- Each epic has a clear capability parent.
- Each epic has concrete acceptance criteria.
- Dependencies and review gates are visible.
- Epics are sized for meaningful delivery.

## Phase 5: Define Feature Contracts

Goal: give coding agents precise behavioral contracts before task generation.

Create feature contract files in `docs/features/`.

Feature contracts are not tickets. They describe externally visible behavior and constraints.

Each feature contract must include:

- Feature name
- Parent capability and epic
- User or actor
- Requirements
- Inputs
- Outputs
- Errors and edge cases
- Data and state changes
- Permissions and security
- Observability
- Acceptance criteria
- Out of scope
- Open questions

Example:

```markdown
# Feature Contract: Document Upload

## Parent

- Capability: Knowledge Base
- Epic: Document Storage

## Requirements

- Upload PDF files.
- Store metadata.
- Version documents.
- Emit a processing event.

## Acceptance Criteria

- PDF uploads successfully.
- Metadata is searchable.
- Version history is preserved.
- Processing event is emitted exactly once.
```

Phase gate:

- Every implementation task traces to a feature contract.
- Inputs, outputs, errors, and acceptance criteria are clear.
- Security and permissions are addressed.
- The contract is stable enough for an agent to implement without inventing product behavior.

## Phase 6: Generate Tasks

Goal: convert feature contracts into agent-sized implementation tasks.

Create task specs in `docs/tasks/`.

Ideal task shape:

```markdown
# Task: Implement User Repository

## Requirements

- CRUD operations.
- Use the selected storage stack.
- Preserve domain invariants.

## Deliverables

- Interface or protocol.
- Implementation.
- Tests.
- Documentation updates.
```

Task categories may include:

- Domain models
- Repository interfaces
- Persistence layer
- Service layer
- API endpoints
- UI components
- Adapter integrations
- Tests
- Documentation

Good task size:

- A few hours of focused work.
- Clear deliverables.
- Clear test expectations.
- No unresolved architectural decisions.

Phase gate:

- Tasks are not too broad, such as "Build user management."
- Tasks are not too tiny, such as "Rename variable x."
- Each task has a contract, dependencies, deliverables, and verification steps.
- The project is ready for code generation only after Phase 6.

## Working With Existing Projects

For existing projects:

- Read existing docs and code structure before drafting.
- Preserve conventions that are clearly intentional.
- Mark mismatches between docs and code.
- Ask before rewriting root `AGENTS.md`.
- Prefer adding missing docs over reorganizing the repository.
- Record major discovered decisions as ADRs.

If the project already has an architecture, do not replace it with the framework. Map the existing architecture into the required artifacts and highlight ambiguity.
