---
order: 3
slug: "managed-workflows"
title: "Stage 3: Managed Workflows"
shortLabel: "Stage 3"
situation: >-
  A team deliberately operates an AI-enabled workflow that matters to its
  work. The workflow has a defined boundary and may be human-approved or
  perform bounded internal actions, but it is not an unowned experiment.
whatChanges: >-
  The team treats the workflow as an operational service: it has an owner,
  documented scope, systems context, review design, failure handling, and
  an outcome it is expected to improve.
hasDetailedOrientation: false
challengesAndLimits:
  - >-
    A strong demo can still fail on state, exceptions, permissions,
    integration, retries, or handoffs.
  - >-
    Quality checks need realistic cases and feedback from the people
    affected by the work.
  - >-
    Monitoring, maintenance, and human review carry a real cost that can
    erase the apparent productivity gain.
  - >-
    One team can create a sound workflow without yet supplying reusable
    organizational infrastructure.
whatWeTeach:
  - >-
    A workflow card covering trigger, owner, users, systems, context,
    permissions, human review, failures, rollback, and business outcome.
  - >-
    Quality checks and evaluation proportional to exposure; baseline
    measures before investment and operational metrics after launch.
  - >-
    Human-in-the-loop design, escalation, bounded retries, logging, review
    cadence, and retirement criteria.
  - >-
    Practical patterns for narrow internal agents, governed context, and
    implementation choices that preserve control.
signalsLabel: "Signals to Move Forward"
signals: >-
  The workflow has repeatable evidence of value, known operating costs, an
  owner, and controls that support trust. Other teams now need the same
  patterns, context, or integration capability.
nextBottleneck: >-
  Turn isolated managed workflows into reusable organizational capability
  without centralizing everything into a slow approval process.
authorityLevels:
  - human-approved
  - bounded-action
authorityNote: "Managed Workflows may justify Human-approved or Bounded action."
---
