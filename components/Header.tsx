import Link from "next/link";
import { siteContent } from "@/data/siteContent";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-normal">
          {siteContent.brand.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/75 md:flex">
          {siteContent.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#booking"
          className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink"
        >
          {siteContent.header.cta}
        </Link>
      </div>
    </header>
  );
}
