"use client";

import { useRef, useState } from "react";
import { Button } from "./ui";
import { brand, nav } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
// raw <a> tags don't get Next's basePath automatically — prepend it for internal paths
const withBase = (h: string) => (h.startsWith("/") ? `${BASE}${h}` : h);

export default function Navbar() {
  // sliding hover highlight (TrendTrack-style)
  const [hl, setHl] = useState({ left: 0, width: 0, opacity: 0 });
  const listRef = useRef<HTMLDivElement>(null);

  const moveTo = (el: HTMLElement) => {
    const parent = listRef.current;
    if (!parent) return;
    const p = parent.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    setHl({ left: r.left - p.left, width: r.width, opacity: 1 });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink/80 glass">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-9">
          <a href={withBase("/")} aria-label={brand.name} className="flex items-center gap-2.5">
            {/* animated U mark, CSS-cropped from the video canvas (1248x1664;
                U mark region ≈ 160,340 → 930x720, small caption below is cut);
                mix-blend-screen melts the black video background into the navbar */}
            <span
              className="relative block h-10 overflow-hidden mix-blend-screen"
              style={{ aspectRatio: "930 / 720" }}
            >
              <video
                src={`${BASE}/brand/logo-animated.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="absolute max-w-none"
                style={{ width: "134.2%", left: "-17.2%", top: "-47.2%" }}
              />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">{brand.name}</span>
          </a>

          <div
            ref={listRef}
            onMouseLeave={() => setHl((h) => ({ ...h, opacity: 0 }))}
            className="relative hidden items-center gap-1 text-sm font-medium md:flex"
          >
            {/* gliding highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 -z-0 h-8 -translate-y-1/2 rounded-full bg-white/10 transition-all duration-300 ease-out"
              style={{ left: hl.left, width: hl.width, opacity: hl.opacity }}
            />
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={withBase(l.href)}
                onMouseEnter={(e) => moveTo(e.currentTarget)}
                className="relative z-10 rounded-full px-3.5 py-2 text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={brand.appUrl}
            className="hidden text-sm font-medium text-neutral-400 transition-colors hover:text-white sm:block"
          >
            Log in
          </a>
          <Button href={brand.appUrl} className="!px-4 !py-2">
            {brand.ctaPrimary}
          </Button>
        </div>
      </nav>
    </header>
  );
}
