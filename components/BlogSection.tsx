import Link from "next/link";
import { Section } from "./ui";
import { ArticleCard } from "./blog/cards";
import { articles } from "@/lib/blog";

export default function BlogSection() {
  const featured = articles.slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">[ Blog ]</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Learn to read the market like a pro
        </h2>
        <p className="mt-4 text-lg text-neutral-400">
          Guides, tutorials and breakdowns to help you analyze stocks with confidence.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((a) => (
          <ArticleCard key={a.slug} a={a} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-[0_10px_34px_-10px_rgba(31,217,107,0.6)] transition hover:-translate-y-0.5"
        >
          View all articles →
        </Link>
      </div>
    </Section>
  );
}
