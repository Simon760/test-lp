import { valueProps } from "@/lib/content";

/* ── small shared bits ───────────────────────────────────────── */
function GCheck() {
  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}
function Dot({ tone }: { tone: "red" | "green" | "amber" }) {
  const c = tone === "red" ? "bg-red-400" : tone === "green" ? "bg-accent" : "bg-amber-400";
  return <span className={`h-2 w-2 shrink-0 rounded-full ${c}`} />;
}
function Spark({ up = false }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-full" preserveAspectRatio="none" aria-hidden>
      <polyline
        points={up ? "0,20 16,14 32,16 48,8 64,10 80,3" : "0,8 16,6 32,12 48,9 64,16 80,18"}
        fill="none"
        stroke={up ? "#1fd96b" : "#f87171"}
        strokeWidth="2"
        opacity="0.8"
      />
    </svg>
  );
}

/* ── Card 1 · Key Figures (Built by traders) ─────────────────── */
function MockTechnical() {
  const figs = [
    { k: "Trend", v: "8/10", s: "Uptrend", up: true },
    { k: "ADX (14)", v: "35.1", s: "Strong", up: true },
    { k: "RSI (14)", v: "34.2", s: "Bearish", up: false },
    { k: "Confidence", v: "55%", s: "Multi-TF", up: false },
  ];
  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {["Support & resistance", "Fibonacci", "RSI & MACD", "Moving averages", "Smart Money"].map((t) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-neutral-300">
            <GCheck />
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {figs.map((f) => (
          <div key={f.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-neutral-500">{f.k}</span>
              <span className="text-sm font-bold text-white">{f.v}</span>
            </div>
            <Spark up={f.up} />
            <span className="text-[10px] text-neutral-500">{f.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Card 2 · Fundamentals + earnings (More than the chart) ──── */
function MockFundamentals() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {[["P/E", "34.9"], ["EPS", "$8.33"], ["ROE", "147%"], ["D/E", "0.8"]].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
            <p className="text-[10px] uppercase tracking-wide text-neutral-500">{k}</p>
            <p className="text-sm font-bold text-white">{v}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          { d: "Apr 30, 2026", t: "Earnings — AAPL", p: "+3.1%" },
          { d: "Jan 29, 2026", t: "Earnings — AAPL", p: "+6.7%" },
        ].map((e) => (
          <div key={e.d} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <span className="rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">BEAT</span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-white">{e.t}</p>
              <p className="text-[11px] text-neutral-500">{e.d}</p>
            </div>
            <span className="ml-auto text-sm font-bold text-accent">{e.p}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="text-[11px] text-neutral-400">Next earnings</span>
        <span className="text-xs font-semibold text-white">Jul 30, 2026</span>
      </div>
    </div>
  );
}

/* ── Card 3 · Profile indicators (Adapts to your style) ──────── */
function MockProfile() {
  const rows = [
    { tone: "red" as const, k: "RSI (14)", v: "34.2", s: "bearish momentum" },
    { tone: "red" as const, k: "MACD", v: "−3.5", s: "histogram −3.5" },
    { tone: "red" as const, k: "ADX (14)", v: "35.1", s: "strong bearish trend" },
    { tone: "green" as const, k: "ATR (14)", v: "$7.59", s: "sizes stop & targets" },
  ];
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">Short-Term Trading</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400">Long-Term Investing</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.k} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <Dot tone={r.tone} />
            <span className="text-xs font-semibold text-white">{r.k}</span>
            <span className="text-xs text-neutral-400">{r.v}</span>
            <span className="ml-auto truncate text-[11px] text-neutral-500">{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Card 4 · Likely scenarios (Trade with conviction) ───────── */
function MockScenarios() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-accent/25 bg-accent/[0.05] p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-accent">Bullish scenario</span>
          <span className="text-xs font-bold text-accent">30%</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
          <div className="h-1.5 w-[30%] rounded-full bg-accent" />
        </div>
        <p className="mt-2 text-[11px] text-neutral-400">Trigger — breaks above $303.88 (SMA20)</p>
      </div>
      <div className="rounded-xl border border-red-400/25 bg-red-400/[0.05] p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-red-400">Bearish scenario</span>
          <span className="text-xs font-bold text-red-400">70%</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
          <div className="h-1.5 w-[70%] rounded-full bg-red-400" />
        </div>
        <p className="mt-2 text-[11px] text-neutral-400">Trigger — falls below $285.49 (SMA50) → $270</p>
      </div>
    </div>
  );
}

const MOCKS = [<MockTechnical key="t" />, <MockFundamentals key="f" />, <MockProfile key="p" />, <MockScenarios key="s" />];
const SPANS = ["lg:col-span-2", "lg:col-span-3", "lg:col-span-3", "lg:col-span-2"];

export default function ValueCards() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            [ With the precision of a pro ]
          </span>
          <h2 className="text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {valueProps.title}
          </h2>
          <p className="text-balance mx-auto mt-4 text-lg text-neutral-400">{valueProps.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {valueProps.cards.map((card, i) => (
            <article
              key={card.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 ${SPANS[i]} ${
                card.highlight
                  ? "border-accent/40 bg-accent/[0.06] shadow-[0_0_0_1px_rgba(21,163,74,0.15),0_30px_80px_-30px_rgba(21,163,74,0.5)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              {/* product visual (faithful native recreation) */}
              <div className="mb-6 rounded-2xl border border-white/10 bg-[#0b0c0e] p-3">
                {MOCKS[i]}
              </div>

              <div className="mt-auto">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">{card.tag}</span>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-white">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-400">{card.body}</p>
              </div>

              {card.highlight && (
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
