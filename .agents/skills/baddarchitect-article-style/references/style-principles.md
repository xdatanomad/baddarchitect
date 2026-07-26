# Style Principles

## Voice

Write like a senior practitioner explaining a hard operating problem to another serious builder. The voice should be candid, calm, practical, and human.

Default posture:

- Direct, not theatrical.
- Opinionated, but willing to qualify.
- Skeptical of hype, not dismissive of progress.
- Personal where it creates credibility.
- Practical before inspirational.

Use personal voice as seasoning:

- Prefer `in our experience`, `we have seen`, or `I have seen` when the claim is genuinely experiential.
- Use `I` only when the article is drawing on a real observation or a specific author-level judgment.
- Do not invent personal stories, client experiences, or unnamed case studies.
- Do not overuse personal voice; the article is about the reader's problem, not the author's identity.

Good personal credibility moves:

- "In our experience, the successful programs acknowledged this fear first."
- "I have seen this version of adoption fail even when leaders meant well."
- "Most leaders are not trying to threaten people. But employees often hear the message differently."

Weak moves:

- "Everyone knows..."
- "The future belongs to..."
- "Companies must transform or die..."
- "In today's fast-paced AI landscape..."

## Reader Empathy

The target reader is often an executive, architect, product leader, security reviewer, or internal champion. Respect that they are busy and under pressure.

Do:

- Name the tension they are managing.
- Acknowledge good intentions before challenging bad operating moves.
- Show how employees, managers, security teams, and customers may hear the same message differently.
- Turn fear, skepticism, or friction into design input.

Do not:

- Shame leaders for wanting speed.
- Treat employees as irrational blockers.
- Pretend AI adoption is only about tools, prompts, or enthusiasm.
- Resolve real tradeoffs with reassurance.

## Cadence And Paragraph Rhythm

The preferred rhythm is visual and musical:

1. Deliver the point early.
2. Expand with a short narrative paragraph.
3. Add questions, bullets, evidence, or an example.
4. Use a one-liner only when the reader should pause.
5. Move into the next practical implication.

One-liners are emphasis, not default texture. Use them for:

- A thesis turn: "Access is not adoption."
- A contrast: "The demo matters. The workflow is where the value lives."
- A hard boundary: "That is not transformation. That is unmanaged sprawl."
- A conclusion beat: "Then participation. Then workflow."

Avoid stacking many one-liners in a row unless the section is intentionally closing or tightening.

## Formatting

Use Markdown as a reading aid:

- **Bold** key operating concepts, decision words, or phrases the reader should retain.
- _Italics_ for quoted internal messages, leadership lines, or sharp contrasting statements.
- Bullets for questions, checklists, contrasts, and operating rules.
- Numbered lists for ordered playbooks, maturity levels, gates, or steps.
- Avoid decorative formatting and HTML breaks unless the target renderer requires it.

Formatting should guide attention, not compensate for weak prose.

## Evidence And Citations

The project separates experience, interpretation, and external claims.

Use citations when:

- A statistic, survey, regulation, standard, or named external event supports the point.
- A claim depends on current vendor capabilities, market state, or research.
- The source increases credibility without taking over the article.

Do not use citations to outsource the argument. The article should still explain why the evidence matters for the reader's operating decision.

Citation pattern:

1. State the practical tension.
2. Cite one strong source.
3. Interpret it in plain language.
4. Connect it to the operating move.

Example:

```markdown
Gallup's workplace research points to the same practical issue: employees use AI more when tools fit existing systems, managers support experimentation, and clear policies exist. ([Gallup, 2026](...))

That last point matters.

Access is not adoption.
```

## Practical Value

Every publishable article should give the reader at least one usable object:

- Decision rule
- Checklist
- Operating compact
- Exposure gate
- 30-day plan
- Workflow map
- Architecture blueprint
- Questions to take into a meeting

The object should be small enough to use. Avoid giant frameworks unless the article truly needs them.

## Anti-Patterns

Remove or rewrite:

- Hype language: "revolutionize", "unlock limitless potential", "game-changing" unless quoted and criticized.
- Generic transformation prose.
- Moralizing without operational guidance.
- Unsupported certainty about job loss, ROI, safety, or future market winners.
- Long blocks of same-length paragraphs.
- Too many one-liners in sequence.
- Bold on every interesting word.
- Fake specificity: unnamed case studies, invented metrics, imaginary executive quotes.
- Advice that sounds right but gives the reader no next move.
