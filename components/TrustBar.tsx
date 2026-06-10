import { trustBar } from "@/lib/content";

export default function TrustBar() {
  const items = [...trustBar.items, ...trustBar.items];
  return (
    <div className="border-y border-neutral-100 bg-neutral-50/60 py-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {trustBar.caption}
      </p>
      <div className="relative mx-auto max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 px-7 text-lg font-bold text-neutral-300">
          {items.map((name, i) => (
            <span key={i} className="whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
