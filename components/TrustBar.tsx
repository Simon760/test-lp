import { trustBar } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Brand logos (transparent PNG / SVG). Yahoo Finance intentionally omitted.
// `h` = per-logo optical height (compact/square logos get more height so they
// don't look smaller than the wide wordmarks). Default tuned for wordmarks.
const LOGOS = [
  { file: "bloomberg.png", alt: "Bloomberg", h: "max-h-5" },
  { file: "nasdaq.png", alt: "Nasdaq", h: "max-h-6" },
  { file: "reuters.png", alt: "Reuters", h: "max-h-6" },
  { file: "nyse.png", alt: "NYSE", h: "max-h-10" },
  { file: "cnbc.png", alt: "CNBC", h: "max-h-7" },
  { file: "lseg.png", alt: "London Stock Exchange", h: "max-h-6" },
  { file: "marketwatch.png", alt: "MarketWatch", h: "max-h-11" },
  { file: "sp-global.png", alt: "S&P Global", h: "max-h-6" },
  { file: "financial-times.png", alt: "Financial Times", h: "max-h-5" },
  { file: "morningstar.png", alt: "Morningstar", h: "max-h-5" },
];

function LogoImg({ file, alt, h }: { file: string; alt: string; h: string }) {
  return (
    // identical-sized slot; image height tuned per logo for optical balance
    <span className="flex h-12 w-[132px] shrink-0 items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/logos/${file}`}
        alt={alt}
        className={`${h} max-w-full object-contain opacity-50 transition-opacity duration-300 hover:opacity-90 [filter:brightness(0)_invert(1)]`}
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
