"use client";

import { useRef, useState } from "react";
import { Button, Logo } from "./ui";
import { brand, nav } from "@/lib/content";

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
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 glass">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-9">
          <a href="#" className="group flex items-center gap-2">
            <span className="transition-transform duration-300 group-hover:-rotate-6">
              <Logo />
            </span>
            <span className="text-lg font-extrabold tracking-tight">{brand.name}</span>
          </a>

          <div
            ref={listRef}
            onMouseLeave={() => setHl((h) => ({ ...h, opacity: 0 }))}
            className="relative hidden items-center gap-1 text-sm font-medium md:flex"
          >
            {/* gliding highlight */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 -z-0 h-8 -translate-y-1/2 rounded-full bg-neutral-100 transition-all duration-300 ease-out"
              style={{ left: hl.left, width: hl.width, opacity: hl.opacity }}
            />
            {nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onMouseEnter={(e) => moveTo(e.currentTarget)}
                className="relative z-10 rounded-full px-3.5 py-2 text-neutral-600 transition-colors duration-200 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={brand.appUrl}
            className="hidden text-sm font-medium text-neutral-600 transition-colors hover:text-ink sm:block"
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
