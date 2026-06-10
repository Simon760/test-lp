import Image from "next/image";
import { Section, Stars } from "./ui";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <Section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{testimonials.title}</h2>
        <p className="mt-4 text-lg text-neutral-600">{testimonials.subtitle}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 shadow-soft">
          <Stars className="!text-amber-400" />
          {testimonials.rating}
        </div>
      </div>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {testimonials.items.map((t) => (
          <figure
            key={t.name}
            className="break-inside-avoid rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft"
          >
            <Stars />
            <blockquote className="mt-3 text-[15px] leading-relaxed text-neutral-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <Image
                src={`https://i.pravatar.cc/72?img=${t.img}`}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                unoptimized
              />
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-neutral-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
