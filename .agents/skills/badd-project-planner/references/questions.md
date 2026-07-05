# Questions

Use these prompts to gather missing information without overwhelming the user.

## General Rule

Ask only the smallest set of questions needed for the current phase. Prefer 1-3 questions at a time. When a reasonable assumption is safe, state it and continue.

At the beginning of every major phase, ask:

```text
Assume you are inheriting this project six months from now. What information would you wish existed before implementation begins?
```

## Phase 0 Questions

Use these when creating the constitution:

- What problem should this project solve first?
- Who are the primary users or operators?
- What does success look like 12 months after launch?
- What is explicitly out of scope?
- Is this a new product, internal tool, platform, library, automation, or existing repo?
- Are there known constraints: budget, timeline, compliance, stack, hosting, team size, data sensitivity?
- Which decisions are already made and should not be revisited?

## Phase 1 Questions

Use these when designing architecture:

- What are the major system boundaries you already expect?
- Which parts of the system own business rules?
- Which external services, APIs, or data sources must be integrated?
- What data is sensitive, regulated, customer-owned, or business-critical?
- What reliability, auditability, or observability expectations exist?
- Should the system prefer speed of delivery, long-term maintainability, low cost, compliance, or scale?

## Phase 2 Questions

Use these when identifying capabilities:

- What independent outcomes must the system support?
- Which capabilities could be built by separate agents or teams?
- Which capability owns each important data object?
- Which capabilities are core to MVP and which can wait?

## Phase 3 Questions

Use these when building dependencies:

- Which capability must exist before another can work?
- Which dependency is technical, product, data, security, or operational?
- Which work can proceed in parallel if contracts are written first?
- Which dependency creates the most delivery risk?

## Phase 4 Questions

Use these when defining epics:

- What meaningful capability increment should this epic deliver?
- What domain model, API contract, and acceptance criteria are required before implementation?
- What security, data, and testing risks need review before work starts?
- What should be explicitly excluded from this epic?

## Phase 5 Questions

Use these when defining feature contracts:

- Who or what invokes this feature?
- What inputs are accepted?
- What outputs are returned or emitted?
- What errors and edge cases must be handled?
- What data or state changes happen?
- What permissions are required?
- How will success be observed or tested?
- What behavior should an implementation agent not invent?

## Phase 6 Questions

Use these when generating tasks:

- What is the smallest useful implementation slice from this feature contract?
- What dependencies must be completed first?
- What deliverables prove the task is complete?
- What tests or checks should the implementation agent run?
- What files or modules are likely in scope?

## Missing Information Format

When information is missing, use this compact format:

```markdown
## Missing Information

1. Decision needed:
   - Why it matters:
   - Reasonable default:
   - Risk if wrong:

2. Decision needed:
   - Why it matters:
   - Reasonable default:
   - Risk if wrong:
```

If the user does not answer a non-blocking question, proceed with the reasonable default and label it as an assumption.
