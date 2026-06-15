import { ReactNode } from "react";

/* Shared building blocks so every legal page (Terms, Privacy, Risk) is identical
   in design: centered header, numbered sections with dividers, refined type. */

export function LegalHeader({ title, subtitle, meta }: { title: string; subtitle: string; meta: string }) {
  return (
    <header className="border-b border-white/10 pb-10 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Legal</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-5 text-sm text-neutral-400">{subtitle}</p>
      <p className="mt-1 text-sm text-neutral-500">{meta}</p>
    </header>
  );
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-[13px] font-semibold uppercase leading-6 tracking-wide text-neutral-300">
      {children}
    </div>
  );
}

const PROSE =
  "mt-4 space-y-4 text-[15px] leading-7 text-neutral-400 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-neutral-200 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-neutral-600";

export function LegalSection({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section className="mt-10 border-t border-white/10 pt-10">
      <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
        <span className="text-neutral-500">{n}.</span> {title}
      </h2>
      <div className={PROSE}>{children}</div>
    </section>
  );
}

export function LegalSub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pt-1">
      <h3 className="text-[15px] font-semibold text-neutral-200">{title}</h3>
      <div className="mt-1.5 space-y-3">{children}</div>
    </div>
  );
}

export function LegalUpdated({ children }: { children: ReactNode }) {
  return (
    <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-neutral-500">{children}</p>
  );
}
