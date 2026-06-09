"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

const field =
  "w-full border-b border-line bg-transparent py-3 text-ink outline-none transition-colors duration-300 placeholder:text-muted/60 focus:border-accent";
const label = "text-[11px] uppercase tracking-luxe text-muted";

const interests = [
  "Residential",
  "Commercial & Retail",
  "Hospitality & Land",
  "Advisory",
] as const;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Buying",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO(backend): wire this to an email service or Supabase. For now we open
    // the visitor's mail client with a pre-filled enquiry so the form is usable.
    const subject = encodeURIComponent(`Enquiry: ${form.interest}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.interest}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={label}>Name</span>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={field}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={field}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>Phone</span>
          <input
            value={form.phone}
            onChange={update("phone")}
            placeholder="Optional"
            className={field}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={label}>I&rsquo;m interested in</span>
          <select value={form.interest} onChange={update("interest")} className={field}>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={label}>Message</span>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us a little about what you're looking for."
          className={`${field} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-[13px] tracking-wide text-canvas transition-colors duration-500 ease-luxe hover:bg-accent"
      >
        Send enquiry
        <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" />
      </button>
    </form>
  );
}
