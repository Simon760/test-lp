import { Section, Eyebrow } from "./ui";
import { valueProps } from "@/lib/content";

export default function ValueCards() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {valueProps.title}
        </h2>
        <p className="text-balance mt-4 text-lg text-neutral-600">{valueProps.subtitle}</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {valueProps.cards.map((card) => (
          <article
            key={card.title}
            className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
              card.highlight
                ? "border-accent-ring bg-accent-soft/40 shadow-glow"
                : "border-neutral-200 bg-white shadow-soft hover:shadow-card"
            }`}
          >
            <Eyebrow>{card.tag}</Eyebrow>
            <h3 className="mt-4 text-xl font-bold tracking-tight">{card.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{card.body}</p>
            {card.highlight && (
              <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
