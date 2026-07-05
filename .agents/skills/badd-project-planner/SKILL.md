---
name: badd-project-planner
description: Initiate a new or existing software project for effective coding-agent collaboration by iteratively creating or improving an agent-ready project constitution, architecture, principles, glossary, roadmap, ADRs, capability map, dependency graph, epics, feature contracts, and implementation tasks. Use when the user asks to start, plan, initialize, rescue, clarify, or make a project ready for Codex, Claude Code, or other coding agents before implementation. Do not use for ordinary feature implementation, bug fixing, code review, or project management updates unless the user is explicitly revisiting project initiation, architecture, contracts, or planning artifacts.
---

# Badd Project Planner

Use this skill to turn a vague project into durable planning artifacts that future coding agents can inherit. Work iteratively with the user; do not rush into scaffolding or implementation.

## Reference Map

- `references/workflow.md`: required workflow for Phase 0 through Phase 6.
- `references/questions.md`: discovery prompts and missing-information prompts.
- `references/quality-gates.md`: phase review gates and readiness checks.
- `references/examples.md`: stack-agnostic examples for capabilities, dependencies, feature contracts, and tasks.
- `assets/templates/`: copy or adapt these templates when creating project artifacts.

Read `references/workflow.md` before initiating a project. Read the other references when the current phase needs them.

## When To Use

Use this skill when the user wants to:

- Start a new project with coding agents.
- Prepare an existing project for Codex, Claude Code, or another agent.
- Create or repair `AGENTS.md` and project planning docs.
- Define project vision, architecture, principles, glossary, roadmap, ADRs, capabilities, dependency maps, epics, feature contracts, or task specs.
- Move from ambiguous feature ideas to agent-sized implementation tasks.

## When Not To Use

Do not use this skill when the user only wants:

- A single feature implemented.
- A bug fixed.
- A code review.
- A tactical refactor.
- A generic backlog update that does not revisit architecture, contracts, or project constitution.

## Required Constitution

Ensure the project has this minimum structure:

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

Also create phase artifacts as needed:

```text
docs/
+-- capabilities.md
+-- dependency-map.md
+-- epics/
    +-- <capability>-<epic>.md
+-- features/
    +-- <feature-contract>.md
+-- tasks/
    +-- <task-spec>.md
```

## Hard Rules

- Do not generate application code during Phases 0 through 6.
- Do not scaffold a framework unless the user explicitly exits planning and asks for implementation.
- Create `AGENTS.md` only if missing.
- Edit an existing root `AGENTS.md` only after telling the user what essential information is missing and getting explicit approval.
- Keep stack choices agnostic unless the user provides a stack or approves an option.
- Mark assumptions clearly as `Assumption:` and record durable decisions as ADRs.
- Preserve existing project material. If moving content, keep a pointer to the original location when practical.
- Ask focused questions when facts are missing; do not ask the user to answer the entire framework at once.

## Operating Loop

1. Inspect existing artifacts and summarize what exists, what is stale, and what is missing.
2. Ask only the next useful questions for the current phase.
3. Draft or update the relevant artifact.
4. Surface assumptions and open decisions.
5. Run the phase quality gate.
6. Ask whether to refine, decide, or proceed to the next phase.

At the beginning of every major phase, ask:

```text
Assume you are inheriting this project six months from now. What information would you wish existed before implementation begins?
```

## Phase Order

Follow the phases in order unless the user explicitly chooses a different starting point:

0. Project Constitution
1. System Design
2. Capabilities
3. Dependency Graph
4. Epics
5. Feature Contracts
6. Implementation Tasks

Phase 5 feature contracts are mandatory before Phase 6 task generation.

## Output Style

Be direct, concrete, and skeptical. Prefer small artifacts that future agents can actually use over elaborate documents no one will maintain. Every phase should reduce architectural ambiguity.
