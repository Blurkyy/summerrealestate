"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

const interestOptions = [
  "Summer Bulgaria (Behind AU)",
  "Summer Abtes (British Embassy)",
  "General Inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: Wire this up to your form handler / API route / email service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-sm border border-hairline bg-raised px-8 text-center">
        <h3 className="font-display text-2xl text-ivory">
          Thank you — your inquiry was sent.
        </h3>
        <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-muted">
          Our team will respond within 24 hours. You&apos;ll also receive a
          Telegram message from us shortly after.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-hairline bg-raised p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="font-body text-xs uppercase tracking-widest2 text-muted"
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            className="mt-2 w-full border-b border-hairline bg-transparent py-3 font-body text-sm text-ivory outline-none transition-colors focus:border-sand"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-body text-xs uppercase tracking-widest2 text-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-hairline bg-transparent py-3 font-body text-sm text-ivory outline-none transition-colors focus:border-sand"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="font-body text-xs uppercase tracking-widest2 text-muted"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full border-b border-hairline bg-transparent py-3 font-body text-sm text-ivory outline-none transition-colors focus:border-sand"
            placeholder="+251 ..."
          />
        </div>

        <div>
          <label
            htmlFor="interest"
            className="font-body text-xs uppercase tracking-widest2 text-muted"
          >
            Interested In
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            required
            className="mt-2 w-full appearance-none border-b border-hairline bg-transparent py-3 font-body text-sm text-ivory outline-none transition-colors focus:border-sand"
          >
            <option value="" disabled className="bg-raised">
              Select an option
            </option>
            {interestOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-raised">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="font-body text-xs uppercase tracking-widest2 text-muted"
          >
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 w-full resize-none border-b border-hairline bg-transparent py-3 font-body text-sm text-ivory outline-none transition-colors focus:border-sand"
            placeholder="Tell us a little about what you're looking for..."
          />
        </div>
      </div>

      <label className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-sand"
        />
        <span className="font-body text-xs leading-relaxed text-muted">
          I agree to receive updates and information about Summer Real Estate
          properties.
        </span>
      </label>

      <button
        type="submit"
        className="mt-8 inline-flex items-center gap-2 bg-sand px-7 py-3.5 font-body text-sm uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
      >
        Send Inquiry
        <Send className="h-4 w-4" />
      </button>

      <p className="mt-4 font-body text-xs text-muted">
        You&apos;ll also receive a Telegram message from our team shortly
        after.
      </p>
    </form>
  );
}
