export function Contact() {
  return (
    <section id="contact" className="bg-paper px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-clay">Contact</p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            Available for quiet corners, open roads, and golden afternoons.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-ink/72">
          <p>
            For travel sessions, portraits, family stories, or creative brand work, reach out
            with your dates and destination.
          </p>
          <div className="rounded-lg bg-mist p-6">
            <p>
              Email:{" "}
              <a className="font-semibold text-forest" href="mailto:hello@rachelcamera.com">
                hello@rachelcamera.com
              </a>
            </p>
            <p>Based in Europe. Available for selected travel dates worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
