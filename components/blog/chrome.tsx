import { ReactNode } from "react";
import { brand } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* Typographic wrapper — styles plain HTML the article emits (no plugin needed). */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        text-[17px] leading-relaxed text-neutral-300
        [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-white sm:[&_h2]:text-3xl
        [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white
        [&_p]:my-5
        [&_a]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:decoration-accent/40 [&_a]:underline-offset-2 hover:[&_a]:decoration-accent
        [&_strong]:font-semibold [&_strong]:text-white
        [&_ul]:my-5 [&_ul]:space-y-2 [&_ul]:pl-1
        [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:marker:text-neutral-500
        [&_li]:pl-1
        [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:text-neutral-400 [&_blockquote]:italic
      "
    >
      {children}
    </div>
  );
}

/* Bulleted list items get a green check rather than a default disc. */
export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-5 space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-8 rounded-2xl border border-accent/25 bg-accent/[0.05] p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Key takeaways</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-[15px] text-neutral-200">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticleFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Frequently asked questions</h2>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
              {item.q}
              <span className="text-neutral-500 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ArticleCta() {
  return (
    <div className="my-12 overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-b from-accent/[0.12] to-transparent p-8 text-center">
      <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Let the AI read your next chart</h2>
      <p className="mx-auto mt-3 max-w-md text-neutral-400">
        Upload a screenshot and get the trend, key levels, a clear plan and the fundamentals behind the move — in seconds.
      </p>
      <a
        href={brand.appUrl}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-[0_10px_34px_-10px_rgba(31,217,107,0.6)] transition hover:-translate-y-0.5"
      >
        {brand.ctaPrimary} →
      </a>
    </div>
  );
}

export function AuthorDisclaimer({ date }: { date: string }) {
  return (
    <div className="mt-12 border-t border-white/10 pt-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${BASE}/brand/mark.png`} alt="" className="h-6 w-6 object-contain" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">The {brand.name} Team</p>
          <p className="text-xs text-neutral-500">Published {date}</p>
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-neutral-500">
        <strong className="text-neutral-400">Disclaimer:</strong> This article is for educational and informational
        purposes only and is not financial advice. Trading and investing carry significant risk of loss. Always do your
        own research. Past performance is not indicative of future results.
      </p>
    </div>
  );
}
