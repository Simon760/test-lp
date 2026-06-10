import { trustBar } from "@/lib/content";

/* ── Generic icons (no trademarked artwork) ──────────────────── */
const IconTrend = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="15 7 21 7 21 13" />
  </svg>
);
const IconBars = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="11" width="4" height="10" rx="1" />
    <rect x="10" y="6" width="4" height="15" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);
const IconDot = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="6" />
  </svg>
);
const IconCandle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="8" y1="3" x2="8" y2="21" />
    <rect x="5" y="8" width="6" height="8" rx="1" fill="currentColor" stroke="none" />
    <line x1="17" y1="3" x2="17" y2="21" />
    <rect x="14" y="6" width="6" height="6" rx="1" fill="currentColor" stroke="none" />
  </svg>
);
const IconGlobe = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
  </svg>
);

/* ── Styled wordmarks ────────────────────────────────────────── */
function Mark({
  children,
  icon,
  serif = false,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  serif?: boolean;
}) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap text-lg font-bold tracking-tight text-neutral-500 transition-colors duration-300 hover:text-neutral-300 ${
        serif ? "font-serif italic" : ""
      }`}
    >
      {icon}
      {children}
    </span>
  );
}

const LOGOS = [
  <Mark key="tv" icon={<IconTrend />}>TradingView</Mark>,
  <Mark key="bb" serif>Bloomberg</Mark>,
  <Mark key="nasdaq" icon={<IconBars />}>NASDAQ</Mark>,
  <Mark key="reuters" icon={<IconDot />}>Reuters</Mark>,
  <Mark key="nyse" serif>NYSE</Mark>,
  <Mark key="yahoo" icon={<IconCandle />}>Yahoo Finance</Mark>,
  <Mark key="cnbc">CNBC</Mark>,
  <Mark key="lse" icon={<IconGlobe />}>London Stock Exchange</Mark>,
  <Mark key="mw" icon={<IconTrend />}>MarketWatch</Mark>,
  <Mark key="sp" serif>S&amp;P Global</Mark>,
  <Mark key="ft" serif>Financial Times</Mark>,
  <Mark key="ms" icon={<IconBars />}>Morningstar</Mark>,
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/10 bg-white/[0.02] py-9">
      <p className="mb-7 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {trustBar.caption}
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* track: two identical groups, animated 0 → -50% = seamless loop */}
        <div className="flex w-max animate-marquee items-center">
          <div className="flex shrink-0 items-center gap-14 pr-14">{LOGOS}</div>
          <div className="flex shrink-0 items-center gap-14 pr-14" aria-hidden>
            {LOGOS.map((l, i) => (
              <span key={`dup-${i}`}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
