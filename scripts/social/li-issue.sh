#!/usr/bin/env bash
# Create and update LinkedIn-workflow GitHub issues. All writes here are
# label-scoped to the workflow: this script refuses to touch an issue that is
# not (or will not be) labelled `linkedin-post`.
#
# Usage:
#   li-issue.sh create --title <t> --body-file <f> --type text|image|video
#       Create an issue labelled  linkedin-post, li:idea, li:type-<type>.
#       Prints the new issue number to stdout.
#
#   li-issue.sh body-set <issue> --body-file <f>
#       Replace the issue body (the body is fully agent-managed; it must start
#       with the marker line "<!-- li:managed -->").
#
#   li-issue.sh comment <issue> --body-file <f> [--handled <id>[,<id>...]]
#       Post a comment. With --handled, append a  <!-- li:handled <id> -->
#       marker for each id so those comments are not reprocessed.
#
#   li-issue.sh react <issue> <comment-id> [<emoji>]
#       Add a reaction (default: eyes) to a comment.
#
#   li-issue.sh copy-get <issue>
#       Print the current post copy: the text between the
#       <!-- li:copy:start --> and <!-- li:copy:end --> markers in the body,
#       with the leading "## Post copy" heading stripped. Use it to feed
#       li-worklog.sh --copy-file on schedule/publish.

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/common.sh"

usage() { sed -n '2,34p' "$0" | sed 's/^# \{0,1\}//'; exit 64; }

require_workflow_issue() {
  li_issue_has_label "$1" "$LI_UMBRELLA_LABEL" \
    || li_die "issue #$1 is not labelled $LI_UMBRELLA_LABEL; refusing to touch it"
}

sub="${1:-}"; shift || usage

case "$sub" in
  create)
    title=""; body_file=""; type=""
    while [ $# -gt 0 ]; do
      case "$1" in
        --title) title="$2"; shift 2 ;;
        --body-file) body_file="$2"; shift 2 ;;
        --type) type="$2"; shift 2 ;;
        *) usage ;;
      esac
    done
    [ -n "$title" ] && [ -f "$body_file" ] || usage
    case "$type" in text|image|video) ;; *) li_die "--type must be text|image|video" ;; esac
    head -n1 "$body_file" | grep -Fxq '<!-- li:managed -->' \
      || li_die "body file must start with '<!-- li:managed -->'"

    url="$(li_gh issue create \
      --title "$title" \
      --body-file "$body_file" \
      --label "$LI_UMBRELLA_LABEL,li:idea,li:type-$type")"
    echo "$url" | grep -oE '[0-9]+$'
    ;;

  body-set)
    n="${1:-}"; shift || usage
    body_file=""
    while [ $# -gt 0 ]; do
      case "$1" in
        --body-file) body_file="$2"; shift 2 ;;
        *) usage ;;
      esac
    done
    [ -n "$n" ] && [ -f "$body_file" ] || usage
    require_workflow_issue "$n"
    head -n1 "$body_file" | grep -Fxq '<!-- li:managed -->' \
      || li_die "body file must start with '<!-- li:managed -->'"
    li_gh issue edit "$n" --body-file "$body_file" >/dev/null
    echo "body-set: issue #$n"
    ;;

  comment)
    n="${1:-}"; shift || usage
    body_file=""; handled=""
    while [ $# -gt 0 ]; do
      case "$1" in
        --body-file) body_file="$2"; shift 2 ;;
        --handled) handled="$2"; shift 2 ;;
        *) usage ;;
      esac
    done
    [ -n "$n" ] && [ -f "$body_file" ] || usage
    require_workflow_issue "$n"

    tmp="$(mktemp)"; trap 'rm -f "$tmp"' EXIT
    cat "$body_file" > "$tmp"
    if [ -n "$handled" ]; then
      printf '\n' >> "$tmp"
      IFS=',' read -ra ids <<< "$handled"
      for id in "${ids[@]}"; do
        [ -n "$id" ] && printf '\n<!-- li:handled %s -->' "$id" >> "$tmp"
      done
    fi
    li_gh issue comment "$n" --body-file "$tmp" >/dev/null
    echo "comment: issue #$n${handled:+  handled=$handled}"
    ;;

  react)
    n="${1:-}"; cid="${2:-}"; emoji="${3:-eyes}"
    [ -n "$n" ] && [ -n "$cid" ] || usage
    require_workflow_issue "$n"
    repo="$(li_repo_slug)"
    gh api --method POST "repos/$repo/issues/comments/$cid/reactions" \
      -f "content=$emoji" >/dev/null
    echo "react: comment $cid += :$emoji:"
    ;;

  copy-get)
    # Print the copy block (including its "## Post copy" heading) so it can be
    # passed straight to `li-worklog.sh --copy-file`.
    n="${1:-}"
    [ -n "$n" ] || usage
    require_workflow_issue "$n"
    li_gh issue view "$n" --json body -q .body \
      | awk '
          /<!-- li:copy:start -->/ { inblk=1; next }
          /<!-- li:copy:end -->/   { inblk=0 }
          inblk { print }
        ' \
      | sed '/./,$!d'
    ;;

  *)
    li_die "unknown subcommand: $sub"
    ;;
esac
