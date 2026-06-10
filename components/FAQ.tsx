import { Section } from "./ui";
import { faq } from "@/lib/content";

export default function FAQ() {
  return (
    <Section id="faq" className="max-w-3xl py-20 sm:py-28">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{faq.title}</h2>
      <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
        {faq.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
              {item.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-neutral-400 transition group-open:rotate-45 group-open:bg-accent-soft group-open:text-accent-dark">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 pr-10 text-[15px] leading-relaxed text-neutral-400">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
