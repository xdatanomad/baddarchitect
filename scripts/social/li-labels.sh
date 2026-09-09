#!/usr/bin/env bash
# Create (or update) the GitHub labels the LinkedIn post workflow needs.
#
# Usage:
#   scripts/social/li-labels.sh create   # create/update all workflow labels
#   scripts/social/li-labels.sh list     # show current workflow labels
#
# Idempotent: re-running `create` updates color/description in place.

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/config.sh"

cmd="${1:-create}"

mapfile -t REPO_FLAG < <(li_repo_flag)

all_labels() {
  printf '%s|%s|%s\n' "$LI_UMBRELLA_LABEL" "1f6feb" "LinkedIn post workflow issue"
  printf '%s\n' "${LI_STATE_LABELS[@]}"
  printf '%s\n' "${LI_MODIFIER_LABELS[@]}"
}

case "$cmd" in
  create)
    while IFS='|' read -r name color desc; do
      [ -z "$name" ] && continue
      if gh label create "$name" --color "$color" --description "$desc" "${REPO_FLAG[@]}" 2>/dev/null; then
        echo "created  $name"
      else
        gh label edit "$name" --color "$color" --description "$desc" "${REPO_FLAG[@]}" >/dev/null
        echo "updated  $name"
      fi
    done < <(all_labels)
    ;;
  list)
    gh label list "${REPO_FLAG[@]}" --limit 100 | grep -E '^(linkedin-post|li:)' || true
    ;;
  *)
    echo "usage: $0 {create|list}" >&2
    exit 64
    ;;
esac
