# Examples

Use these examples to show the expected level of specificity. Adapt the domain and stack to the user's project.

## Table Of Contents

- Good Capability
- Good Dependency Map
- Good Epic
- Good Feature Contract
- Good Task Spec
- Optional Opinionated Stack Example

## Good Capability

```markdown
## Capability: Knowledge Base

- Purpose: Let workspace members store, process, search, and reference project documents.
- Users or actors: Workspace members, background processors, AI agent runtime.
- Core responsibilities: Document metadata, version history, processing state, searchable content access.
- Data owned: Document records, versions, processing status, extracted text references.
- External dependencies: Object storage, document parser, embedding/search service.
- Risks: Large file handling, tenant isolation, stale search indexes, processing retries.
- Not included: Chat UI, billing, user invitation flows.
- MVP status: MVP
```

Why this is good:

- It names ownership.
- It separates the capability from UI features.
- It exposes dependencies and risks early.

## Good Dependency Map

```text
Authentication
 +-- None

Users
 +-- Authentication

Workspaces
 +-- Users

Knowledge Base
 +-- Workspaces

AI Agent Runtime
 +-- Knowledge Base

Reporting
 +-- AI Agent Runtime
```

Sequential work:

1. Authentication before users.
2. Users before workspaces.
3. Workspaces before tenant-scoped knowledge base.

Parallel work:

1. Reporting design can proceed in parallel after AI runtime event contracts are defined.
2. Document parser adapter can proceed in parallel after the knowledge base processing contract is defined.

## Good Epic

```markdown
# Epic: Document Processing

## Parent Capability

- Capability: Knowledge Base
- Roadmap status: planned

## Outcome

Uploaded documents move from raw files to searchable, versioned, processing-aware records.

## Domain Model

### Entities

- Document
  - Fields: id, workspace_id, title, current_version_id, status, created_at
  - Invariants: belongs to one workspace; current version must reference an existing version
- DocumentVersion
  - Fields: id, document_id, file_uri, content_hash, created_by, created_at
  - Invariants: content hash is immutable after creation

### State Transitions

- uploaded -> queued
- queued -> processing
- processing -> indexed
- processing -> failed

## API Or Interface Contract

- Inputs: document id, version id, file location
- Outputs: processing status, extracted content reference, failure reason
- Errors: unsupported file type, file unavailable, parser failure
- Versioning: processing event schema includes version field

## Acceptance Criteria

- New uploads are queued for processing.
- Failed processing records a retryable or terminal reason.
- Indexed documents are available to search only inside their workspace.
```

## Good Feature Contract

```markdown
# Feature Contract: Document Upload

## Parent

- Capability: Knowledge Base
- Epic: Document Storage

## Actor Or Trigger

- Actor: Authenticated workspace member
- Trigger: User selects a PDF and submits upload

## Requirements

- Accept PDF files up to the configured size limit.
- Store file metadata and immutable version metadata.
- Associate the document with exactly one workspace.
- Emit one processing event after successful metadata persistence.

## Inputs

| Input | Type / Shape | Required | Validation |
| --- | --- | --- | --- |
| workspace_id | string/id | yes | User must be a member |
| file | PDF binary | yes | MIME/type and size limit |
| title | string | no | Default to filename |

## Outputs

| Output | Type / Shape | Notes |
| --- | --- | --- |
| document_id | string/id | Stable document identity |
| version_id | string/id | Immutable uploaded version |
| status | enum | `queued` after success |

## Errors And Edge Cases

- Unauthorized workspace access: reject without storing the file.
- Unsupported file type: reject with validation error.
- Processing event failure after metadata commit: record pending event for retry.

## Acceptance Criteria

- PDF uploads successfully.
- Metadata is searchable by title.
- Version history is preserved.
- Processing event is emitted or durably queued exactly once.
```

## Good Task Spec

```markdown
# Task: Implement Document Upload Service

## Source Contract

- Feature contract: `docs/features/document-upload.md`
- Parent epic: Document Storage
- Parent capability: Knowledge Base

## Goal

Create the service-layer behavior for validating, storing, versioning, and queuing document uploads.

## Requirements

- Enforce workspace membership before file persistence.
- Create document and version records in one transactional boundary where the chosen stack supports it.
- Emit or durably queue the processing event after metadata persistence.
- Return document id, version id, and queued status.

## Deliverables

- Service interface or public function.
- Implementation using existing storage and repository boundaries.
- Unit tests for authorization, validation, version creation, and event behavior.
- Documentation update if the contract changes.

## Verification

- Run the relevant unit tests.
- Confirm no API endpoint owns business logic directly.
```

## Optional Opinionated Stack Example

Use this only as an example of a coherent stack decision. Do not impose it on unrelated projects.

```markdown
## Example Stack Decision

- Runtime: Python 3.12
- Dependency management: uv
- API: FastAPI
- Data contracts: Pydantic v2
- Testing: Pytest
- Static checks: Ruff and MyPy
- Boundaries: services own business logic, adapters isolate infrastructure, protocols define contracts
```
