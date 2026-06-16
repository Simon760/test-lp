import Image from "next/image";
import { Section, Stars } from "./ui";
import { testimonials } from "@/lib/content";

/* intrinsic pixel sizes of the proof screenshots (prevents layout shift) */
const PROOF_DIMS: Record<string, { w: number; h: number }> = {
  "/testimonials/gold-swings.webp": { w: 368, h: 448 },
  "/testimonials/gold-tp.webp": { w: 368, h: 182 },
  "/testimonials/gold-account.webp": { w: 372, h: 148 },
};

function VerifiedBadge({ asset }: { asset?: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2">
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent-dark">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Verified result
      </span>
      {asset && (
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-dark">
          {asset}
        </span>
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{testimonials.title}</h2>
        <p className="mt-4 text-lg text-neutral-400">{testimonials.subtitle}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-neutral-300">
          <Stars className="!text-amber-400" />
          {testimonials.rating}
        </div>
      </div>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {testimonials.items.map((t) => {
          const dims = t.proof ? PROOF_DIMS[t.proof] : null;
          return (
            <figure
              key={t.name}
              className={`break-inside-avoid rounded-3xl border bg-white/[0.03] p-5 transition-colors ${
                t.proof ? "border-accent/20 hover:border-accent/40" : "border-white/10 hover:border-white/20"
              }`}
            >
              {t.proof && dims && (
                <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 ring-1 ring-inset ring-white/[0.04]">
                  <VerifiedBadge asset={t.asset} />
                  <Image
                    src={t.proof}
                    width={dims.w}
                    height={dims.h}
                    alt={`Verified ${t.asset} result from ${t.name}`}
                    className="h-auto w-full"
                    unoptimized
                  />
                </div>
              )}

              <Stars />
              <blockquote className="mt-3 text-[15px] leading-relaxed text-neutral-300">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3">
                <Image
                  src={`https://i.pravatar.cc/72?img=${t.img}`}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </Section>
  );
}
