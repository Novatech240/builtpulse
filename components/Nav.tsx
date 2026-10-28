"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Lifecycle", href: "/#lifecycle" },
  { label: "Insights", href: "/#insights" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.label ? "page" : undefined}
                className={active === l.label ? "nav-link !text-gold-500" : "nav-link"}
              >
                {l.label}
              </a>
            </li>
          ))}
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
