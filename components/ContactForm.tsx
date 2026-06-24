"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

const products = [
  "DustLoc",
  "WetDown",
  "RoadPro",
  "TrackShield",
  "Site Regeneration",
  "General Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 py-16">
        <CheckCircle size={40} className="text-dp-amber" weight="fill" />
        <h2 className="text-2xl font-bold tracking-tight">
          Thanks, we&apos;ll be in touch.
        </h2>
        <p className="text-dp-muted leading-relaxed max-w-[44ch]">
          Your enquiry has been received. A member of our team will respond
          within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-dp-amber hover:underline mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-dp-muted">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="bg-dp-surface border border-dp-border text-dp-text placeholder-dp-dim px-4 py-3 text-sm focus:outline-none focus:border-dp-amber transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-dp-muted">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            className="bg-dp-surface border border-dp-border text-dp-text placeholder-dp-dim px-4 py-3 text-sm focus:outline-none focus:border-dp-amber transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-dp-muted">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="bg-dp-surface border border-dp-border text-dp-text placeholder-dp-dim px-4 py-3 text-sm focus:outline-none focus:border-dp-amber transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-dp-muted">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+61 4XX XXX XXX"
            className="bg-dp-surface border border-dp-border text-dp-text placeholder-dp-dim px-4 py-3 text-sm focus:outline-none focus:border-dp-amber transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="product" className="text-xs font-mono uppercase tracking-widest text-dp-muted">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="bg-dp-surface border border-dp-border text-dp-text px-4 py-3 text-sm focus:outline-none focus:border-dp-amber transition-colors appearance-none"
        >
          <option value="">Select a product or topic</option>
          {products.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-dp-muted">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your site, the challenge you're facing, or what you need..."
          className="bg-dp-surface border border-dp-border text-dp-text placeholder-dp-dim px-4 py-3 text-sm focus:outline-none focus:border-dp-amber transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Enquiry"}
        {!loading && <ArrowRight size={15} weight="bold" />}
      </button>
    </form>
  );
}
