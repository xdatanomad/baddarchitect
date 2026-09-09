# LinkedIn Post Workflow — State Machine (shared contract)

This file is the **single source of truth** for the workflow's labels and legal
state transitions. Both the `linkedin-post-workflow` skill and the
`scripts/social/li-state.sh` gate read it. Do not encode the state machine
anywhere else — cite this file.

## Umbrella label

Every issue in this workflow carries `linkedin-post`. The automation ignores any
issue without it.

## State labels

Exactly one state label is set on an open workflow issue at any time.

| Label | Meaning | Who acts next |
|---|---|---|
| `li:idea` | Idea created; first full pass not yet attached | agent (self-continues) |
| `li:needs-review` | Full draft attached (copy + supporting material + media section) | human |
| `li:revising` | Human asked for changes; agent working | agent |
| `li:approved` | Human approved copy + media; not scheduled or posted yet | human (`/schedule` or `/post`) |
| `li:scheduled` | Publish date set | routine publish-sweep on the due date |
| `li:publishing` | Publish gate running (transient) | `li-post.mjs` |
| `li:published` | Live on LinkedIn; permalink recorded; issue closed | — (terminal) |
| `li:parked` | Shelved; a replacement idea issue is opened; issue closed | — (terminal) |
| `li:dropped` | Killed with no replacement; issue closed | — (terminal) |
| `li:blocked` | Needs human input (publish failure, image loop exhausted, auth) | human |

Terminal states: `li:published`, `li:parked`, `li:dropped`.

## Modifier labels (may co-exist with a state label)

| Label | Meaning |
|---|---|
| `li:hold` | Automation paused for this issue until `/resume` |
| `li:type-text` / `li:type-image` / `li:type-video` | Chosen post type (exactly one) |
| `li:image-check-failed` | Last image failed text-fidelity check; blocks `/approve` |
| `li:linkedin-auth` | Publish blocked on LinkedIn token re-auth |
| `li:needs-agent` | Set by the Actions nudge; cleared when a run starts |

## Transitions

Machine-readable table. Format per row: `FROM >> TO :: TRIGGER :: GUARD`.
`li-state.sh transition <issue> <FROM> <TO>` succeeds only if a row matches
`FROM` and `TO` (exit 0); otherwise it refuses (exit 2). Guards that the script
can check itself are enforced; judgement guards are the agent's responsibility.

```transitions
li:idea          >> li:needs-review :: agent completed first pass          :: body has copy + supporting-material + media sections
li:needs-review  >> li:revising     :: /revise /caption /research /regenerate /image /image-style /script /type :: —
li:revising      >> li:needs-review :: agent posted updated draft          :: —
li:needs-review  >> li:approved     :: /approve                            :: li:image-check-failed absent
li:revising      >> li:approved     :: /approve                            :: li:image-check-failed absent
li:approved      >> li:scheduled    :: /schedule <YYYY-MM-DD>              :: date parses and is today or later
li:approved      >> li:publishing   :: /post                               :: state is li:approved
li:scheduled     >> li:publishing   :: routine publish-sweep, due date     :: scheduled date == today
li:scheduled     >> li:approved     :: /unschedule                         :: —
li:publishing    >> li:published    :: li-post.mjs exit 0                   :: permalink captured
li:publishing    >> li:blocked      :: li-post.mjs exit non-zero           :: error comment posted
li:needs-review  >> li:blocked      :: image retry cap reached             :: attempts >= CAP
li:revising      >> li:blocked      :: image retry cap reached             :: attempts >= CAP
li:blocked       >> li:publishing   :: /post                               :: prior state was publish-related
li:blocked       >> li:revising     :: /image /image-style /type           :: prior state was image-related
li:blocked       >> li:approved     :: /approve                            :: blocker cleared
li:idea          >> li:parked       :: /park <reason>                      :: —
li:needs-review  >> li:parked       :: /park <reason>                      :: —
li:revising      >> li:parked       :: /park <reason>                      :: —
li:approved      >> li:parked       :: /park <reason>                      :: —
li:scheduled     >> li:parked       :: /park <reason>                      :: —
li:blocked       >> li:parked       :: /park <reason>                      :: —
li:idea          >> li:dropped      :: /drop <reason>                      :: —
li:needs-review  >> li:dropped      :: /drop <reason>                      :: —
li:revising      >> li:dropped      :: /drop <reason>                      :: —
li:approved      >> li:dropped      :: /drop <reason>                      :: —
li:scheduled     >> li:dropped      :: /drop <reason>                      :: —
li:blocked       >> li:dropped      :: /drop <reason>                      :: —
```

## Rules

- On `/park` and `/drop`: the issue moves to the terminal label **and is
  closed**. On `/park`, the routine opens a fresh `li:idea` issue on its next
  generate run (or immediately, if the command handler does it inline).
- `/hold` adds `li:hold` without changing the state label. `/resume` removes it.
- An out-of-state command gets a short "not valid from `<state>`" comment listing
  the commands that are valid from the current state. No label change.
- Only one `li:type-*` label at a time. Changing type is a `li:revising` cycle.
- `CAP` (image text-fidelity attempts) is defined once in
  `scripts/social/config.sh`.
