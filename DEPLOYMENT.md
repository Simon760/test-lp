# Deployment guide — UpsideGPT landing page

**Stack:** Next.js 14.2 (App Router) · React 18 · Tailwind CSS · TypeScript
**Repo:** https://github.com/Simon760/test-lp
**Target:** Vercel + custom domain `upsidegpt.com`
**Currently:** deployed to GitHub Pages (test only) at https://simon760.github.io/test-lp/

This project was built to run **natively on Vercel**. The GitHub Pages setup
(static export + `/test-lp` basePath) is gated behind env vars and is **not used
on Vercel** — see step 2.

---

## 1. Import the repo into Vercel

1. Vercel → **Add New… → Project** → import `Simon760/test-lp`.
2. Framework preset is auto-detected as **Next.js**. Leave the defaults:
   - Build command: `next build`
   - Install command: `npm install`
   - Output: handled automatically by Vercel
   - Node.js: 18.x or 20.x

No `vercel.json` is needed.

## 2. ⚠️ Environment variables

**DO set:**

| Variable | Value | Why |
|----------|-------|-----|
| `NEXT_PUBLIC_SITE_URL` | `https://upsidegpt.com` | Drives canonical URLs, `og:url`, `sitemap.xml`, and JSON-LD. **Critical for SEO** — without it these point to the wrong host. |

**DO NOT set** (these are GitHub-Pages-only — leaving them unset makes the app
build natively at the domain root with no basePath):

- `STATIC_EXPORT`
- `PAGES_BASE_PATH`
- `NEXT_PUBLIC_BASE_PATH`

> How it works: `next.config.mjs` only enables static export + basePath when
> `STATIC_EXPORT=true`. On Vercel they're undefined, so the site serves from `/`
> with full Next.js features (SSR/ISR, route handlers for sitemap/robots, etc.).
> All internal links use a `BASE` prefix that resolves to `""` when
> `NEXT_PUBLIC_BASE_PATH` is unset — so everything works at root with no code change.

## 3. Custom domain

1. Vercel → Project → **Settings → Domains** → add `upsidegpt.com` (and `www`).
2. Update DNS at the registrar per Vercel's instructions (A record / CNAME).
3. After the domain is live, redeploy so `NEXT_PUBLIC_SITE_URL` is baked in
   (or set it before the first production build).

## 4. Post-deploy checklist

- [ ] **Take down / `noindex` the GitHub Pages test site** (`simon760.github.io/test-lp`)
      so Google doesn't index it as duplicate content competing with `upsidegpt.com`.
- [ ] Verify the **Vimeo** hero video embed privacy settings allow playback on
      `upsidegpt.com` (Vimeo → video → Privacy → "Where can this be embedded").
- [ ] Submit `https://upsidegpt.com/sitemap.xml` in Google Search Console.

### Optional cleanups (not required, app works without them)

- Delete `.github/workflows/deploy.yml` — it's the GitHub Pages deploy, unused on Vercel.
- In `next.config.mjs`: you may remove `images.unoptimized: true` and the
  `i.pravatar.cc` remotePattern (avatars are now local files served from
  `/public/avatars`). Local images use plain `<img>`, so this only affects any
  future `next/image` usage.

---

## 5. Where to edit content (for the team, not the dev)

All copy, links, prices and reviews live in **`lib/content.ts`**:

- `brand.appUrl` — currently `"#"`. **Set to the real signup/app URL** so the
  "Get started" / "Log in" buttons work.
- `footer` "Contact" link — currently `"#"`.
- `testimonials.items` — currently **sample/placeholder reviews**. Replace with
  real, verified reviews before public launch (FTC compliance).
- `hero.badge`, `hero.proof`, `testimonials.rating` — "800+ traders", "4.5★":
  must be truthful or removed.

SEO defaults: **`lib/seo.ts`**. Legal pages: **`app/{terms-of-service,privacy-policy,risk-disclosure,disclaimer}/page.tsx`**
(fill the placeholders — payment processor, analytics tools, entity ID — and have
them reviewed by a lawyer before launch).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
