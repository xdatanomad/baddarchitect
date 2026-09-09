#!/usr/bin/env bash
# Publish preflight. Re-checks every precondition before a post can go live,
# independently of the skill's own judgement. Prints one PASS/FAIL/WARN line per
# check. Exit 0 only if there are no FAILs.
#
# Usage:
#   li-guard.sh preflight <issue>
#
# Checks:
#   - issue carries the `linkedin-post` label
#   - issue is not on `li:hold`
#   - current state is publish-eligible (approved | scheduled | blocked)
#   - an owner /post or /schedule command exists in the comment history
#   - `li:image-check-failed` is absent
#   - (LI_MEDIA=1 + type-image) a media asset is recorded        [v1: skipped]
#   - LinkedIn credentials are present in the environment        [WARN in v1]

set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/common.sh"

[ "${1:-}" = preflight ] && shift
issue="${1:-}"
[ -n "$issue" ] || { echo "usage: $0 preflight <issue>" >&2; exit 64; }

fails=0
pass() { printf 'PASS  %s\n' "$1"; }
warn() { printf 'WARN  %s\n' "$1"; }
fail() { printf 'FAIL  %s\n' "$1"; fails=$((fails+1)); }

labels="$(li_issue_labels "$issue" 2>/dev/null || true)"
has() { printf '%s\n' "$labels" | grep -Fxq "$1"; }

# 1. umbrella label
if has "$LI_UMBRELLA_LABEL"; then pass "labelled $LI_UMBRELLA_LABEL"
else fail "issue #$issue is not labelled $LI_UMBRELLA_LABEL"; fi

# 2. not held
if has "li:hold"; then fail "issue is on li:hold"; else pass "not on li:hold"; fi

# 3. publish-eligible state
state="$(printf '%s\n' "$labels" | grep -Fxf <(li_state_label_names) | head -n1 || true)"
case "$state" in
  li:approved|li:scheduled|li:blocked) pass "state $state is publish-eligible" ;;
  "") fail "no state label found" ;;
  *) fail "state $state is not publish-eligible (need approved/scheduled/blocked)" ;;
esac

# 4. explicit publish authorization in comment history
repo="$(li_repo_slug)"
owners_re="$(printf '%s' "$LI_OWNERS" | tr ' ' '|')"
auth_cmd="$(
  gh api --paginate "repos/$repo/issues/$issue/comments" 2>/dev/null \
    | jq -r --arg o "$owners_re" '.[] | select(.user.login|test("^("+$o+")$")) | .body' \
    | grep -E '^[[:space:]]*/(post|schedule)( |$)' | head -n1 || true
)"
if [ -n "$auth_cmd" ]; then pass "authorized by owner command: ${auth_cmd# }"
else fail "no owner /post or /schedule command in issue history"; fi

# 5. image check
if has "li:image-check-failed"; then fail "li:image-check-failed is set"
else pass "no li:image-check-failed"; fi

# 6. media asset (only when media enabled)
if [ "$LI_MEDIA" = "1" ] && has "li:type-image"; then
  warn "media enabled + type-image: verify asset attached (not checked here)"
else
  pass "media check n/a (LI_MEDIA=$LI_MEDIA)"
fi

# 7. credentials
if [ -n "${LINKEDIN_ACCESS_TOKEN:-}" ] || { [ -n "${LINKEDIN_REFRESH_TOKEN:-}" ] && [ -n "${LINKEDIN_CLIENT_ID:-}" ]; }; then
  pass "LinkedIn credentials present in environment"
else
  warn "LinkedIn credentials not in environment (needed for a live post)"
fi

echo "----"
if [ "$fails" -eq 0 ]; then echo "PREFLIGHT OK"; exit 0
else echo "PREFLIGHT FAILED ($fails)"; exit 1; fi
