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
- Status: planned | candidate | challenged
```

## p1 Pillar 1: AI Adoption Stages & Challenges

### p1-01 The Demo Is Not the Product. The Workflow Is the Product.

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

### p1-02 The Trust Factor: When Is an AI Agent Safe Enough for Customers?

- Reader/job: AI architects, product leaders, support leaders, and security reviewers deciding whether a working internal agent can be exposed directly to customers.
- Evidence/resources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications), [OWASP MCP Top 10](https://owasp.org/www-project-mcp-top-10/), [Gartner customer service AI pressure 2026](https://www.gartner.com/en/newsroom/press-releases/2026-02-18-gartner-survey-finds-ninety-one-percent-of-customer-service-leaders-under-pressure-to-implement-ai-in-2026), [Verint State of Customer Experience 2026](https://www.verint.com/press-room/2026-press-releases/new-verint-survey-reveals-rising-customer-service-expectations/), [Metrigy consumer AI service survey 2026](https://www.metrigy.com/press-release-metrigy-study-85-of-consumers-prefer-interacting-with-humans-vs-ai-agents-for-customer-service/).
- Goal: Give teams a decision framework for the trust gap between "the agent works" and "the agent should speak or act on behalf of the company."
- Outline:
  - Start with the support-engineer robot example: the team built a useful support agent, but still debated whether it could directly respond to customer issues because customer-facing trust requires more than internal usefulness.
  - Combine reliability, permissions, evals, and security: the agent needs bounded data access, adversarial prompt handling, source-grounded answers, regression tests, tool-call controls, audit logs, escalation, and rollback.
  - Separate output trust from operational trust: being correct in test conversations is different from handling every customer input, every edge case, and every unsafe request in production.
  - Address customer acceptance: customers may tolerate AI for speed, routing, simple resolution, and status checks, but expect human access for complex, emotional, high-value, contractual, or unresolved issues.
  - Practical takeaway: a customer-exposure gate with four levels: internal assistant, human-reviewed draft, limited customer self-service, and autonomous customer response/action.
- Source notes: `content/notes/bottlenecks.md` sections 3, 4, 7, 10; `content/notes/articles_outline.md` Trust & Reliability; `content/notes/NOTES.md` security notes.
- Status: planned

### p1-03 The ROI Reality Check: AI Unit Economics and the Moat Problem

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

### p1-04 The Talent Mix: Why AI Adoption Needs Balanced Builders

- Reader/job: CTOs, engineering leaders, product leaders, and AI adoption leaders hiring or coaching teams that will build with AI.
- Evidence/resources: [McKinsey technology workforce for the AI-first era 2026](https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/designing-an-end-to-end-technology-workforce-for-the-ai-first-era), [BCG Invest in Your People 2025](https://www.bcg.com/publications/2025/to-unlock-the-full-value-of-ai-invest-in-your-people), [Gallup AI adopters and holdouts 2026](https://www.gallup.com/workplace/704252/workplace-separates-adopters-holdouts.aspx), [Sonar verification gap in AI coding 2026](https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/).
- Goal: Define the balanced AI-era employee: neither reckless early adopter nor fear-driven holdout, but a builder who uses AI actively while preserving judgment, verification, security, and customer responsibility.
- Outline:
  - Use the existing fear/adoption articles to frame the human tension: fear is rational, but disengagement leaves teams behind; enthusiasm is useful, but blind acceleration creates quality and trust risk.
  - Show why AI-native teams need mixed capability: product judgment, domain knowledge, data engineering, platform/infra, security, evals, customer implementation, and workflow design.
  - Contrast the two failure profiles: the overly eager engineer who ships untrusted AI shortcuts, and the fear-driven engineer who avoids the tools and loses leverage.
  - Explain the management shift from command-and-control to coach-and-communicate: faster AI-assisted teams need clearer context, stronger trust, better feedback loops, and leaders who coach decision quality instead of routing every decision upward.
  - Argue that developers increasingly become micro product managers: coding agents let individuals touch more unfamiliar areas faster, so companies must find or groom builders who can weigh security, ROI, UX, data, support, and customer impact while working with less cross-team handoff time.
  - Turn adoption into management practice: pair skeptics with AI-forward builders, require verification and tests, create show-and-tell loops, document safe patterns, and reward measured business impact over tool usage.
  - Practical takeaway: a balanced-builder scorecard covering AI fluency, skepticism, verification discipline, workflow thinking, security judgment, and customer empathy.
- Source notes: `content/notes/bottlenecks.md` section 11; `content/articles/challenges/the_fear.md`; `content/articles/challenges/02_moving_forward.md`; `content/notes/NOTES.md` adoption, develop, and company restructure notes.
- Status: planned

## p2 Pillar 2: AI Adoption Operating Manual

## p3 Pillar 3: Production AI Systems and Agents with ROI

## p4 Pillar 4: AI Security Best Practices

## cc Challenged / Later Candidates

### cc-01 Adoption Psychology

- Reader/job: AI adoption leaders who need to reduce fear, skepticism, and passive resistance.
- Goal: Shape this into a concrete adoption-stage guide before promoting it to planned content.
- Outline:
  - Fear, skepticism, participation, and education.
  - Practical ways to build confidence through small wins.
  - Decision point: when this becomes a standalone guide versus part of an adoption maturity page.
- Source notes: `content/notes/NOTES.md`, `content/notes/website.md`.
- Status: candidate

### cc-02 Operating Model

- Reader/job: Leaders redesigning team structure and workflow ownership for AI adoption.
- Goal: Scope this into a specific page, guide, or decision framework.
- Outline:
  - Coach-and-communicate culture.
  - Smaller teams and clearer ownership.
  - Workflow ownership as the operating-model unit.
- Source notes: `content/notes/NOTES.md`, `content/notes/bottlenecks.md`.
- Status: candidate

### cc-03 Production AI

- Reader/job: Architects planning production-grade AI systems and agents.
- Goal: Split this topic cluster into focused content entries before treating it as planned content.
- Outline:
  - Evals, orchestration, state, and retries.
  - Observability, audit trails, and cost control.
  - Decision point: whether this becomes one cornerstone blueprint or several focused guides.
- Source notes: `content/notes/bottlenecks.md`, `content/notes/articles_outline.md`.
- Status: candidate

### cc-04 Security

- Reader/job: Architects and engineering leaders defining AI security boundaries.
- Goal: Turn this into a concrete security checklist or review workflow.
- Outline:
  - MCP controls and tool boundaries.
  - Audit trails and approval workflows.
  - Prompt injection and permission-risk controls.
- Source notes: `content/notes/NOTES.md`, `content/notes/bottlenecks.md`.
- Status: candidate

### cc-05 Strategy

- Reader/job: CTOs, product leaders, and AI practice leaders evaluating business value.
- Goal: Split this broad strategy cluster into sharper content around ROI, unit economics, moat, or workflow ownership.
- Outline:
  - ROI and unit economics.
  - Moat erosion and defensibility.
  - Workflow ownership as the strategic lens.
- Source notes: `content/notes/bottlenecks.md`, `content/notes/articles_outline.md`.
- Status: candidate
