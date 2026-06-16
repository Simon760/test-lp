import Image from "next/image";
import { Button, Section, Stars } from "./ui";
import { brand, hero } from "@/lib/content";

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
            <Button href={brand.appUrl} size="sm" className="w-full sm:w-auto">
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
        <div className="relative mx-auto mt-16 max-w-6xl animate-fade-up [animation-delay:150ms]">
          {/* just the demo video — it already carries its own framing */}
          <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] shadow-[0_40px_120px_-40px_rgba(31,217,107,0.35)]">
            <iframe
              src="https://player.vimeo.com/video/1201832523?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1"
              title={`${brand.name} demo`}
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
