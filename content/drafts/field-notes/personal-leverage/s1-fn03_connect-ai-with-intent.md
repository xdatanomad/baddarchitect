# Connect AI With Intent: Skills, Integrations, and Computer Actions.

**SEO title:** Connect AI With Intent: Control AI Tool Access  
**Description:** Use AI skills, integrations, event triggers, and computer actions with deliberate data access, minimum permissions, and human-controlled action boundaries.  
**Canonical slug:** `/field-notes/connect-ai-with-intent/`  
**Reader/job:** Individual practitioners, and the leaders or architects enabling them, who need to decide whether a connected AI tool has an appropriate purpose, data scope, permission set, and human confirmation point.  

**Takeaway:** Connect AI to a specific task, not to everything it might someday help with. Give it the smallest practical access, let it prepare work in a reviewable place, and keep consequential action under deliberate human control.

**Decision rule:** Do not connect a tool or enable computer action until you can explain the task, the minimum data and permissions it needs, what it may prepare, and the exact point at which a person must confirm a consequential action.

A useful AI feature asks to connect to your calendar. Then it asks for your email, contacts, files, and permission to send messages.

The task was simple: prepare a brief before a customer meeting. The connection is not.

This is the capability trap. A skill, integration, or computer-use feature can create personal leverage because it can reach the context and tools where work happens. The same connection can expose more information or enable more action than the task requires.

The mistake is not using connected AI. It is treating access as a convenience setting rather than part of the practice design.

## Capability Is Not Authority

Connected AI features take different forms, but the operating question is the same:

- A **skill** packages instructions, tools, or a repeatable method for a task.
- An **integration** connects AI to another source or system, such as a calendar, document store, project tool, or repository.
- A **computer action** lets AI interact with an interface by navigating, entering information, or selecting controls.
- An **event trigger** starts work when something changes, such as a calendar event, email, or updated file.

These mechanisms describe what a tool can do. They do not decide what it should be allowed to do for your task.

That second decision belongs to the person using it.

An approved integration may still request unnecessary access. Read access may reveal information outside the practice. Write access may change the wrong record. A computer action may target a similarly named customer, project, or file. A trigger may keep running after the context or purpose has changed.

“The tool supports it” is a capability statement. It is not an authority model.

For a Stage 1 personal practice, start with four levels:

| Level | What AI may do | Stage 1 boundary |
| --- | --- | --- |
| **Inspect** | Read a narrow, permitted source. | Prefer the smallest useful source set and read-only access. |
| **Prepare** | Summarize, draft, fill a private form, or stage a proposed change. | Keep the result reviewable and separate from the consequential system of record. |
| **Propose** | Show the exact message, update, command, or other action it recommends. | Expose the target, affected data, and expected effect before confirmation. |
| **Act** | Send, publish, approve, delete, commit, purchase, or update a consequential record. | The person performs the action or explicitly confirms that exact action while actively supervising it. |

Confirmation does not make every action appropriate. If a mistake would be difficult to detect or reverse, or could materially affect another person, customer, or system, stop and use a more deliberate workflow and approval path.

Unattended action is a different operating problem. A background workflow that writes to important systems, serves multiple people, or must recover from failures needs ownership, logs, exception handling, and stronger controls. It should not be smuggled into Stage 1 through a convenient toggle.

## Start With the Task, Then Grant Access

Permission screens encourage the opposite sequence: connect first, discover uses later. That is an easy way to accumulate access without remembering why it was granted.

Start with the [personal practice](/field-notes/prompt-is-a-moment-personal-practice-is-a-method/) instead:

1. **Name the task.** Describe the bounded work and the useful result.
2. **Choose the data.** Identify the smallest current, permitted source set the task needs.
3. **Choose the capability.** Decide whether AI needs to inspect, prepare, propose, or act.
4. **Limit the permission.** Prefer read-only, narrow scopes, and a private draft or staging area where practical.
5. **Place the confirmation.** Put human review immediately before the consequential action, with the exact target and change visible.
6. **Plan the exit.** Know how to disable the feature, revoke the connection, and remove access when the practice changes or stops.

Sometimes a provider offers only broad permission scopes. That does not make the broad scope necessary. Use a narrower tool, provide an approved export manually, or decide that the convenience is not worth the exposure.

Least privilege is not a slogan here. It is the discipline of refusing access that the current task cannot justify.

## The Personal Access Decision

The **Personal Access Decision** is a small companion to the Personal Practice Canvas. Complete it before enabling a skill, integration, trigger, or computer-action feature for one practice.

It is not a security assessment, approval form, or certification that a tool is safe. It records the purpose and boundaries you are relying on so that access does not become invisible after setup.

Copy the Markdown block below into an approved notes system, local Markdown file, or other permitted workspace. Short answers are enough.

```markdown
# Personal Access Decision

## Purpose
- Practice and specific task:
- Useful result:
- Why a connection or computer action is needed:

## Data boundary
- Sources AI may access:
- Data it must not access, receive, or expose:
- Smallest practical source scope:

## Tool and permissions
- Approved skill, integration, or feature:
- Publisher or owner and approval source:
- Read permissions required:
- Write or computer-action permissions required, if any:
- Requested permissions I will not grant:

## Action boundary
- AI may inspect:
- AI may prepare or stage:
- AI may propose:
- AI must not do:
- Exact action and target a person must perform or confirm:

## Control and maintenance
- Where the result waits for review:
- What must be visible at confirmation:
- How to stop the current action:
- How to disable the feature or revoke access:
- Review date or event:
```

**The reusable decision ends here.** Revisit it when the task, data, tool, or requested permissions change. Remove the connection when there is no longer a current purpose for it.

## Example: Prepare for the Meeting, Then Stop

Consider a manager who wants a private brief before each customer meeting. A calendar event supplies the customer name and meeting time. An approved integration retrieves the current account note and open support issues. AI prepares a brief with changed commitments, unresolved risks, and questions to raise.

That can be a useful personal practice without granting authority to communicate or update the account.

The manager's access decision might say:

- **Purpose:** Prepare a private briefing for meetings on the manager's calendar.
- **Data:** Read the matched calendar event, approved account folder, and current support summary—not the entire mailbox or unrelated customer folders.
- **Preparation:** Create a draft in the manager's private review queue with links to the source material.
- **Prohibited actions:** Do not email attendees, update the customer record, change a commitment, or create follow-up tasks.
- **Human boundary:** The manager verifies material claims using the [Personal Verification Compact](/field-notes/review-is-part-of-the-work/), decides what to raise, and performs any follow-up separately.
- **Exit:** Disable the trigger and revoke the connection when the meeting-preparation practice stops or its source systems change.

The calendar event starts preparation. It does not grant permission to act.

The same rule applies to instructions found inside connected content. An email, document, issue, or webpage may contain text telling the assistant to ignore its task, retrieve another source, or take an action. Treat that text as untrusted content to inspect, not as permission to expand the task or authority boundary.

The original access decision still governs.

The planned guide [Build a Human-Reviewed Event Workflow](/guides/build-a-human-reviewed-event-workflow/) will develop this pattern: event, narrow input, permitted context, prepared result, private review queue, human decision.

## Supervise Computer Actions at the Action Boundary

Computer actions make access visible because you can often watch the interface change. Visibility helps, but watching a cursor move is not the same as controlling the outcome.

A useful confirmation should occur as close as practical to the consequential action. It should show:

- the system and exact target;
- the message, record change, command, or other proposed action;
- the data that will be submitted or exposed;
- whether the action can be reversed;
- what will happen after confirmation.

Avoid blanket confirmation at the beginning of a long sequence. Approving “help me with this issue” should not silently authorize every click that becomes possible later.

For example, an engineer may let an assistant inspect permitted repository files and failing test output, run approved local checks, and prepare a patch in an isolated working copy. The assistant may explain the proposed change and leave a visible diff for review.

The engineer still checks the scope and security implications, runs the relevant tests, and decides whether to commit, push, or open a pull request. The prepared patch is reversible working material. The repository action remains deliberate.

The planned guide [Use Skills, Integrations, and Computer Actions With a Human in Control](/guides/use-skills-integrations-and-computer-actions-with-a-human-in-control/) will cover tool evaluation, permission review, supervised-action patterns, and routine access maintenance in more depth.

## Know When This Is No Longer Personal Leverage

A Personal Access Decision is appropriate while one person operates a bounded practice and remains responsible for its context, review, and action.

Stop treating the setup as Stage 1 when it requires:

- recurring unattended writes or externally visible actions;
- persistent background execution or long-lived credentials;
- shared users, credentials, queues, or team dependence;
- access to sensitive systems with material failure cost;
- retries, recovery, or exception handling that must work without the person present;
- auditability, service expectations, or a named operational owner.

These are not reasons to abandon the workflow. They are signs that the workflow needs deliberate managed design rather than another personal connection.

Connected AI can be genuinely useful. It can bring current context into a task, prepare work where that work will be reviewed, and reduce repetitive navigation. None of that requires giving the tool every permission it can request or treating unattended action as progress.

Start with intent. Grant the smallest useful access. Keep the work inspectable. Confirm the consequential action.

Capability creates options. Authority remains a design decision.
