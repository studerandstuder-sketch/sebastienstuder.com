# Netlify Next.js (App Router) Fix Pack

## What this does
- Adds the Essential Next.js plugin so Netlify correctly packages App Router/SSR.
- Keeps build command and publish directory aligned with your repo.

## Apply these steps
1) Copy `netlify.toml` to the **root of the Git repo that Netlify is building** (same repo/branch shown in the deploy logs).
2) Commit and push:
   ```bash
   git add netlify.toml
   git commit -m "chore(netlify): enable @netlify/plugin-nextjs"
   git push
   ```
3) In Netlify UI, under **Site settings → Build & deploy → Build settings** verify:
   - **Base directory**: (empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4) Under **Deploys**, click **Clear cache and deploy site**.
5) Ensure your repo has a lockfile (`package-lock.json`) committed, then Netlify will use `npm ci`.

## Optional hardening
- Add to `package.json`:
  ```json
  "engines": { "node": ">=20" }
  ```
- If the site still fails, copy/paste the error lines after `npm run build` starts (we only need the block with the error stack).

