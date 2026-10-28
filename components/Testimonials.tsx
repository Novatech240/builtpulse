"use client";
import { useState, type CSSProperties } from "react";
import { ArrowRight } from "./Icons";

const items = [
  {
    quote: "“[Approved testimonial about how BuiltPulse handled licensing and setup.]”",
  },
  {
    quote: "“[Short approved quote.]”",
  },
  {
    quote:
      "“[Approved testimonial — a longer quote describing the process, the support from the PRO team and the result for the business after licensing.]”",
  },
  {
    quote: "“[Short approved quote about compliance support.]”",
  },
  {
    quote: "“[Approved testimonial about renewals and PRO support.]”",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(2);

  return (
    <section className="section">
      <div className="panel relative w-full overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />
        <div
          className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[620px] w-[1200px] -translate-x-1/2 rounded-full"
          style={{
            background: "radial-gradient(closest-side, rgba(74,98,166,0.45), rgba(74,98,166,0))",
          }}
        />

        <div className="relative pb-14 pt-16 sm:pt-20 lg:pb-[70px] lg:pt-[90px]">
          <div className="panel-inner text-center">
            <div className="mx-auto inline-flex items-center gap-3 sm:gap-4">
              <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-white/30 sm:inline-block sm:w-[108px]" />
              <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold-500 sm:inline-block" />
              <span className="outline-pill inline-flex h-[37px] items-center px-5 text-[13px] font-medium text-white">
                Testimonials
              </span>
              <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold-500 sm:inline-block" />
              <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-white/30 sm:inline-block sm:w-[108px]" />
            </div>
            <h2 className="h2-light mt-6 text-white">
              What our <span className="text-gold-500">clients</span> are saying
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.6] text-white/70 lg:text-[17px]">
              From first licence to every renewal, businesses rely on BuiltPulse to keep setup, operations and compliance moving.
            </p>
          </div>

          <div className="relative mt-12 flex min-h-[360px] items-center overflow-hidden mask-fade-edges lg:mt-[60px]">
            <div
              className="flex w-full items-center gap-[var(--gap)] transition-transform duration-500 [--cw:280px] [--gap:16px] sm:[--cw:339px] sm:[--gap:25px]"
              style={
                {
                  transform: `translateX(calc(50% - ${active} * (var(--cw) + var(--gap)) - var(--cw) / 2))`,
                } as CSSProperties
              }
            >
              {items.map((t, i) => {
                const isActive = active === i;
                return (
                  <article
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative flex w-[var(--cw)] shrink-0 cursor-pointer flex-col gap-6 rounded-[22px] border p-7 backdrop-blur-md transition duration-500 sm:p-[30px] ${
                      isActive
                        ? "border-gold-500/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(225,180,39,0.28)_100%)] shadow-[0_30px_80px_-20px_rgba(225,180,39,0.35)]"
                        : "border-white/[0.12] bg-white/[0.06] opacity-80 hover:opacity-100"
                    }`}
                  >
                    <span className="grid h-[47px] w-[47px] place-items-center rounded-[12px] bg-gradient-to-b from-gold-300 to-gold-500 text-blue-950 shadow-gold">
                      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                        <path d="M8.5 5.5c-2.6.9-4 2.9-4 5.6V15h4.2v-4.2H6.6c0-1.6.8-2.7 2.4-3.3l-.5-2Zm7 0c-2.6.9-4 2.9-4 5.6V15h4.2v-4.2h-2.1c0-1.6.8-2.7 2.4-3.3l-.5-2Z" />
                      </svg>
                    </span>
                    <p className="text-[16px] leading-[1.6] text-white/90 sm:text-[17px]">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-gold-500 text-gold-500">
                        <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
                          <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M4.5 16c.8-2.7 3-4 5.5-4s4.7 1.3 5.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold text-white">[Client name]</p>
                        <p className="text-[13px] text-white/55">[Role, Company]</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setActive((i) => (i - 1 + items.length) % items.length)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white transition hover:bg-white/15"
              aria-label="Previous testimonial"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-7 bg-gold-500" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((i) => (i + 1) % items.length)}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white transition hover:bg-white/15"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <p className="panel-inner relative mt-6 text-center text-[12px] text-white/50 sm:text-[13px]">
            Placeholder testimonials — replace with approved client quotes, names and photos.
          </p>
        </div>
      </div>
    </section>
  );
}
