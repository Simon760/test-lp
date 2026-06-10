import Image from "next/image";
import { Button, Section, Stars } from "./ui";
import { brand, hero } from "@/lib/content";
import DemoCard from "./DemoCard";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] bg-gradient-to-b from-accent-soft/70 via-white to-white" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[680px] dot-grid opacity-60" />

      <Section className="pb-12 pt-16 text-center sm:pt-24">
        <div className="animate-fade-up">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.badge}
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            {hero.title}
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
              {hero.titleAccent}
            </span>
            <br />
            {hero.titleAfter}
          </h1>

          <p className="text-balance mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={brand.appUrl} className="w-full sm:w-auto">
              {brand.ctaPrimary} →
            </Button>
          </div>
          <p className="mt-3 text-sm text-neutral-400">{hero.ctaSupport}</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[12, 32, 45, 68].map((id) => (
                <Image
                  key={id}
                  src={`https://i.pravatar.cc/72?img=${id}`}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
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
          <div className="rounded-4xl border border-neutral-200 bg-white/70 p-2 shadow-card glass">
            <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-white">
              <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 rounded-md bg-white px-3 py-0.5 text-xs text-neutral-400">
                  {brand.name.toLowerCase()} — chart analysis
                </span>
              </div>
              <div className="bg-neutral-50/60 p-5 text-left">
                <DemoCard />
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="animate-floaty absolute -left-6 top-24 hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-card lg:block">
            <p className="text-xs text-neutral-400">Analysis time</p>
            <p className="text-sm font-bold">7 seconds ⚡</p>
          </div>
          <div className="animate-floaty absolute -right-6 top-44 hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-card lg:block [animation-delay:1.2s]">
            <p className="text-xs text-neutral-400">Trustpilot</p>
            <p className="text-sm font-bold">4.5 ★</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
