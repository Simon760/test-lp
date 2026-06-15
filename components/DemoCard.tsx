import { demo } from "@/lib/content";

/* A clean, legible recreation of the real UpsideGPT analysis result —
   faithful data + design, redrawn natively so it stays sharp at any size. */
export default function DemoCard() {
  return (
    <div className="rounded-2xl bg-[#0b0c0e] p-4 sm:p-5">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">
            {demo.ticker.slice(0, 2)}
          </div>
          <div>
            <p className="flex items-center gap-2 font-bold leading-tight text-white">
              {demo.company}
              <span className="text-xs font-medium text-neutral-500">{demo.ticker} · {demo.exchange}</span>
            </p>
            <p className="text-xs text-neutral-500">{demo.sector}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold leading-tight text-white">{demo.price}</p>
          <p className="text-xs font-semibold text-red-400">{demo.change} · 24h</p>
        </div>
      </div>

      {/* tabs */}
      <div className="mt-4 flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
          Short-Term Trading ⚡
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400">
          Long-Term Investing
        </span>
        <span className="ml-auto hidden rounded-full bg-amber-500/15 px-2.5 py-1 text-[11px] font-semibold text-amber-400 sm:inline">
          {demo.bias}
        </span>
      </div>

      {/* trading plan */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Cell label="Trade type" value={demo.tradeType} tone="red" big />
        <Cell label="Entry" value={demo.entry} />
        <Cell label="Stop-Loss" value={demo.stop} tone="red" />
        <Cell label="Take Profit 1" value={demo.tp1} tone="green" />
        <Cell label="Take Profit 2" value={demo.tp2} tone="green" />
        <Cell label="Risk / Reward" value={demo.rr} />
      </div>

      {/* key figures + fundamentals */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat label="Trend" value={`${demo.trendStrength}/10`} sub={demo.trend} />
        <Stat label="ADX" value={demo.adx} sub="strong" />
        <Stat label="RSI (14)" value={demo.rsi} sub="bearish" />
        <Stat label="Confidence" value={`${demo.confidence}%`} bar={demo.confidence} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="text-[11px] uppercase tracking-wide text-neutral-500">Fundamentals</span>
        {demo.fundamentals.map((f) => (
          <span key={f.label} className="text-xs text-neutral-400">
            {f.label} <span className="font-bold text-white">{f.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Cell({ label, value, tone = "white", big = false }: { label: string; value: string; tone?: "white" | "red" | "green"; big?: boolean }) {
  const color = tone === "red" ? "text-red-400" : tone === "green" ? "text-accent" : "text-white";
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <p className="text-[11px] uppercase tracking-wide text-neutral-500">{label}</p>
      <p className={`mt-0.5 font-bold ${big ? "text-base" : "text-sm"} ${color}`}>{value}</p>
    </div>
  );
}

function Stat({ label, value, sub, bar }: { label: string; value: string; sub?: string; bar?: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <p className="text-[11px] uppercase tracking-wide text-neutral-500">{label}</p>
      <p className="mt-0.5 text-base font-bold text-white">{value}</p>
      {bar !== undefined ? (
        <div className="mt-1.5 h-1 w-full rounded-full bg-white/10">
          <div className="h-1 rounded-full bg-accent" style={{ width: `${bar}%` }} />
        </div>
      ) : (
        <p className="text-[11px] text-neutral-500">{sub}</p>
      )}
    </div>
  );
}
