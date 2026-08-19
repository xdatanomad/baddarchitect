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

## Planned Stage Landing Pages

Each stage will eventually have a concise landing orientation on the website.
It should help a reader recognize the next bottleneck before directing them to
field notes or guides. Every orientation should contain:

1. A short, candid preamble that names the practical challenges a person or
   team is experiencing at that stage. It should describe the tension, not
   present the stage as a maturity score or a generic list of AI benefits.
2. A compact **problem-to-response map** that pairs each material challenge
   with the corresponding practice, decision, or content path. The map is an
   at-a-glance aid; it does not imply that a single practice solves the whole
   problem.

The stage definitions below remain canonical. Preambles and maps translate
them into reader-facing orientation content as each stage is planned.

**Website TODO (not yet implemented):** Add the preamble and problem-to-response
map to every future stage landing page. Do not add stage routes, UI, or website
content until the later website taxonomy and content migration work is approved.

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
method that works. They build a personal library of skills, prompts, and
examples that can be reused and, where appropriate, support supervised personal
flows—with final human review and authority still in the hands of the
individual.

### Planned Landing-Page Preamble and Problem-to-Response Map

Safe Participation gave people permission and usable boundaries to try AI. At
this stage, they have begun to find useful moments of leverage: a better
research brief, a faster first draft, a clearer analysis, or a useful action
prepared in a daily tool. But the result may still depend on an unrecorded
conversation, stale chat memory, a broad integration, or personal judgment
that has not been made visible even to its creator.

> Personal leverage is not “having better prompts.” It is being able to repeat a bounded AI-assisted task, check the result, and remain accountable for every consequential decision or action.

The person needs room to develop a private method. This is not yet a demand to
share prompts, a team standard, or a case for automation. It is a small,
operator-led working system: AI may help collect, analyze, draft, or prepare
work, but the person retains judgment. An event or connected tool may prepare a
review item; it may not execute an unattended consequential action.

| Stage 1 challenge | Why it matters | Response and planned content path |
| --- | --- | --- |
| **Useful chats and hidden context do not become a repeatable personal method** | A prompt that succeeds once can depend on invisible context, an improvised sequence, or a definition of “good” that has never been recorded. A growing prompt hoard makes this worse rather than creating dependable leverage. | **A Prompt Is a Moment. A Personal Practice Is a Method.** introduces the private-by-default Personal Practice Canvas: task, outcome, use and non-use boundary, context, method, examples, verification, known limits, and review point. **Build a Personal AI Playbook That Stays Useful** shows how to maintain the underlying prompts, reusable instruction blocks, skills, and examples. |
| **The person cannot tell whether an output is trustworthy enough for the work** | A fluent answer can conceal unsupported facts, weak analysis, missed constraints, or a decision based on stale context. “Review it carefully” is not a usable method when different work fails in different ways. | **The Review Is Part of the Work.** introduces the downloadable Personal Verification Compact and explains how a Personal Context Pack and Work Log make the relevant sources, constraints, decisions, and open state visible. **Build a Personal Context Pack and Work Log** provides the practical setup. |
| **Skills, integrations, computer actions, and event triggers have more access or authority than the task needs** | A convenient extension can expose sensitive data, make a write in the wrong system, or turn an individual experiment into an unattended workflow without appropriate controls. | **Connect AI With Intent: Skills, Integrations, and Computer Actions.** teaches least privilege, read/write boundaries, deliberate access decisions, and explicit human confirmation. **Use Skills, Integrations, and Computer Actions With a Human in Control** and **Build a Human-Reviewed Event Workflow** provide tactical patterns. |
| **A personal win either stays trapped with one person or is prematurely presented as an automation proposal** | Personal success is valuable evidence, but it does not prove repeatability for others, safe reuse, or a business case for managed operation. Pressuring people to disclose private methods can undermine trust. | **A Personal Win Is a Candidate, Not an Automation Proposal.** introduces a lightweight Candidate Note that can optionally become a Stage 2 Practice Seed, without requiring private prompt history or promising automation. |

### Challenges and Limits

- Prompting alone does not create a dependable workflow.
- Unreviewed outputs, overbroad tool permissions, and untrusted extensions can
  create risk even in personal use.
- Opaque chat memory and uncurated personal knowledge stores are not reliable
  sources of truth for consequential work.
- Value stays local when practices live only in one person's history or
  private configuration.
- Personal success is not evidence that a process is ready for automation.
- An external event may prepare a draft or review item, but it does not justify
  unattended consequential action.

### What We Teach

- Prompting as workflow design: clear inputs, expected outputs, constraints,
  examples, and verification.
- Safe use of skills, integrations, and computer actions; least privilege and
  deliberate access decisions.
- Personal playbooks, context packs, work logs, evidence checks, and ways to
  distinguish assistance from unsupported delegation.
- Methods for making repeatable personal practices with boundaries, reusable
  instruction blocks, appropriate context, and human-curated memory.
- How to identify and share a promising workflow candidate without overselling
  it.

### Signals to Move Forward

Useful practices are repeatable, their limitations are understood, and more
than one person could benefit from a deliberately shared version. The person
can describe the task, required context, verification, authority boundary, and
known limitations without exposing their whole private method. The team can
name which tools and patterns are acceptable to reuse.

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

### Planned Landing-Page Preamble and Problem-to-Response Map

At this stage, AI use is no longer only personal. A few people have found
methods that help, but the methods often live in private chats, personal tool
configuration, or unstated judgment. The team may appear to be using AI in a
common way while actually producing uneven quality, using different context,
and relying on a small number of AI-forward colleagues to rescue others.

The human tension matters as much as the technical one. People may reasonably
guard hard-won methods when they fear that sharing removes an advantage or puts
their role at risk. A team cannot solve that by demanding prompt disclosure or
by holding a public race to demonstrate productivity. It needs a designed,
low-friction space to turn deliberately shared methods into trusted team
practice—while keeping private methods private.

| Stage 2 challenge | Why it matters | Response and planned content path |
| --- | --- | --- |
| **Private recipes and hidden context, while preserving individual privacy** | A method that relies on one person’s private prompt history, personal configuration, or unstated judgment cannot be reused responsibly. Forcing disclosure can damage trust and discourage participation. | **A Shared Practice Is Not a Shared Prompt** teaches the lightweight Team Practice Card: task and outcome, use and non-use boundary, approved tool, required context and prohibited data, reproducible method at an appropriate level, human verification, examples, known failures, steward, version, and review point. A Practice Seed gives unfinished ideas an optional landing space without requiring personal prompt disclosure. |
| **Drift, inconsistent quality, and unsafe reuse of AI methods, tools, or proprietary context** | Multiple people can claim to use the same workflow while relying on different tools, versions, inputs, quality bars, and permission assumptions. A successful result from one person is not proof that the practice is safe or dependable for the team. | **Calibrate Shared Work Before Scaling It** introduces a Team Calibration Card and small calibration clinic. The team tests representative approved cases, records quality and rework, learns failure patterns, and chooses a proportionate boundary: everyday assistance, human-approved shared work, or needs formal design. |
| **AI-forward employees becoming an informal, unaccountable help desk** | The most fluent people can become a hidden support layer. Their judgment is hard to inspect, their availability does not scale, and the team’s real practice remains trapped in their memory. | The Team Practice Card, Calibration Card, and recurring voluntary clinic turn individual knowledge into a visible team asset. AI-forward colleagues contribute practical expertise, but no one person becomes the permanent owner of every answer. |
| **People keeping AI methods to themselves for fear of losing competitive advantage or job safety** | If sharing feels like surrendering hard-won leverage, teams get silent local optimization rather than trusted practice. Mandatory prompt sharing can make the problem worse. | Preserve the distinction between a personal method and a deliberately shared team practice. Invite people to contribute only what is needed for responsible reuse; credit contribution and stewardship; use optional Practice Seeds and calibration participation; never use the process as a productivity ranking or replacement test. |
| **No designed space for knowledge sharing and collaboration** | Useful lessons remain in side conversations, occasional demos, or the memory of the person who learned them. Failures and boundaries are repeated rather than becoming shared knowledge. | Use an optional, recurring **calibration clinic** as the designed knowledge-transfer space. It is not a show-and-tell or performance contest: the team brings one shared practice, compares real outcomes, captures changes on the cards, and leaves the next colleague a clearer starting point. |

### Challenges and Limits

- Several versions of the same workflow can drift with different prompts,
  context, tools, and quality.
- The most AI-fluent people can become an informal, unaccountable support
  layer.
- People may reasonably keep hard-won AI methods private when sharing feels
  like giving away a competitive advantage or making their role less secure.
- Without a designed place to compare practices and preserve learning, useful
  knowledge stays in side conversations and the same failures recur.
- Shared tools do not equal shared standards, ownership, or reliable results.
- A useful team workflow may still lack the data, permissions, or business case
  needed for managed operation.

### What We Teach

- Team skill libraries, approved tool and integration patterns, and lightweight
  versioning.
- Optional calibration clinics, workflow intake, and a path for turning local
  wins into reusable team practices without demanding private-method disclosure.
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
