# Quality Gates

Use these gates before moving between phases. The goal is not paperwork. The goal is to catch ambiguity before it becomes code.

## Universal Review Gate

Before starting a new epic or implementation phase, review:

- Architecture impact
- Dependency impact
- API or interface impact
- Data model impact
- Security impact
- Testing impact
- Documentation impact

Record major decisions as ADRs.

## Phase 0 Constitution Gate

Proceed only when:

- `AGENTS.md` exists or the user has approved a plan to create/update it.
- `docs/vision.md` states problem, users, purpose, 12-month success, and out of scope.
- `docs/architecture.md` names major system boxes and boundaries.
- `docs/principles.md` gives future agents clear architectural constraints.
- `docs/glossary.md` defines important domain terms.
- `docs/roadmap.md` has the initial capability/epic/status structure.
- `docs/decisions/0001-project-initiation.md` exists.

## Phase 1 Architecture Gate

Proceed only when:

- Core domains are identified.
- Major subsystems are named.
- Risks and technical unknowns are visible.
- Architecture options are either decided or tracked.
- Auth, data, observability, deployment, and external systems are addressed.
- AI components are addressed if applicable, or marked not applicable.

## Phase 2 Capability Gate

Proceed only when:

- Capabilities are independent slices, not single UI features.
- Each capability has purpose, responsibilities, data ownership, dependencies, and exclusions.
- MVP capabilities are separated from later capabilities.

## Phase 3 Dependency Gate

Proceed only when:

- Every capability has dependency information.
- Sequential work and parallel work are clear.
- Contract-first parallel work has explicit contract tasks.
- Risk-driven work is visible.

## Phase 4 Epic Gate

Proceed only when each epic has:

- Parent capability.
- Outcome.
- Domain model notes.
- API or interface contract notes.
- Acceptance criteria.
- Dependencies.
- Review checklist.

## Phase 5 Feature Contract Gate

Proceed only when each feature contract has:

- Parent capability and epic.
- Actor or trigger.
- Requirements.
- Inputs and outputs.
- Errors and edge cases.
- Data and state changes.
- Permissions and security.
- Observability.
- Acceptance criteria.
- Out of scope.
- Open questions.

Do not generate implementation tasks for a feature until this gate is passed.

## Phase 6 Task Gate

Proceed to code only when each task has:

- Source feature contract.
- Requirements.
- Dependencies.
- Deliverables.
- Files or areas likely in scope.
- Verification steps.
- Definition of done.

Good task size is a few hours of focused work. Split tasks that require broad product decisions or multiple unrelated subsystems.

## Red Flags

Pause and ask the user to decide when you see:

- "Build the whole app" style tasks.
- Feature requests without actors, inputs, outputs, or acceptance criteria.
- Architecture described only as a stack list.
- Business logic with no clear owner.
- External systems with no adapter boundary.
- AI components with no evaluation, observability, or human review story.
- Security, privacy, or permissions treated as later cleanup.
