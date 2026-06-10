"use client";

import { FormEvent, useState } from "react";
import { packages } from "@/data/site";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="booking" className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-clay">
            Booking Request
          </p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            Tell Rachel where the light should find you.
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/70">
            Share your travel dates, destination, and the kind of photographs you are hoping
            to make. Rachel will reply with availability and next steps.
          </p>
          {submitted && (
            <div className="mt-6 rounded-lg border border-forest/20 bg-forest/10 p-5 text-sm leading-6 text-forest">
              Thank you. Rachel will review your details and reply with availability.
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="rounded-lg bg-paper p-6 shadow-soft md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-semibold">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm font-semibold">
              Session Type
              <select
                name="package"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a package
                </option>
                {packages.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Preferred Date
              <input
                type="date"
                name="date"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
              />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              Location
              <input
                name="location"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder="City, hotel, landscape, or travel route"
              />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              Message
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder="Tell me about the trip, the people, and the feeling you want."
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink"
          >
            Send Booking Request
          </button>
        </form>
      </div>
    </section>
  );
}
