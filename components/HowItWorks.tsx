import { Section, Button } from "./ui";
import { brand, howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <div id="how" className="bg-neutral-50/60 py-20 sm:py-28">
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">{howItWorks.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <div key={step.n} className="relative rounded-3xl border border-neutral-200 bg-white p-7 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-neutral-200">{step.n}</span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent-dark">
                  {step.time}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">{step.body}</p>
              {i < howItWorks.steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 md:flex">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
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
