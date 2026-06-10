import { Section, Button, Check } from "./ui";
import { brand, pricing } from "@/lib/content";

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white/[0.02] py-20 sm:py-28">
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{pricing.title}</h2>
          <p className="mt-4 text-lg text-neutral-400">{pricing.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.featured
                  ? "border-accent/50 bg-accent/[0.06] shadow-[0_0_0_1px_rgba(31,217,107,0.15),0_30px_80px_-30px_rgba(31,217,107,0.5)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-white">{plan.name}</p>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    plan.featured ? "bg-accent text-ink" : "bg-white/10 text-neutral-300"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-white">{plan.price}</span>
                <span className="text-sm font-medium text-neutral-500">{plan.period}</span>
              </p>
              <Button
                href={brand.appUrl}
                variant={plan.featured ? "primary" : "secondary"}
                className="mt-6 w-full"
              >
                {brand.ctaPrimary}
              </Button>
              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-400">
                    <Check className="mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
