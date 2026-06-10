import { Button, Logo } from "./ui";
import { brand, nav } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 glass">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-9">
          <a href="#" className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-extrabold tracking-tight">{brand.name}</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-neutral-600 md:flex">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-ink">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={brand.appUrl}
            className="hidden text-sm font-medium text-neutral-600 transition hover:text-ink sm:block"
          >
            Log in
          </a>
          <Button href={brand.appUrl} className="!px-4 !py-2">
            {brand.ctaPrimary}
          </Button>
        </div>
      </nav>
    </header>
  );
}
