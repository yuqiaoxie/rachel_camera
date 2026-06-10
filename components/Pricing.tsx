"use client";

import { useSiteContent } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading";

export function Pricing() {
  const { content } = useSiteContent();
  const pricing = content.pricing;
  const bookingPolicy = content.booking.policy;

  return (
    <section id="pricing" className="bg-mist px-5 py-17">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {content.packages.map((item) => (
            <article key={item.name} className="rounded-lg bg-paper p-6 shadow-soft">
              <h3 className="font-serif text-2xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{item.description}</p>
              <p className="mt-6 font-serif text-3xl font-semibold text-forest">{item.price}</p>
              <ul className="mt-4 font-serif space-y-3 text-m font-semibold text-forest/75">
                {item.priceLines.map((priceLine) => (
                  <li key={priceLine}>{priceLine}</li>
                ))}
              </ul>
              <ul className="mt-6 space-y-3 text-base leading-7 text-ink/75">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg bg-paper p-7 shadow-soft">
            <h3 className="font-serif text-2xl font-semibold">
              {content.generalNotes.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/75">
              {content.generalNotes.items.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="space-y-5">
            <article className="rounded-lg bg-paper p-7 shadow-soft">
              <h3 className="font-serif text-2xl font-semibold">{bookingPolicy.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/75">
                {bookingPolicy.items.map((policy) => (
                  <li key={policy} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-clay" />
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg bg-paper p-7 shadow-soft">
              <h3 className="font-serif text-2xl font-semibold">{content.gearNote.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/75">
                {content.gearNote.description}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
