"use client";
import { useState } from "react";
import { ArrowRight, Chevron } from "./Icons";

export default function AssessmentForm({ offset = false }: { offset?: boolean }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  return (
    <div className="relative w-full max-w-[470px]">
      {offset && (
        <div className="pointer-events-none absolute inset-0 translate-x-4 translate-y-4 rounded-[22px] bg-gradient-to-b from-gold-500 to-[#ac8519] sm:translate-x-5 sm:translate-y-5 sm:rounded-[30px]" />
      )}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative overflow-hidden rounded-[22px] border border-white/90 bg-white px-5 pb-5 pt-5 shadow-card sm:rounded-[30px] sm:px-8 sm:pb-8 sm:pt-[30px]"
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-[140px] w-full opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34,54,107,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 100%",
          }}
        />

        <div className="relative mb-4 flex flex-wrap items-center justify-between gap-2 sm:mb-[18px]">
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-gold-500 sm:text-[11px]">
            Free business assessment
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-600 sm:text-[11px]">
              Step 1 / 2
            </span>
            <span className="h-[3px] w-[22px] rounded-sm bg-gold-500" />
            <span className="h-[3px] w-[22px] rounded-sm bg-neutral-100" />
          </div>
        </div>

        <h3 className="relative mb-2 text-[24px] font-semibold leading-[1.18] tracking-[-0.36px] text-blue-950 sm:text-[30px]">
          Tell us where your business stands.
        </h3>
        <p className="relative mb-5 text-[14px] leading-[1.52] text-neutral-600">
          Two short steps. We use your answers to identify the relevant services and next steps.
        </p>

        <div className="relative space-y-4 sm:space-y-[18px]">
          <Field
            label="Full name"
            placeholder="Your full name"
            value={data.name}
            onChange={(v) => setData({ ...data, name: v })}
            autoComplete="name"
          />
          <Field
            label="Work email"
            placeholder="name@company.com"
            type="email"
            value={data.email}
            onChange={(v) => setData({ ...data, email: v })}
            autoComplete="email"
          />

          <div>
            <label htmlFor="phone-number" className="mb-[7px] block text-[13px] font-medium text-blue-900">
              Phone number
            </label>
            <div className="flex items-stretch overflow-hidden rounded-xl border border-neutral-300">
              <div className="flex shrink-0 items-center gap-1.5 border-r border-neutral-300 bg-gold-100 px-2.5 sm:gap-2 sm:px-4">
                <span className="text-[14px] text-blue-950 sm:text-[16px]">+971</span>
                <Chevron className="h-3 w-3 text-blue-950/70" />
              </div>
              <input
                id="phone-number"
                className="min-w-0 flex-1 bg-neutral-50 px-3 py-[14px] text-[16px] text-blue-950 outline-none placeholder:text-neutral-600 sm:px-4"
                placeholder="50 123 4567"
                inputMode="tel"
                autoComplete="tel-national"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
          </div>

          <Field
            label="Company name"
            placeholder="Company or proposed trade name"
            value={data.company}
            onChange={(v) => setData({ ...data, company: v })}
            autoComplete="organization"
          />

          <button
            type="submit"
            className="group flex min-h-12 w-full items-center justify-between rounded-full bg-gold-pill py-[6px] pl-5 pr-[6px] shadow-gold transition hover:brightness-[0.97] sm:pl-6"
          >
            <span className="text-[15px] font-semibold text-blue-950 sm:text-[16px]">Continue</span>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-chip text-white transition group-hover:translate-x-0.5">
              <ArrowRight className="h-[18px] w-[18px]" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="mb-[7px] block text-[13px] font-medium text-blue-900">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3 py-[14px] text-[16px] leading-[1.6] text-blue-950 outline-none placeholder:text-neutral-600 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 sm:px-4"
      />
    </div>
  );
}
