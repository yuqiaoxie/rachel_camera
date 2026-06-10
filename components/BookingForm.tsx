"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const booking = siteContent.booking;

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
            {booking.eyebrow}
          </p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            {booking.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-ink/70">
            {booking.description}
          </p>
          {submitted && (
            <div className="mt-6 rounded-lg border border-forest/20 bg-forest/10 p-5 text-sm leading-6 text-forest">
              {booking.successMessage}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="rounded-lg bg-paper p-6 shadow-soft md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              {booking.fields.name.label}
              <input
                required
                name="name"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder={booking.fields.name.placeholder}
              />
            </label>
            <label className="block text-sm font-semibold">
              {booking.fields.email.label}
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder={booking.fields.email.placeholder}
              />
            </label>
            <label className="block text-sm font-semibold">
              {booking.fields.package.label}
              <select
                name="package"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                defaultValue=""
              >
                <option value="" disabled>
                  {booking.packagePlaceholder}
                </option>
                {siteContent.packages.map((item) => (
                  <option key={item.name}>{item.name}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold">
              {booking.fields.date.label}
              <input
                type="date"
                name="date"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
              />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              {booking.fields.location.label}
              <input
                name="location"
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder={booking.fields.location.placeholder}
              />
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              {booking.fields.message.label}
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-ink/12 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest"
                placeholder={booking.fields.message.placeholder}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper transition hover:bg-ink"
          >
            {booking.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
}
