# Principles

These principles constrain future implementation decisions. Keep them specific enough for coding agents to follow.

## Architecture Principles

- Business logic has one clear owner.
- External systems are isolated behind adapters or interfaces.
- Contracts are defined before parallel implementation.
- Domain behavior can be tested without live infrastructure.
- Security and permissions are part of feature contracts, not later cleanup.
- Observability is designed with each production workflow.

## Code Principles

- Prefer clear module boundaries over incidental reuse.
- Keep implementation details out of public contracts.
- Add tests at the boundary where risk is highest.
- Make failure modes explicit.
- Keep generated code consistent with existing project conventions.

## Documentation Principles

- Record durable decisions as ADRs.
- Keep roadmap status honest and current.
- Update feature contracts when behavior changes.
- Do not duplicate source of truth across files.

## Optional Stack-Specific Example

Use this only if the project chooses a Python service stack:

- Python 3.12.
- `uv` for environment and dependency management.
- Pydantic v2 models at system boundaries.
- FastAPI for HTTP APIs.
- Pytest for tests.
- Ruff and MyPy for linting and typing.
- Protocol-based interfaces for service dependencies.
- Services own business logic.
- Adapters isolate persistence and external systems.
- No business logic in API endpoints or persistence layer.
