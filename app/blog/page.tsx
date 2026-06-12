import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, formatDate } from "@/lib/blog";
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <p className="text-xs text-neutral-500">{formatDate(a.date)} · {a.readingTime}</p>
              <h2 className="mt-3 text-xl font-bold tracking-tight text-white">{a.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-400">{a.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read article
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
