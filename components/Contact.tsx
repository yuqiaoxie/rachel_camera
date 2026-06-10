"use client";

import { useSiteContent } from "@/components/LanguageProvider";

export function Contact() {
  const { content } = useSiteContent();
  const contact = content.contact;

  return (
    <section id="contact" className="bg-paper px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-clay">
            {contact.eyebrow}
          </p>
          <h2 className="font-serif text-4xl font-semibold md:text-4xl">
            {contact.title}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-ink/72">
          <p>{contact.description}</p>
          <div className="rounded-lg bg-mist p-6">
            <p>
              {contact.emailLabel}{" "}
              <a className="font-semibold text-forest" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <p>
              {contact.instaLabel}{" "}
              <a
                className="font-semibold text-forest"
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.instaHandle}
              </a>
            </p>
            <p>
              {contact.WHATSAPPLabel}{" "}
              <a
                className="font-semibold text-forest"
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.WHATSAPP}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
