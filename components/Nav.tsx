"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Chevron } from "./Icons";

const serviceLinks = [
  {
    label: "Business Formation & Licensing",
    desc: "Structure, trade licence, renewals and closure",
    href: "/services/business-formation-licensing",
  },
];

const links = [
  { label: "Services", href: "/#services" },
  { label: "Lifecycle", href: "/#lifecycle" },
  { label: "Insights", href: "/#insights" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSvcOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!svcRef.current?.contains(e.target as Node)) setSvcOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <nav className="absolute inset-x-0 top-4 z-30 sm:top-5 lg:top-[30px]">
      <div className="flex w-full items-center justify-between gap-2 px-3 sm:px-5 lg:px-8">
        <a href="/" className="outline-pill flex h-11 shrink-0 items-center px-3 sm:px-4 md:h-12 lg:h-[52px] lg:px-5">
          <Image
            src="/brand/builtpulse-logo-white.png"
            alt="BuiltPulse"
            width={159}
            height={48}
            priority
            className="h-7 w-auto md:h-8 lg:h-[34px]"
            style={{ width: "auto" }}
          />
        </a>

        <ul className="outline-pill hidden h-[52px] items-center gap-5 px-5 lg:flex xl:gap-[30px] xl:px-[22px]">
          {links.map((l) =>
            l.label === "Services" ? (
              <li
                key={l.href}
                ref={svcRef}
                className="relative"
                onMouseEnter={() => setSvcOpen(true)}
                onMouseLeave={() => setSvcOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={svcOpen}
                  aria-controls="services-menu"
                  onClick={() => setSvcOpen((v) => !v)}
                  className={`flex items-center gap-1.5 ${active === l.label ? "nav-link !text-gold-500" : "nav-link"}`}
                >
                  {l.label}
                  <Chevron className={`h-3 w-3 transition ${svcOpen ? "rotate-180" : ""}`} />
                </button>
                {svcOpen && (
                  /* pt bridges the gap so hover isn't lost moving into the panel */
                  <div id="services-menu" className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-[22px]">
                    <div className="rounded-[20px] border border-white/15 bg-blue-950 p-2 shadow-card">
                      {serviceLinks.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          className="block rounded-[14px] px-4 py-3 transition hover:bg-white/[0.07]"
                        >
                          <span className="block text-[15px] font-semibold text-white">{s.label}</span>
                          <span className="mt-0.5 block text-[13px] text-white/60">{s.desc}</span>
                        </a>
                      ))}
                      <a
                        href="/#services"
                        className="mt-1 flex items-center justify-between rounded-[14px] border-t border-white/10 px-4 py-3 text-[14px] font-semibold text-gold-500 transition hover:bg-white/[0.07]"
                      >
                        View all 12 services
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.label ? "page" : undefined}
                  className={active === l.label ? "nav-link !text-gold-500" : "nav-link"}
                >
                  {l.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href="https://wa.me/971501012709"
            className="outline-pill hidden h-12 items-center px-[22px] text-[15px] font-semibold leading-none text-white transition hover:bg-white/10 md:inline-flex lg:h-[52px]"
          >
            WhatsApp
          </a>
          <a
            href="#audit"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold-500 px-4 text-[14px] font-semibold leading-none text-blue-950 transition hover:brightness-[0.97] sm:px-5 md:h-12 md:px-[22px] md:text-[15px] lg:h-[52px] lg:px-[26px]"
          >
            <span className="sm:hidden">Audit</span>
            <span className="hidden sm:inline">Book an Audit</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            className="outline-pill grid h-11 w-11 place-items-center text-white md:h-12 md:w-12 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="mx-3 mt-3 overflow-hidden rounded-[22px] sm:mx-5 border border-white/15 bg-blue-950/95 p-4 shadow-card backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`block rounded-xl px-4 py-3 text-[16px] font-semibold transition hover:bg-white/10 hover:text-white ${
                    active === l.label ? "text-gold-500" : "text-white/90"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
                {l.label === "Services" && (
                  <ul className="mb-1 ml-4 border-l border-white/15 pl-2">
                    {serviceLinks.map((s) => (
                      <li key={s.href}>
                        <a
                          href={s.href}
                          className="block rounded-xl px-4 py-2.5 text-[15px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/971501012709"
            className="mt-3 flex min-h-11 items-center justify-center rounded-full border border-white/90 px-5 py-3 text-[15px] font-semibold text-white md:hidden"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
