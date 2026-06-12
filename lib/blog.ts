import type { ComponentType } from "react";
import type { ArticleContentData } from "@/components/blog/render";
import HowToReadAStockChart from "@/app/blog/articles/how-to-read-a-stock-chart";
import { article as candlestickPatterns } from "@/app/blog/articles/candlestick-patterns.data";

export type CoverMotif = "candles" | "analysis" | "compare";

export type Article = {
  slug: string;
  title: string; // <h1> / og title
  metaTitle: string; // <title> tag (can be tighter)
  description: string;
  keyword: string;
  category: string; // small chip on cards
  cover: CoverMotif; // on-brand thumbnail motif
  date: string; // ISO, used for JSON-LD + display
  readingTime: string;
  excerpt: string;
  // An article is rendered either from a bespoke component (Body) or from
  // structured data (content). Exactly one is provided.
  Body?: ComponentType;
  content?: ArticleContentData;
};

// Only PUBLISHED articles live here. We add one entry per article as we write it.
export const articles: Article[] = [
  {
    slug: "how-to-read-a-stock-chart",
    title: "How to Read a Stock Chart: A Beginner's Guide (2026)",
    metaTitle: "How to Read a Stock Chart: Beginner's Guide (2026)",
    description:
      "Learn to read a stock chart from scratch — candlesticks, trend, support and resistance, volume and indicators — plus the fundamentals chart-only tools miss.",
    keyword: "how to read stock charts",
    category: "Guides",
    cover: "candles",
    date: "2026-06-12",
    readingTime: "8 min read",
    excerpt:
      "Candlesticks, trend, support and resistance, volume and indicators — the handful of concepts that actually matter, in the order you should learn them.",
    Body: HowToReadAStockChart,
  },
  candlestickPatterns,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string): string {
  // deterministic (no locale surprises in static export)
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[m - 1]} ${d}, ${y}`;
}
