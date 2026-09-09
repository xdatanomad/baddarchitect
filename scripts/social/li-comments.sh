#!/usr/bin/env bash
# Read issue comments and surface the owner /commands the agent has not handled.
#
# Usage:
#   li-comments.sh unhandled <issue>
#       JSON array (stdout) of owner comments that contain a /command and have
#       not yet been marked handled:
#         [{ "id": 123, "author": "xdatanomad", "createdAt": "...",
#            "body": "...", "commands": [{"name":"revise","arg":"..."}] }]
#
#   li-comments.sh handled-ids <issue>
#       Newline list of comment ids already marked handled (debug).
#
# "Handled" = some comment in the thread contains  <!-- li:handled <id> -->
# (the agent appends this to its reply). Owner logins come from LI_OWNERS.

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/common.sh"

sub="${1:-}"; issue="${2:-}"
[ -n "$sub" ] && [ -n "$issue" ] || { sed -n '2,20p' "$0" | sed 's/^# \{0,1\}//'; exit 64; }

repo="$(li_repo_slug)"
comments_json="$(gh api --paginate "repos/$repo/issues/$issue/comments" 2>/dev/null || echo '[]')"

handled_ids() {
  printf '%s' "$comments_json" \
    | jq -r '.[].body' \
    | grep -oE '<!-- li:handled [0-9]+ -->' \
    | grep -oE '[0-9]+' \
    | sort -u
}

case "$sub" in
  handled-ids)
    handled_ids
    ;;

  unhandled)
    owners_re="$(printf '%s' "$LI_OWNERS" | tr ' ' '|')"
    handled="$(handled_ids | paste -sd, - || true)"
    [ -n "$handled" ] || handled="0"

    # Filter to owner comments not yet handled, then attach parsed commands.
    printf '%s' "$comments_json" | jq -c \
        --arg owners "$owners_re" \
        --argjson handled "[$handled]" '
      .[]
      | select(.user.login | test("^(" + $owners + ")$"))
      | select(.id as $i | ($handled | index($i)) | not)
      | {id: .id, author: .user.login, createdAt: .created_at, body: .body}
    ' | while IFS= read -r row; do
      body="$(printf '%s' "$row" | jq -r '.body')"
      cmds="$(printf '%s' "$body" | li_parse_commands | jq -s -c '.')"
      [ "$cmds" = "[]" ] && continue
      printf '%s' "$row" | jq -c --argjson commands "$cmds" '. + {commands: $commands}'
    done | jq -s -c '.'
    ;;

  *)
    li_die "unknown subcommand: $sub"
    ;;
esac
