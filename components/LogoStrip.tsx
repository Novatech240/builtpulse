import type { ReactNode } from "react";

const marks: { name: string; icon: ReactNode }[] = [
  {
    name: "Meridian & Co",
    icon: (
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="3" fill="currentColor" />
        <path d="M5.5 14V6.5l4.5 5 4.5-5V14" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "SANDLINE",
    icon: (
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M2 12c2.5-4 5-4 7.5 0s5 4 8.5-1" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Arcadia Group",
    icon: (
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M10 2.5 18 17H2L10 2.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "NOVA DUNES",
    icon: (
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="10" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Helix Trading",
    icon: (
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
        <rect x="4" y="3" width="4" height="14" rx="1" fill="currentColor" />
        <rect x="12" y="3" width="4" height="14" rx="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Qasr Ventures",
    icon: (
      <svg viewBox="0 0 20 20" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M2 17V7l4 3 4-6 4 6 4-3v10H2Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function LogoStrip() {
  return (
    <section className="bg-neutral-50 pb-16 pt-14 sm:pb-20 sm:pt-16 md:pb-[106px] md:pt-20">
      <div className="wrap grid grid-cols-1 gap-7 lg:grid-cols-[340px_1fr] lg:items-center lg:gap-10">
        <div data-reveal>
          <p className="eyebrow">Accredited &amp; affiliated</p>
          <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-blue-950 sm:text-[28px]">
            Recognised by the Authorities. Trusted by Businesses.
          </h3>
          <p className="mt-3 max-w-[340px] text-[14px] leading-[1.55] text-neutral-600">
            Built on established relationships with relevant UAE authorities, free zones, and government channels.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-[15px]">
          {marks.map((m) => (
            <li
              key={m.name}
              data-reveal
              className="flex h-[64px] items-center justify-center gap-1.5 rounded-[16px] border border-neutral-100 bg-white px-2 shadow-[0_8px_20px_-8px_rgba(18,31,66,0.12)] lg:h-[75px]"
            >
              <span className="shrink-0 text-neutral-600">{m.icon}</span>
              <span className="truncate text-[13px] font-semibold text-blue-950/80">{m.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
