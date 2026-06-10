import { Section, Button } from "./ui";
import { brand, finalCta } from "@/lib/content";

export default function CTASection() {
  return (
    <Section className="py-12 sm:py-20">
      <div className="relative overflow-hidden rounded-4xl bg-ink px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            {finalCta.title}
          </h2>
          <p className="text-balance mx-auto mt-4 max-w-xl text-lg text-neutral-300">
            {finalCta.subtitle}
          </p>
          <Button href={brand.appUrl} variant="light" className="mt-8">
            {brand.ctaPrimary} →
          </Button>
        </div>
      </div>
    </Section>
  );
}
