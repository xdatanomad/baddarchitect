# Adoption Stages

## Purpose

This is the canonical adoption model for AI Adoption Blueprint. It gives
leaders and architects a practical way to help people turn useful AI habits
into trusted organizational capability.

The model is a guide to the next bottleneck, not a certification or a
company-wide maturity score. A company can have a well-managed engineering
workflow and still be at personal leverage in another function. Assess the
specific workflow or team in front of you.

## Reader and Content Model

The primary reader is a leader, architect, or internal champion helping a
group progress. Individual practitioners are a vital entry audience because
their practical use reveals the first opportunities and risks.

Each full stage will eventually have:

- One concise orientation page that explains the stage, its bottleneck, and
  useful next investments.
- Three to five field notes that each address one decision, practice, or
  perspective.
- Deeper implementation guides when a task needs technical detail.

Guides are cross-cutting. Each future guide has one primary narrative stage and
can be discovered from other stages where it applies. Do not copy a guide into
multiple stages or create a rigid parent-to-sub-article tree.

## Foundation: Safe Participation

### Situation

People have uneven confidence, legitimate concerns about job impact and
quality, and uncertainty about which tools and data uses are acceptable.
Experiments will happen somewhere; unclear or punitive rules push them out of
view.

### What Changes

Leaders make it safe to learn, question, test, share useful practices, and
raise risks. The organization provides usable starting boundaries instead of
asking people to infer them from vague policy.

### Challenges and Limits

- Fear, skepticism, and unequal access can turn adoption into a culture divide.
- Addressing the main fear we all have—losing or changing our jobs—is a challenging conversation that requires acknowledgment, empathy, and clarity, as well as reskilling and redeployment.
- A permissive message without data and tool boundaries can create shadow use.
- Participation does not make a workflow trustworthy or ready to automate.

### What We Teach

- A compact participation agreement: what AI is for, what it is not for, and
  how concerns are raised.
- Basic data handling, trusted-tool selection, permission awareness, and
  verification habits.
- Small learning exercises, office hours, show-and-tells, and ways to include
  skeptics and middle adopters in the design.

### Signals to Move Forward

People know where they may experiment, how to ask for help, and how to report a
risk. Useful individual practices are beginning to emerge and can be shared
without turning every experiment into an organizational project.

### Next Bottleneck

People need repeatable personal leverage, not another general awareness
session.

## Stage 1: Personal Leverage

### Situation

An individual uses AI manually to improve their own work. They may use prompts,
skills, approved integrations, computer actions, or AI features embedded in
their daily tools. The person still interprets the result and performs or
confirms consequential actions.

### What Changes

Use shifts from isolated chats to repeatable personal practices. The individual
learns when AI is useful, where it needs verification, and how to capture a
method that works. And to build a personal library of skills, prompts, and examples 
that can be reused, shared, and pseudo automated — with final human review and authority
still in hands of the individual.

### Challenges and Limits

- Prompting alone does not create a dependable workflow.
- Unreviewed outputs, overbroad tool permissions, and untrusted extensions can
  create risk even in personal use.
- Value stays local when practices live only in one person's history or
  private configuration.
- Personal success is not evidence that a process is ready for automation.

### What We Teach

- Prompting as workflow design: clear inputs, expected outputs, constraints,
  examples, and verification.
- Safe use of skills, integrations, and computer actions; least privilege and
  deliberate access decisions.
- Personal playbooks, evidence checks, and ways to distinguish assistance from
  unsupported delegation.
- Methods for making repeatable personal practices with boundaries and advanced
  prompting techniques (memory, context, ...).
- How to identify and share a promising workflow candidate without overselling
  it.

### Signals to Move Forward

Useful practices are repeatable, their limitations are understood, and more
than one person could benefit from a shared version. The team can name which
tools and patterns are acceptable to reuse.

### Next Bottleneck

Turn individual discovery into a shared practice without creating uncontrolled
tool sprawl.

## Stage 2: Shared Team Practice

### Situation

A team begins to share reusable skills, approved integrations, examples, and
semi-structured workflows. Some teams also use AI features in collaboration,
project-management, meeting, and code-review tools.

### What Changes

The team moves from private recipes to common ways of working. It can compare
results, learn from failures, and choose the workflows worth investing in.

### Challenges and Limits

- Several versions of the same workflow can drift with different prompts,
  context, tools, and quality.
- The most AI-fluent people can become an informal, unaccountable support
  layer.
- Shared tools do not equal shared standards, ownership, or reliable results.
- A useful team workflow may still lack the data, permissions, or business case
  needed for managed operation.

### What We Teach

- Team skill libraries, approved tool and integration patterns, and lightweight
  versioning.
- Show-and-tells, workflow intake, and a path for turning local wins into
  reusable team practices.
- Lightweight risk tiers and a clear distinction between everyday assistance
  and workflows that need formal design.
- Selecting workflow candidates using repeatability, value, data readiness,
  failure cost, ownership, and measurable outcome.

### Signals to Move Forward

The team can name a high-value, bounded workflow; its owner, users, trigger,
systems touched, and expected outcome are clear. The team is ready to invest in
design and operational responsibility rather than adding another shared prompt.

### Next Bottleneck

Make the chosen workflow dependable enough to use repeatedly in real work.

## Stage 3: Managed Workflows

### Situation

A team deliberately operates an AI-enabled workflow that matters to its work.
The workflow has a defined boundary and may be human-approved or perform
bounded internal actions, but it is not an unowned experiment.

### What Changes

The team treats the workflow as an operational service: it has an owner,
documented scope, systems context, review design, failure handling, and an
outcome it is expected to improve.

### Challenges and Limits

- A strong demo can still fail on state, exceptions, permissions, integration,
  retries, or handoffs.
- Quality checks need realistic cases and feedback from the people affected by
  the work.
- Monitoring, maintenance, and human review carry a real cost that can erase
  the apparent productivity gain.
- One team can create a sound workflow without yet supplying reusable
  organizational infrastructure.

### What We Teach

- A workflow card covering trigger, owner, users, systems, context,
  permissions, human review, failures, rollback, and business outcome.
- Quality checks and evaluation proportional to exposure; baseline measures
  before investment and operational metrics after launch.
- Human-in-the-loop design, escalation, bounded retries, logging, review
  cadence, and retirement criteria.
- Practical patterns for narrow internal agents, governed context, and
  implementation choices that preserve control.

### Signals to Move Forward

The workflow has repeatable evidence of value, known operating costs, an owner,
and controls that support trust. Other teams now need the same patterns,
context, or integration capability.

### Next Bottleneck

Turn isolated managed workflows into reusable organizational capability without
centralizing everything into a slow approval process.

## Stage 4: Governed Organizational Capability

### Situation

Multiple teams rely on AI practices or workflows. The organization provides
shared ways to access trusted context, select and govern tools, maintain
workflows, and connect AI investment to business outcomes.

### What Changes

AI becomes an operating capability rather than a collection of local
experiments. An AI Acceleration Team or comparable enabling function helps
teams reuse patterns, improve controls, and learn across workflows.

### Challenges and Limits

- Company-wide policies can become an abstraction layer that blocks useful
  work if they ignore workflow-specific needs.
- A governed data context layer must remain fresh, permission-aware,
  explainable, and owned; a document index alone is not institutional memory.
- Stronger controls, evaluation, observability, and human review add cost and
  must be justified by consequences and value.
- Mature organizations still need to retire low-value workflows and resist
  using autonomy as a status signal.

### What We Teach

- AI Acceleration Team charters, workflow portfolio management, and clear
  ownership for reusable practices and operational workflows.
- Governed, identity-aware context and integrations, including custom services
  only when they solve a concrete access or workflow problem.
- Policies, auditability, observability, incident response, and review paths
  that enable teams rather than impose a blanket gate.
- Evaluation suites, business metrics, cost per completed workflow, and ROI
  decisions tied to business outcomes.
- Responsible-AI practices such as bias, ethics, customer impact, and clear
  human escalation where the workflow warrants them.
- A clear toolset for automated workflows, human-approved workflows, and bounded 
  internal actions, with a path to delegated action only when the workflow meets 
  its higher bar.

### Signals of Ongoing Health

Teams can reuse trusted patterns without bypassing controls. Each meaningful
workflow has clear ownership, a measured outcome, and a proportionate authority
level. The organization can learn from failures, change policies quickly, and
stop or redesign workflows that do not earn their operating cost.

### Next Bottleneck

Continual adaptation: tools, models, workflows, controls, and organizational
design will keep changing. There is no final state in which governance and
maintenance disappear.

## Cross-Cutting Practices

These practices belong throughout the journey. The implementation becomes more
rigorous as a workflow gains users, data access, integration depth, and
authority.

- **Safety and participation:** clear boundaries, psychologically safe
  escalation, and accessible approved paths.
- **Trust and quality:** verification at first, then repeatable quality checks,
  evaluation, and monitoring where consequences warrant them.
- **Permissions and context:** minimal personal access first; then
  permission-aware, fresh, attributable organizational context.
- **Ownership and operations:** personal responsibility first; then named
  workflow owners, operating review, maintenance, and retirement.
- **Value and operating model:** individual usefulness first; then workflow
  baselines, business outcomes, cost, portfolio choices, and organizational
  enablement.

## Authority Continuum

Authority is separate from stage maturity. It describes what an AI-enabled
workflow is allowed to do, and each workflow should stop at the level justified
by its risk, reversibility, and value.

| Level | Meaning | Minimum expectation |
| --- | --- | --- |
| Advisory | AI analyzes, explains, or drafts; a person decides and performs the action. | Verification by the person using the result. |
| Human-approved | AI prepares a recommendation or proposed change; a named person reviews and authorizes consequential action. | Clear review point and accountability for the approver. |
| Bounded action | AI performs narrowly scoped internal actions with limited permissions, known constraints, and a way to detect or reverse failures. | Defined action boundary, logs, exception handling, and proportionate checks. |
| Delegated action | AI acts in an externally visible or materially consequential workflow within an approved policy and ongoing oversight. | Strong evaluation, permissions, monitoring, escalation, auditability, and review. |

Foundation and Personal Leverage usually remain Advisory. Shared Team Practice
usually uses Advisory or Human-approved patterns. Managed Workflows may justify
Human-approved or Bounded action. Governed Organizational Capability supports
any level, including Delegated action only when the workflow meets its higher
bar.

## Boundaries

- Do not treat custom MCP servers, RAG, or any other implementation technique
  as a maturity outcome by itself. The outcome is trustworthy, observable,
  permission-aware access to the right context and actions.
- Do not treat a successful personal practice as proof that an organization
  should automate it.
- Do not treat delegated action as the destination. A well-designed
  Human-approved workflow can be the correct long-term design.
