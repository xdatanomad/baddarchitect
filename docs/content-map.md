# Content Map

This file holds the planned content map for the site. It is not a draft backlog, article workspace, or loose idea dump.

## Planning Rules

- Keep the map short and focused on high-value content.
- Add planned content only when it has a clear reader, job-to-be-done, goal, and practical takeaway.
- Prefer decision rules, checklists, blueprints, operating models, and implementation paths over broad commentary.
- Challenge ideas that are generic, hype-driven, too broad, or not yet tied to the project quality bar.

## Planned Content Entry Shape

Use this shape for each planned content entry:

```markdown
### p1-01 Title

- Reader/job:
- Goal:
- Outline:
  - 
  - 
  - 
- Source notes:
- Additional notes:
- Status: planned | candidate | challenged
```

## Foundation: Safe Participation

The canonical foundation and stage definitions live in adoption-stages.md.
Detailed content mapping is intentionally deferred to the next planning step.

## Stage 1: Personal Leverage

Field-note and guide assignments will be defined article-by-article.

## Stage 2: Shared Team Practice

### A Shared Practice Is Not a Shared Prompt

- Reader/job: Team leads, architects, managers, and experienced practitioners who need to turn useful individual AI methods into practices colleagues can reuse without exposing private methods, copying unsafe assumptions, or creating a permanent dependence on the most AI-fluent people.
- Goal: Help a team make a responsible reuse promise: share enough task context, boundaries, verification, and ownership for a colleague to use a practice safely, while respecting that people may reasonably retain private prompts, methods, and competitive advantage.
- Core argument: A shared prompt shares text. A shared practice shares the conditions that make a useful result repeatable and safe. If a method depends on one person’s private chat history, unstated judgment, or willingness to help, it is not yet a team practice.
- Detailed outline:
  - Open with the hidden-context problem: five people can claim to use the same AI workflow while using different tools, context, proprietary data, verification standards, and definitions of quality. The strongest practitioner becomes the informal help desk, while others either copy fragments unsafely or do not participate.
  - Make the distinction explicit: a prompt library is insufficient. It does not reveal when a practice applies, which information is safe, what a good result looks like, who verifies it, or what happens when it fails. Do not ask people to expose their personal prompt history or hard-won private method merely to prove participation.
  - Introduce the **Team Practice Card** as a deliberately shared, reusable team artifact rather than a policy document or a production runbook. It may live as a physical wall card or a simple digital-board card so the team can see, discuss, and improve the practice in its normal work.
  - Define the Team Practice Card canvas. Each card should make visible:
    - the recurring team task, intended user, expected outcome, when the practice applies, and when it does not;
    - the approved tool, skill, or integration and the version or configuration being relied on;
    - the context and data class required, including what must not be entered or shared;
    - a reproducible method at the level needed for responsible reuse—without requiring the contributor to disclose every private prompt or method;
    - one or two approved examples, the required human verification, known failure modes, and an explicit boundary on consequential actions;
    - the current status, such as draft, team trial, shared practice, changed, or retired;
    - a steward, version, update/review point, and links to supporting material where useful.
  - Explain that the creator may be the steward, but is not required to be. Encourage colleagues with different perspectives—such as an AI-forward practitioner, a skeptical or quality-minded peer, and the responsible manager—to contribute to the card when useful. At this stage, this is collaboration rather than a formal sign-off gate.
  - Explain why those perspectives matter: the team can see that a useful method was not imposed by enthusiasts, blocked by skeptics, or blessed by management without practical testing. This distributes ownership, gives people a trusted reason to consult one another, and turns objections into improvements.
  - Briefly introduce a **Practice Seed** as an optional, low-friction landing space for an unfinished idea that needs help to become shareable. A seed may state the task, possible value, known boundary, and question for the team; it is not a second workflow, a mandatory prompt submission, or a promise to produce a full card. Keep the article’s emphasis on the Team Practice Card.
  - Close with a clear boundary: creating the card does not prove that the practice is consistent, safe to scale, or ready for automation. The next article’s calibration loop tests it; the later promotion gate decides whether it deserves managed-workflow investment.
- Practical takeaway: A **Team Practice Card canvas** that teams can place on a wall or digital board. The card’s visible fields—task and expected outcome, use and non-use boundary, tool, context and data boundary, method, examples, verification, known failures, status, steward, version, and review point—make the practice tangible and invite responsible reuse.
- Decision rule: A method becomes a shared team practice only when a colleague can understand when to use it, use approved inputs and tools, verify the result, recognize known limits, and find a named person responsible for keeping the card current. Otherwise it remains personal leverage or a Practice Seed.
- Source notes: `docs/adoption-stages.md` Stage 1 signals and Stage 2 situation, challenges, teaching points, and transition signal; `docs/roadmap.md` Stage 2 milestone and carry-forward commitments; `docs/principles.md` editorial and adoption-stage principles; prior Foundation discussion on optional problem-led learning and privacy of personal methods.
- Additional notes: Do not impose a formal signature gate on a low-risk Team Practice Card. The third article’s promotion gate will introduce the stronger, multi-person confidence and sign-off requirement for practices seeking greater investment or exposure.
- Status: planned

### Calibrate Shared Work Before Scaling It

- Reader/job: Team leads, practitioners, architects, and managers deciding whether a Team Practice Card is reliable enough for colleagues to reuse, and whether its current authority and data boundary remain appropriate.
- Goal: Give teams a low-friction, psychologically safe way to test a shared practice on representative work, compare outcomes and verification burden, learn from failures, and set a proportionate use boundary before the practice spreads.
- Core argument: A practice that worked once for its creator is an anecdote. A practice that another person can use on representative work, with approved context and visible limits, is beginning to earn team trust. Calibration is how the team makes that distinction without building a formal evaluation platform.
- Detailed outline:
  - Open with the false sense of safety created by a completed Team Practice Card. The card may be clear, but its author still carries hidden judgment about context, quality, tool behavior, and exceptions. Reuse exposes the gap between a documented method and a dependable shared practice.
  - Define **team calibration** as a small, repeatable learning loop, not a public performance contest, a generic show-and-tell, a technical benchmark, or an advanced production-evaluation suite. Its purpose is to improve the practice and its boundary—not to rank people, prove that AI is always useful, or identify low performers.
  - Establish the trust conditions for the loop: participants use only approved tools and appropriate test material; findings are attached to the practice, not used to judge the contributor; contributors need not disclose private prompt history; and a failed result is useful evidence, not embarrassment.
  - Position the calibration clinic as a **designed space for knowledge transfer**. It gives the team a recurring, optional place to bring a shared practice, learn the reasoning behind its boundaries, compare real outcomes, and preserve what was learned on the two cards. The aim is not to force people to disclose private methods; it is to make the deliberately shared practice less dependent on memory, informal chat, or access to one AI-forward colleague.
  - Introduce a **Team Calibration Card** as the companion canvas to the Team Practice Card. It can be a physical card placed beside the practice or a linked digital-board card. It records:
    - the Team Practice Card and version being tested, its intended task, and its current use boundary;
    - two to five representative, approved cases: a normal case, a common variation, and where relevant an ambiguous or edge case;
    - the minimum acceptable outcome and review questions before the test begins, including what a human must verify;
    - the people taking part and their perspectives, such as a task practitioner, an AI-forward colleague, and a skeptical or quality-minded peer; the creator may participate but should not need to coach every attempt;
    - observed output quality, correction or rework required, missing context, tool/integration behavior, and any data or permission concern;
    - the updated known-failure list, changes required to the Team Practice Card, and the decision reached.
  - Walk through a lightweight calibration clinic:
    1. Choose one Team Practice Card in team-trial status and state the specific claim being tested, such as “a teammate can draft a complete internal brief from an approved source pack and verify it in ten minutes.”
    2. Agree the small case set and the minimum acceptable outcome. Use representative work, but sanitize, mask, or replace sensitive content when the practice does not have permission to use it.
    3. Have a colleague use the card with the approved tool and context. The creator may clarify the documented card, but should not supply hidden steps that a future user would not have.
    4. Compare the outcome and the human effort required. Ask where the practice helped, where it created cleanup, where it failed, and whether the reviewer could recognize the failure before it mattered.
    5. Update the practice, narrow its scope, add examples or warnings, or stop using it. Capture the decision on the Calibration Card rather than relying on meeting memory.
  - Introduce proportionate **use boundaries** as the calibration decision:
    - **Everyday assistance:** a person uses an approved practice for advisory drafting, analysis, or learning and verifies the result.
    - **Human-approved shared work:** AI prepares a shared or consequential result, but a named person reviews and authorizes it before use.
    - **Needs formal design:** the practice touches sensitive/proprietary context beyond the agreed boundary, systems of record, recurring automation, or has material failure cost. It should not spread informally; it becomes a candidate for the promotion gate.
  - Make clear that a boundary is not a quality score. A practice may be useful and still stay at everyday assistance indefinitely. Higher authority is not the prize; the smallest safe authority is usually the right choice.
  - Explain how calibration prevents the AI-forward help-desk problem. The visible cards and repeatable clinic create a deliberate path for knowledge transfer: understanding moves from one person’s memory to a team asset, and each session leaves the next colleague a clearer starting point. The skeptical colleague has a defined constructive role: pressure-test the conditions, not veto progress.
  - Close with the next boundary: calibration can show that a practice is reusable, limited, or not worth keeping. Only a small subset should proceed to Article 3’s promotion gate; a good calibration result is not automatic approval for investment, integration, or automation.
- Practical takeaway: A **Team Calibration Card** that teams can display beside the Team Practice Card. Used in an optional, recurring calibration clinic, it records the practice version, representative cases, quality bar, participant perspectives, verification/rework findings, failure patterns, revised use boundary, and decision: revise, share with limits, stop, or consider for promotion. Together, the cards preserve the team’s deliberately shared knowledge between sessions.
- Decision rule: Do not call a method a reusable team practice until someone other than its creator can apply the documented card to representative approved work, identify its limits, and complete the required human verification. If the task needs hidden expertise, prohibited data, unbounded permissions, or disproportionate cleanup, revise or narrow the practice instead of scaling it.
- Source notes: `docs/adoption-stages.md` Stage 2 situation, challenges, teaching points, authority continuum, and transition signal; `docs/roadmap.md` Stage 2 milestone and cross-cutting control commitments; `docs/principles.md` principles on trust, quality, permissions, ownership, and proportionate authority; prior Foundation and Stage 2 discussions on optional learning, privacy of personal methods, and informed skepticism.
- Additional notes: Participation in a clinic is voluntary and learning-oriented, but some proportionate calibration is required before a practice is labelled as a shared team default. Keep the process small enough for a team; production evaluation suites, monitoring, and formal operational controls belong primarily to Stage 3.
- Status: planned

### Create a Promotion Gate: Which Shared Practices Deserve Investment?

- Reader/job: Team leads, managers, architects, and practitioners deciding which calibrated team practices should remain useful shared assistance, which should be retired, and which are sufficiently valuable and bounded to justify managed-workflow design.
- Goal: Help a team turn a noisy collection of AI ideas and successful local practices into a small, trusted set of workflow candidates with a named owner, a measurable intended outcome, known exposure, and an explicit decision to invest—or not.
- Core argument: A calibrated Team Practice Card is not a mandate to automate. The team’s job is not to collect the largest possible AI opportunity backlog; it is to identify the few practices whose value, repeatability, data readiness, failure cost, and ownership justify a higher level of design and operating responsibility.
- Detailed outline:
  - Open with the accumulation problem: once teams begin sharing practices, every useful result can look like an automation opportunity. The predictable failure is an unranked idea board, popular demos that never improve real work, and “AI projects” with no owner, outcome, or boundary.
  - Reframe promotion as a **portfolio decision at team scale**. The most responsible decision may be to keep a practice as advisory shared assistance, narrow it, continue learning, or stop using it. Promotion is reserved for a workflow that needs more than a Team Practice Card and calibration clinic: deliberate design, operational ownership, systems context, or recurring human-approved work.
  - Introduce the **Workflow Promotion Card** as the final companion canvas. It is a physical wall card or a digital-board card linked to its Team Practice Card and Calibration Card. It turns a promising shared practice into an explicit investment decision rather than a vague recommendation to “automate this.”
  - Define the Workflow Promotion Card canvas. It should make visible:
    - the linked practice and calibration evidence, including what worked, what failed, and the practice’s current use boundary;
    - the specific workflow: primary user, trigger, current steps/handoff, expected output, and the bounded problem to solve;
    - a value hypothesis and baseline signal appropriate to the work, such as cycle time, rework, quality, capacity, customer response time, or risk reduction—not raw AI activity;
    - repeatability, expected frequency, and who benefits, so a one-off personal win is not mistaken for a team investment;
    - required data, company context, tools, integrations, systems touched, and the permissions that would be needed;
    - failure cost, reversibility, customer or employee exposure, required human review, and the highest authority level being requested;
    - a named workflow owner, available team capacity, and the next investment requested: continue discovery, design a managed workflow, or decline/retire;
    - a decision, decision date, review point, and the explicit reasons for keeping, promoting, narrowing, or stopping the practice.
  - Walk through the **promotion gate** in order:
    1. Start with evidence, not enthusiasm. Review the linked calibration findings and ask whether the practice creates a repeated, meaningful problem worth solving beyond individual assistance.
    2. Test value and repeatability. Can the team name the user, trigger, expected outcome, current friction, and a baseline or signal that would show improvement?
    3. Test readiness and exposure. Can the team name the data, context, systems, permissions, human-review point, failure cost, and reversibility? If not, the candidate is not ready to advance.
    4. Test ownership and capacity. Is one person accountable for the workflow outcome—not merely its prompt—and does the team have a realistic next step and capacity to carry it?
    5. Make an explicit portfolio decision: keep as a shared practice, revise and recalibrate, time-box further discovery, promote into Stage 3 managed-workflow design, or retire it. Capture the reasons publicly on the card.
  - Make the multi-person confidence gate a **hard requirement for promotion**. Before a team asks for Stage 3 investment, the Workflow Promotion Card must be signed and dated by:
    - an **AI-forward practitioner**, confirming that the proposed approach is concrete enough to design and that the card does not rely on hidden personal know-how;
    - a **skeptical or quality-minded practitioner**, confirming that known failure modes, context/data concerns, human review, and unresolved risks are visible rather than ignored;
    - the **responsible manager**, confirming the problem matters to the team, the expected outcome is worth the capacity, and a named owner accepts accountability for the next decision.
  - Explain the trust purpose of the signatures. A team can see that the candidate was challenged by someone who looks for failure, made practical by someone who knows the tools, and connected to real work by someone responsible for priorities. The original creator may be an owner or signer, but need not be; their idea can earn team investment without forcing them to carry it alone.
  - Set guardrails on signatures: they affirm a bounded promotion decision, not universal safety, a permanent endorsement, or permission to bypass security, privacy, procurement, or later Stage 3 controls. Signatures should be renewed when the workflow’s scope, data, tools, or authority changes. In a very small team where distinct perspectives are unavailable, involve a credible peer outside the immediate workflow rather than allowing one person to sign every role.
  - Separate team input from the gate. Colleagues may vote or comment to decide which practice to examine next, but popularity does not replace evidence, risk judgment, ownership, or the signed promotion decision.
  - Close with the Stage 2 exit: the team has selected a high-value, bounded workflow whose owner, users, trigger, systems touched, intended outcome, and exposure are clear. It is now ready for Stage 3, where the work becomes an operational service with explicit design, quality checks, failure handling, and measurement—not just a better shared prompt.
- Practical takeaway: A **Workflow Promotion Card** displayed with the practice and calibration cards. Its fields—workflow, evidence, value signal, repeatability, data/systems/permissions, failure and human-review design, owner/capacity, explicit decision, and three dated signatures—give the team a visible, trusted gate between shared practice and managed-workflow investment.
- Decision rule: Do not invest in Stage 3 design unless the team can name the workflow’s user, trigger, intended outcome, owner, required context and permissions, human review, failure cost, and measure of improvement—and the AI-forward, skeptical/quality-minded, and manager perspectives have each signed the bounded promotion decision. A missing answer means keep the practice shared, narrow it, recalibrate, or stop it.
- Source notes: `docs/adoption-stages.md` Stage 2 teaching points, Stage 2 transition signal, Stage 3 situation and teaching points, cross-cutting value/ownership/permissions practices, and authority continuum; `docs/roadmap.md` workflow portfolio and ROI gate commitment; `docs/content-map.md` legacy `p2-03 Choose the Workflows That Deserve AI Investment`, `p2-06 Turn Local Wins Into Governed Internal Automation`, and `p3-02 Internal Agentic Workflow Blueprint`; `docs/principles.md` adoption-stage and proportionate-authority principles.
- Additional notes: This is a team-level promotion gate, not a company-wide portfolio council or a replacement for formal security, privacy, legal, or procurement review. It deliberately favors a small number of evidence-backed candidates over a large opportunity list. The hard signature requirement begins here, not on low-risk practice or calibration cards.
- Status: planned

## Stage 3: Managed Workflows

Field-note and guide assignments will be defined article-by-article.

## Stage 4: Governed Organizational Capability

Field-note and guide assignments will be defined article-by-article.


---


## Legacy Article Map — Pending Stage Migration

The entries below were planned under the former pillar model. Their IDs,
reader/jobs, outlines, source notes, status, and future stage assignments are
intentionally preserved until the next planning step. These entries will be 
ONLY used for reference and backlog until they are migrated to the new stage model
where they will be archived.

### p1 Pillar 1: AI Adoption Stages & Challenges

### p1-01 AI Adoption Starts With Fear. Safe Participation Is the First Operating Model.

- Reader/job: Executives, CTOs, engineering leaders, managers, and AI adoption leaders trying to create serious AI participation without dismissing employee fear or encouraging reckless tool use.
- Goal: Establish the human starting point for AI adoption: job anxiety, skepticism, uneven confidence, and the need for safe participation before operating-model change can work.
- Outline:
  - Open with the direct truth: fear of AI is rational, especially around job replacement, skill erosion, privacy, quality, ethics, and power concentration.
  - Explain why leaders lose trust when they respond with hype, surveillance, shame, or vague reassurance instead of clear boundaries and honest participation.
  - Define safe experimentation: employees can learn, test, question, and share AI workflows without feeling watched, ranked, or quietly replaced.
  - Fold in the balanced-builder idea: useful AI adopters are neither frozen skeptics nor reckless accelerators; they combine curiosity, verification discipline, security judgment, workflow thinking, and customer responsibility.
  - Practical takeaway: a team participation compact covering what AI is for, what it is not for, how experiments are shared, how risks are raised, when human judgment stays in control, and how leaders will avoid weaponizing participation data.
- Source notes: `content/ready/articles/p1-challenges/p1-01_ai-adoption-starts-with-fear-safe-participation.md`; archived source material in `content/ready/articles/p1-challenges/archive/p1-x01_the-fear.md` and `content/ready/articles/p1-challenges/archive/p1-x02_moving_forward.md`; `content/notes/NOTES.md` adoption and team notes; `content/notes/bottlenecks.md` section 11.
- Additional notes: This replaces the standalone `p1-04 The Talent Mix` article by folding the balanced-builder argument into the opener. Preserve the original fear, moving-forward, and talent notes as source material.
- Status: planned

### p1-02 The Demo Is Not the Product. The Workflow Is the Product.

- Reader/job: AI architects, CTOs, product leaders, and founders trying to move an impressive AI demo into a real deployed workflow.
- Evidence/resources: [McKinsey State of AI 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai), [MIT NANDA GenAI Divide 2025](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf), [Deloitte State of AI in the Enterprise 2026](https://www.deloitte.com/us/en/about/press-room/state-of-ai-report-2026.html), [Gartner agentic AI cancellation prediction](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027), [Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/aws/introducing-amazon-bedrock-agentcore-securely-deploy-and-operate-ai-agents-at-any-scale/), [Microsoft Foundry Agent Service](https://learn.microsoft.com/en-us/azure/foundry/agents/overview), [Google Gemini Enterprise Agent Platform](https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale), [LangGraph](https://www.langchain.com/langgraph), [Temporal durable execution](https://docs.temporal.io/).
- Goal: Show why AI products stall after the demo when teams solve model interaction but not workflow integration, context, memory, deployment, scale, and operational ownership.
- Outline:
  - Open with the core distinction: a demo answers a prompt; a product completes a workflow with state, systems of record, permissions, approvals, retries, and audit trails.
  - Combine workflow integration with context/memory: useful AI must know the customer, policy, past exceptions, current state, and what happened last time, not just retrieve generic documents.
  - Add the deployment and scale layer: many teams can build an agent locally, but struggle to run it reliably on company cloud/infra with observability, cost controls, secure tool access, secrets, versioning, rollback, and durable execution.
  - Discuss the emerging tool categories without overclaiming winners: managed cloud agent runtimes, agent orchestration frameworks, durable workflow engines, eval/observability platforms, and enterprise integration layers.
  - Practical takeaway: a "workflow readiness map" covering trigger, systems touched, required context, state, permissions, deployment target, failure modes, and measurable business outcome.
- Source notes: `content/notes/bottlenecks.md` sections 1, 2, 8; `content/notes/NOTES.md` adoption/develop/project pattern notes.
- Status: planned

### p1-03 The Trust Factor: When Is AI Safe Enough to Act?

- Reader/job: AI architects, product leaders, support leaders, security reviewers, and executives deciding when a working AI system is safe enough to speak, recommend, or act on behalf of the company.
- Evidence/resources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications), [OWASP MCP Top 10](https://owasp.org/www-project-mcp-top-10/), [Gartner customer service AI pressure 2026](https://www.gartner.com/en/newsroom/press-releases/2026-02-18-gartner-survey-finds-ninety-one-percent-of-customer-service-leaders-under-pressure-to-implement-ai-in-2026), [Verint State of Customer Experience 2026](https://www.verint.com/press-room/2026-press-releases/new-verint-survey-reveals-rising-customer-service-expectations/), [Metrigy consumer AI service survey 2026](https://www.metrigy.com/press-release-metrigy-study-85-of-consumers-prefer-interacting-with-humans-vs-ai-agents-for-customer-service/).
- Goal: Give teams a decision framework for the operational trust gap between "the AI works in testing" and "the AI is allowed to act in a real workflow."
- Outline:
  - Start with the support-engineer robot example: the team built a useful support agent, but still debated whether it could directly respond to customers because acting on behalf of the company requires more than internal usefulness.
  - Broaden the lesson beyond customer support: any AI that recommends, writes, routes, approves, or triggers tools needs bounded data access, bounded tool permissions, source-grounded answers, regression tests, audit logs, escalation, and rollback.
  - Separate output trust from operational trust: being correct in test conversations is different from handling every customer input, every edge case, and every unsafe request in production.
  - Address customer acceptance: customers may tolerate AI for speed, routing, simple resolution, and status checks, but expect human access for complex, emotional, high-value, contractual, or unresolved issues.
  - Practical takeaway: an exposure gate with four levels: internal assistant, human-reviewed draft, limited self-service or bounded action, and autonomous customer response/action.
- Source notes: `content/notes/bottlenecks.md` sections 3, 4, 7, 10; `content/notes/articles_outline.md` Trust & Reliability; `content/notes/NOTES.md` security notes.
- Status: planned

### p1-04 The ROI Reality Check: AI Unit Economics and the Moat Problem

- Reader/job: CTOs, founders, product leaders, and AI practice leaders deciding whether an AI product creates durable value or just expensive activity.
- Evidence/resources: [BCG The Widening AI Value Gap 2025](https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap), [BCG The AI-First SaaS Company 2026](https://www.bcg.com/publications/2026/the-ai-first-saas-company-rethinking-the-playbook), [Retool Build vs. Buy Report 2026](https://retool.com/newsroom/build-vs-buy-report-2026), [Bessemer AI Pricing Playbook 2026](https://www.bvp.com/assets/uploads/2026/02/The_AI_pricing_playbook_for_founders_Bessemer_Venture_Partners_2026.pdf), [Gartner enterprise AI coding agents market guide 2026](https://www.gartner.com/en/articles/enterprise-ai-coding-agent-market).
- Goal: Explain why AI products need hard ROI, healthy unit economics, and workflow/data defensibility as coding agents make custom internal software easier to build.
- Outline:
  - Open with the uncomfortable buyer shift: more companies will ask, "Why buy the whole platform if my team can build the 30% we actually need with coding agents?"
  - Combine ROI clarity and unit economics: activity metrics are weak; durable value should connect to cycle time, support cost, conversion, retention, margin, revenue per employee, or reduced implementation cost.
  - Show the AI margin trap: inference, retrieval, retries, evals, monitoring, and human review can turn popular features into negative-margin workflows if pricing stays seat-based or usage is unbounded.
  - Develop the moat argument: generic AI features are copyable; defensibility shifts to proprietary workflow data, deep integrations, operational memory, trust, eval datasets, distribution, and ownership of a business process.
  - Practical takeaway: an "AI value equation" requiring business outcome, cost per completed workflow, pricing model, switching cost, and a 90-day clone test.
- Source notes: `content/notes/bottlenecks.md` sections 5, 9, 12; `content/notes/articles_outline.md` ROI/unit economics, Giants Would Fall, Software Anarchy.
- Status: planned

### p2 Pillar 2: AI Adoption Operating Manual

### p2-01 From Experimentation to an AI-native Operating Model

- Reader/job: Executives, managers, AI practice leaders, and transformation owners who need a clear adoption path beyond scattered tool usage.
- Goal: Establish the strategic journey from individual AI experimentation to a governed, measurable, AI-native operating model.
- Outline:
  - Define the destination: not "everyone uses AI," but workflows, teams, data, governance, and metrics redesigned around AI leverage.
  - Show the maturity path: safe participation, workflow portfolio selection, AI Acceleration Team, trusted context layer, governed internal automation, and advanced customer-facing paths later.
  - Make security, governance, evals, monitoring, and observability explicit at every stage instead of treating them as late-stage blockers.
  - Practical takeaway: a one-page AI operating model ladder leaders can use to locate their current stage and next bottleneck.
- Source notes: `content/notes/bottlenecks.md` maturity ladder and sections 6-10; `content/notes/NOTES.md` adoption stages and operating model notes.
- Status: planned

### p2-02 Make AI Participation Safe Enough to Start

- Reader/job: Managers and adoption leaders trying to move cautious, skeptical, or uneven teams into productive AI use without hype or coercion.
- Goal: Turn fear and resistance into structured participation, informed skepticism, and practical early wins.
- Outline:
  - Acknowledge legitimate fear: job impact, quality risk, privacy, ethics, power concentration, and skill erosion.
  - Include skeptics and middle adopters in adoption design, not only the most enthusiastic front-runners.
  - Use small exercises, office hours, show-and-tells, and paired adoption patterns to build trust and surface what AI should not do.
  - Practical takeaway: a 30-day participation plan for safe experimentation, team learning, and early workflow discovery.
- Source notes: `content/ready/articles/p1-challenges/p1-01_ai-adoption-starts-with-fear-safe-participation.md`; archived source material in `content/ready/articles/p1-challenges/archive/p1-x01_the-fear.md` and `content/ready/articles/p1-challenges/archive/p1-x02_moving_forward.md`; `content/notes/NOTES.md` adoption notes.
- Status: planned

### p2-03 Choose the Workflows That Deserve AI Investment

- Reader/job: Executives, product leaders, and operations leaders deciding which AI opportunities should receive real investment.
- Goal: Prevent tool sprawl by introducing a portfolio/ROI gate before teams automate or productionize workflows.
- Outline:
  - Separate personal productivity wins from workflows that deserve company investment.
  - Score candidate workflows by business value, repeatability, data readiness, permission risk, failure cost, owner clarity, and measurable outcome.
  - Require each selected workflow to define the trigger, systems touched, human review points, eval approach, monitoring needs, and cost per completed workflow.
  - Practical takeaway: a workflow portfolio scorecard and kill/continue decision rule.
- Source notes: `content/notes/bottlenecks.md` sections 1, 5, 7, 9; `content/ready/articles/p1-challenges/p1-02_demo-is-not-the-product-workflow-is-the-product.md`; `content/ready/articles/p1-challenges/p1-04_roi-reality-check-ai-unit-economics-and-the-moat-problem.md`; `content/notes/NOTES.md` project pattern notes.
- Status: planned

### p2-04 Build the AI Acceleration Team

- Reader/job: CTOs, engineering leaders, operations leaders, and AI practice leaders forming the team that turns local AI wins into repeatable company capability.
- Goal: Define the AI Acceleration Team as a forward-deployed enablement function that raises the floor, spreads leverage, and prevents unmanaged AI sprawl.
- Outline:
  - Position the team as coaches, pattern-builders, and governance enablers rather than an elite approval bottleneck.
  - Define core responsibilities: team enablement, reusable skills and prompts, company/project AI instructions, approved tool patterns, eval baselines, workflow intake, and internal automation candidates.
  - Show how the team partners with security, data, product, and operations to convert discoveries into standards and reusable infrastructure.
  - Practical takeaway: an AI Acceleration Team charter with roles, operating cadence, intake criteria, and first 90-day deliverables.
- Source notes: `content/notes/NOTES.md` develop, adoption, team, tools, and security notes; `content/notes/bottlenecks.md` sections 6, 7, 10, 11.
- Status: planned

### p2-05 Build the Trusted Context Layer

- Reader/job: Executives, AI leaders, data leaders, and architects deciding how company data should become usable by AI systems without losing control.
- Goal: Explain the trusted context layer at executive altitude: governed access to company knowledge, systems, and operational memory for AI-assisted workflows.
- Outline:
  - Reframe MCP, RAG, APIs, documents, and knowledgebases as parts of a governed context layer, not disconnected technical projects.
  - Cover the executive requirements: identity-aware access, source freshness, permission boundaries, audit trails, approved tools, observability, and security review.
  - Separate the strategic principle from technical depth: leaders need the operating model; engineers need the implementation playbooks.
  - Practical takeaway: a trusted-context readiness checklist for data, permissions, ownership, observability, and review.
- Source notes: `content/notes/bottlenecks.md` sections 2, 4, 7, 10; `content/notes/NOTES.md` Step 2, MCP, AGENTS.md, slash command, and security notes.
- Status: planned

### p2-06 Turn Local Wins Into Governed Internal Automation

- Reader/job: Executives, managers, and AI program owners ready to move from individual AI use to durable internal workflows.
- Goal: Define how companies should productionize internal AI workflows before attempting broad or customer-facing autonomy.
- Outline:
  - Show the shift from personal workflows to shared, hosted, observable, auditable internal automation.
  - Require each workflow to have an owner, success metric, human-in-the-loop design, eval set, escalation path, and rollback plan.
  - Explain why durable execution, monitoring, cost control, and governance matter even for internal-only automation.
  - Practical takeaway: an internal automation launch gate for trusted agentic workflows.
- Source notes: `content/notes/bottlenecks.md` sections 6-10 and maturity ladder; `content/ready/articles/p1-challenges/p1-02_demo-is-not-the-product-workflow-is-the-product.md`; `content/notes/NOTES.md` internal development operating system notes.
- Status: planned

### p3 Pillar 3: Production AI Engineering Blueprint

### p3-01 AI Acceleration Team Starter Kit

- Reader/job: Engineering leaders, staff engineers, platform teams, and AI enablement leads implementing the operating manual inside real teams.
- Goal: Provide the practical artifacts the AI Acceleration Team needs to raise adoption quality without slowing teams down.
- Outline:
  - Define baseline artifacts: company AI instructions, project `AGENTS.md`/`CLAUDE.md`, reusable skills, slash commands, tool-use rules, review checklists, and example workflows.
  - Show how to package guidance so agents and humans use the same standards for architecture, testing, security, and documentation.
  - Include a lightweight cadence for office hours, show-and-tells, workflow intake, pattern review, and updating approved practices.
  - Practical takeaway: a starter kit checklist for the first 30-60 days of the AI Acceleration Team.
- Source notes: `content/notes/NOTES.md` develop, team, tools, security, and project pattern notes.
- Status: planned

### p3-02 Internal Agentic Workflow Blueprint

- Reader/job: Architects and engineers building internal AI workflows that need to run reliably beyond a local demo.
- Goal: Give a reference blueprint for durable, governed, human-reviewed internal agentic workflows.
- Outline:
  - Start with workflow mapping: trigger, owner, systems touched, state, tools, permissions, human review, and success metric.
  - Cover implementation building blocks: orchestration, durable execution, retries, queues/schedules, tool boundaries, logs, evals, and rollback.
  - Show how to choose narrow workflow agents over general-purpose agents.
  - Practical takeaway: an internal workflow architecture checklist from prototype to hosted automation.
- Source notes: `content/notes/bottlenecks.md` sections 1, 7, 8, 9; `content/ready/articles/p1-challenges/p1-02_demo-is-not-the-product-workflow-is-the-product.md`; `content/notes/articles_outline.md` Blueprint for Production-grade Customer-facing Agents.
- Status: planned

### p3-03 Trusted Context Layer Technical Guide

- Reader/job: Architects, platform engineers, data engineers, and security engineers implementing governed company context for AI systems.
- Goal: Translate the executive trusted-context concept into practical patterns for retrieval, MCP/tool access, permissions, observability, and auditability.
- Outline:
  - Start with the minimum useful pattern: governed sources, identity-aware retrieval/tool access, source attribution, audit logs, and freshness checks.
  - Compare when to use documents/RAG, APIs, MCP servers, and deterministic services as context providers.
  - Flag advanced patterns as later-stage work: agent-assisted data exploration, read-only code execution, richer retrieval pipelines, reranking, and workflow-specific memory.
  - Practical takeaway: a phased trusted-context implementation checklist that starts simple and leaves room for advanced RAG/MCP methods.
- Source notes: `content/notes/bottlenecks.md` sections 2, 4, 7, 10; `content/notes/NOTES.md` MCP, AGENTS.md, security, tools, and project pattern notes.
- Status: planned

### p3-04 Evals, Observability, and Cost Controls for Internal AI Workflows

- Reader/job: Architects and engineers who need internal agentic workflows to remain trustworthy, debuggable, and economically sane after launch.
- Goal: Define the operational layer required for production-grade internal AI systems.
- Outline:
  - Build evals around realistic workflow cases, adversarial cases, retrieval quality, tool-call accuracy, regression checks, and human-rating rubrics.
  - Instrument traces, logs, latency, cost per completed workflow, failure classes, escalations, and drift signals.
  - Use cost controls such as model routing, caching, bounded retries, deterministic code, context limits, and workflow-level budgets.
  - Practical takeaway: a minimum observability and eval dashboard spec for internal AI workflows.
- Source notes: `content/notes/bottlenecks.md` sections 7, 8, 9; `content/ready/articles/p1-challenges/p1-04_roi-reality-check-ai-unit-economics-and-the-moat-problem.md`; `content/notes/perosnal_growth_plan.md` production AI ideas.
- Status: planned

### p4 Pillar 4: AI Security & Governance

### p4-01 Minimum Viable AI Governance and Security Review

- Reader/job: Architects, security reviewers, engineering leaders, and AI Acceleration Team members creating safe boundaries for internal AI adoption.
- Goal: Provide the MVP security, governance, and review process that should exist before internal agentic workflows become widely trusted.
- Outline:
  - Cover core risks: prompt injection, data exposure, excessive tool permissions, unsafe actions, cross-tenant leakage, audit gaps, and vendor/data handling.
  - Define practical controls: approved MCP/tools, role-based access, read/write separation, sensitive-action approvals, logging, sandboxing, eval gates, red-team prompts, and incident response.
  - Keep governance enabling rather than bureaucratic: clear defaults, fast exception paths, and reusable approved patterns.
  - Practical takeaway: an AI/MCP security review checklist and launch gate for internal workflows.
- Source notes: `content/notes/bottlenecks.md` section 10; `content/notes/NOTES.md` security notes; `content/ready/articles/p1-challenges/p1-03_trust-factor-when-is-ai-safe-enough-to-act.md`.
- Status: planned

### cc Challenged / Later Candidates

### cc-01 Customer-Facing Agentic Applications

- Reader/job: Product leaders and architects considering externally exposed AI agents after internal operating capability is mature.
- Goal: Keep customer-facing agentic apps visible as an advanced path without making them part of the launch MVP.
- Outline:
  - Treat external exposure as a maturity gate, not the default destination.
  - Require stronger evals, customer trust design, legal/security review, escalation paths, and rollback.
  - Decision point: promote to p3/p4 once the internal automation and trust-gate content is complete.
- Source notes: `content/ready/articles/p1-challenges/p1-03_trust-factor-when-is-ai-safe-enough-to-act.md`; `content/notes/articles_outline.md` Blueprint for Production-grade Customer-facing Agents; `content/notes/bottlenecks.md` sections 3, 7, 8, 10.
- Status: candidate

### cc-02 Advanced RAG and MCP Patterns

- Reader/job: Architects and platform engineers improving the trusted context layer after the basic governed pattern is working.
- Goal: Avoid overcomplicating the MVP while preserving deeper technical ideas for later.
- Outline:
  - Advanced retrieval pipelines, reranking, hybrid search, graph/context memory, and workflow-specific evals.
  - Read-only code execution or agentic data exploration for controlled analysis.
  - Decision point: require a concrete use case and security model before promoting.
- Source notes: `content/notes/NOTES.md`; `content/notes/bottlenecks.md` sections 2, 4, 7, 10.
- Status: candidate

### cc-03 AI-native Team Restructure

- Reader/job: Executives and operating leaders considering deeper changes to team design, management layers, and decision rights.
- Goal: Keep the more aggressive org-design argument available, but avoid overloading the MVP operating manual.
- Outline:
  - Smaller teams, more autonomy, stronger accountability, and fewer handoffs.
  - Command-and-control to coach-and-communicate leadership.
  - Decision point: promote once the operating manual has established the basic AI-native operating model.
- Source notes: `content/notes/NOTES.md` company restructure notes; `content/notes/bottlenecks.md` section 6.
- Status: candidate

### cc-04 Market and Moat Strategy

- Reader/job: Founders, product leaders, and AI business leaders evaluating defensibility in an AI-assisted build-vs-buy market.
- Goal: Preserve broader strategy ideas that may become a later pillar extension or founder-focused series.
- Outline:
  - Build-vs-buy pressure from coding agents.
  - Unit economics, margin traps, pricing, and workflow-data defensibility.
  - Workflow ownership as the strategic lens.
- Source notes: `content/notes/bottlenecks.md`, `content/notes/articles_outline.md`.
- Status: candidate
