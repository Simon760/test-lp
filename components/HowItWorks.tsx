import { Section, Button } from "./ui";
import { brand, howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <div id="how" className="bg-white/[0.02] py-20 sm:py-28">
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">{howItWorks.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <div
              key={step.n}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.05]"
            >
              {/* top accent bar grows in on hover */}
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent to-emerald-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              {/* soft accent glow on hover */}
              <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <span className="text-3xl font-extrabold text-neutral-700 transition-colors duration-300 group-hover:text-accent">
                  {step.n}
                </span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent-dark transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  {step.time}
                </span>
              </div>
              <h3 className="relative mt-4 flex items-center gap-1.5 text-lg font-bold text-white">
                {step.title}
                <svg
                  className="h-4 w-4 -translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-neutral-400">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href={brand.appUrl}>{brand.ctaPrimary} →</Button>
        </div>
      </Section>
    </div>
  );
}
