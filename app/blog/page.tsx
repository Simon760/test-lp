import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/lib/blog";
import { ArticleCard } from "@/components/blog/cards";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: `Guides, tutorials and insights on stock chart analysis, AI trading and smarter investing — from the ${brand.name} team.`,
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">[ Blog ]</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Trade smarter, with AI
          </h1>
          <p className="mt-4 text-lg text-neutral-400">
            Guides, tutorials and insights to help you read charts, analyze stocks and decide with a plan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
