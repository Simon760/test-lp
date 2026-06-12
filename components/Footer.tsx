import { Logo } from "./ui";
import { brand, footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-extrabold tracking-tight text-white">{brand.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-neutral-500">{footer.tagline}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-500">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-neutral-400">{footer.disclaimer}</p>
          <p className="mt-4 text-sm text-neutral-400">
            © 2026 {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
