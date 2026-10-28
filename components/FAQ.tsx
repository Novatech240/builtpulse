"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import AssessmentForm, { type FormCopy } from "./AssessmentForm";

export type FaqItem = { q: string; a: string };

const homeFaqs: FaqItem[] = [
  {
    q: "What business setup options are available in the UAE?",
    a: "Businesses can generally choose Mainland, Free Zone, or Offshore structures, subject to applicable rules. Options may include an LLC, Sole Establishment, Civil Company, or Branch. BuiltPulse helps you compare suitable options for company setup in Dubai based on your business activity and goals.",
  },
  {
    q: "Which services can BuiltPulse assist with?",
    a: "BuiltPulse offers business setup services in Dubai and ongoing support across 12 service areas. These include formation and licensing, tax compliance, consulting, marketing, immigration and PRO, banking, office solutions, digital setup, renewals, government transactions, HR, and legal services.",
  },
  {
    q: "What documents are required to set up a business?",
    a: "Documents depend on the jurisdiction, business activity, and relevant authority. Common requirements may include shareholder passports, trade name details, incorporation documents, and tenancy or Ejari records where applicable. Banks may also request separate KYC documentation.",
  },
  {
    q: "Can BuiltPulse support my business after licensing?",
    a: "Yes, BuiltPulse supports businesses beyond company formation through visa processing, WPS payroll administration, bookkeeping, licence renewals, tax filing coordination, HR services, and compliance tracking. This ongoing support helps businesses manage operational needs as they grow.",
  },
  {
    q: "Which tax and regulatory obligations may apply to my business?",
    a: "Depending on your circumstances, obligations may include Corporate Tax registration and filing, VAT registration and returns, Ultimate Beneficial Owner (UBO) disclosures, and other applicable regulatory requirements. VAT registration thresholds and specific obligations depend on the relevant rules and your business activities.",
  },
];

export default function FAQ({
  title = (
    <>
      Frequently asked <br />
      <span className="text-gold-500">questions</span>
    </>
  ),
  faqs = homeFaqs,
  intro = "Get clear answers about business setup in Dubai, required documents, ongoing services, and compliance obligations. Requirements vary by business activity, jurisdiction, and applicable regulations.",
  formVariant = "home",
  formCopy,
  className = "bg-neutral-50",
}: {
  title?: ReactNode;
  faqs?: FaqItem[];
  intro?: string;
  formVariant?: "home" | "service";
  formCopy?: FormCopy;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className={`section pt-2 sm:pt-3 md:pt-4 ${className}`}>
      <div className="panel relative w-full overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />

        <div className="panel-inner relative grid grid-cols-1 gap-12 pb-16 pt-14 sm:pt-16 lg:grid-cols-[minmax(0,694px)_490px] lg:justify-between lg:gap-10 lg:pb-[88px] lg:pt-[88px]">
          <div>
            <div data-reveal className="inline-flex items-center gap-3">
              <span className="outline-pill inline-flex h-[34px] items-center px-4 text-[13px] font-medium text-white">
                FAQs
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="-ml-3 h-px w-[100px] bg-gradient-to-r from-gold-500/60 to-transparent" />
            </div>
            <h2 data-reveal className="h2-light mt-5 text-balance text-white md:mt-6">
              {title}
            </h2>
            <p data-reveal className="mt-5 max-w-[660px] text-[15px] leading-[1.65] text-white/70 sm:text-[16px]">
              {intro}
            </p>

            <div className="mt-9 flex flex-col gap-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    data-reveal
                    className={`overflow-hidden rounded-[18px] border backdrop-blur-sm transition-colors ${
                      isOpen
                        ? "border-gold-500/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(225,180,39,0.08))]"
                        : "border-white/[0.12] bg-white/[0.05] hover:bg-white/[0.08]"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex min-h-[74px] w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="text-[15px] font-semibold text-white sm:text-[17px]">{f.q}</span>
                      <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-gold-300 to-gold-500 text-blue-950 shadow-gold">
                        <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
                          <path d="M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          {!isOpen && <path d="M8 3v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />}
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="-mt-1 px-5 pb-6 text-[14px] leading-[1.65] text-white/75 sm:px-6 sm:pr-16">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div data-reveal className="relative mx-auto w-full max-w-[490px] pb-5 pr-5 lg:mx-0 lg:pt-[38px]">
            <AssessmentForm offset variant={formVariant} copy={formCopy} />
          </div>
        </div>
      </div>
    </section>
  );
}
