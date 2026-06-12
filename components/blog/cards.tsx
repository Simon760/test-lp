import Link from "next/link";
import { Article, formatDate } from "@/lib/blog";

/* On-brand thumbnail — dark gradient + a motif SVG. Clean and premium,
   the opposite of clickbait stock thumbnails. */
function Cover({ motif }: { motif: Article["cover"] }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0e120f] via-[#0a0a0b] to-[#0a0a0b]">
      <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-[60px]" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {motif === "candles" && (
          <svg viewBox="0 0 320 150" className="w-full max-w-[80%]" aria-hidden>
            {[
              [20, 40, 70, 25, true], [55, 60, 95, 35, false], [90, 30, 80, 30, true],
              [125, 50, 70, 40, false], [160, 20, 60, 22, true], [195, 35, 55, 28, true],
              [230, 15, 50, 20, true], [265, 28, 45, 18, false],
            ].map(([x, y, ht, bh, up], i) => (
              <g key={i}>
                <line x1={Number(x) + 9} y1={Number(y) - 12} x2={Number(x) + 9} y2={Number(y) + Number(ht) + 12} stroke={up ? "#1fd96b" : "#f87171"} strokeWidth="1.5" opacity="0.5" />
                <rect x={x as number} y={y as number} width="18" height={bh as number} rx="2" fill={up ? "#1fd96b" : "#f87171"} opacity={up ? "0.9" : "0.7"} />
              </g>
            ))}
            <polyline points="29,55 64,75 99,48 134,78 169,40 204,52 239,33 274,44" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.35" />
          </svg>
        )}
        {motif === "analysis" && (
          <svg viewBox="0 0 320 150" className="w-full max-w-[80%]" aria-hidden>
            <rect x="10" y="20" width="180" height="110" rx="8" fill="#ffffff" opacity="0.04" stroke="#ffffff" strokeOpacity="0.08" />
            <polyline points="25,110 55,80 85,95 115,55 145,70 175,35" fill="none" stroke="#1fd96b" strokeWidth="2.5" />
            <rect x="205" y="20" width="105" height="32" rx="6" fill="#1fd96b" opacity="0.15" stroke="#1fd96b" strokeOpacity="0.4" />
            <rect x="205" y="62" width="105" height="32" rx="6" fill="#ffffff" opacity="0.04" />
            <rect x="205" y="104" width="105" height="26" rx="6" fill="#ffffff" opacity="0.04" />
          </svg>
        )}
        {motif === "compare" && (
          <svg viewBox="0 0 320 150" className="w-full max-w-[70%]" aria-hidden>
            {[30, 90, 150, 210, 270].map((x, i) => (
              <rect key={i} x={x} y={130 - (30 + i * 22)} width="34" height={30 + i * 22} rx="4" fill={i === 4 ? "#1fd96b" : "#ffffff"} opacity={i === 4 ? "0.9" : "0.12"} />
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link
      href={`/blog/${a.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <Cover motif={a.cover} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent">
            {a.category}
          </span>
          <span className="text-xs text-neutral-500">{formatDate(a.date)}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-white">{a.title}</h3>
        <p className="mt-2 flex-1 text-[14px] leading-relaxed text-neutral-400">{a.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          Read article
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
