# The Review Is Part of the Work.

**SEO title:** The Review Is Part of the Work: Verify AI-Assisted Work

**Description:** Apply the familiar discipline of engineering checks to AI-assisted factual, analytical, policy, creative, and technical work.

**Canonical slug:** `/field-notes/review-is-part-of-the-work/`

**Reader/job:** Individual practitioners and leaders helping them use AI-assisted outputs responsibly when factual accuracy, analytical judgment, policy boundaries, or consequential action matter.

**Takeaway:** **Verification is part of the work, not a final glance added after it.** Define expected behavior, evidence, checks, and stop conditions before you rely on an AI-prepared result.

**Decision rule:** Do not use an AI-prepared result for a consequential decision or action if you cannot state what must be checked, identify the current authoritative source or test, and recognize the condition that requires you to stop or escalate.

**Review is not work added after AI produces a result. It is part of the work.**

An AI-prepared result can look finished long before it is ready to use. A customer-risk brief repeats a commitment from last month's notes. A cost analysis says spending fell but overlooks a change in transaction volume. A policy summary gives the general rule and misses the exception that applies to this employee.

Each result is fluent. Each is plausible. A careful person might read each one twice and still miss the problem.

“Review the output” is advice. It is not a verification method.

## Engineering Already Gives Us the Model

Software teams already have a familiar response to work that can look correct while still being wrong. We do not accept a code change only because the diff is clean or the explanation is convincing. We define expected behavior, reproduce the issue, run tests, inspect the change, and use review gates appropriate to the risk.

Those checks are not perfect. A passing test does not prove that the requirement was correct, that every edge case was covered, or that the change should be released. But the discipline makes something important visible: **what evidence we expect before trusting the work.**

Internal AI use needs the same habit beyond engineering.

That does not mean building a production evaluation suite for every brief, analysis, or draft. It means applying the idea proportionally. A rough workshop list may need a quick check against the brief. A customer escalation, financial recommendation, policy interpretation, or code change needs stronger evidence and a clearer stopping point.

For a personal AI practice, start with three questions:

- What could be wrong even if the result looks convincing?
- What evidence, calculation, or test would reveal that problem?
- What uncertainty or failure would make me stop rather than keep editing?

Those answers turn review from a vague responsibility into part of the [personal practice](/field-notes/prompt-is-a-moment-personal-practice-is-a-method/).

## A Lightweight Personal Verification Compact

The **Personal Verification Compact** is a small, private-by-default agreement you make with yourself for one AI-assisted practice. It is a lightweight personal way to apply ideas that become more formal later: expected behavior, evidence, evaluation, human approval, failure boundaries, and learning from corrections.

It is not a legal contract, corporate policy, approval form, or certification that the practice is safe. It does not replace professional judgment. It gives that judgment a repeatable place in the work.

Copy the complete Markdown block below into an approved notes system, local Markdown file, or other permitted workspace. Short, specific answers are enough.

```markdown
# Personal Verification Compact

## Work and consequence
- Task and intended use:
- Who could be affected:
- Plausible consequence if the result is wrong, incomplete, or stale:

## Evidence
- Allowed sources:
- Authoritative source when information conflicts:
- Freshness requirement:

## Checks
- Claims, calculations, or output elements I must verify:
- Source check, calculation, test, comparison, or quality bar I will use:
- Assumptions or counterexamples that could change the conclusion:

## Authority and stop conditions
- What AI may prepare:
- Data or actions that are prohibited:
- Decision or consequential action that remains mine:
- Conditions that require me to stop or escalate:
- Confirmation required before anything is sent, published, approved, or changed:

## Learning
- Where I will record corrections or recurring failures:
- When I will review, narrow, pause, or retire this compact:
```

**The reusable Compact template ends here.** The next section shows the same structure filled in for one realistic personal practice.

## Example: A Weekly Customer-Risk Brief

Consider a hypothetical account manager preparing a weekly risk brief for an internal leadership meeting. They give an approved AI assistant a current account export, recent meeting notes, and a support summary.

The draft looks useful, but it says the customer committed to a September delivery date. That date appeared in an older meeting note and was replaced in a later conversation. Because the sentence fits the surrounding account history, a final read may not catch it.

The manager needs a defined check, not more concentration. A brief compact could look like this:

```markdown
# Personal Verification Compact: Weekly customer-risk brief

## Work and consequence
- Task: Prepare an internal first draft of changed commitments and open risks.
- Consequence: A stale commitment could cause the wrong escalation or leadership decision.

## Evidence
- Allowed sources: Friday account export, approved meeting notes, current support summary.
- Authority: The latest dated account note; conflicting records must be flagged.
- Freshness: Refresh the approved inputs every Friday before drafting.

## Checks
- Trace every named commitment, owner, and date to a current source.
- Confirm the reporting period and compare open risks with the prior week's brief.
- Mark unsupported or conflicting claims instead of resolving them with AI.

## Authority and stop conditions
- AI may draft and organize the brief; it may not send messages or update account records.
- The manager decides what to escalate and what to communicate.
- Stop if a required source is missing, stale, or conflicting.

## Learning
- Record corrected claims and recurring omissions in the Work Log.
- Review the compact monthly or when the source process changes.
```

The compact does not make the draft true. It makes the path to checking it visible. The manager knows which sources count, what must be traced, which conflict requires a stop, and which decision remains human.

## Different Work Needs Different Checks

The engineering habit transfers, but the actual check must fit the work. “Human-reviewed” does not describe one consistent activity.

| Type of work | Plausible failure | A useful verification pattern |
| --- | --- | --- |
| **Engineering** | A plausible patch fixes the visible symptom but changes unrelated behavior. | Reproduce the issue, confirm expected behavior, run relevant tests, inspect the diff, and review scope and security implications. |
| **Factual** | A customer brief carries forward an outdated commitment from old meeting notes. | Trace material claims and dates to current approved sources. Confirm the reporting period and expose unresolved conflicts. |
| **Analytical** | A cost summary reports a decrease without accounting for lower transaction volume. | Check the input period, definitions, denominator, formulas, and assumptions. Recalculate the decision-driving numbers and test another explanation. |
| **Policy or compliance** | A summary states the general travel rule but misses a regional or role-specific exception. | Open the current authoritative policy, confirm its effective date and scope, check known exceptions, and escalate cases requiring interpretation. |
| **Creative or communication** | A campaign draft introduces an unsupported product claim or ignores a brand constraint. | Check the approved brief, substantiation for claims, audience, rights, brand constraints, and the meaning a reasonable reader could take from the wording. |

The pattern is proportional, not ceremonial. Identify the failure that matters for this use and choose a check capable of finding it.

## Context and Memory Support Verification

Verification gets harder when the relevant context is scattered across old chats, copied notes, and tool-managed memory. A remembered answer may be useful as a lead, but it is weak evidence for consequential work when its source, date, or permission boundary is unclear.

Two separate personal aids can help.

### Personal Context Pack

A **Personal Context Pack** holds the current, permitted references and instructions needed for the present practice. It makes sources, freshness, and allowed use visible without turning every available document into AI context.

The planned implementation guide [Build a Personal Context Pack](/guides/build-a-personal-context-pack/) will cover the structure and tooling for maintaining it.

### Work Log

A **Work Log** records the decisions, actions, corrections, and open state that you deliberately choose to retain. It is selected operational memory, not a transcript of every interaction.

The planned implementation guide [Build a Personal Work Log](/guides/build-a-personal-work-log/) will cover its structure, maintenance, and supporting tools.

These aids serve different purposes and should not be confused with opaque provider-managed chat memory. The practical boundary is simple: if AI recalls a material fact but you cannot locate its current authorized source, treat the fact as unverified.

The planned [Personal AI Playbook guide](/guides/build-a-personal-ai-playbook/) will later show how to link the compact, Context Pack, Work Log, and reusable method without forcing everything into one long prompt.

## Turn Corrections Into Better Boundaries

Finding an error is not only cleanup. It is information about the practice.

If the customer brief used stale notes, update the source and freshness rule. If the cost analysis hid a denominator, add that calculation to the checks. If a policy exception was easy to miss, record the escalation condition. If a code change passed the obvious test but expanded scope, add the missing inspection step.

Record the correction where it will change the next run:

- update the Verification Compact when the check or stop condition was weak;
- update the Context Pack when a source, permission, or freshness rule changed;
- update the Work Log when a decision, correction, or open question matters later;
- update the Personal Practice Canvas when the task, boundary, or method itself needs to change.

The goal is not to document every interaction. Preserve the small amount of learning that makes the next result easier to judge.

## Keep the Stage 1 Boundary Clear

At later stages, the same concerns become formal evaluation suites, audit trails, shared controls, observability, and operational ownership. The Personal Verification Compact does not replace those systems. It is a **lightweight personal way to practice the underlying discipline** while one person still operates and reviews the work.

If a practice becomes shared, runs without active supervision, touches sensitive systems, or carries material failure cost, personal review is no longer enough. The workflow needs clearer ownership, repeatable evaluation, permission controls, failure handling, and operational accountability.

At Stage 1, AI may collect, analyze, draft, or prepare. You inspect the relevant evidence, make the consequential decision, and confirm the action.

**Verification is part of the work, not a final glance added after it.** Engineering already gives us the model: define what good looks like, choose evidence capable of exposing failure, and stop when the check does not pass.

Apply that habit to the rest of your AI-assisted work.
