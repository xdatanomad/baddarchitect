#!/usr/bin/env node
// Health check for the LinkedIn credentials. Run from the routine's
// publish-sweep. Exits 0 on healthy, prints a WARN line when the refresh token
// is close to expiry, exits 77 when the token cannot be refreshed at all.
//
// Usage:
//   node li-token-check.mjs [--warn-days 30]

import { parseArgs, env, linkedinAccessToken, linkedinUserInfo } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));
const warnDays = Number(args["warn-days"] || 30);

const { accessToken, refreshTokenExpiresInDays } = await linkedinAccessToken();

// confirm the token actually works
const info = await linkedinUserInfo(accessToken);

const who = info.name || info.sub;
if (refreshTokenExpiresInDays == null) {
  console.log(`OK  token works (member: ${who}); refresh-token lifetime unknown`);
} else if (refreshTokenExpiresInDays <= warnDays) {
  console.log(
    `WARN  LinkedIn refresh token expires in ~${refreshTokenExpiresInDays}d — re-run li-oauth.mjs and update the secrets`,
  );
} else {
  console.log(`OK  token works (member: ${who}); refresh token ~${refreshTokenExpiresInDays}d left`);
}
process.exit(0);
