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

function MiniBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} />
    </div>
  );
}

/* ── Mockup 1 · Technical read (Built by traders) ────────────── */
function MockTechnical() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="space-y-2.5">
        {["Support & resistance", "Fibonacci levels", "RSI & MACD", "Moving averages"].map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm text-neutral-300">
            <GCheck />
            {t}
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-accent/30 bg-accent/10 px-3 py-2">
          <span className="text-sm font-semibold text-white">Signal</span>
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-white">● BUY</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <p className="text-[11px] text-neutral-400">Target</p>
          <p className="text-sm font-bold text-accent">$196.50 · +3.7%</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <p className="text-[11px] text-neutral-400">Confidence</p>
          <div className="mt-1.5 flex items-center gap-2">
            <MiniBar value={78} />
            <span className="text-xs font-bold text-white">78</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup 2 · The edge: chart + fundamentals + analyst ─────── */
function MockFundamentals() {
  return (
    <div className="grid gap-3 sm:grid-cols-5">
      <div className="space-y-2 sm:col-span-3">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[11px] font-bold text-white">AA</span>
            <div>
              <p className="text-xs font-bold leading-none text-white">AAPL</p>
              <p className="text-[10px] text-neutral-400">NASDAQ</p>
            </div>
          </div>
          <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[11px] font-bold text-accent">▲ Uptrend</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["P/E", "29.4"],
            ["EPS", "$6.43"],
            ["ROE", "147%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-white/5 px-2.5 py-2 text-center">
              <p className="text-[10px] uppercase tracking-wide text-neutral-400">{k}</p>
              <p className="text-sm font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-neutral-400">Next earnings</span>
            <span className="text-xs font-semibold text-white">in 12 days</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-3 sm:col-span-2">
        <p className="text-[11px] uppercase tracking-wide text-accent">Analyst consensus</p>
        <p className="mt-1 text-2xl font-extrabold text-white">$205</p>
        <p className="text-[11px] text-neutral-400">range $170 – $250</p>
        <div className="mt-3">
          <div className="mb-1 flex items-center justify-between text-[11px]">
            <span className="text-neutral-300">Bullish ratings</span>
            <span className="font-bold text-accent">82%</span>
          </div>
          <MiniBar value={82} />
        </div>
      </div>
    </div>
  );
}

/* ── Mockup 3 · Profile calibration (Adapts to your style) ───── */
function MockProfile() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="space-y-3">
        <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3 py-2.5">
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <span className="text-sm font-semibold text-white">Calibrating your profile…</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Day trader</span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-neutral-400">Swing</span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-neutral-400">Investor</span>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <p className="text-[11px] text-neutral-400">Profile locked after</p>
          <div className="mt-1.5 flex items-center gap-2">
            <MiniBar value={70} />
            <span className="whitespace-nowrap text-[11px] font-bold text-white">7 / 10</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
        <p className="text-[11px] uppercase tracking-wide text-neutral-400">Tuned for you</p>
        <ul className="mt-2 space-y-2 text-xs text-neutral-300">
          <li className="flex items-center gap-2"><GCheck /> Intraday timeframes</li>
          <li className="flex items-center gap-2"><GCheck /> Tighter stop-losses</li>
          <li className="flex items-center gap-2"><GCheck /> Momentum setups</li>
        </ul>
      </div>
    </div>
  );
}

/* ── Mockup 4 · Scenarios (Trade with conviction) ────────────── */
function MockScenarios() {
  return (
    <div className="space-y-3">
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
        <svg viewBox="0 0 220 70" className="h-16 w-full">
          <polyline points="0,55 35,40 70,25 105,12 140,30 175,20 220,8" fill="none" stroke="#15a34a" strokeWidth="2.5" />
          <polyline points="0,55 35,40 70,25 105,12 140,30 175,20 220,8 220,70 0,70" fill="url(#g)" opacity="0.25" />
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#15a34a" />
              <stop offset="100%" stopColor="#15a34a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute right-3 top-3 rounded-full bg-accent/20 px-2 py-0.5 text-[11px] font-bold text-accent">Bull 68%</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <p className="text-[11px] text-neutral-400">Stop-loss</p>
          <p className="text-sm font-bold text-red-400">$185.40</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <p className="text-[11px] text-neutral-400">Take-profit</p>
          <p className="text-sm font-bold text-accent">$196.50</p>
        </div>
      </div>
    </div>
  );
}

const MOCKS = [<MockTechnical key="t" />, <MockFundamentals key="f" />, <MockProfile key="p" />, <MockScenarios key="s" />];
const SPANS = ["lg:col-span-2", "lg:col-span-3", "lg:col-span-3", "lg:col-span-2"];

export default function ValueCards() {
  return (
    <section className="relative overflow-hidden bg-[#0a0b0d] py-20 sm:py-28">
      {/* ambient green glow */}
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
              {/* product mockup */}
              <div className="mb-6 rounded-2xl border border-white/10 bg-black/30 p-3">
                {MOCKS[i]}
              </div>

              {/* copy */}
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
