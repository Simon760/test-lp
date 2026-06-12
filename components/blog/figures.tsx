import { ReactNode } from "react";

/* Wrapper that gives every illustration a consistent frame + caption (alt/SEO). */
export function Figure({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-4 py-3 text-center text-xs text-neutral-500">
        {caption}
      </figcaption>
    </figure>
  );
}

/* Anatomy of a single candlestick — bullish + bearish, labelled. */
export function CandleAnatomy() {
  return (
    <svg viewBox="0 0 520 240" className="mx-auto w-full max-w-lg" role="img" aria-label="Anatomy of bullish and bearish candlesticks">
      {/* bullish */}
      <line x1="140" y1="20" x2="140" y2="220" stroke="#1fd96b" strokeWidth="2" />
      <rect x="120" y="70" width="40" height="100" rx="3" fill="#1fd96b" />
      <text x="200" y="55" fill="#a3a3a3" fontSize="13">High (wick)</text>
      <text x="200" y="120" fill="#e5e5e5" fontSize="13">Open / Close body</text>
      <text x="200" y="210" fill="#a3a3a3" fontSize="13">Low (wick)</text>
      <line x1="160" y1="50" x2="198" y2="50" stroke="#3f3f46" strokeWidth="1" />
      <line x1="160" y1="115" x2="198" y2="115" stroke="#3f3f46" strokeWidth="1" />
      <line x1="160" y1="205" x2="198" y2="205" stroke="#3f3f46" strokeWidth="1" />
      <text x="120" y="238" fill="#1fd96b" fontSize="12" fontWeight="700">Bullish (close &gt; open)</text>
      {/* bearish */}
      <line x1="410" y1="20" x2="410" y2="220" stroke="#f87171" strokeWidth="2" />
      <rect x="390" y="60" width="40" height="90" rx="3" fill="#f87171" />
      <text x="380" y="238" fill="#f87171" fontSize="12" fontWeight="700">Bearish (close &lt; open)</text>
    </svg>
  );
}

/* A clean trend illustration: higher highs / higher lows with a trendline. */
export function TrendChart() {
  return (
    <svg viewBox="0 0 560 240" className="mx-auto w-full max-w-xl" role="img" aria-label="Uptrend with higher highs and higher lows">
      <defs>
        <linearGradient id="trendfill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1fd96b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1fd96b" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points="20,200 90,150 150,175 220,110 290,135 360,70 430,95 520,35" fill="none" stroke="#1fd96b" strokeWidth="2.5" />
      <polyline points="20,200 90,150 150,175 220,110 290,135 360,70 430,95 520,35 520,240 20,240" fill="url(#trendfill)" />
      {/* trendline along the lows */}
      <line x1="20" y1="205" x2="520" y2="120" stroke="#a3a3a3" strokeDasharray="5 5" strokeWidth="1.5" />
      <text x="30" y="40" fill="#e5e5e5" fontSize="13" fontWeight="600">Uptrend</text>
      <text x="360" y="225" fill="#a3a3a3" fontSize="12">Rising support trendline</text>
    </svg>
  );
}

/* Support & resistance levels on a price path. */
export function SupportResistanceChart() {
  return (
    <svg viewBox="0 0 560 260" className="mx-auto w-full max-w-xl" role="img" aria-label="Support and resistance levels on a stock chart">
      {/* resistance */}
      <line x1="20" y1="60" x2="540" y2="60" stroke="#f87171" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="20" y="50" fill="#f87171" fontSize="12" fontWeight="600">Resistance</text>
      {/* support */}
      <line x1="20" y1="200" x2="540" y2="200" stroke="#1fd96b" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="20" y="222" fill="#1fd96b" fontSize="12" fontWeight="600">Support</text>
      {/* price bouncing between the two */}
      <polyline
        points="20,190 70,120 110,200 160,75 210,195 260,70 310,190 360,80 410,195 460,90 510,65 540,90"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="2"
      />
    </svg>
  );
}

/* Compact UpsideGPT analysis mockup — reused as the "let AI read it" visual. */
export function AnalysisMockup() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="sm:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white">AA</span>
            <div>
              <p className="text-sm font-bold leading-none text-white">AAPL <span className="text-[10px] font-medium text-neutral-500">NASDAQ</span></p>
              <p className="text-[11px] text-neutral-500">$189.42 <span className="text-accent">+1.24%</span></p>
            </div>
          </div>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">● BUY</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1">
          {[40, 55, 48, 64, 58, 72, 66, 80, 74, 88, 82, 94].map((h, i) => (
            <div key={i} className={`w-full rounded-sm ${i >= 9 ? "bg-accent" : i % 3 === 0 ? "bg-white/15" : "bg-accent/40"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-white/5 px-2 py-1.5"><p className="text-[10px] text-neutral-500">Entry</p><p className="text-xs font-bold text-white">$188.9</p></div>
          <div className="rounded-lg bg-white/5 px-2 py-1.5"><p className="text-[10px] text-neutral-500">Stop</p><p className="text-xs font-bold text-red-400">$185.4</p></div>
          <div className="rounded-lg bg-white/5 px-2 py-1.5"><p className="text-[10px] text-neutral-500">Target</p><p className="text-xs font-bold text-accent">$196.5</p></div>
        </div>
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
        <p className="text-[11px] uppercase tracking-wide text-accent">The full picture</p>
        <div className="mt-2 space-y-1.5 text-xs text-neutral-300">
          <div className="flex justify-between"><span>P/E</span><span className="font-bold text-white">29.4</span></div>
          <div className="flex justify-between"><span>ROE</span><span className="font-bold text-white">147%</span></div>
          <div className="flex justify-between"><span>Analyst target</span><span className="font-bold text-accent">$205</span></div>
          <div className="flex justify-between"><span>Bull case</span><span className="font-bold text-accent">68%</span></div>
        </div>
      </div>
    </div>
  );
}
