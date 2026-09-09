#!/usr/bin/env bash
# Shared helpers for the LinkedIn post workflow scripts.
# Source this (it pulls in config.sh):  . "$(dirname "$0")/common.sh"

set -euo pipefail

_LI_COMMON_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# shellcheck source=./config.sh
. "$_LI_COMMON_DIR/config.sh"

for _bin in gh jq; do
  command -v "$_bin" >/dev/null 2>&1 || { echo "li: required tool not found: $_bin" >&2; exit 69; }
done

# --- basics ---------------------------------------------------------------

li_die()   { echo "li: $*" >&2; exit 1; }
li_warn()  { echo "li: $*" >&2; }
li_today() { TZ="$LI_TZ" date +%Y-%m-%d; }

mapfile -t _LI_REPO_FLAG < <(li_repo_flag)
li_gh() { gh "$@" "${_LI_REPO_FLAG[@]}"; }

# owner/name for `gh api` paths
li_repo_slug() {
  if [ -n "${LI_REPO:-}" ]; then echo "$LI_REPO"
  else gh repo view --json nameWithOwner -q .nameWithOwner
  fi
}

# --- text --------------------------------------------------------------

# li_slug "Some Title: With Punctuation!" -> some-title-with-punctuation
li_slug() {
  printf '%s' "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/-/g; s/-+/-/g; s/^-//; s/-$//' \
    | cut -c1-50 \
    | sed -E 's/-$//'
}

# --- issue / label helpers ---------------------------------------------

# All label names on an issue, one per line.
li_issue_labels() {
  li_gh issue view "$1" --json labels -q '.labels[].name'
}

li_issue_has_label() {
  li_issue_labels "$1" | grep -Fxq "$2"
}

# The set of state-label names (li:idea, li:needs-review, ...) from config.
li_state_label_names() {
  printf '%s\n' "${LI_STATE_LABELS[@]}" | cut -d'|' -f1
}

# The single current state label on an issue. Errors if 0 or >1.
li_current_state() {
  local n="$1" found
  found="$(li_issue_labels "$n" | grep -Fxf <(li_state_label_names) || true)"
  local count
  count="$(printf '%s' "$found" | grep -c . || true)"
  [ "$count" -eq 1 ] || li_die "issue #$n has $count state labels (expected 1): ${found//$'\n'/, }"
  printf '%s\n' "$found"
}

li_is_terminal_state() {
  case "$1" in
    li:published|li:parked|li:dropped) return 0 ;;
    *) return 1 ;;
  esac
}

# --- state machine (parse references/state-machine.md) ----------------

# Emit legal edges as "from|to", one per line, from the ```transitions block.
li_state_edges() {
  [ -f "$LI_STATE_MACHINE" ] || li_die "state machine file not found: $LI_STATE_MACHINE"
  awk '
    /^```transitions[[:space:]]*$/ { inblk=1; next }
    inblk && /^```[[:space:]]*$/   { inblk=0 }
    inblk {
      line=$0
      i=index(line, ">>"); if (i==0) next
      from=substr(line,1,i-1)
      rest=substr(line,i+2)
      j=index(rest, "::"); if (j>0) rest=substr(rest,1,j-1)
      gsub(/[[:space:]]/,"",from); gsub(/[[:space:]]/,"",rest)
      if (from!="" && rest!="") print from "|" rest
    }
  ' "$LI_STATE_MACHINE"
}

li_edge_is_legal() {
  li_state_edges | grep -Fxq "$1|$2"
}

# --- command parsing --------------------------------------------------

# Read text on stdin, emit one JSON object per recognized /command:
#   {"name":"revise","arg":"tighten the hook"}
# A command is the first token on a line matching /^\/[a-z][a-z-]*/.
# The arg is the rest of that line plus following lines up to the next command.
li_parse_commands() {
  awk '
    function flush(){ if(cmd!=""){ gsub(/\\/,"\\\\",arg); gsub(/"/,"\\\"",arg);
        gsub(/\n/,"\\n",arg); gsub(/\t/,"\\t",arg); gsub(/\r/,"",arg);
        printf "{\"name\":\"%s\",\"arg\":\"%s\"}\n", cmd, arg } cmd=""; arg="" }
    {
      line=$0
      if (match(line, /^[[:space:]]*\/[a-z][a-z-]*/)) {
        flush()
        t=line; sub(/^[[:space:]]*\//,"",t)
        cmd=t; sub(/[[:space:]].*$/,"",cmd)
        rest=t; if (index(rest," ")>0) sub(/^[^ ]+[[:space:]]+/,"",rest); else rest=""
        arg=rest
      } else if (cmd!="") {
        arg = (arg=="" ? line : arg "\n" line)
      }
    }
    END{ flush() }
  '
}
