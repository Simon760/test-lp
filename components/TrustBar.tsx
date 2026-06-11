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
    // identical-sized slot for every logo → uniform footprint
    <span className="flex h-8 w-[132px] shrink-0 items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/logos/${file}`}
        alt={alt}
        className="max-h-full max-w-full object-contain opacity-50 transition-opacity duration-300 hover:opacity-90 [filter:brightness(0)_invert(1)]"
      />
    </span>
  );
}

// One group = the list rendered twice, so it always overflows the viewport.
// Two identical groups + translateX(-50%) = perfectly seamless loop.
function Group() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6">
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
    <div className="py-10">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-neutral-600">
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
