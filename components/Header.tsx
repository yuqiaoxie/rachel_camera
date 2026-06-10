"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/LanguageProvider";
import { languageOptions } from "@/data/siteContent";

export function Header() {
  const { content, language, setLanguage } = useSiteContent();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-normal">
          {content.brand.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink/75 md:flex">
          {content.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-ink/15 bg-paper p-1 text-xs font-semibold">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={`rounded-full px-2.5 py-1 transition ${
                  language === option.code
                    ? "bg-forest text-paper"
                    : "text-ink/65 hover:text-forest"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <Link
            href="/#booking"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink"
          >
            {content.header.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
