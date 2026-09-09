#!/usr/bin/env node
// One-time: obtain the first LinkedIn access + refresh token for the workflow.
// Local use only — opens a browser, runs a throwaway localhost callback server.
//
// Prereqs:
//   - A LinkedIn developer app with the "Share on LinkedIn" and
//     "Sign In with LinkedIn using OpenID Connect" products.
//   - The app's Authorized redirect URL includes  http://localhost:8923/callback
//     (override with LINKEDIN_REDIRECT_URI).
//
// Usage:
//   LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node li-oauth.mjs
//
// Prints LINKEDIN_ACCESS_TOKEN, LINKEDIN_REFRESH_TOKEN, LINKEDIN_AUTHOR_URN.
// Store them as GitHub Actions secrets and in the Claude Routine environment.

import http from "node:http";
import { randomBytes } from "node:crypto";
import { execFile } from "node:child_process";
import { env, die, OAUTH_REDIRECT, OAUTH_SCOPE, linkedinUserInfo } from "./lib.mjs";

const clientId = env("LINKEDIN_CLIENT_ID", { required: true });
const clientSecret = env("LINKEDIN_CLIENT_SECRET", { required: true });
const redirect = OAUTH_REDIRECT;
const port = Number(new URL(redirect).port || 8923);
const state = randomBytes(16).toString("hex");

const authUrl =
  "https://www.linkedin.com/oauth/v2/authorization?" +
  new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: redirect,
    scope: OAUTH_SCOPE,
    state,
  });

function open(url) {
  const cmd =
    process.platform === "darwin" ? "open" :
    process.platform === "win32" ? "cmd" : "xdg-open";
  const args = process.platform === "win32" ? ["/c", "start", "", url] : [url];
  execFile(cmd, args, () => {});
}

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, redirect);
  if (u.pathname !== new URL(redirect).pathname) {
    res.writeHead(404).end("not found");
    return;
  }
  const code = u.searchParams.get("code");
  const gotState = u.searchParams.get("state");
  const err = u.searchParams.get("error");

  if (err) {
    res.writeHead(400).end(`OAuth error: ${err} — ${u.searchParams.get("error_description") || ""}`);
    die(`authorization denied: ${err}`, 1);
  }
  if (!code || gotState !== state) {
    res.writeHead(400).end("bad state / missing code");
    die("state mismatch or missing code", 1);
  }

  try {
    const tokRes = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirect,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });
    const tokText = await tokRes.text();
    if (!tokRes.ok) {
      res.writeHead(500).end(`token exchange failed: ${tokText}`);
      die(`token exchange failed (${tokRes.status}): ${tokText}`, 1);
    }
    const tok = JSON.parse(tokText);
    const info = await linkedinUserInfo(tok.access_token);
    const authorUrn = `urn:li:person:${info.sub}`;

    res.writeHead(200, { "Content-Type": "text/plain" }).end(
      "LinkedIn authorization complete. You can close this tab and return to the terminal.",
    );

    const days = (s) => (s ? Math.round(s / 86400) : "?");
    console.log("\n=== LinkedIn workflow credentials ===\n");
    console.log(`LINKEDIN_ACCESS_TOKEN=${tok.access_token}`);
    console.log(`LINKEDIN_REFRESH_TOKEN=${tok.refresh_token || "(none returned — app lacks refresh; re-run this before expiry)"}`);
    console.log(`LINKEDIN_AUTHOR_URN=${authorUrn}`);
    console.log(
      `\naccess token ~${days(tok.expires_in)}d, refresh token ~${days(tok.refresh_token_expires_in)}d`,
    );
    console.log("\nStore these as GitHub Actions secrets and in the Claude Routine environment.\n");
    server.close(() => process.exit(0));
  } catch (e) {
    res.writeHead(500).end(String(e));
    die(String(e), 1);
  }
});

server.listen(port, () => {
  console.log(`Listening on ${redirect}`);
  console.log("Opening browser for LinkedIn authorization…");
  console.log(`If it does not open, visit:\n${authUrl}\n`);
  open(authUrl);
});
