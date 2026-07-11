# Evals and Agent Evals Tool Market Map

Last updated: June 11, 2026

This is a practical map, not an endorsement list. The right tool depends on workflow maturity, team size, risk, data sensitivity, and how close the eval system needs to be to production release gates.

## Selection Criteria

Use these criteria when comparing tools:

- Dataset management: examples, metadata, versions, splits, imports, exports.
- Experiment tracking: compare prompt, model, retrieval, and code variants.
- Scorers: deterministic, LLM-as-judge, pairwise, human, custom code.
- Agent support: traces, tool calls, trajectories, final state, multi-turn runs, sandboxes.
- RAG support: retrieval metrics, context quality, faithfulness, citations, testset generation.
- Production observability: traces, spans, live scoring, dashboards, alerting.
- Human review: annotation queues, reviewer assignment, calibration, feedback export.
- CI/CD: command-line support, GitHub Actions, release gates, scheduled runs.
- Security: prompt injection tests, jailbreaks, data leakage, tool misuse, red-team automation.
- Enterprise controls: RBAC, SSO, audit logs, data retention, self-hosting, VPC, PII controls.
- Cost and lock-in: pricing model, exportability, local execution, vendor-neutral providers.

## Open-Source and Local-First Tools

### Promptfoo

Best for:

- Developer-friendly prompt, model, RAG, and red-team evals.
- Declarative test cases.
- CLI and CI workflows.
- Teams that want to start locally without a platform rollout.

Strengths:

- Fast setup.
- Works across providers.
- Good for regression suites and adversarial testing.
- Can run locally and integrate with CI.

Watch-outs:

- For deep production trace workflows, you may pair it with an observability platform.

Source: https://www.promptfoo.dev/docs/intro/

### DeepEval

Best for:

- Pytest-style LLM application tests.
- Component-level evals.
- CI/CD checks.
- Teams that prefer code-native Python tests.

Strengths:

- Familiar test-runner mental model.
- Supports RAG, agentic, multi-turn, MCP, safety, and non-LLM metrics.
- Integrates with Confident AI for centralized reporting.

Watch-outs:

- Tooling is strongest when the team is comfortable with Python test workflows.

Source: https://deepeval.com/docs/getting-started

### Ragas

Best for:

- RAG metrics.
- RAG testset generation.
- Agent/tool-use metrics.
- Experiment loops for AI application quality.

Strengths:

- Strong RAG vocabulary: context precision, context recall, response relevancy, faithfulness, answer accuracy, groundedness.
- Agent metrics include tool call accuracy, tool call F1, and agent goal accuracy.
- Integrates with common frameworks.

Watch-outs:

- Still requires careful dataset and rubric design. Metrics do not replace product judgment.

Source: https://docs.ragas.io/en/stable/

### Inspect

Best for:

- Advanced model and agent evaluation.
- Benchmark-style evals.
- Agent tasks with tools and sandboxes.
- Safety, security, coding, reasoning, and multimodal evals.

Strengths:

- Developed by the UK AI Security Institute and Meridian Labs.
- Built around tasks, datasets, solvers/agents, tools, and scorers.
- Supports custom tools, MCP tools, built-in tools, sandboxes, and external agents.
- Useful for realistic agent evals where the environment matters.

Watch-outs:

- More framework-like than dashboard-like. Expect engineering setup.

Source: https://inspect.aisi.org.uk/

### Giskard

Best for:

- LLM vulnerability scans.
- Quality and security testing.
- Red-team style checks for hallucination, prompt injection, and data leakage.

Strengths:

- Useful when safety and security evals need a repeatable workflow.
- Can complement normal quality evals.

Watch-outs:

- Treat scanner output as a starting point; validate important findings manually.

Source: https://docs.giskard.ai/

### OpenTelemetry and OpenInference

Best for:

- Vendor-neutral tracing.
- Teams that want AI traces to fit existing observability standards.
- Connecting traces to platforms like Phoenix, Langfuse, or custom systems.

Strengths:

- Avoids making tracing purely vendor-specific.
- Useful for model calls, retrieval spans, tool spans, and latency/cost attribution.

Watch-outs:

- You still need eval logic, annotation, and datasets somewhere.

Sources:

- https://opentelemetry.io/
- https://github.com/Arize-ai/openinference

## Commercial and Managed Platforms

### LangSmith

Best for:

- LangChain/LangGraph-heavy teams.
- Datasets, experiments, traces, human annotation, online and offline evals.
- Agent trace inspection and regression workflows.

Strengths:

- Strong lifecycle model: offline evals, online evals, traces, threads, annotation queues, dataset versions.
- Supports human, code, LLM-as-judge, and pairwise evaluators.
- Good fit when agent trajectories matter.

Watch-outs:

- Best experience if the team is already using LangChain or LangGraph, though it can be used more broadly.

Source: https://docs.langchain.com/langsmith/evaluation-concepts

### Braintrust

Best for:

- Systematic eval workflows from playgrounds to experiments to CI/CD to production scoring.
- Teams that want prompt management, evals, logs, human review, and online scoring in one platform.

Strengths:

- Clear workflow: iterate, promote immutable experiments, automate in CI/CD, score production, feed traces back into datasets.
- Good support for custom tasks and scorers.
- Useful for product and engineering collaboration.

Watch-outs:

- As with any managed platform, confirm data retention, export, and access-control requirements early.

Source: https://www.braintrust.dev/docs/evaluate

### Arize Phoenix

Best for:

- Open-source observability and eval workflows.
- Traces, datasets, experiments, LLM evaluators, code evaluators.
- Teams that want local/open-source plus hosted options.

Strengths:

- Clear evaluator abstraction with score objects.
- Supports code and LLM evaluators, input mapping, batch evals, datasets, and experiments.
- Strong observability orientation.

Watch-outs:

- Requires thoughtful instrumentation to get full value from traces.

Source: https://arize.com/docs/phoenix/evaluation/how-to-evals

### Langfuse

Best for:

- Open-source LLM observability with eval workflows.
- Live trace scoring, annotation, datasets, experiments, CI/CD checks, score analytics.

Strengths:

- Strong production loop: score live traces, promote examples into datasets, run experiments, compare changes.
- Open-source and self-hosting options.
- Works well when trace analytics and product feedback are central.

Watch-outs:

- As with all tracing platforms, taxonomy and metadata discipline matter.

Source: https://langfuse.com/docs/evaluation/overview

### Humanloop

Best for:

- Prompt management, evals, human feedback, and product collaboration.
- Teams that want PMs, domain experts, and engineers in one AI iteration loop.

Strengths:

- Good for human feedback and prompt lifecycle workflows.
- Useful where non-engineers need to review outputs.

Watch-outs:

- Validate fit for agent trajectory and final-state evals if your system is tool-heavy.

Source: https://humanloop.com/

### Confident AI

Best for:

- Managed reporting and observability paired with DeepEval.
- Teams already using DeepEval locally and wanting centralization.

Strengths:

- Smooth path from local eval tests to hosted reports.
- Useful for CI visibility and team review.

Watch-outs:

- Best fit when DeepEval is the core local framework.

Source: https://www.confident-ai.com/

### HoneyHive

Best for:

- LLM observability, evaluation, prompt management, and collaborative iteration.

Strengths:

- Focuses on the full AI engineering loop: logs, datasets, evals, prompts, and experiments.

Watch-outs:

- Compare export, self-hosting, and enterprise controls against your requirements.

Source: https://www.honeyhive.ai/

### Helicone

Best for:

- LLM gateway observability.
- Request logging, cost tracking, latency, caching, and basic eval/feedback workflows.

Strengths:

- Practical for teams that need model usage visibility quickly.
- Useful gateway pattern for cost and latency attribution.

Watch-outs:

- Pair with deeper eval tooling if you need rich datasets, annotation, or agent trajectories.

Source: https://www.helicone.ai/

### Weave

Best for:

- Experiment tracking and observability for LLM applications, especially for teams already using Weights & Biases.

Strengths:

- Good fit for ML teams that already understand experiment tracking.
- Useful for tracing, datasets, and evaluations.

Watch-outs:

- Evaluate workflow fit for product-heavy human annotation.

Source: https://wandb.ai/site/weave/

## Provider-Native Evals

### OpenAI Evals

Best for:

- Teams building heavily on OpenAI APIs.
- Model, prompt, and grader-backed evaluation workflows.
- Using structured graders/testing criteria with OpenAI tooling.

Strengths:

- Native fit for OpenAI model and prompt optimization workflows.
- Evals are organized around test data and graders/testing criteria.

Watch-outs:

- Keep vendor-neutral datasets and exported results if model portability matters.

Source: https://developers.openai.com/api/docs/guides/evals

### OpenAI Agents SDK and Tracing

Best for:

- OpenAI-based agents using instructions, tools, guardrails, orchestration, and tracing.
- Focused evals for scoped agents and multi-agent workflows.

Strengths:

- Agent loop, handoffs, guardrails, sessions, and tracing are part of the framework.
- Helpful when tool behavior and orchestration need visibility.

Watch-outs:

- Still design your own domain-specific success criteria and datasets.

Source: https://developers.openai.com/tracks/building-agents

## Security and Guardrail Tools

### Promptfoo Red Teaming

Best for:

- Automated jailbreak, prompt injection, data leakage, policy, and compliance test suites.
- CI-friendly red-team checks.

Source: https://www.promptfoo.dev/docs/intro/

### Lakera Guard

Best for:

- Runtime protection against prompt injection, malicious prompts, and unsafe content.

Source: https://www.lakera.ai/

### Protect AI

Best for:

- AI security posture, model and supply-chain security, and enterprise AI governance.

Source: https://protectai.com/

## Benchmark References for Agent Evals

Use public benchmarks to learn patterns, not as a substitute for your product evals.

### tau-bench

What to learn:

- Interactive user simulation.
- Domain policy evaluation.
- Tool use.
- Database final-state validation.
- Reliability across repeated trials.

Source: https://arxiv.org/abs/2406.12045

### SWE-bench

What to learn:

- Task completion in real software repositories.
- Patch correctness against tests.
- Agent performance on coding tasks.

Source: https://www.swebench.com/

### WebArena and OSWorld

What to learn:

- Browser and computer-use agent tasks.
- Evaluating agents in realistic environments.

Sources:

- https://webarena.dev/
- https://os-world.github.io/

### Berkeley Function-Calling Leaderboard

What to learn:

- Function-call correctness.
- API argument generation.
- Multi-language and tool-use evaluation.

Source: https://gorilla.cs.berkeley.edu/leaderboard.html

## Pragmatic Recommendations

For an individual learning evals:

- Start with Promptfoo, DeepEval, Ragas, and simple JSONL datasets.
- Add Inspect when you want more realistic agent and sandbox evaluation.
- Use a spreadsheet for human review until annotation workflow becomes painful.

For a startup or small team:

- Use Promptfoo or DeepEval for CI.
- Use Langfuse or Phoenix for traces and experiments.
- Add Ragas for RAG-specific metrics.
- Add security suites before onboarding real customer data.

For a mid-market or enterprise team:

- Choose one central observability/eval platform: LangSmith, Braintrust, Langfuse, Phoenix/Arize, Humanloop, or similar.
- Keep datasets and eval configs version-controlled where possible.
- Require RBAC, SSO, audit logs, retention controls, and export paths.
- Add red-team and security evals as release gates for tool-using agents.

For advisory work:

- Do not sell a tool first.
- Sell the evaluation operating model:
  - What matters.
  - What to measure.
  - How to collect examples.
  - How to review failures.
  - How to block bad releases.
  - How to turn production traces into regression tests.

