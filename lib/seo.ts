import { brand, faq, pricing } from "./content";

// Final domain not wired yet — the deploy workflow injects the GitHub Pages
// URL; swap NEXT_PUBLIC_SITE_URL once the real domain is live.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const seo = {
  title: `${brand.name} — AI Stock Analysis in Seconds, From a Screenshot`,
  shortTitle: `${brand.name} — AI Stock Analysis in Seconds`,
  description:
    "Upload any stock chart and get a pro-grade verdict in seconds — trend, key levels, entry, stop-loss and target, plus the fundamentals and analyst price targets behind the move. Trade with a plan, not a guess.",
  keywords: [
    "AI stock analysis",
    "stock chart analysis AI",
    "AI trading assistant",
    "chart screenshot analysis",
    "stock signals AI",
    "support and resistance AI",
    "AI stock analyst",
    "technical analysis AI",
  ],
};

/* ── JSON-LD builders (schema.org) — generated from site content ── */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
  };
}

export function softwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: brand.name,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: siteUrl,
    description: seo.description,
    offers: pricing.plans.map((plan) => ({
      "@type": "Offer",
      name: `${brand.name} ${plan.name}`,
      price: plan.price.replace("$", ""),
      priceCurrency: "USD",
      category: plan.period.includes("month") ? "subscription" : "one-time",
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
