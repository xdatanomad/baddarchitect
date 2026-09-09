// Shared helpers for the LinkedIn post workflow Node scripts.
// No dependencies — Node >= 18 (native fetch, node:http).

import { execFileSync } from "node:child_process";

export const LINKEDIN_API_VERSION = process.env.LINKEDIN_API_VERSION || "202506";
export const OAUTH_REDIRECT =
  process.env.LINKEDIN_REDIRECT_URI || "http://localhost:8923/callback";
export const OAUTH_SCOPE =
  process.env.LINKEDIN_OAUTH_SCOPE || "w_member_social openid profile";

export function die(msg, code = 1) {
  console.error(`li-post: ${msg}`);
  process.exit(code);
}

export function env(name, { required = false } = {}) {
  const v = process.env[name];
  if (required && (!v || !v.trim())) die(`missing required env var: ${name}`, 78);
  return v ? v.trim() : "";
}

// --- gh plumbing -----------------------------------------------------------

const HERE = new URL(".", import.meta.url).pathname;

export function gh(args, { input } = {}) {
  try {
    return execFileSync("gh", args, {
      encoding: "utf8",
      input,
      stdio: ["pipe", "pipe", "pipe"],
    }).trim();
  } catch (e) {
    const detail = (e.stderr || e.stdout || e.message || "").toString().trim();
    die(`gh ${args.join(" ")} failed: ${detail}`, 70);
  }
}

export function repoFlag() {
  const r = process.env.LI_REPO;
  return r ? ["--repo", r] : [];
}

export function issueJSON(n, fields) {
  return JSON.parse(gh(["issue", "view", String(n), ...repoFlag(), "--json", fields]));
}

// The current post-copy block (without the "## Post copy" heading).
export function issueCopy(n) {
  const raw = execFileSync("bash", [`${HERE}li-issue.sh`, "copy-get", String(n)], {
    encoding: "utf8",
  });
  return raw.replace(/^\s*##\s+Post copy\s*\n+/i, "").trim();
}

export function issueComment(n, body) {
  gh(["issue", "comment", String(n), ...repoFlag(), "--body-file", "-"], { input: body });
}

export function issueLabels(n) {
  return issueJSON(n, "labels").labels.map((l) => l.name);
}

// --- LinkedIn -----------------------------------------------------------

// Always mint a fresh access token from the long-lived refresh token.
// LinkedIn refresh tokens (~365 days) are reusable, so we do not persist the
// access token between runs. Returns { accessToken, refreshTokenExpiresInDays }.
export async function linkedinAccessToken() {
  const refresh = env("LINKEDIN_REFRESH_TOKEN");
  const clientId = env("LINKEDIN_CLIENT_ID");
  const clientSecret = env("LINKEDIN_CLIENT_SECRET");

  if (!refresh || !clientId || !clientSecret) {
    // Fallback: a directly-provided access token (e.g. short-lived, for a test).
    const direct = env("LINKEDIN_ACCESS_TOKEN");
    if (direct) return { accessToken: direct, refreshTokenExpiresInDays: null };
    die(
      "no LINKEDIN_REFRESH_TOKEN (+ CLIENT_ID/SECRET) and no LINKEDIN_ACCESS_TOKEN; run li-oauth.mjs",
      78,
    );
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refresh,
    client_id: clientId,
    client_secret: clientSecret,
  });
  const res = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const text = await res.text();
  if (!res.ok) {
    die(`token refresh failed (${res.status}): ${text}`, 77); // 77 => auth
  }
  const j = JSON.parse(text);
  return {
    accessToken: j.access_token,
    refreshTokenExpiresInDays: j.refresh_token_expires_in
      ? Math.round(j.refresh_token_expires_in / 86400)
      : null,
  };
}

export function linkedinHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "LinkedIn-Version": LINKEDIN_API_VERSION,
    "X-Restli-Protocol-Version": "2.0.0",
  };
}

// Publish a text post. Returns { urn, permalink }.
export async function linkedinPostText({ token, authorUrn, commentary }) {
  const payload = {
    author: authorUrn,
    commentary,
    visibility: "PUBLIC",
    distribution: {
      feedDistribution: "MAIN_FEED",
      targetEntities: [],
      thirdPartyDistributionChannels: [],
    },
    lifecycleState: "PUBLISHED",
    isReshareDisabledByAuthor: false,
  };
  const res = await fetch("https://api.linkedin.com/rest/posts", {
    method: "POST",
    headers: linkedinHeaders(token),
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) {
    const authish = res.status === 401 || res.status === 403;
    die(`LinkedIn post failed (${res.status}): ${text}`, authish ? 77 : 71);
  }
  const urn =
    res.headers.get("x-restli-id") ||
    res.headers.get("x-linkedin-id") ||
    (text && JSON.parse(text).id);
  if (!urn) die(`post accepted (${res.status}) but no post URN in response`, 71);
  return { urn, permalink: `https://www.linkedin.com/feed/update/${urn}/` };
}

export async function linkedinUserInfo(token) {
  const res = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const text = await res.text();
  if (!res.ok) die(`userinfo failed (${res.status}): ${text}`, 77);
  return JSON.parse(text);
}

export function parseArgs(argv, flags = []) {
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      if (flags.includes(key)) out[key] = true;
      else out[key] = argv[++i];
    } else out._.push(a);
  }
  return out;
}
