import { trustBar } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Brand logos (transparent PNG / SVG). Yahoo Finance intentionally omitted.
const LOGOS = [
  { file: "tradingview.svg", alt: "TradingView" },
  { file: "bloomberg.png", alt: "Bloomberg" },
  { file: "nasdaq.png", alt: "Nasdaq" },
  { file: "reuters.png", alt: "Reuters" },
  { file: "nyse.png", alt: "NYSE" },
  { file: "cnbc.png", alt: "CNBC" },
  { file: "lseg.png", alt: "London Stock Exchange" },
  { file: "marketwatch.png", alt: "MarketWatch" },
  { file: "sp-global.png", alt: "S&P Global" },
  { file: "financial-times.png", alt: "Financial Times" },
  { file: "morningstar.png", alt: "Morningstar" },
];

function LogoImg({ file, alt }: { file: string; alt: string }) {
  return (
    <span className="flex h-6 shrink-0 items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/logos/${file}`}
        alt={alt}
        className="max-h-6 w-auto max-w-[140px] object-contain opacity-55 transition-opacity duration-300 hover:opacity-100 [filter:brightness(0)_invert(1)]"
      />
    </span>
  );
}

// One group = the list rendered twice, so it always overflows the viewport.
// Two identical groups + translateX(-50%) = perfectly seamless loop.
function Group() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {LOGOS.map((l) => (
        <LogoImg key={l.file} {...l} />
      ))}
      {LOGOS.map((l) => (
        <LogoImg key={`${l.file}-b`} {...l} />
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-white/[0.02] py-9">
      <p className="mb-7 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {trustBar.caption}
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center">
          <Group />
          <Group />
        </div>
      </div>
    </div>
  );
}
