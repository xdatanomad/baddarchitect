#!/usr/bin/env bash
# The only sanctioned way to change a workflow issue's state label.
# Validates every change against .agents/skills/linkedin-post-workflow/references/state-machine.md
#
# Usage:
#   li-state.sh current <issue>
#       Print the issue's current state label.
#
#   li-state.sh edges
#       Print all legal "from -> to" edges (debug).
#
#   li-state.sh check <issue> <to>
#       Exit 0 if moving the issue to <to> is a legal edge from its current
#       state; exit 2 otherwise. No change made.
#
#   li-state.sh transition <issue> <to> [--from <expected-from>] [--note <text>]
#       Verify the edge is legal (and, if --from given, that it matches the
#       current state), then swap the state label. Terminal states
#       (published/parked/dropped) also close the issue.
#       Exit 2 = illegal edge / from mismatch. Exit 0 = applied (or already there).

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/common.sh"

usage() { sed -n '2,/^set -euo/p' "$0" | sed 's/^# \{0,1\}//; s/^set -euo.*//'; exit 64; }

cmd="${1:-}"; shift || usage

case "$cmd" in
  edges)
    li_state_edges
    ;;

  current)
    [ $# -eq 1 ] || usage
    li_current_state "$1"
    ;;

  check)
    [ $# -eq 2 ] || usage
    n="$1"; to="$2"
    from="$(li_current_state "$n")"
    if [ "$from" = "$to" ]; then echo "noop: already $to"; exit 0; fi
    if li_edge_is_legal "$from" "$to"; then
      echo "ok: $from -> $to"; exit 0
    fi
    echo "illegal: $from -> $to" >&2
    echo "legal from $from:" >&2
    li_state_edges | grep "^$from|" | sed 's/|/ -> /' >&2 || true
    exit 2
    ;;

  transition)
    [ $# -ge 2 ] || usage
    n="$1"; to="$2"; shift 2
    expected_from=""; note=""
    while [ $# -gt 0 ]; do
      case "$1" in
        --from) expected_from="$2"; shift 2 ;;
        --note) note="$2"; shift 2 ;;
        *) usage ;;
      esac
    done

    li_state_label_names | grep -Fxq "$to" || li_die "not a state label: $to"
    from="$(li_current_state "$n")"

    if [ -n "$expected_from" ] && [ "$expected_from" != "$from" ]; then
      echo "from-mismatch: expected $expected_from, issue #$n is $from" >&2
      exit 2
    fi

    if [ "$from" = "$to" ]; then
      echo "noop: issue #$n already $to"
      exit 0
    fi

    if ! li_edge_is_legal "$from" "$to"; then
      echo "illegal: $from -> $to (issue #$n)" >&2
      li_state_edges | grep "^$from|" | sed 's/|/ -> /' >&2 || true
      exit 2
    fi

    li_gh issue edit "$n" --remove-label "$from" --add-label "$to" >/dev/null
    echo "transitioned: issue #$n  $from -> $to${note:+  ($note)}"

    if li_is_terminal_state "$to"; then
      li_gh issue close "$n" --reason completed >/dev/null 2>&1 || li_gh issue close "$n" >/dev/null
      echo "closed: issue #$n ($to)"
    fi
    ;;

  ""|-h|--help|help)
    usage
    ;;
  *)
    li_die "unknown subcommand: $cmd"
    ;;
esac
