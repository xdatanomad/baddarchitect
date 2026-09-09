#!/usr/bin/env bash
# Emit a compact JSON "context pack" for generate mode, so the skill does not
# have to bulk-read the repo. Stdout is a single JSON object.
#
# Usage:
#   li-context.sh [--commits N] [--index-tail N]
#
# Fields:
#   generated_at            today (LI_TZ)
#   git_log                 last N commit subjects (default 25)
#   recent_content_changes  content/ paths touched in the last N commits
#   ready / drafts / inbox  markdown file paths under each content area
#   existing_social         files under content/social/linkedin-*
#   worklog_index_tail      last N rows of worklog/INDEX.md (default 20)
#   open_issues             open `linkedin-post` issues: number/title/state
#   media_enabled           LI_MEDIA flag

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/common.sh"

commits=25; index_tail=20
while [ $# -gt 0 ]; do
  case "$1" in
    --commits) commits="$2"; shift 2 ;;
    --index-tail) index_tail="$2"; shift 2 ;;
    *) echo "usage: $0 [--commits N] [--index-tail N]" >&2; exit 64 ;;
  esac
done

cd "$LI_ROOT"

json_array_from_lines() { jq -R -s -c 'split("\n") | map(select(length>0))'; }

git_log_json="$(git log --pretty=format:'%h %s' -n "$commits" | json_array_from_lines)"

recent_changes_json="$(
  { git log --name-only --pretty=format: -n "$commits" || true; } \
    | { grep -E '^content/' || true; } | sort -u | json_array_from_lines
)"

list_md() { [ -d "$1" ] && find "$1" -name '*.md' -type f | sort || true; }
ready_json="$(list_md content/ready | json_array_from_lines)"
drafts_json="$(list_md content/drafts | json_array_from_lines)"
inbox_json="$({ find content/inbox -type f ! -name '.gitkeep' 2>/dev/null || true; } | sort | json_array_from_lines)"
social_json="$({ find content/social -maxdepth 2 -name '*.md' -type f 2>/dev/null || true; } | { grep -v '/worklog/' || true; } | sort | json_array_from_lines)"

index_tail_json="$(
  { if [ -f "$LI_WORKLOG_DIR/INDEX.md" ]; then
      { grep -E '^\| ' "$LI_WORKLOG_DIR/INDEX.md" || true; } | { grep -vE '^\| date ' || true; } | tail -n "$index_tail"
    fi; } | json_array_from_lines
)"

open_issues_json="$(
  li_gh issue list --label "$LI_UMBRELLA_LABEL" --state open \
    --json number,title,labels -q \
    '[ .[] | {number, title, state: ([.labels[].name | select(startswith("li:"))] | map(select(test("^li:(idea|needs-review|revising|approved|scheduled|publishing|blocked)$"))) | .[0]) } ]' \
    2>/dev/null || echo '[]'
)"

jq -n -c \
  --arg generated_at "$(li_today)" \
  --arg media_enabled "$LI_MEDIA" \
  --argjson git_log "$git_log_json" \
  --argjson recent_content_changes "$recent_changes_json" \
  --argjson ready "$ready_json" \
  --argjson drafts "$drafts_json" \
  --argjson inbox "$inbox_json" \
  --argjson existing_social "$social_json" \
  --argjson worklog_index_tail "$index_tail_json" \
  --argjson open_issues "$open_issues_json" \
  '{generated_at:$generated_at, media_enabled:($media_enabled=="1"),
    git_log:$git_log, recent_content_changes:$recent_content_changes,
    ready:$ready, drafts:$drafts, inbox:$inbox,
    existing_social:$existing_social, worklog_index_tail:$worklog_index_tail,
    open_issues:$open_issues}'
