import { demo } from "@/lib/content";

function Bar({ value, tone = "accent" }: { value: number; tone?: "accent" | "neutral" }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-white/10">
      <div
        className={`h-1.5 rounded-full ${tone === "accent" ? "bg-accent" : "bg-white/25"}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function DemoCard() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* LEFT: ticker + chart + signal */}
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">
                {demo.ticker.slice(0, 2)}
              </div>
              <div>
                <p className="font-bold leading-tight text-white">
                  {demo.ticker}{" "}
                  <span className="text-xs font-medium text-neutral-500">{demo.exchange}</span>
                </p>
                <p className="text-xs text-neutral-500">{demo.company}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold leading-tight text-white">{demo.price}</p>
              <p className="text-xs font-semibold text-accent">{demo.change}</p>
            </div>
          </div>

          {/* mini candlestick chart */}
          <div className="mt-4 flex h-28 items-end justify-between gap-1">
            {[40, 55, 48, 62, 58, 70, 64, 78, 72, 85, 80, 92].map((h, i) => (
              <div key={i} className="flex w-full flex-col items-center justify-end" style={{ height: "100%" }}>
                <div
                  className={`w-full rounded-sm ${i >= 9 ? "bg-accent" : i % 3 === 0 ? "bg-white/15" : "bg-accent/40"}`}
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
              ● {demo.signal}
            </span>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-dark">
              {demo.trend} · strength {demo.trendStrength}/10
            </span>
          </div>
        </div>

        {/* entry / stop / target */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] uppercase tracking-wide text-neutral-500">Entry</p>
            <p className="mt-1 text-sm font-bold text-white">{demo.entry}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] uppercase tracking-wide text-neutral-500">Stop-loss</p>
            <p className="mt-1 text-sm font-bold text-red-400">{demo.stop}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] uppercase tracking-wide text-neutral-500">Target</p>
            <p className="mt-1 text-sm font-bold text-accent">{demo.target}</p>
          </div>
        </div>
      </div>

      {/* RIGHT: scenarios + fundamentals + analyst */}
      <div className="space-y-4 lg:col-span-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold text-neutral-300">Bullish scenario</p>
            <span className="text-xs font-bold text-accent">{demo.bull.prob}%</span>
          </div>
          <Bar value={demo.bull.prob} />
          <p className="mt-2 text-xs text-neutral-500">{demo.bull.text}</p>
          <div className="mb-2 mt-4 flex items-center justify-between">
            <p className="text-xs font-semibold text-neutral-300">Bearish scenario</p>
            <span className="text-xs font-bold text-neutral-400">{demo.bear.prob}%</span>
          </div>
          <Bar value={demo.bear.prob} tone="neutral" />
          <p className="mt-2 text-xs text-neutral-500">{demo.bear.text}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="mb-2 text-[11px] uppercase tracking-wide text-neutral-500">Fundamentals</p>
          <div className="grid grid-cols-2 gap-2">
            {demo.fundamentals.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
                <span className="text-xs text-neutral-500">{f.label}</span>
                <span className="text-xs font-bold text-white">{f.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-xs text-neutral-500">Analyst target</span>
            <span className="text-xs font-bold text-accent">{demo.analyst.consensus}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
