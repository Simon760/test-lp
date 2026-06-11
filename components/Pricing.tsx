"use client";

import { useState } from "react";
import { Section, Button } from "./ui";
import { brand, pricing } from "@/lib/content";

function PlainCheck() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

type Lead = "featured" | "alt";

export default function Pricing() {
  // which card currently "leads": featured (Monthly) by default,
  // inverted while the cursor is over the other plan
  const [lead, setLead] = useState<Lead>("featured");

  return (
    <div id="pricing" className="bg-white/[0.02] py-20 sm:py-28">
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{pricing.title}</h2>
          <p className="mt-4 text-lg text-neutral-400">{pricing.subtitle}</p>
        </div>

        {/* BullGPT geometry: near-equal widths (1.07:1), the trailing card vertically
            inset. Hovering the other plan smoothly inverts the proportions —
            animated via flex-grow (reliably interpolable), inline-driven. */}
        <div
          className="mx-auto mt-14 flex max-w-5xl flex-col gap-5 md:flex-row"
          onMouseLeave={() => setLead("featured")}
        >
          {pricing.plans.map((plan) => {
            const isLead = plan.featured ? lead === "featured" : lead === "alt";
            return (
            <div
              key={plan.name}
              onMouseEnter={() => setLead(plan.featured ? "featured" : "alt")}
              style={{ flexGrow: isLead ? 1.07 : 1, marginTop: isLead ? 0 : 32, marginBottom: isLead ? 0 : 32 }}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ease-out max-md:!my-0 md:basis-0 ${
                plan.featured
                  ? "border-accent/45 bg-gradient-to-b from-accent/[0.18] via-accent/[0.04] to-transparent p-9 shadow-[0_0_0_1px_rgba(31,217,107,0.12),0_40px_100px_-40px_rgba(31,217,107,0.6)]"
                  : "border-white/10 bg-white/[0.04] p-8"
              }`}
            >
              {/* green glow at the top of the featured card */}
              {plan.featured && (
                <span className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[130%] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
              )}

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-white">{plan.name}</p>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    [ {plan.badge} ]
                  </span>
                </div>

                <p className="mt-3 text-sm text-neutral-400">{plan.tagline}</p>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-5xl font-extrabold tracking-tight text-white">{plan.price}</span>
                  <span className="text-sm font-medium text-neutral-500">{plan.period}</span>
                </p>

                <Button
                  href={brand.appUrl}
                  variant={plan.featured ? "primary" : "secondary"}
                  className={`mt-7 w-full ${
                    plan.featured
                      ? ""
                      : "!border-accent/30 !bg-accent/[0.06] shadow-[0_0_46px_-14px_rgba(31,217,107,0.55)] hover:!bg-accent/[0.12]"
                  }`}
                >
                  Get started now
                </Button>

                <p className="mt-8 text-sm font-semibold text-white">Included:</p>
                <ul className="mt-4 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-neutral-300">
                      <PlainCheck />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
