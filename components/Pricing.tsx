import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/data/siteContent";

export function Pricing() {
  const pricing = siteContent.pricing;

  return (
    <section id="pricing" className="bg-mist px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.packages.map((item) => (
            <article key={item.name} className="rounded-lg bg-paper p-7 shadow-soft">
              <h3 className="font-serif text-3xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{item.description}</p>
              <p className="mt-6 font-serif text-4xl font-semibold text-forest">{item.price}</p>
              <ul className="mt-6 space-y-3 text-sm text-ink/75">
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
      </div>
    </section>
  );
}
