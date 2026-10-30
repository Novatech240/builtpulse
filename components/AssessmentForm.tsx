"use client";
import { useEffect, useId, useState } from "react";
import { ArrowRight, Chevron } from "./Icons";

export type FormSelect = { label: string; placeholder?: string; options: string[] };

export type FormCopy = {
  /** Label above the title. Defaults to "Free business assessment". */
  eyebrow?: string;
  title: string;
  body: string;
  submit?: string;
  /** Fourth field: company name, a jurisdiction picker for setup services, or nothing. */
  field?: "company" | "jurisdiction" | "none";
  companyLabel?: string;
  companyPlaceholder?: string;
  /** Extra dropdowns, shown after the fourth field. */
  selects?: FormSelect[];
};

const homeCopy: FormCopy = {
  title: "What does your business need next?",
  body: "Whether you're setting up a company in Dubai or expanding across the UAE, share your goals with us. We'll help you identify the services that fit your business needs.",
};

/** A jurisdiction pushed in from elsewhere on the page; `nonce` lets the same value be re-applied. */
export type FormPreset = { jurisdiction: string; nonce: number } | null;

export default function AssessmentForm({
  offset = false,
  variant = "home",
  copy = homeCopy,
  preset = null,
}: {
  offset?: boolean;
  variant?: "home" | "service";
  copy?: FormCopy;
  preset?: FormPreset;
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jurisdiction: "",
  });
  const [picks, setPicks] = useState<Record<string, string>>({});
  // The form can appear twice on a page, so ids must be unique or labels focus the wrong copy.
  const uid = useId();
  const service = variant === "service";
  const inputBg = service ? "bg-white" : "bg-neutral-50";
  const jurisdictionField = copy.field === "jurisdiction";

  useEffect(() => {
    if (preset) setData((d) => ({ ...d, jurisdiction: preset.jurisdiction }));
  }, [preset]);

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
            {copy.eyebrow ?? "Free business assessment"}
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
          {copy.title}
        </h3>
        <p className="relative mb-5 text-[14px] leading-[1.52] text-neutral-600">{copy.body}</p>

        <div className="relative space-y-4 sm:space-y-[18px]">
          <Field
            label="Full name"
            placeholder="Your full name"
            value={data.name}
            onChange={(v) => setData({ ...data, name: v })}
            autoComplete="name"
            bg={inputBg}
            uid={uid}
          />
          <Field
            label="Work email"
            placeholder="name@company.com"
            type="email"
            value={data.email}
            onChange={(v) => setData({ ...data, email: v })}
            autoComplete="email"
            bg={inputBg}
            uid={uid}
          />

          <div>
            <label htmlFor={`${uid}-phone`} className="mb-[7px] block text-[13px] font-medium text-blue-900">
              Phone number
            </label>
            <div className="flex items-stretch overflow-hidden rounded-xl border border-neutral-300">
              <div className={`flex shrink-0 items-center gap-1.5 border-r border-neutral-300 ${service ? "bg-white" : "bg-gold-100"} px-2.5 sm:gap-2 sm:px-4`}>
                <span className="text-[14px] text-blue-950 sm:text-[16px]">+971</span>
                <Chevron className="h-3 w-3 text-blue-950/70" />
              </div>
              <input
                id={`${uid}-phone`}
                className={`min-w-0 flex-1 ${inputBg} px-3 py-[14px] text-[16px] text-blue-950 outline-none placeholder:text-neutral-600 sm:px-4`}
                placeholder="50 123 4567"
                inputMode="tel"
                autoComplete="tel-national"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />
            </div>
          </div>

          {jurisdictionField ? (
            <div>
              <label htmlFor={`${uid}-jurisdiction`} className="mb-[7px] block text-[13px] font-medium text-blue-900">
                Preferred jurisdiction
              </label>
              <div className="relative">
                <select
                  id={`${uid}-jurisdiction`}
                  value={data.jurisdiction}
                  onChange={(e) => setData({ ...data, jurisdiction: e.target.value })}
                  className={`w-full appearance-none rounded-xl border border-neutral-300 bg-white py-[14px] pl-3 pr-10 text-[16px] leading-[1.6] outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 sm:pl-4 ${
                    data.jurisdiction ? "text-blue-950" : "text-neutral-600"
                  }`}
                >
                  <option value="" disabled>
                    Mainland, Free Zone, Offshore or not sure
                  </option>
                  <option value="mainland">Mainland</option>
                  <option value="free-zone">Free Zone</option>
                  <option value="offshore">Offshore</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
                <Chevron className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-blue-950/70" />
              </div>
            </div>
          ) : copy.field === "none" ? null : (
            <Field
              label={copy.companyLabel ?? "Company name"}
              placeholder={copy.companyPlaceholder ?? "Company or proposed trade name"}
              value={data.company}
              onChange={(v) => setData({ ...data, company: v })}
              autoComplete="organization"
              bg={inputBg}
              uid={uid}
            />
          )}

          {copy.selects?.map((s) => {
            const id = `${uid}-${s.label.toLowerCase().replace(/\s+/g, "-")}`;
            const value = picks[s.label] ?? "";
            return (
              <div key={s.label}>
                <label htmlFor={id} className="mb-[7px] block text-[13px] font-medium text-blue-900">
                  {s.label}
                </label>
                <div className="relative">
                  <select
                    id={id}
                    value={value}
                    onChange={(e) => setPicks({ ...picks, [s.label]: e.target.value })}
                    className={`w-full appearance-none rounded-xl border border-neutral-300 bg-white py-[14px] pl-3 pr-10 text-[16px] leading-[1.6] outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 sm:pl-4 ${
                      value ? "text-blue-950" : "text-neutral-600"
                    }`}
                  >
                    <option value="" disabled>
                      {s.placeholder ?? "Select an option"}
                    </option>
                    {s.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <Chevron className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-blue-950/70" />
                </div>
              </div>
            );
          })}

          <button
            type="submit"
            className="group flex min-h-12 w-full items-center justify-between rounded-full bg-gold-pill py-[6px] pl-5 pr-[6px] shadow-gold transition hover:brightness-[0.97] sm:pl-6"
          >
            <span className="text-[15px] font-semibold text-blue-950 sm:text-[16px]">{copy.submit ?? "Continue"}</span>
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
  bg = "bg-neutral-50",
  uid,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  bg?: string;
  uid: string;
}) {
  const id = `${uid}-${label.toLowerCase().replace(/\s+/g, "-")}`;
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
        className={`w-full rounded-xl border border-neutral-300 ${bg} px-3 py-[14px] text-[16px] leading-[1.6] text-blue-950 outline-none placeholder:text-neutral-600 focus:border-blue-800 focus:ring-2 focus:ring-blue-800/20 sm:px-4`}
      />
    </div>
  );
}
