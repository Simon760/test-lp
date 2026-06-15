import Image from "next/image";
import { Button, Section, Stars } from "./ui";
import { brand, hero } from "@/lib/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* ambient green glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-gradient-to-b from-accent/[0.12] via-ink to-ink" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] dot-grid opacity-60" />

      <Section className="pb-12 pt-16 text-center sm:pt-24">
        <div className="animate-fade-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm font-medium text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.badge}
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            {hero.title}
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
              {hero.titleAccent}
            </span>
            <br />
            {hero.titleAfter}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={brand.appUrl} className="w-full sm:w-auto">
              {brand.ctaPrimary} →
            </Button>
          </div>
          <p className="mt-3 text-sm text-neutral-500">{hero.ctaSupport}</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[12, 32, 45, 68].map((id) => (
                <Image
                  key={id}
                  src={`https://i.pravatar.cc/72?img=${id}`}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-ink object-cover"
                  unoptimized
                />
              ))}
            </div>
            <div className="text-left">
              <Stars />
              <p className="text-xs text-neutral-500">{hero.proof}</p>
            </div>
          </div>
        </div>

        {/* product preview */}
        <div className="relative mx-auto mt-16 max-w-4xl animate-fade-up [animation-delay:150ms]">
          <div className="rounded-4xl border border-white/10 bg-white/[0.03] p-2 shadow-[0_40px_120px_-40px_rgba(31,217,107,0.25)]">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink">
              <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 rounded-md bg-white/5 px-3 py-0.5 text-xs text-neutral-500">
                  {brand.name.toLowerCase()} — chart analysis
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/shots/hero.png`}
                alt={`${brand.name} stock analysis — trading plan with entry, stop-loss and take-profit`}
                className="w-full"
              />
            </div>
          </div>

          {/* floating chips */}
          <div className="animate-floaty absolute -left-6 top-24 hidden rounded-2xl border border-white/10 bg-surface p-3 shadow-card lg:block">
            <p className="text-xs text-neutral-500">Analysis time</p>
            <p className="text-sm font-bold text-white">7 seconds ⚡</p>
          </div>
          <div className="animate-floaty absolute -right-6 top-44 hidden rounded-2xl border border-white/10 bg-surface p-3 shadow-card lg:block [animation-delay:1.2s]">
            <p className="text-xs text-neutral-500">Trustpilot</p>
            <p className="text-sm font-bold text-white">4.5 ★</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
