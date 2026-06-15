import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { articles } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/risk-disclosure`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...articles.map((a) => ({
      url: `${siteUrl}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
