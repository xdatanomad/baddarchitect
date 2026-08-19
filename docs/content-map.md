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

Stage 1 turns permitted experimentation into repeatable, personally operated
AI-assisted work. Its field notes keep the individual responsible for judgment
and consequential action; its implementation guides provide the technical
detail needed to build bounded personal practices. The stage does not require
people to disclose private prompts or methods, standardize work for a team, or
automate a workflow.

### A Prompt Is a Moment. A Personal Practice Is a Method.

- Format: field note
- Primary stage: Personal Leverage
- Reader/job: Individual practitioners, and the leaders or architects enabling them, who need to turn a useful AI interaction into a repeatable personal method without mistaking a prompt collection for a workflow.
- Goal: Help a person define a bounded, private-by-default AI-assisted practice with a clear task, intended outcome, trusted context, method, verification, and limit—so they can repeat it, improve it, and later choose whether any part is worth sharing.
- Core argument: A prompt is a moment of interaction. A personal practice is the set of conditions that let one person do a recurring piece of work with AI and retain judgment over the result. Better prompting helps, but it is not enough when the useful context, quality bar, and failure boundary live only in a past chat or in the person’s memory.
- Detailed outline:
  - Open with the familiar pattern: a person has one excellent AI result, saves a fragment of the prompt, then cannot reproduce the result a week later because the source material, surrounding conversation, tool configuration, or unstated quality bar has changed.
  - Make the distinction explicit: a prompt library is not a personal working system. It can preserve words, but not necessarily the task, trusted inputs, context, sequence, expected result, human check, or reason not to use the method.
  - Introduce the **Personal Practice Canvas** as a lightweight, private-by-default artifact. It is not a performance log, team standard, approval form, or production runbook. The individual may keep all or part of it private.
  - Define the canvas fields: recurring task and trigger; intended user and outcome; use and non-use boundary; allowed context and data; chosen tool, skill, or reusable instruction block; method at the level useful to the person; one or two examples; required verification; known failure signals; authority boundary; value signal; and a review point.
  - Explain that “context” is an explicit input to a practice, not an invitation to paste every available document into a chat. The method should name the smallest current information set that helps the task and remains permitted to use.
  - Use a concrete operations example: a manager prepares a weekly customer-risk brief from an approved source pack, asks AI to surface changed commitments and open issues, then checks each claim against the sources before deciding what to raise.
  - Use a concrete technical example: an engineer uses a repository-aware skill to investigate a bug, captures the issue, relevant files, tests, expected behavior, and review steps, then treats a proposed diff as input to normal testing and code review—not as an automatic change.
  - Show how a personal practice improves: refine a confusing instruction, add an example, narrow the task, update a source link, record a recurring failure, or retire the practice when it no longer saves effort or produces dependable work.
  - Link forward to the Personal AI Playbook guide for the storage and maintenance mechanics, and to the review field note before suggesting that any method is dependable.
  - Close with the Stage 1 boundary: the canvas makes one person’s work more intentional; it does not make the practice safe for colleagues, a shared team default, or an automation candidate by itself.
- Practical takeaway: A downloadable, editable **Personal Practice Canvas**. Its fields—task, outcome, use and non-use boundary, context/data boundary, tool or method, examples, verification, known failures, authority boundary, value signal, and review point—give an individual a small working system without requiring public disclosure.
- Decision rule: Treat an AI interaction as exploration, not a personal practice, until the person can name the recurring task, allowed context, expected outcome, required verification, and a condition in which they will not use it.
- Implementation guide links: **Build a Personal AI Playbook That Stays Useful**; **Build a Personal Context Pack and Work Log**.
- Source notes: `docs/adoption-stages.md` Stage 1 situation, teaching points, and transition signal; `docs/roadmap.md` Stage 1 milestone; `content/notes/project_refactor_prompt.md` Personal Use and initial Personal Leverage subjects; `content/notes/NOTES.md` development practices, project instructions, and precise expected-versus-actual behavior.
- Additional notes: Keep the narrative tool-agnostic. Named tools belong in the implementation guide as dated examples, not as the definition of a good personal practice.
- Status: planned

### The Review Is Part of the Work.

- Format: field note
- Primary stage: Personal Leverage
- Reader/job: Individual practitioners and leaders helping them use AI-assisted outputs responsibly when factual accuracy, analytical judgment, policy boundaries, or consequential action matter.
- Goal: Replace the vague instruction to “review the output” with a small, task-appropriate verification method that makes the person’s evidence, judgment, and stop conditions explicit.
- Core argument: Review is not the apology added after AI produces an answer. It is part of the practice design. A polished response may still rely on stale context, unsupported claims, missing constraints, or an incorrect interpretation; the right human check depends on the kind of work and the cost of getting it wrong.
- Detailed outline:
  - Open with the false comfort of a fluent result: a meeting brief confidently misstates a commitment, an analysis overlooks a denominator, a policy draft omits an exception, or a computer action is aimed at the wrong record. The failure is not that the user failed to “look carefully”; the practice lacked a defined check.
  - Introduce the **Personal Verification Compact** as a downloadable, editable self-agreement for one personal practice. It is neither a legal contract nor a corporate policy. It records what AI may prepare, what the person must check, what it must not do, and when the person must stop or escalate.
  - Define the Compact fields: task and intended use; allowed sources and required freshness; claims or output elements to verify; task-specific checks; prohibited data or actions; required human decision or confirmation point; failure or uncertainty signals; and a review/update date.
  - Distinguish proportional review patterns: factual work requires source checks and attribution; analytical work requires checking inputs, assumptions, calculations, and counterexamples; policy or compliance work requires checking the current authoritative rule and known exceptions; creative work still requires checking the brief, rights, brand, and audience constraints.
  - Introduce a lightweight **Personal Context Pack and Work Log** as an aid to review. The Context Pack holds the current, allowed references and instructions for the practice. The Work Log records human-curated decisions, actions, open state, and corrections. Neither should be confused with opaque provider chat memory.
  - Make the source-of-truth boundary explicit: an AI system may recall something useful, but a consequential claim should be checked against the current authorized source. A stale saved answer, untraceable chat memory, or broad personal knowledge base is not sufficient evidence.
  - Walk through the customer-risk-brief example: the practitioner checks named commitments against their sources, verifies the reporting period, records the decision to escalate a risk, and does not let AI send the escalation.
  - Walk through the engineering example: the practitioner verifies the issue reproduction, runs the relevant tests, inspects a proposed change for scope and security implications, and records why a fix was accepted or rejected.
  - Explain that a correction is valuable operational memory. Record the failure or change in the Canvas, Context Pack, or Work Log so the next run begins with a better boundary—not with another attempt to remember what went wrong.
  - Close with the limit: a personal verification loop is not a production evaluation suite, audit trail, or substitute for team controls. It earns appropriate confidence for a bounded, personally operated practice.
- Practical takeaway: A downloadable, editable **Personal Verification Compact** that readers complete for one real practice. It records the work, allowed sources, checks, prohibited data/actions, human confirmation point, uncertainty signals, and review date.
- Decision rule: Do not use an AI-prepared result for a consequential decision or action if the person cannot state what must be checked, identify the current authoritative source or test, and recognize the condition that requires them to stop or escalate.
- Implementation guide links: **Build a Personal Context Pack and Work Log**; **Build a Personal AI Playbook That Stays Useful**.
- Source notes: `docs/adoption-stages.md` Stage 1 teaching points and authority continuum; `docs/roadmap.md` Stage 1 and cross-cutting control commitments; `docs/principles.md` principles on trust, quality, permissions, and proportionate authority; `content/notes/NOTES.md` precise expected-versus-actual behavior, tests, and human review ideas.
- Additional notes: The compact should be downloadable and printable, like the Stage 2 cards, but it remains private-by-default. It must avoid implying that a completed template certifies a practice as safe or correct.
- Status: planned

### Connect AI With Intent: Skills, Integrations, and Computer Actions.

- Format: field note
- Primary stage: Personal Leverage
- Reader/job: Individual practitioners and enabling leaders deciding when a skill, extension, integration, computer-use feature, or event trigger has an appropriate purpose, data scope, permission set, and human confirmation point.
- Goal: Help readers gain useful personal leverage from connected AI tools without treating convenience, broad access, or unattended action as signs of maturity.
- Core argument: Tool capability and tool authority are different decisions. A skill that can read a workspace, an integration that can update a system, or a computer-use feature that can click through a browser may be useful, but only within a deliberately chosen task, smallest practical access scope, and human-controlled action boundary.
- Detailed outline:
  - Open with the capability trap: a person finds a promising extension or automation template, grants broad workspace access, and discovers only later that it can see more context, write to more systems, or act more quickly than the task required.
  - Separate the decisions that are often collapsed together: what task needs help; which data is necessary; which tool is trusted and approved; whether it needs read or write access; what it may prepare; and what the person must explicitly decide or confirm.
  - Introduce a **Personal Access Decision** as a small companion to the Personal Practice Canvas. It records purpose, allowed data, tool or integration, permission scope, read/write boundary, action boundary, confirmation point, revocation path, and review date.
  - Establish the Stage 1 default: use approved tools with the minimum practical permission; prefer read-only access where it supports the task; keep secrets and disallowed data out of prompts and tool context; and remove or revisit access when the practice changes or stops being useful.
  - Explain supervised computer actions precisely. AI may navigate, collect information, fill a draft, or prepare a proposed change while the person is actively supervising. Any consequential or irreversible action requires explicit human confirmation in the moment; the person remains accountable for the action.
  - Establish the confirmed event-workflow boundary: an email, calendar event, or file change may start preparation, but the result must arrive in a private review queue, draft, or staging area. It may not send, publish, approve, update a consequential record, or take other unattended consequential action.
  - Use a calendar example: an upcoming customer meeting can trigger a private preparation brief based on approved calendar details and source material. The practitioner verifies the brief and decides whether any follow-up is sent.
  - Use a computer-action example: an engineer lets an assistant gather failing test output and stage a proposed patch, then reviews the diff, runs tests, and chooses whether to commit or open a pull request.
  - Explain the trigger to leave Stage 1: recurring unattended writes, long-lived background runs, shared use, sensitive systems, material failure cost, or a need for retries, exception handling, auditability, and operational ownership require a managed-workflow design rather than a personal setup.
  - Link to the two technical guides for tactical setup while keeping this field note focused on the access and authority decision.
- Practical takeaway: A **Personal Access Decision** checklist that readers can add to a Personal Practice Canvas: purpose, data boundary, tool, permissions, allowed preparation, prohibited actions, confirmation point, revocation path, and review date.
- Decision rule: Do not connect a tool or enable computer action until the person can explain the specific task, the minimum data and permissions needed, what the tool may prepare, and the exact point at which a human must confirm a consequential action.
- Implementation guide links: **Use Skills, Integrations, and Computer Actions With a Human in Control**; **Build a Human-Reviewed Event Workflow**.
- Source notes: `docs/adoption-stages.md` Stage 1 situation, challenges, teaching points, and authority continuum; `docs/roadmap.md` cross-cutting security and authority commitments; `content/notes/project_refactor_prompt.md` Personal Use; `content/notes/NOTES.md` approved MCP, logging, and easy approval-path ideas.
- Additional notes: Do not make a named tool, MCP server, or computer-use product the article’s premise. Tool-specific examples need a visible reviewed date, a durable principle, safe scope, verification step, and limitation.
- Status: planned

### A Personal Win Is a Candidate, Not an Automation Proposal.

- Format: field note
- Primary stage: Personal Leverage
- Reader/job: Individual practitioners, team leads, architects, and managers deciding which personal practices should remain private assistance, which may be worth voluntarily offering to colleagues, and which should not be promoted at all.
- Goal: Give readers a humane, evidence-based way to recognize a promising workflow candidate without forcing private-method disclosure, turning usage into a performance ranking, or mistaking a personal success for a case for automation.
- Core argument: A useful personal practice is evidence, not a mandate. The next responsible question is not “How do we automate this?” but “Is this a recurring, bounded problem that another person could benefit from examining with its context, limits, and human review made visible?”
- Detailed outline:
  - Open with the two unhelpful defaults: valuable methods disappear into one person’s private chat history, or an impressive demo is immediately described as an automation opportunity despite having no owner, baseline, exposure assessment, or evidence that anyone else can use it.
  - Preserve the right to private leverage. People may reasonably keep personal prompts, configurations, and hard-won methods private. Participation in Stage 2 begins only when someone chooses to share enough for responsible reuse; it is not a condition of being seen as an adopter or contributor.
  - Introduce the **Candidate Note** as a lightweight private or optional-sharing artifact. It can become a Stage 2 Practice Seed, but it is intentionally smaller than a Team Practice Card and makes no claim that the method is ready for others.
  - Define the Candidate Note fields: recurring task and current friction; intended beneficiary; small value signal such as time, rework, quality, or risk; example result; likely repeatability and frequency; minimum context and data boundary; known limitations; required human review; sharing question; and the next requested step—keep private, ask for peer input, or offer a Practice Seed.
  - Show a qualified candidate: a recurring weekly customer-risk brief that takes too long to assemble, has known approved sources, and consistently benefits from an AI-prepared first pass that the manager reviews. The candidate is the bounded briefing practice, not “automate customer management.”
  - Contrast a poor candidate: a one-off impressive presentation generated from a long, private conversation; the result may be useful, but its task, context, quality, and reuse potential are too unclear to ask colleagues to adopt it.
  - Explain that a candidate can be declined, narrowed, or left as personal assistance indefinitely. Team value, repeatability, data readiness, failure cost, and ownership will be examined more rigorously in Stage 2; higher authority is not a reward for a good idea.
  - Connect deliberately to Stage 2: a person may share a Candidate Note as a Practice Seed, then a team decides whether to create a Team Practice Card. No private prompt history or full personal configuration is required.
  - Close with the personal-to-team boundary: a candidate note makes the opportunity legible; it does not make a shared practice, create a team commitment, or approve an integration or automation.
- Practical takeaway: A lightweight **Candidate Note** that readers can keep private, discuss with a peer, or optionally offer as a Stage 2 Practice Seed. It captures the recurring task, value signal, evidence, context boundary, limitations, human review, and requested next step.
- Decision rule: Offer a personal practice for team examination only when the person can show a recurring problem, a bounded proposed use, a plausible benefit beyond themselves, the minimum context and data required, known limits, and a human review point. Otherwise keep learning privately, narrow it, or stop using it.
- Implementation guide links: **Build a Personal AI Playbook That Stays Useful**; **Build a Personal Context Pack and Work Log**.
- Source notes: `docs/adoption-stages.md` Stage 1 signals, Stage 2 situation, and transition signal; `docs/content-map.md` Stage 2 Team Practice Card, Practice Seed, Calibration Card, and promotion gate; `docs/roadmap.md` workflow-portfolio commitment; `docs/principles.md` privacy, ownership, and proportionate-authority principles.
- Additional notes: This note must actively reject productivity ranking and mandatory prompt disclosure. It prepares voluntary, bounded sharing; Stage 2 owns peer calibration and its stronger conditions for reuse.
- Status: planned

### Build a Personal AI Playbook That Stays Useful

- Format: implementation guide
- Primary stage: Personal Leverage
- Referenced from: **A Prompt Is a Moment. A Personal Practice Is a Method**; **The Review Is Part of the Work**; **A Personal Win Is a Candidate, Not an Automation Proposal**.
- Reader/job: Practitioners who have several useful prompts, reusable instruction blocks, skills, and examples, and need a lightweight way to curate them into a library they can actually find, maintain, and retire.
- Goal: Provide a tactical, tool-neutral method for building a small Personal AI Playbook that preserves the method and boundaries of a practice rather than accumulating an unsearchable archive of prompt fragments.
- Core argument: A personal library compounds only if it preserves why and when something works. Save a reusable method with its task, context, example, check, and review point—not just the prompt text that happened to be in a successful chat.
- Detailed outline:
  - Start with a compact information architecture: the Personal Practice Canvas as the index; playbook entries for repeatable methods; reusable instruction blocks or skills; approved examples; and links to the Context Pack, Verification Compact, and Work Log where they apply.
  - Show the minimum metadata for every entry: title, task, trigger, use and non-use boundary, tool or skill dependency, context requirements, version, review date, and status such as active, changing, paused, or retired.
  - Explain how to choose a home: local Markdown or a version-controlled repository for technical work, an approved notes or documentation system for knowledge work, or another permitted workspace. Named products are examples to review at publication time, not required infrastructure.
  - Walk through creating one entry from the weekly customer-risk-brief example: preserve the source checklist, outline, reusable instruction blocks, example output, Verification Compact, and known limits rather than a single opaque prompt.
  - Walk through a technical example: preserve the bug-investigation method, issue template, repository instructions, test commands, safe tool boundary, example finding, and review steps.
  - Teach curation routines: add examples when a method changes, record meaningful failure patterns, review entries when a model, skill, source, or policy changes, and retire entries that no longer save effort or require too much hidden judgment.
  - Address privacy and security: do not store secrets in prompts, export disallowed data into a personal library, or rely on a shared workspace merely because it is convenient. Follow existing data and tool boundaries.
  - Include a starter template and a small first-week exercise: document one recurring task, use it three times, update it after each use, then decide whether it deserves to stay in the playbook.
- Practical takeaway: A **Personal AI Playbook starter structure** and entry template that links task method, reusable instruction blocks, skills, examples, Verification Compact, Context Pack, and review date.
- Decision rule: Do not keep a reusable prompt or skill as an active playbook entry unless it has a stated task, a current context/data boundary, a verification step, and a review or retirement point.
- Source notes: `docs/adoption-stages.md` Stage 1 teaching points; `content/notes/project_refactor_prompt.md` Personal Use and personal AI working system; `content/notes/NOTES.md` project instructions, slash-command, and documentation ideas.
- Additional notes: Tool-specific setup instructions must name their durable principle, safe scope, verification step, limitation, and a visible reviewed date.
- Status: planned

### Build a Personal Context Pack and Work Log

- Format: implementation guide
- Primary stage: Personal Leverage
- Referenced from: **A Prompt Is a Moment. A Personal Practice Is a Method**; **The Review Is Part of the Work**; **A Personal Win Is a Candidate, Not an Automation Proposal**.
- Reader/job: Practitioners who need personal AI practices to use current, permitted context and retain a small, inspectable record of decisions and open state without turning an opaque chat history into a source of truth.
- Goal: Show how to create a lightweight personal context system that separates authoritative reference material, reusable practice instructions, and human-curated work memory.
- Core argument: Context and memory serve different purposes. A Context Pack supplies the approved, current information for the present task. A Work Log preserves the decisions, corrections, action state, and open questions that a person deliberately chooses to retain. Neither is the same as provider-managed chat memory or a dump of every available document.
- Detailed outline:
  - Establish the three-part model: the Playbook answers **how** to perform the practice; the Context Pack answers **what current, allowed information the practice needs**; the Work Log answers **what happened, was decided, and remains open**.
  - Define a Context Pack’s minimum contents: purpose, approved source links or extracts, freshness expectation, data classification or boundary, relevant instructions and templates, attribution requirements, and an owner or update cue where one exists.
  - Define a Work Log’s minimum contents: date and practice run, source/context version, important human decisions, action taken or deliberately not taken, open state, corrections, and a link to any result worth retaining. Keep it human-curated; do not treat raw transcripts as durable memory.
  - Show how to choose a home. An approved documentation or database service such as Notion can be useful for structured pages and logs; a repository, issue tracker, or local Markdown may fit technical work better. The architecture matters more than the vendor.
  - Walk through a meeting-preparation example: a Context Pack contains the agenda, approved account notes, current commitments, and policy constraints; the Work Log records what the manager chose to raise and what follow-up remains.
  - Walk through an engineering example: the Context Pack contains the issue, relevant architecture notes, test expectations, and approved repository instructions; the Work Log records the root-cause hypothesis, test result, and reason to accept or reject a proposed fix.
  - Teach selective retrieval and freshness checks: provide only the source material that supports the task, trace important claims back to it, and refresh or remove context that has changed. More context is not inherently more reliable context.
  - Address permissions and privacy: do not create a personal shadow knowledge base from sensitive company material, widen access through a connector without approval, or assume content remains permitted once copied into a notes system.
  - Draw the Stage 1 limit: this is a personal working aid, not a governed organizational trusted context layer, shared system of record, or production memory service. Those require broader ownership, identity-aware access, freshness controls, and observability.
- Practical takeaway: A **Personal Context Pack and Work Log starter schema** with fields for sources, freshness, allowed use, task instructions, decisions, action state, corrections, and review date.
- Decision rule: Do not use a saved context item or remembered AI claim as the basis for consequential work when its source, freshness, permission boundary, or relevance to the current task is unclear.
- Source notes: `docs/adoption-stages.md` Stage 1 teaching points, cross-cutting permissions/context practice, and authority continuum; `docs/roadmap.md` trusted-context carry-forward commitment; `content/notes/bottlenecks.md` context, memory, and permission sections; `content/notes/NOTES.md` Notion knowledgebase and project-pattern ideas.
- Additional notes: This guide should explain Notion or similar services as current examples, but must not present a personal setup as a substitute for the Stage 4 trusted context layer.
- Status: planned

### Use Skills, Integrations, and Computer Actions With a Human in Control

- Format: implementation guide
- Primary stage: Personal Leverage
- Referenced from: **Connect AI With Intent: Skills, Integrations, and Computer Actions.**
- Reader/job: Practitioners configuring a personal AI tool, skill, extension, integration, or computer-use feature who need a practical way to grant only appropriate access and keep consequential work under human control.
- Goal: Provide a tactical setup and review method for personal connected AI use: deliberate task scope, least privilege, approved data, explicit confirmation, and quick revocation when the practice or tool changes.
- Core argument: The useful question is not “Can this agent connect?” It is “What narrow task needs this connection, what is the minimum access it requires, and where does a person retain control?” Connected capability without a bounded purpose creates personal tool sprawl and unnecessary exposure.
- Detailed outline:
  - Begin with a short capability inventory: task, systems or information involved, approved tool or source, required data, read versus write need, proposed computer action, and the human decision or confirmation point.
  - Walk through the Personal Access Decision: name the purpose; select the smallest permissions and shortest credential lifetime available; choose read-only access where possible; list prohibited data and actions; record revocation and review steps.
  - Explain how to evaluate a skill, extension, or connector before use: source and publisher, permissions requested, data handling, action surface, update behavior, organizational approval, and whether the user understands the failure path.
  - Define safe supervised computer use: the person remains present to inspect what is being collected or prepared, directs or explicitly confirms consequential steps, and can stop the run. A tool may draft a message, stage an edit, or prepare a form; it must not send, publish, approve, or materially update a system without explicit confirmation.
  - Use a meeting-preparation example: an assistant reads permitted calendar and document context, assembles a private brief, and drafts optional follow-up points; the user checks them before any external communication.
  - Use an engineering example: an assistant reads the permitted repository and test output, prepares a patch in a branch or staging area, and leaves the user to inspect, test, commit, and open a pull request.
  - Cover routine maintenance: remove unused connectors, revisit access after a scope change, rotate or revoke credentials through the approved path, and update the Personal Practice Canvas when an integration, skill, or model behavior changes.
  - Make escalation conditions visible: stop and seek a managed-workflow design when the tool needs unattended writes, persistent background execution, shared credentials or users, sensitive systems, material failure handling, or recurring exception recovery.
- Practical takeaway: A **Personal Access Decision worksheet** and a pre-connection checklist covering task purpose, data boundary, permission scope, action boundary, confirmation point, revocation path, and review date.
- Decision rule: If a connection cannot be narrowed to an approved purpose, minimum data and permissions, and an explicit human confirmation boundary, do not enable it as a Stage 1 personal practice.
- Source notes: `docs/adoption-stages.md` Stage 1 safety teaching points, authority continuum, and boundaries; `docs/roadmap.md` cross-cutting security and authority commitments; `content/notes/NOTES.md` approved MCP, logging, sandboxing, and approval-path notes.
- Additional notes: Keep this guide current through tool-specific reviewed dates. Do not turn it into a tool directory or imply that a vendor’s permission screen is a complete security review.
- Status: planned

### Build a Human-Reviewed Event Workflow

- Format: implementation guide
- Primary stage: Personal Leverage
- Referenced from: **Connect AI With Intent: Skills, Integrations, and Computer Actions.**
- Reader/job: Practitioners who want an email, calendar event, file change, or similar event to initiate helpful personal preparation without silently turning the workflow into autonomous action.
- Goal: Give readers a simple, tactical reference pattern for event-triggered personal AI assistance in which every consequential outcome remains in a private review queue and the person decides whether to act.
- Core argument: An event can start preparation; it cannot justify unattended authority. A safe Stage 1 event workflow gathers a narrow, permitted input, prepares a reviewable draft or recommendation, and stops for the person. It is an inbox or staging pattern, not a background agent that runs the business.
- Detailed outline:
  - Start with the hard Stage 1 rule: **event-triggered workflows may prepare work but may not execute unattended consequential actions.** An event may never directly send, publish, approve, change a consequential system record, or make an externally visible commitment.
  - Present the reference flow: **event → filter and narrow input → retrieve permitted context → AI prepares a draft, summary, or recommendation → private review queue → human checks and confirms or discards → human-performed or explicitly confirmed action**.
  - Show how to pick a narrow first use case: high-frequency but low-exposure preparation work, a clear human recipient, approved source material, an obvious review point, and a result that is still useful when the human decides not to act.
  - Work through a calendar example: a meeting event starts preparation of a briefing with agenda, approved account notes, recent work-log entries, and open questions. The output waits in a private workspace; the manager reviews it and separately decides any follow-up.
  - Work through a file-change example: an updated requirements document starts a comparison and change summary for the author. The system flags questions and drafts a checklist, but it does not alter the specification, assign work, or notify stakeholders without the author’s review.
  - Describe the minimum technical components in tool-neutral terms: event source, narrow filter, permitted context source, AI preparation step, private queue or draft location, human confirmation, and a visible way to disable the flow. Use named tools only as reviewed reference implementations when the guide is drafted.
  - Set simple operational limits appropriate to Stage 1: no recursive agents, no hidden retries that take additional action, no shared queue presented as a team service, no long-lived background ownership, and no reliance on the flow for critical deadlines or recovery.
  - Include basic failure handling: make failure visible to the person, preserve the original event or source link, avoid silently substituting missing context, and make it easy to pause or disable the flow.
  - Explain the promotion trigger: if the workflow needs recurring unattended writes, retries, exception handling, shared users, sensitive-system access, audit logs, service-level expectations, or a named operational owner, it has reached Stage 3 managed-workflow territory.
- Practical takeaway: A **Human-Reviewed Event Workflow reference pattern** and launch checklist covering trigger, allowed input, context, private review queue, prohibited actions, confirmation point, disable switch, and escalation conditions.
- Decision rule: Keep an event workflow in Stage 1 only if it stops before a consequential action and a person can inspect the relevant source, result, and proposed next step before deciding what happens.
- Source notes: `docs/adoption-stages.md` Stage 1 situation, teaching points, authority continuum, and boundaries; `docs/roadmap.md` Stage 1 milestone and Managed Workflows commitments; `content/notes/project_refactor_prompt.md` Personal Use; `content/notes/NOTES.md` daily refresh, project tool, and workflow ideas.
- Additional notes: This guide deliberately uses a stronger boundary than “a human is somewhere in the loop.” The person must review before a consequential action, not merely discover and correct it afterward.
- Status: planned

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
