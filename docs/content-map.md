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

## p1 Pillar 1: AI Adoption Stages & Challenges

### p1-01 AI Adoption Starts With Fear. Safe Participation Is the First Operating Model.

- Reader/job: Executives, CTOs, engineering leaders, managers, and AI adoption leaders trying to create serious AI participation without dismissing employee fear or encouraging reckless tool use.
- Goal: Establish the human starting point for AI adoption: job anxiety, skepticism, uneven confidence, and the need for safe participation before operating-model change can work.
- Outline:
  - Open with the direct truth: fear of AI is rational, especially around job replacement, skill erosion, privacy, quality, ethics, and power concentration.
  - Explain why leaders lose trust when they respond with hype, surveillance, shame, or vague reassurance instead of clear boundaries and honest participation.
  - Define safe experimentation: employees can learn, test, question, and share AI workflows without feeling watched, ranked, or quietly replaced.
  - Fold in the balanced-builder idea: useful AI adopters are neither frozen skeptics nor reckless accelerators; they combine curiosity, verification discipline, security judgment, workflow thinking, and customer responsibility.
  - Practical takeaway: a team participation compact covering what AI is for, what it is not for, how experiments are shared, how risks are raised, when human judgment stays in control, and how leaders will avoid weaponizing participation data.
- Source notes: `content/ready/articles/challenges/00.a_the_fear.md`; `content/ready/articles/challenges/00.b_moving_forward.md`; `content/notes/NOTES.md` adoption and team notes; `content/notes/bottlenecks.md` section 11.
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

## p2 Pillar 2: AI Adoption Operating Manual

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
- Source notes: `content/ready/articles/challenges/00.a_the_fear.md`; `content/ready/articles/challenges/00.b_moving_forward.md`; `content/notes/NOTES.md` adoption notes.
- Status: planned

### p2-03 Choose the Workflows That Deserve AI Investment

- Reader/job: Executives, product leaders, and operations leaders deciding which AI opportunities should receive real investment.
- Goal: Prevent tool sprawl by introducing a portfolio/ROI gate before teams automate or productionize workflows.
- Outline:
  - Separate personal productivity wins from workflows that deserve company investment.
  - Score candidate workflows by business value, repeatability, data readiness, permission risk, failure cost, owner clarity, and measurable outcome.
  - Require each selected workflow to define the trigger, systems touched, human review points, eval approach, monitoring needs, and cost per completed workflow.
  - Practical takeaway: a workflow portfolio scorecard and kill/continue decision rule.
- Source notes: `content/notes/bottlenecks.md` sections 1, 5, 7, 9; `content/ready/articles/challenges/01_demo_workflow_product.md`; `content/ready/articles/challenges/03_roi_reality_check.md`; `content/notes/NOTES.md` project pattern notes.
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
- Source notes: `content/notes/bottlenecks.md` sections 6-10 and maturity ladder; `content/ready/articles/challenges/01_demo_workflow_product.md`; `content/notes/NOTES.md` internal development operating system notes.
- Status: planned

## p3 Pillar 3: Production AI Engineering Blueprint

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
- Source notes: `content/notes/bottlenecks.md` sections 1, 7, 8, 9; `content/ready/articles/challenges/01_demo_workflow_product.md`; `content/notes/articles_outline.md` Blueprint for Production-grade Customer-facing Agents.
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
- Source notes: `content/notes/bottlenecks.md` sections 7, 8, 9; `content/ready/articles/challenges/03_roi_reality_check.md`; `content/notes/perosnal_growth_plan.md` production AI ideas.
- Status: planned

## p4 Pillar 4: AI Security & Governance

### p4-01 Minimum Viable AI Governance and Security Review

- Reader/job: Architects, security reviewers, engineering leaders, and AI Acceleration Team members creating safe boundaries for internal AI adoption.
- Goal: Provide the MVP security, governance, and review process that should exist before internal agentic workflows become widely trusted.
- Outline:
  - Cover core risks: prompt injection, data exposure, excessive tool permissions, unsafe actions, cross-tenant leakage, audit gaps, and vendor/data handling.
  - Define practical controls: approved MCP/tools, role-based access, read/write separation, sensitive-action approvals, logging, sandboxing, eval gates, red-team prompts, and incident response.
  - Keep governance enabling rather than bureaucratic: clear defaults, fast exception paths, and reusable approved patterns.
  - Practical takeaway: an AI/MCP security review checklist and launch gate for internal workflows.
- Source notes: `content/notes/bottlenecks.md` section 10; `content/notes/NOTES.md` security notes; `content/ready/articles/challenges/02_trust_factor.md`.
- Status: planned

## cc Challenged / Later Candidates

### cc-01 Customer-Facing Agentic Applications

- Reader/job: Product leaders and architects considering externally exposed AI agents after internal operating capability is mature.
- Goal: Keep customer-facing agentic apps visible as an advanced path without making them part of the launch MVP.
- Outline:
  - Treat external exposure as a maturity gate, not the default destination.
  - Require stronger evals, customer trust design, legal/security review, escalation paths, and rollback.
  - Decision point: promote to p3/p4 once the internal automation and trust-gate content is complete.
- Source notes: `content/ready/articles/challenges/02_trust_factor.md`; `content/notes/articles_outline.md` Blueprint for Production-grade Customer-facing Agents; `content/notes/bottlenecks.md` sections 3, 7, 8, 10.
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
