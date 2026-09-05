# Connect AI With Intent: Skills, Integrations, and Computer Actions

**SEO title:** Connect AI With Intent: Control Its Access and Actions

**Description:** Decide what connected AI may see, prepare, and do before granting access to your files, applications, or computer.

**Canonical slug:** `/field-notes/connect-ai-with-intent/`

**Reader/job:** Individual practitioners deciding whether an AI skill, integration, computer-use feature, or event trigger has an appropriate purpose, data scope, permission set, and human confirmation point.

**Takeaway:** A useful connection has a bounded purpose, the smallest practical access scope, and a visible point where preparation stops and human authority begins.

**Decision rule:** Do not connect a tool or enable computer action until you can explain the specific task, the minimum data and permissions it needs, what AI may prepare, and the exact point where you must confirm a consequential action.

Connecting AI to your work changes more than convenience. It changes what the system can see and what it can do.

Return to the manager preparing a weekly customer-risk brief. They have already turned a successful prompt into a [repeatable personal practice](/field-notes/prompt-is-a-moment-personal-practice-is-a-method/) and defined [how the result will be verified](/field-notes/review-is-part-of-the-work/). The slow part is now gathering the current calendar details, meeting notes, account updates, and open support issues.

An integration promises to collect everything automatically. During setup, it asks to read every calendar, access the full customer workspace, update account records, and send email.

The manager only needs a preparation brief.

The requested access describes what the integration *can* do. It does not describe what this practice *should* allow.

## One Connection Contains Several Decisions

It is easy to treat a connection as one choice: enable or cancel.

The real decision has several parts:

- **Purpose:** Which bounded task needs help?
- **Data:** What is the smallest current information set needed for that task?
- **Tool:** Is this skill, integration, or computer-use feature approved and appropriate?
- **Permission:** Does it need to read, create, update, send, or delete anything?
- **Authority:** What may AI prepare, and what must you decide or confirm?
- **Lifecycle:** How will you review, narrow, or remove the access later?

These decisions should not be collapsed into a single authorization screen.

A tool can be trusted for one purpose and still be over-permissioned for another. An approved integration can be appropriate for reading selected records but inappropriate for updating them. A computer-use feature can safely gather visible information while you supervise it and still be the wrong mechanism for an unattended action.

**Capability and authority are different decisions.**

## Start With Least Privilege

Least privilege is an old security principle with a practical personal meaning: give a user—or a process acting for that user—only the access needed for the assigned task. ([NIST](https://csrc.nist.gov/glossary/term/least_privilege))

For a personal AI practice, that means starting smaller than the tool's maximum capability:

- prefer a specific folder, project, calendar, or account set over an entire workspace;
- prefer read-only access when the task only requires reading;
- exclude secrets, personal data, and other information the approved tool may not process;
- separate preparation from sending, publishing, approving, or changing a consequential record;
- remove access when the practice ends or the connection no longer earns its place.

Read-only access is not a complete safety strategy. AI can still expose, misinterpret, or use permitted information in the wrong context. But avoiding unnecessary write access removes one class of failure: the system cannot directly change something it was never authorized to change.

The boundary must be real. If an integration has permission to write but the prompt says _do not update anything_, you have an instruction—not a read-only control.

## The Personal Access Decision

The **Personal Access Decision** is a small companion to the Personal Practice Canvas. Complete it before connecting AI to files, applications, or computer actions.

It is not a security review, procurement approval, or guarantee that a tool is safe. It helps you make your own purpose, access, and authority boundary visible while the practice remains personally operated.

Copy this block into the same approved place where you maintain the practice:

```markdown
# Personal Access Decision

## Purpose
- Task:
- Intended outcome:
- Why a connection is necessary:

## Data
- Information AI may access:
- Information AI must not access:
- Authoritative source and freshness requirement:

## Permission
- Approved tool, skill, or integration:
- Permission requested:
- Minimum permission actually required:
- Read/write boundary:

## Action
- What AI may inspect or prepare:
- Actions AI may not perform:
- Consequential decision or action that remains mine:
- Exact point where I must review and confirm:

## Lifecycle
- How I can revoke or disconnect access:
- Review date:
- Conditions that require me to narrow or remove access:
```

If you cannot fill in a field, pause the connection. Uncertainty about what a tool can access or how to revoke it is part of the decision, not an inconvenience to ignore.

## Example: Prepare the Brief, Not the Follow-Up

For the weekly customer-risk brief, the completed decision might look like this:

```markdown
# Personal Access Decision: Weekly customer-risk brief

## Purpose
- Task: Collect current material for an internal customer-risk brief each Friday.
- Outcome: A private first draft of changed commitments and open risks.
- Need: Reduce manual collection across approved sources.

## Data
- Allowed: Relevant calendar details, approved meeting notes, current account updates,
  and open support issues for the accounts in this week's review.
- Prohibited: Private calendars, unrelated customer records, credentials, and sources
  the approved AI tool may not process.
- Authority: The latest dated account note when records conflict; unresolved conflicts
  must be flagged.

## Permission
- Tool: The organization's approved AI assistant and approved connections.
- Required: Read the selected source locations and create a private draft.
- Not required: Update customer records, send email, or publish the brief.

## Action
- AI may collect, compare, organize, and draft.
- AI may not send a follow-up, change an account record, or decide what to escalate.
- I trace material claims to current sources, decide what matters, and confirm any action.

## Lifecycle
- Disconnect the sources in the tool's connection settings.
- Review monthly and whenever the source set, tool, or purpose changes.
```

The useful boundary is not _AI can access the customer system_. It is narrower: _AI may read these approved sources to prepare this private brief_.

That sentence is specific enough to challenge a permission request. If the product cannot support the boundary, you can choose a smaller connection, provide the permitted material manually, use another approved tool, or decide that the convenience is not worth the access.

## Apply the Same Decision to Different Connections

Skills, integrations, and computer actions expose different capabilities. They still need the same purpose, permission, and authority test.

### Skills

A skill is a reusable set of instructions for performing a task. Some skills only shape how AI responds. Others can call tools, read files, run code, or connect to external services.

Before using one, inspect what it expects to access and what actions it can initiate. A useful writing skill may only need the document you selected. A repository skill may need project files and test commands, but not credentials or unrelated directories. Reusability does not justify broad access.

### Integrations and MCP

An integration connects AI to another system such as a calendar, document store, project tracker, or customer platform.

The Model Context Protocol, or MCP, is one current way for an AI client to connect to servers that expose context and callable tools. ([MCP architecture overview](https://modelcontextprotocol.io/docs/learn/architecture)) Its specification includes authorization and scope-minimization mechanisms for HTTP-based connections, but those mechanisms do not decide the appropriate boundary for your task. You still decide which server to trust, which permissions to grant, and which available actions the practice may use. ([MCP authorization specification](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization))

Do not ask only, _Is this integration approved?_

Also ask:

- Which account or workspace will it connect to?
- Can access be limited to selected records or locations?
- Which operations are read-only, and which can change state?
- Where will retrieved information be processed or retained?
- Can you inspect and revoke the connection without depending on the AI assistant?

Approval is an important starting boundary. It is not a reason to grant every available permission.

### Computer Actions

Computer-use features operate through an interface: opening pages, copying information, filling fields, clicking controls, or preparing a change.

At Stage 1, keep these actions **actively supervised and interruptible**. Let AI navigate or prepare work when you can see the relevant state. Inspect the destination, values, and scope before the action crosses a consequential boundary.

An engineer, for example, might let an assistant gather failing test output and stage a proposed patch. The engineer still inspects the diff, runs the relevant tests, and decides whether to commit or open a pull request.

The final click is not the only risk. A system can make a series of plausible earlier choices that leave the wrong recipient, record, amount, branch, or file ready for confirmation. Review the prepared state, not merely the button.

## A Trigger Is Not Permission to Act

An event can make a personal practice more timely without making it autonomous.

A calendar event could trigger preparation of the customer brief. A new file could trigger a summary. A failed test could trigger collection of diagnostic context.

At Stage 1, the safe destination is a **private review queue, draft, or staging area**. The event starts preparation; it does not supply judgment or permission for a consequential action.

The calendar-triggered practice may prepare the brief before the meeting. It may not send a follow-up, publish a risk assessment, or update the customer record without the practitioner reviewing the current evidence and explicitly confirming the action.

The planned [Human-Reviewed Event Workflow guide](/guides/build-a-human-reviewed-event-workflow/) will cover the tactical setup. The boundary is useful now:

> An event may start the work. It does not inherit your authority.

## Know When the Practice Has Outgrown Stage 1

A Personal Access Decision is appropriate while you operate the practice, review its result, and retain control of consequential action.

Stop treating the setup as a personal practice when it begins to require:

- recurring unattended writes or long-running background execution;
- shared access or use by other people;
- sensitive systems or material failure consequences;
- retries, exception handling, recovery, or reconciliation;
- durable logs, auditability, service ownership, or operational support;
- a decision about whether the workflow's value justifies its ongoing cost and risk.

Those are not signs that you need a longer personal checklist. They are signs that the workflow needs a deliberate shared or managed design.

The planned [Human-Controlled Skills, Integrations, and Computer Actions guide](/guides/use-skills-integrations-and-computer-actions-with-a-human-in-control/) will provide tactical patterns for bounded personal setups. It will not turn personal permission choices into production controls.

## Connect Less, With More Purpose

Connected AI can remove tedious collection and navigation from a personal practice. That is real leverage. The shortcut is assuming that useful capability deserves every permission it requests.

Start with the task. Limit the data. Separate reading from writing. Let AI prepare work inside a visible boundary. Keep consequential decisions and actions under your explicit control. Then review or remove the connection when its purpose changes.

The goal is not to connect AI to everything you use.

It is to connect the smallest useful capability to a task you still understand and control.
