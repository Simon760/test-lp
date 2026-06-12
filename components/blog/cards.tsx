import Link from "next/link";
import { Article, formatDate } from "@/lib/blog";

/* On-brand thumbnails — one distinct design per article topic.
   Clean and premium, the opposite of clickbait stock thumbnails. */
const COVER_BG: Record<string, string> = {
  candles: "bg-[radial-gradient(120%_120%_at_15%_0%,#10231a_0%,#0a0a0b_55%)]",
  patterns: "bg-[radial-gradient(120%_120%_at_85%_0%,#0e1c16_0%,#0a0a0b_55%)]",
  levels: "bg-[radial-gradient(130%_100%_at_50%_120%,#11231b_0%,#0a0a0b_60%)]",
  ai: "bg-[radial-gradient(120%_120%_at_80%_20%,#122a1d_0%,#0a0a0b_60%)]",
  framework: "bg-[linear-gradient(135deg,#0c1a13_0%,#0a0a0b_55%)]",
};

function Cover({ motif }: { motif: Article["cover"] }) {
  return (
    <div className={`relative aspect-[16/9] overflow-hidden ${COVER_BG[motif] ?? COVER_BG.candles}`}>
      <span className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        {/* 1 — Candlestick chart */}
        {motif === "candles" && (
          <svg viewBox="0 0 320 150" className="w-[82%]" aria-hidden>
            {[[20, 60, 60, 30, false], [55, 35, 80, 38, true], [90, 50, 60, 26, false], [125, 28, 70, 44, true], [160, 40, 55, 24, false], [195, 18, 60, 34, true], [230, 30, 48, 22, true], [265, 12, 52, 30, true]].map(([x, y, ht, bh, up], i) => (
              <g key={i}>
                <line x1={Number(x) + 9} y1={Number(y) - 10} x2={Number(x) + 9} y2={Number(y) + Number(ht) + 10} stroke={up ? "#1fd96b" : "#f87171"} strokeWidth="1.5" opacity="0.55" />
                <rect x={x as number} y={y as number} width="18" height={bh as number} rx="2" fill={up ? "#1fd96b" : "#f87171"} opacity={up ? "0.95" : "0.7"} />
              </g>
            ))}
            <polyline points="29,80 64,58 99,72 134,52 169,60 204,40 239,46 274,30" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />
          </svg>
        )}
        {/* 2 — Candle pattern shapes */}
        {motif === "patterns" && (
          <svg viewBox="0 0 320 150" className="w-[78%]" aria-hidden>
            {/* doji */}
            <line x1="55" y1="20" x2="55" y2="130" stroke="#a3a3a3" strokeWidth="2" />
            <rect x="44" y="72" width="22" height="6" fill="#a3a3a3" />
            {/* hammer */}
            <line x1="160" y1="30" x2="160" y2="132" stroke="#1fd96b" strokeWidth="2" />
            <rect x="147" y="38" width="26" height="34" rx="2" fill="#1fd96b" />
            {/* engulfing */}
            <line x1="245" y1="46" x2="245" y2="120" stroke="#f87171" strokeWidth="2" />
            <rect x="234" y="62" width="22" height="40" rx="2" fill="#f87171" opacity="0.75" />
            <line x1="288" y1="26" x2="288" y2="134" stroke="#1fd96b" strokeWidth="2" />
            <rect x="275" y="46" width="26" height="72" rx="2" fill="#1fd96b" />
          </svg>
        )}
        {/* 3 — Support & resistance bands */}
        {motif === "levels" && (
          <svg viewBox="0 0 320 150" className="w-[88%]" aria-hidden>
            <line x1="10" y1="32" x2="310" y2="32" stroke="#f87171" strokeWidth="2" strokeDasharray="7 5" opacity="0.85" />
            <line x1="10" y1="120" x2="310" y2="120" stroke="#1fd96b" strokeWidth="2" strokeDasharray="7 5" opacity="0.9" />
            <polyline points="10,110 45,55 80,118 115,40 150,116 185,38 220,114 255,46 300,34" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.55" />
          </svg>
        )}
        {/* 4 — AI report card */}
        {motif === "ai" && (
          <svg viewBox="0 0 320 150" className="w-[82%]" aria-hidden>
            <rect x="40" y="18" width="240" height="114" rx="14" fill="#ffffff" opacity="0.04" stroke="#1fd96b" strokeOpacity="0.25" />
            <rect x="58" y="34" width="64" height="26" rx="8" fill="#1fd96b" />
            <text x="90" y="52" fill="#0a0a0b" fontSize="15" fontWeight="800" textAnchor="middle">BUY</text>
            <polyline points="58,108 90,82 122,96 154,66 186,80 218,52 250,62" fill="none" stroke="#1fd96b" strokeWidth="2.5" />
            <circle cx="250" cy="62" r="4" fill="#1fd96b" />
            <rect x="150" y="34" width="60" height="9" rx="3" fill="#ffffff" opacity="0.14" />
            <rect x="150" y="49" width="44" height="9" rx="3" fill="#ffffff" opacity="0.1" />
          </svg>
        )}
        {/* 5 — Three-layer framework */}
        {motif === "framework" && (
          <svg viewBox="0 0 320 150" className="w-[86%]" aria-hidden>
            {[["Technical", false], ["Fundamental", true], ["Analyst", false]].map(([label, hot], i) => (
              <g key={i}>
                <rect x="30" y={18 + i * 42} width="260" height="34" rx="9" fill={hot ? "#1fd96b" : "#ffffff"} opacity={hot ? 0.12 : 0.05} stroke={hot ? "#1fd96b" : "#ffffff"} strokeOpacity={hot ? 0.4 : 0.1} />
                <circle cx="52" cy={35 + i * 42} r="5" fill={hot ? "#1fd96b" : "#a3a3a3"} />
                <text x="70" y={40 + i * 42} fill="#e5e5e5" fontSize="14" fontWeight="600">{label as string}</text>
              </g>
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
