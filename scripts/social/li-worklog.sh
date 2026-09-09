#!/usr/bin/env bash
# Write and move worklog entries for the LinkedIn post pipeline, and keep the
# append-only INDEX.md ledger in sync. One file per idea; it moves between lane
# directories as state changes, keeping its creation-dated filename.
#
# Usage:
#   li-worklog.sh idea     --issue <n> --title <t> [--type text|image|video]
#                          [--source <path>]... [--citation <url|none>]
#                          [--copy-file <f>] [--commit]
#   li-worklog.sh schedule --issue <n> --date <YYYY-MM-DD> [--copy-file <f>] [--commit]
#   li-worklog.sh publish  --issue <n> --url <permalink> [--copy-file <f>] [--commit]
#   li-worklog.sh park     --issue <n> --reason <text> [--commit]
#   li-worklog.sh drop     --issue <n> --reason <text> [--commit]
#
# Prints the entry path. Without --commit the change is written and `git add`ed
# but not committed.

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/common.sh"

usage() { sed -n '2,20p' "$0" | sed 's/^# \{0,1\}//'; exit 64; }

WL="$LI_WORKLOG_DIR"
[ -d "$WL" ] || li_die "worklog dir not found: $WL"

event="${1:-}"; shift || usage

# --- args ---
issue=""; title=""; type=""; citation=""; url=""; reason=""; date=""
copy_file=""; do_commit=0; sources=()
while [ $# -gt 0 ]; do
  case "$1" in
    --issue) issue="$2"; shift 2 ;;
    --title) title="$2"; shift 2 ;;
    --type) type="$2"; shift 2 ;;
    --source) sources+=("$2"); shift 2 ;;
    --citation) citation="$2"; shift 2 ;;
    --url) url="$2"; shift 2 ;;
    --reason) reason="$2"; shift 2 ;;
    --date) date="$2"; shift 2 ;;
    --copy-file) copy_file="$2"; shift 2 ;;
    --commit) do_commit=1; shift ;;
    *) usage ;;
  esac
done
[ -n "$issue" ] || usage

# --- helpers ---
fm_get() {  # fm_get <file> <key>
  awk -v k="$2" '
    NR==1 && $0=="---" {infm=1; next}
    infm && $0=="---" {exit}
    infm { i=index($0,":"); if(i>0){ key=substr($0,1,i-1); val=substr($0,i+2);
           if(key==k){ gsub(/^["[:space:]]+|["[:space:]]+$/,"",val); print val; exit } } }
  ' "$1"
}

find_entry() {  # by issue number; echoes path or nothing
  grep -rl --include='*.md' -E "^issue: ${issue}\$" "$WL"/*/ 2>/dev/null | head -n1 || true
}

lane_dir() { echo "$WL/$1"; }

fm_or() {  # fm_or <file> <key> <fallback> : existing frontmatter value, else fallback
  local v=""
  [ -f "$1" ] && v="$(fm_get "$1" "$2" || true)"
  [ -n "$v" ] && printf '%s' "$v" || printf '%s' "$3"
}

write_entry() {  # write_entry <path> <state>  (frontmatter + body)
  local path="$1" state="$2" tmp body_tmp
  tmp="$(mktemp)"; body_tmp="$(mktemp)"

  # body: from --copy-file, else preserve existing, else placeholder
  if [ -n "$copy_file" ] && [ -f "$copy_file" ]; then
    cat "$copy_file" > "$body_tmp"
  elif [ -f "$path" ]; then
    awk 'NR==1&&$0=="---"{n++;next} n==1&&$0=="---"{n++;next} n>=2{print}' "$path" \
      | sed '/./,$!d' > "$body_tmp"
  else
    printf '## Post copy\n\n_(draft in issue #%s)_\n' "$issue" > "$body_tmp"
  fi

  local f_date f_type f_title f_cit f_url f_park f_drop
  f_date="$created_date"
  f_type="$( [ -n "$type" ] && printf '%s' "$type" || fm_or "$path" type text )"
  f_type="${f_type:-text}"
  f_title="$( [ -n "$title" ] && printf '%s' "$title" || fm_or "$path" title '' )"
  f_cit="$( [ -n "$citation" ] && printf '%s' "$citation" || fm_or "$path" citation none )"
  f_cit="${f_cit:-none}"
  f_url="$( [ -n "$url" ] && printf '%s' "$url" || fm_or "$path" linkedin_url '' )"
  if [ "$event" = park ]; then f_park="$reason"; else f_park="$(fm_or "$path" parked_reason '')"; fi
  if [ "$event" = drop ]; then f_drop="$reason"; else f_drop="$(fm_or "$path" dropped_reason '')"; fi

  {
    echo '---'
    echo "date: ${f_date}"
    echo "issue: ${issue}"
    echo "state: ${state}"
    echo "type: ${f_type}"
    echo "title: \"$(printf '%s' "$f_title" | sed 's/"/\\"/g')\""
    if [ "${#sources[@]}" -gt 0 ]; then
      echo "source_content:"
      for s in "${sources[@]}"; do echo "  - ${s}"; done
    elif [ -f "$path" ] && awk 'NR>1&&/^source_content:/{f=1} f&&/^  - /{print}' "$path" | grep -q .; then
      echo "source_content:"
      awk 'NR>1&&/^source_content:/{f=1;next} f&&/^  - /{print;next} f{exit}' "$path"
    else
      echo "source_content: []"
    fi
    echo "citation: \"${f_cit}\""
    echo "linkedin_url: \"${f_url:-}\""
    echo "parked_reason: \"$(printf '%s' "${f_park:-}" | sed 's/"/\\"/g')\""
    echo "dropped_reason: \"$(printf '%s' "${f_drop:-}" | sed 's/"/\\"/g')\""
    echo '---'
    echo
    cat "$body_tmp"
  } > "$tmp"

  mkdir -p "$(dirname "$path")"
  mv "$tmp" "$path"
  rm -f "$body_tmp"
}

git_move() {  # git_move <from> <to>
  local from="$1" to="$2"
  mkdir -p "$(dirname "$to")"
  if git -C "$LI_ROOT" ls-files --error-unmatch "$from" >/dev/null 2>&1; then
    git -C "$LI_ROOT" mv "$from" "$to"
  else
    mv "$from" "$to"
  fi
}

append_index() {  # append_index <state> <url>
  local state="$1" iurl="${2:--}" title_cell
  title_cell="$(printf '%s' "$entry_title" | tr '|' '/' )"
  printf '| %s | %s | %s | %s | %s | %s |\n' \
    "$(li_today)" "$issue" "$state" "$entry_type" "$title_cell" "$iurl" \
    >> "$WL/INDEX.md"
}

commit_if_asked() {  # commit_if_asked <message>
  [ "$do_commit" -eq 1 ] || return 0
  git -C "$LI_ROOT" add "$WL" >/dev/null
  git -C "$LI_ROOT" commit -q -m "$1" -m "Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>" || true
}

# --- dispatch ---
existing="$(find_entry)"

case "$event" in
  idea)
    [ -n "$title" ] || usage
    [ -z "$existing" ] || li_die "worklog entry for issue #$issue already exists: $existing"
    created_date="$(li_today)"
    slug="$(li_slug "$title")"
    path="$(lane_dir ideas)/${created_date}_${slug}.md"
    entry_title="$title"; entry_type="${type:-text}"
    write_entry "$path" "idea"
    append_index "idea" "-"
    commit_if_asked "chore(social): log LinkedIn idea #${issue} — ${title}"
    echo "$path"
    ;;

  schedule|publish|park|drop)
    [ -n "$existing" ] || li_die "no worklog entry for issue #$issue (run 'idea' first)"
    created_date="$(fm_get "$existing" date || true)"; created_date="${created_date:-$(li_today)}"
    entry_title="$(fm_get "$existing" title || true)"
    entry_type="$(fm_get "$existing" type || true)"; entry_type="${entry_type:-text}"
    case "$event" in
      schedule) lane=scheduled; state=scheduled ;;
      publish)  lane=published; state=published ;;
      park)     lane=parked;    state=parked; [ -n "$reason" ] || usage ;;
      drop)     lane=dropped;   state=dropped; [ -n "$reason" ] || usage ;;
    esac
    dest="$(lane_dir "$lane")/$(basename "$existing")"
    if [ "$existing" != "$dest" ]; then git_move "$existing" "$dest"; fi
    write_entry "$dest" "$state"
    append_index "$state" "${url:--}"
    commit_if_asked "chore(social): LinkedIn #${issue} -> ${state}"
    echo "$dest"
    ;;

  *)
    li_die "unknown event: $event"
    ;;
esac
