"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteContent } from "@/components/LanguageProvider";

export function Hero() {
  const { content } = useSiteContent();
  const hero = content.hero;

  return (
    <section id="home" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-clay">
          {hero.eyebrow}
        </p>
        <h1 className="font-serif text-5xl font-semibold leading-tight text-ink md:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
          {hero.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#booking"
            className="rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-paper transition hover:bg-ink"
          >
            {hero.primaryButton}
          </Link>
          <Link
            href="/gallery"
            className="rounded-full border border-ink/15 px-6 py-3 text-center text-sm font-semibold text-ink transition hover:border-forest hover:text-forest"
          >
            {hero.secondaryButton}
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
          <Image
            src="/images/travel-portrait-hero.svg"
            alt={hero.imageAlt}
            width={900}
            height={1125}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-6 max-w-64 rounded-lg bg-paper/95 p-5 shadow-soft backdrop-blur">
          <p className="font-serif text-2xl font-semibold">{hero.noteTitle}</p>
          <p className="mt-2 text-sm leading-6 text-ink/68">
            {hero.noteDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
