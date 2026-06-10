import { Section, Eyebrow, Check } from "./ui";
import { demo } from "@/lib/content";
import DemoCard from "./DemoCard";

export default function Demo() {
  return (
    <Section id="demo" className="py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Live analysis</Eyebrow>
          <h2 className="text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {demo.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-400">{demo.subtitle}</p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {demo.outputs.map((o) => (
              <li key={o} className="flex items-center gap-2.5 text-[15px] text-neutral-300">
                <Check />
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-4xl border border-white/10 bg-white/[0.02] p-3">
          <DemoCard />
        </div>
      </div>
    </Section>
  );
}
