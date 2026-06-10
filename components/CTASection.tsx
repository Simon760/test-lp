import { Section, Button } from "./ui";
import { brand, finalCta } from "@/lib/content";

export default function CTASection() {
  return (
    <Section className="py-12 sm:py-20">
      <div className="relative overflow-hidden rounded-4xl border border-accent/20 bg-gradient-to-b from-surface-raised to-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
        <div className="relative">
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {finalCta.title}
          </h2>
          <p className="text-balance mx-auto mt-4 max-w-xl text-lg text-neutral-300">
            {finalCta.subtitle}
          </p>
          <Button href={brand.appUrl} className="mt-8">
            {brand.ctaPrimary} →
          </Button>
        </div>
      </div>
    </Section>
  );
}
