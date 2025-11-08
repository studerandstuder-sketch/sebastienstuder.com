Netlify Forms v5 Migration — Drop-in Files
============================================

This bundle contains two files you can add to your Next.js (App Router) project
to satisfy the Netlify Next.js plugin v5 Forms migration requirement and fix the
deploy error:

  Error: Failed assembling prerendered content for upload
  @netlify/plugin-nextjs@5 requires migration steps to support Netlify Forms

Files included
--------------
1) public/__forms.html
   - Static, hidden form used *only* for Netlify's deploy-time form detection.
   - Do not render or link to this file in your UI.

2) app/contact/page.tsx
   - A complete Contact page that submits to /__forms.html
     using application/x-www-form-urlencoded.

How to install
--------------
1. Copy `public/__forms.html` into your project's `public/` folder.
2. Replace (or create) your contact page at `app/contact/page.tsx` with the one
   provided in this bundle.
3. Ensure there is NO `data-netlify` attribute in your React form. Only the static
   file should contain `data-netlify="true"`.
4. Commit and redeploy on Netlify.

Optional temporary bypass
-------------------------
If you must unblock a deploy prior to updating code, set the env var:
  NETLIFY_NEXT_VERIFY_FORMS=false
Then remove it after you commit this migration.

— Generated for Sebastien to resolve plugin v5 forms migration.
