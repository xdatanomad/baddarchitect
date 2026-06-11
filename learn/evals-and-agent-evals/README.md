# Lesson Plan: Building AI Evals and Agent Evals

Last updated: June 11, 2026

## Purpose

This lesson plan is for becoming strong enough to design, build, and explain evaluation systems for production AI applications and agents.

It is aligned with the personal growth plan in `content/notes/perosnal_growth_plan.md`, especially the goal of building advisor-grade skill in:

- Golden datasets.
- Regression tests.
- Human review rubrics.
- Acceptance criteria.
- Observability and eval gates.
- Reusable templates and applied reps.

The practical outcome is not "knowing eval terminology." The outcome is a working eval practice that can be used in architecture reviews, production readiness sprints, and AI system audits.

## Target Learner

- AI architect, solution architect, staff engineer, or technical advisor.
- Comfortable with Python or TypeScript.
- Familiar with LLM applications, RAG, tool calling, and basic software delivery.
- Wants a production lens: reliability, cost, latency, safety, governance, and ROI.

## Time Commitment

Recommended cadence: 10 weeks, 3-5 hours per week.

Each week should produce a concrete artifact:

- An eval dataset.
- A rubric.
- A scorer.
- A trace review.
- A CI gate.
- A tool comparison.
- A small working eval harness.

If time is limited, skip extra reading and do the exercise. Evals are learned by judging real outputs.

## Learning Outcomes

By the end, you should be able to:

- Explain the difference between tests, evals, benchmarks, and production monitoring.
- Design evals from user jobs, failure modes, and business risk.
- Build a small golden dataset and keep it versioned.
- Write deterministic scorers, LLM-as-judge scorers, pairwise evaluators, and human review rubrics.
- Evaluate RAG quality at retrieval, context, answer, and citation levels.
- Evaluate agents at final outcome, tool call, trajectory, policy, state-change, and recovery levels.
- Use eval results to choose models, prompts, retrieval settings, tools, and orchestration patterns.
- Add evals to CI/CD without pretending subjective metrics are exact tests.
- Instrument production traces and turn failure cases into offline regression tests.
- Select eval tooling pragmatically across open-source and commercial options.

## The Core Mental Model

An eval system has five parts:

1. Task definition: What job is the AI system supposed to do?
2. Dataset: What examples represent normal use, edge cases, abuse, and high-value tasks?
3. Execution target: What prompt, workflow, RAG pipeline, or agent is being evaluated?
4. Scorers: What signals decide whether the output or behavior is good enough?
5. Decision rule: What happens when the score changes?

The fifth part is the one teams often skip. An eval without a decision rule is a dashboard, not a control mechanism.

## Source Baseline

This plan uses current public documentation and research, including:

- LangSmith evaluation concepts: offline and online evals, datasets, experiments, human feedback, code scorers, LLM-as-judge, pairwise evals, and dataset organization. See https://docs.langchain.com/langsmith/evaluation-concepts
- Braintrust evaluation workflow: playground iteration, immutable experiments, CI/CD evals, production scoring, and feedback into datasets. See https://www.braintrust.dev/docs/evaluate
- Arize Phoenix eval concepts: code and LLM evaluators, score shapes, input mapping, batch evals, datasets, and experiments. See https://arize.com/docs/phoenix/evaluation/how-to-evals
- Langfuse evaluation overview: live trace scoring, datasets, experiments, annotation queues, CI/CD experiments, and score analytics. See https://langfuse.com/docs/evaluation/overview
- Ragas docs: RAG metrics, agent/tool-use metrics, synthetic testset generation, and experiment loops. See https://docs.ragas.io/en/stable/
- Promptfoo docs: open-source CLI and library for prompt, model, RAG, CI, and red-team evaluation. See https://www.promptfoo.dev/docs/intro/
- Inspect docs: open-source evaluation framework from the UK AI Security Institute with tasks, datasets, agents, tools, scorers, sandboxes, and agent evaluation support. See https://inspect.aisi.org.uk/
- OpenAI evals guide: evals built from data source config plus graders/testing criteria. See https://developers.openai.com/api/docs/guides/evals
- OpenAI agent building guidance: agents as instructions, guardrails, tools, orchestration, tracing, and focused evals for multi-agent systems. See https://developers.openai.com/tracks/building-agents
- tau-bench paper: evaluates tool agents through interactive user simulation, domain rules, database end state, and reliability across multiple trials. See https://arxiv.org/abs/2406.12045

## Recommended Project Thread

Use one small application across the course so every module compounds.

Build a "support triage assistant" for a fictional B2B SaaS product:

- It answers policy and product questions from a small knowledge base.
- It retrieves relevant docs.
- It classifies urgency.
- It decides whether to create a ticket.
- It can call three tools: `search_docs`, `get_customer_plan`, and `create_ticket`.
- It must obey account, privacy, and escalation policies.

This is deliberately modest. It is large enough to require real eval design, but small enough to finish part-time.

## Course Structure

## Suggested 10-Week Schedule

The curriculum has 12 modules because some topics deserve separate treatment, but a 10-week part-time schedule should combine closely related work:

- Week 1: Modules 1-2, eval charter and first golden dataset.
- Week 2: Module 3, human rubric and manual review.
- Week 3: Modules 4-5, deterministic checks and first validated LLM judge.
- Week 4: Module 6, RAG evals.
- Week 5: Module 7, single-turn tool-using agent evals.
- Week 6: Module 8, multi-turn and simulated user evals.
- Week 7: Module 9, safety and abuse evals.
- Week 8: Modules 10-11, traces, online evals, and release gates.
- Week 9: Module 12, tool bake-off and market map.
- Week 10: Capstone cleanup and release recommendation.

### Module 1: What Evals Are For

Goal: Build the right instincts before choosing tools.

Concepts:

- Tests vs evals vs benchmarks vs monitoring.
- Evals as an engineering control loop, not a one-time report.
- Offline evals before deployment and online evals after deployment.
- Reference-based vs reference-free evaluation.
- Absolute scoring vs pairwise comparison.
- Why a single aggregate score hides risk.
- Why "model accuracy" is usually the wrong top-level metric for an AI application.

Best practices:

- Start from user jobs and failure modes, not from available metrics.
- Define "good" with examples before writing scorers.
- Keep a small hand-curated seed set before generating synthetic data.
- Separate blocking tests from directional eval metrics.
- Track cost and latency next to quality from the beginning.

Exercise:

Build an eval charter for the support triage assistant.

Deliverable:

- A one-page `eval-charter.md` with:
  - User job.
  - Business risk.
  - Top 10 failure modes.
  - Minimum acceptable behavior.
  - Metrics that block deployment.
  - Metrics that only inform iteration.

Suggested acceptance criteria:

- The charter names at least three quality metrics, two safety metrics, two operational metrics, and one business metric.
- Each metric has a clear owner and decision rule.

### Module 2: Datasets, Golden Sets, and Test Case Design

Goal: Learn to build datasets that represent reality instead of wishful demos.

Concepts:

- Golden datasets.
- Regression sets.
- Smoke sets.
- Adversarial sets.
- Synthetic datasets.
- Dataset versioning.
- Train/validation/test thinking for LLM applications.
- Metadata: task type, risk level, customer segment, source, expected tool use, expected policy.

Best practices:

- Start with 20-50 high-quality examples, not 1,000 weak examples.
- Include boring common cases, not only tricky cases.
- Add edge cases from production traces as soon as real usage exists.
- Keep generated examples separate until reviewed.
- Store expected outputs and grading notes, not just prompts.
- Version datasets so prompt or model changes can be compared fairly.

Exercise:

Create the first golden dataset.

Deliverable:

- `datasets/support_triage_golden.jsonl` with 30 examples.
- Each record should include:
  - `id`
  - `input`
  - `expected_behavior`
  - `expected_answer_facts`
  - `expected_tools`
  - `risk_level`
  - `tags`
  - `rubric_notes`

Suggested acceptance criteria:

- 15 normal cases.
- 5 ambiguous cases.
- 5 policy-sensitive cases.
- 3 retrieval stress cases.
- 2 malicious or prompt-injection cases.

### Module 3: Rubrics and Human Evaluation

Goal: Learn to make subjective judgment consistent enough to be useful.

Concepts:

- Human review as the starting point for many eval systems.
- Rubric design.
- Likert scores vs binary labels.
- Error taxonomies.
- Inter-rater agreement.
- Annotation queues.
- Calibration rounds.
- Reviewer fatigue and sampling.

Best practices:

- Use binary pass/fail for release gates where possible.
- Use 1-5 scores only when each level is behaviorally defined.
- Review full traces for agents, not only final answers.
- Collect rationales for failed cases.
- Re-run calibration when the product, policy, or model changes.
- Use human labels to validate LLM judges before trusting automation.

Exercise:

Design and run a human review rubric.

Deliverable:

- `rubrics/support_triage_rubric.md` with criteria for:
  - Correctness.
  - Helpfulness.
  - Grounding.
  - Policy compliance.
  - Escalation judgment.
  - Tool-use appropriateness.
- Manually review 10 outputs from the assistant.

Suggested acceptance criteria:

- Each rubric criterion has a pass/fail definition and a 1-5 scoring definition.
- Failed examples include a short failure reason and a recommended fix.

### Module 4: Deterministic Scorers and Software Tests

Goal: Use normal software testing where it fits.

Concepts:

- Exact match.
- JSON schema validation.
- Regex and substring checks.
- Classification label checks.
- Tool argument validation.
- Latency, token, and cost thresholds.
- Safety filters and blocked categories.
- Unit tests vs eval runs.

Best practices:

- Do not use an LLM judge for things code can verify.
- Make structured outputs part of the contract when the app consumes model output.
- Treat schema violations as test failures, not fuzzy eval misses.
- Keep deterministic checks cheap enough to run on every pull request.
- Use fixed seeds or multiple runs only when the target supports meaningful repeatability.

Exercise:

Write deterministic checks for the support triage assistant.

Deliverable:

- A test file that validates:
  - Output is valid JSON.
  - Required fields exist.
  - Urgency is one of an allowed enum.
  - Ticket creation is forbidden for low-risk informational questions.
  - PII is not repeated in the final answer.
  - Tool arguments use allowed customer IDs.

Suggested acceptance criteria:

- The checks run locally without calling a model.
- At least one intentionally bad fixture fails each check.

### Module 5: LLM-as-Judge and Judge Reliability

Goal: Learn when model graders are useful and when they are dangerous.

Concepts:

- Reference-based judges.
- Reference-free judges.
- Criteria-based grading.
- Few-shot grading.
- Pairwise comparison.
- Biases: verbosity preference, position bias, self-preference, model-family bias, rubric ambiguity.
- Judge calibration against human labels.
- Confidence and abstention.

Best practices:

- Use judge models for semantic or subjective checks, not schema checks.
- Provide the judge with the task, rubric, expected evidence, and output format.
- Hide irrelevant metadata that could bias the judge.
- Prefer structured judge outputs with score, label, and rationale.
- Evaluate the judge itself against human-reviewed examples.
- Track judge version, prompt version, and model version.
- Do not let a judge's explanation become proof. It is another model output.

Exercise:

Build a judge for grounded answer quality.

Deliverable:

- `judges/grounded_answer_judge.md` prompt.
- A small script or tool run that scores 20 examples.
- A comparison table of human label vs judge label.

Suggested acceptance criteria:

- Judge agrees with human labels on at least 80 percent of the 10 manually reviewed examples before being used for larger runs.
- Disagreements are categorized as rubric issue, judge issue, or human label issue.

### Module 6: RAG Evaluation

Goal: Evaluate retrieval and answer generation separately.

Concepts:

- Retrieval precision.
- Retrieval recall.
- Context relevance.
- Context faithfulness.
- Answer correctness.
- Citation accuracy.
- Hallucination detection.
- Query rewriting and reranking evaluation.
- Chunking experiments.
- Negative examples and distractor documents.

Best practices:

- Evaluate retrieval before judging the final answer.
- Store expected supporting documents or facts where possible.
- Include "answer not found" cases.
- Test with near-duplicate and outdated documents.
- Evaluate citations separately from answer tone.
- Track retrieval latency and token impact.
- Do not hide poor retrieval behind a strong model that guesses well.

Exercise:

Build a RAG eval matrix.

Deliverable:

- A 20-case RAG dataset with expected source documents.
- Compare at least two retrieval configurations:
  - Baseline vector search.
  - Vector search plus reranking or metadata filtering.
- Score:
  - Did the expected document appear in top 3?
  - Did the final answer use only retrieved evidence?
  - Did citations point to the right source?
  - Did the answer abstain when evidence was missing?

Suggested acceptance criteria:

- At least one retrieval metric and one answer metric are reported separately.
- The result includes a decision: keep baseline, change retrieval, change chunks, or change answer prompt.

Tools to try:

- Ragas for RAG metrics and testset generation.
- Arize Phoenix for traces, evals, and experiments.
- LangSmith or Langfuse for dataset and trace-backed experiments.
- Promptfoo for simple declarative RAG evals and CI runs.

### Module 7: Agent Evaluation Fundamentals

Goal: Move beyond final-answer scoring and evaluate behavior.

Concepts:

- Agent final outcome.
- Tool selection.
- Tool argument correctness.
- Tool call order.
- Trajectory quality.
- Policy adherence.
- State-change validation.
- Recovery from tool failure.
- Multi-turn consistency.
- Human-in-the-loop handoff.
- Reliability across repeated trials.

Best practices:

- Score the final state, not just the final message.
- Evaluate tool calls as first-class outputs.
- Separate "got the answer" from "used an unsafe path."
- Run important agent tasks multiple times because agent behavior can vary.
- Use simulated users for repeatable multi-turn scenarios.
- Use sandboxes for agents that can execute code, browse, edit files, or touch external systems.
- Create explicit no-op and escalation cases.

Exercise:

Evaluate a tool-using support agent.

Deliverable:

- 15 agent scenarios with expected:
  - Final answer.
  - Tool calls.
  - Tool arguments.
  - Final database or ticket state.
  - Escalation decision.
- A scorer that checks:
  - Correct tool chosen.
  - Arguments valid.
  - No forbidden tool use.
  - Final state matches expected state.

Suggested acceptance criteria:

- At least 5 scenarios require no tool call.
- At least 5 scenarios require exactly one tool call.
- At least 3 scenarios require multiple steps.
- At least 2 scenarios simulate tool failure.

Tools to try:

- Inspect for tasks, agents, tools, scorers, sandboxes, and agent evaluation.
- Braintrust for remote evals, sandboxes, experiments, and production scoring.
- LangSmith for trace-level agent evals and annotation.
- Ragas for tool call accuracy, tool call F1, and agent goal accuracy.

### Module 8: Multi-Turn and Simulated User Evals

Goal: Evaluate realistic conversations and agent-user interaction.

Concepts:

- Simulated users.
- Conversation-level grading.
- Task completion.
- Policy consistency over turns.
- Memory and context drift.
- User correction handling.
- Frustration and repeated clarification.
- pass@k or pass^k style reliability thinking.

Best practices:

- Evaluate conversation success at the task level, not turn by turn only.
- Give simulated users goals, hidden facts, and constraints.
- Keep simulator and assistant roles separated.
- Validate the final external state whenever possible.
- Measure consistency across repeated runs.
- Include impatient, vague, mistaken, and adversarial users.

Exercise:

Build five simulated customer conversations.

Deliverable:

- Five multi-turn scenarios:
  - Billing confusion.
  - Outage report.
  - Feature request.
  - Account access issue.
  - Policy-sensitive refund request.
- A task-level scorer that checks final outcome and policy compliance.

Suggested acceptance criteria:

- Each scenario runs at least three times.
- Report per-scenario success rate, average turns, tool calls, and failure mode.
- At least one scenario should expose nondeterministic agent behavior.

Research anchor:

- tau-bench is useful because it evaluates agents through dynamic user interaction, domain policy, tool use, database end state, and repeated-trial reliability.

### Module 9: Safety, Security, and Abuse Evals

Goal: Treat security and misuse as eval domains, not afterthoughts.

Concepts:

- Prompt injection.
- Data exfiltration.
- Tool misuse.
- Unauthorized action.
- PII leakage.
- Policy bypass.
- Jailbreak attempts.
- Sensitive domain refusals.
- Over-refusal.
- MCP and external tool risk.

Best practices:

- Evaluate input guardrails and output guardrails separately.
- Include malicious content in the dataset without normalizing it into the product prompt.
- Score both unsafe compliance and unnecessary refusal.
- Test whether retrieved documents can inject instructions.
- Use least-privilege tools in the eval environment.
- Keep security evals in CI for high-risk changes.
- Red-team before major production expansions.

Exercise:

Build a small red-team suite.

Deliverable:

- 25 adversarial examples:
  - 5 direct prompt injections.
  - 5 retrieved-document injections.
  - 5 PII extraction attempts.
  - 5 unauthorized action attempts.
  - 5 over-refusal checks.
- A scorecard with pass/fail and severity.

Suggested acceptance criteria:

- The suite distinguishes critical, high, medium, and low severity.
- Critical failures block deployment.
- At least one example tests tool misuse, not just text generation.

Tools to try:

- Promptfoo for automated red teaming and CI.
- Giskard for LLM vulnerability scanning and quality testing.
- Lakera Guard, Protect AI, or commercial guardrail products for runtime protection.
- OpenAI safety checks and moderation capabilities where OpenAI is in use.

### Module 10: Production Observability and Online Evals

Goal: Connect evals to production behavior.

Concepts:

- Traces.
- Runs and spans.
- Online scoring.
- User feedback.
- Human annotation queues.
- Sampling.
- Drift detection.
- Score dashboards.
- Production-to-dataset feedback loop.
- Incident review.

Best practices:

- Trace every model call, retrieval step, tool call, guardrail decision, and final output.
- Store prompt version, model version, retrieval config, tool version, user segment, latency, token count, and cost.
- Sample production traffic for quality review.
- Add failed or interesting traces back into offline datasets.
- Separate monitoring alerts from eval research dashboards.
- Watch for regressions by segment, not just aggregate score.

Exercise:

Design a trace schema and online eval loop.

Deliverable:

- `observability/trace-schema.md` defining fields to capture.
- A flow showing:
  - Production trace.
  - Online scorer.
  - Human annotation queue.
  - Dataset promotion.
  - Offline regression run.
  - Release gate.

Suggested acceptance criteria:

- The schema can explain why a bad output happened: prompt, retrieval, tool, model, policy, or user input.
- The loop includes at least one human review step.

Tools to try:

- LangSmith, Langfuse, Braintrust, Arize Phoenix, Humanloop, Helicone, Weave, HoneyHive, Datadog LLM Observability, New Relic AI monitoring, or OpenTelemetry-based custom tracing.

### Module 11: CI/CD, Release Gates, and Experiment Design

Goal: Make evals part of the delivery system.

Concepts:

- Experiment snapshots.
- Baselines.
- Regression thresholds.
- Canary releases.
- Confidence intervals.
- Multiple comparisons.
- Cost-aware evaluation.
- Flake management.
- Rollback criteria.

Best practices:

- Run a cheap smoke set on every pull request.
- Run a broader regression set before release.
- Run expensive judge evals asynchronously or nightly.
- Use stable baselines when comparing prompt, model, or retrieval changes.
- Block on deterministic failures and critical safety failures.
- Treat fuzzy score drops as review triggers unless the metric is validated.
- Keep eval configuration in version control.

Exercise:

Create an eval gate policy.

Deliverable:

- `release-gates/eval-gate-policy.md` with:
  - PR smoke evals.
  - Nightly regression evals.
  - Pre-release evals.
  - Critical failure rules.
  - Allowed score deltas.
  - Manual approval path.

Suggested acceptance criteria:

- The policy names which metrics block deployment.
- The policy names who can override a failed gate.
- The policy includes cost and runtime budget.

Tools to try:

- Promptfoo for local and CI evals.
- DeepEval for pytest-style LLM tests and CI.
- Braintrust, LangSmith, or Langfuse for experiment comparison and CI integration.
- GitHub Actions or Buildkite for scheduled and pull-request eval jobs.

### Module 12: Tool Selection and Market Map

Goal: Choose tools based on workflow fit, not popularity.

Concepts:

- Evaluation framework vs observability platform vs prompt tool vs red-team tool.
- Open-source local workflows vs commercial managed workflows.
- Dataset management.
- Experiment tracking.
- Human review.
- Production tracing.
- Online scoring.
- Security testing.
- Enterprise controls: RBAC, retention, audit logs, self-hosting, SSO.

Best practices:

- Start with a minimal local harness if the team has no eval habit yet.
- Move to a managed platform when collaboration, annotation, trace volume, or auditability matters.
- Prefer tools that support your actual stack and release process.
- Avoid a tool that only makes demos look good but cannot block bad releases.
- Test export paths before locking in.

Exercise:

Run a tool bake-off.

Deliverable:

- Pick three tools:
  - One local/open-source-first tool.
  - One observability/eval platform.
  - One RAG or agent-specific eval tool.
- Run the same 20-case dataset in each.
- Compare:
  - Setup time.
  - Dataset ergonomics.
  - Scorer ergonomics.
  - Trace support.
  - CI support.
  - Human review.
  - Cost.
  - Exportability.
  - Enterprise readiness.

Suggested acceptance criteria:

- Produce a one-page recommendation for a mid-market engineering team shipping a support agent.
- Recommendation includes a "start now" option and a "scale later" option.

## Capstone: Production Readiness Eval Harness

Build a small but credible eval harness for the support triage assistant.

Required artifacts:

- `eval-charter.md`
- `datasets/support_triage_golden.jsonl`
- `rubrics/support_triage_rubric.md`
- `judges/grounded_answer_judge.md`
- Deterministic tests for structured output and tool arguments.
- RAG eval report.
- Agent trajectory eval report.
- Red-team eval report.
- Trace schema.
- Eval gate policy.
- Tool bake-off recommendation.

Capstone success criteria:

- The harness can compare two model or prompt versions.
- It can identify at least five distinct failure modes.
- It includes both deterministic and subjective scoring.
- It evaluates retrieval separately from answer generation.
- It evaluates agent tool behavior separately from final response quality.
- It produces a release decision: ship, ship with guardrail, hold, or rollback.

## Practical Build Order

If you want the shortest path to useful skill, use this order:

1. Write the eval charter.
2. Create 30 golden examples.
3. Manually review 10 outputs.
4. Add deterministic checks.
5. Add one LLM judge and validate it against human review.
6. Add RAG retrieval metrics.
7. Add tool-call and final-state agent metrics.
8. Add five adversarial examples.
9. Add traces.
10. Add a CI smoke gate.

This sequence is intentionally boring. It mirrors how production eval systems become useful: small, concrete, repeated, and tied to release decisions.

## Common Failure Modes in Eval Programs

- Starting with tools before defining failure modes.
- Building a dataset that only covers happy-path demos.
- Using one aggregate score to approve releases.
- Trusting an LLM judge before calibrating it.
- Evaluating final answers while ignoring retrieval and tool behavior.
- Ignoring latency, cost, and escalation rate.
- Treating evals as a research activity instead of a release control.
- Letting production failures live only in dashboards instead of turning them into regression cases.
- Measuring what is easy instead of what is risky.
- Optimizing eval scores without checking user outcomes.

## Advisor-Grade Questions to Ask Any Team

Use these questions in architecture reviews:

- What user decisions or actions depend on this AI output?
- What is the cost of a wrong answer, unsafe action, or missed escalation?
- What examples define "good" for this system?
- Which failures block deployment?
- Which failures only trigger investigation?
- How do production failures become regression tests?
- Who reviews subjective quality?
- How do you know your judge is trustworthy?
- Can you compare prompt, model, retrieval, and tool changes independently?
- What do you trace for every run?
- Can you explain a bad answer after the fact?
- What is the rollback rule?

## Recommended Tool Categories

See `tools-market-map.md` for a more detailed list.

Minimal local starter stack:

- Promptfoo for declarative prompt/model/RAG evals and CI.
- DeepEval for pytest-style LLM application tests.
- Ragas for RAG-specific metrics and datasets.
- OpenTelemetry or simple structured logs for traces.

Production team stack:

- LangSmith, Braintrust, Langfuse, Arize Phoenix, or Humanloop for traces, datasets, experiments, annotation, and online evals.
- Promptfoo or Giskard for red-team/security suites.
- Inspect for advanced model, agent, sandbox, and benchmark-style evals.
- Standard CI/CD for release gates.

Enterprise concerns:

- RBAC.
- SSO.
- Audit logs.
- Data retention.
- Self-hosting or VPC deployment.
- PII handling.
- Dataset export.
- Trace sampling and retention policies.
- Vendor model and data usage terms.

## Suggested Reading and Practice

Start with:

- LangSmith evaluation concepts.
- Braintrust systematic evaluation workflow.
- Ragas RAG and agent metrics.
- Promptfoo eval and red-team docs.
- Inspect basics and agent docs.
- tau-bench paper for realistic agent eval design.

Then practice:

- Recreate one public benchmark idea in miniature.
- Convert one production-like failure into a regression case.
- Build one judge, then prove where it fails.
- Run the same dataset through two models and write a release recommendation.

## Final Decision Rule

You understand evals when you can say:

"For this AI system, these are the failure modes that matter, this dataset represents them, these scorers measure them, these traces explain them, and these gates decide whether we ship."
