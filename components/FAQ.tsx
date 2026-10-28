"use client";
import { useState } from "react";
import AssessmentForm from "./AssessmentForm";

const faqs = [
  {
    q: "What business setup options are available?",
    a: "You can typically set up on the Mainland, in a Free Zone or Offshore, as an LLC, Sole Establishment, Civil Company or Branch. We help you compare options; the right structure depends on your activity and the applicable rules.",
  },
  {
    q: "Which services can BuiltPulse assist with?",
    a: "Formation and licensing, tax and regulatory compliance, consulting and structuring, marketing and events — plus immigration and PRO, banking, office, digital, renewals, government services, HR and legal support.",
  },
  {
    q: "What documents might be required?",
    a: "Usually passport copies, a proposed trade name and business activity, and — for corporate shareholders — attested company documents. Exact requirements depend on the jurisdiction and activity.",
  },
  {
    q: "Can businesses get support after licensing?",
    a: "Yes. After licensing we can handle PRO work, visas, banking, renewals and compliance filings so your company keeps running on schedule.",
  },
  {
    q: "Which compliance obligations may apply?",
    a: "Depending on your activity and structure, this can include Corporate Tax and VAT registration and filing, UBO and ESR filings, and goAML / AML registration for DNFBP activities.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-neutral-50 pt-2 sm:pt-3 md:pt-4">
      <div className="panel relative w-full overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />

        <div className="panel-inner relative grid grid-cols-1 gap-12 pb-16 pt-14 sm:pt-16 lg:grid-cols-[minmax(0,694px)_490px] lg:justify-between lg:gap-10 lg:pb-[88px] lg:pt-[88px]">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="outline-pill inline-flex h-[34px] items-center px-4 text-[13px] font-medium text-white">
                FAQs
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="-ml-3 h-px w-[100px] bg-gradient-to-r from-gold-500/60 to-transparent" />
            </div>
            <h2 className="h2-light mt-5 text-white md:mt-6">
              Frequently asked <br />
              <span className="text-gold-500">questions</span>
            </h2>
            <p className="mt-5 max-w-[660px] text-[15px] leading-[1.65] text-white/70 sm:text-[16px]">
              Straight answers on setup, documents and compliance. General guidance only — exact requirements depend on your business activity, jurisdiction and applicable rules.
            </p>

            <div className="mt-9 flex flex-col gap-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.q}
                    className={`overflow-hidden rounded-[18px] border backdrop-blur-sm transition ${
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

          <div className="relative mx-auto w-full max-w-[490px] pb-5 pr-5 lg:mx-0 lg:pt-[38px]">
            <AssessmentForm offset />
          </div>
        </div>
      </div>
    </section>
  );
}
