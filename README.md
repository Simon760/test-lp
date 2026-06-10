# StockReadGPT — Landing Page

Premium landing page built with **Next.js 14 + Tailwind + TypeScript**.
Design inspired by trendtrack.io, conversion structure inspired by bullgpt.io,
focused on **US & UK stock-market** AI analysis.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Edit content

All copy, prices and the brand name live in **`lib/content.ts`** — change them
there, no need to touch the components. Design tokens (colors, fonts) are in
`tailwind.config.ts`.

## Hosting

### GitHub Pages (automatic)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static
export and publishes it. Enable it once:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main`. The live URL appears in the Actions run summary
   (`https://<user>.github.io/<repo>`).

### Vercel (alternative)

Import the repo in Vercel — it auto-detects Next.js, no config needed.

## To do (phase 2)

- Finalize project name (`brand.name` in `lib/content.ts`)
- Add SEO (metadata, JSON-LD, sitemap) once the name is set
- Replace placeholder stats, reviews and prices with real ones
- Point CTA links (`brand.appUrl`) to the app
