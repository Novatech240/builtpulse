"use client";
import Image from "next/image";
import { ArrowRight } from "./Icons";

type Service = {
  n: string;
  title: string;
  summary: string;
  bullets: string[];
  tone: "light" | "gold" | "blue";
};

const featured: Service[] = [
  {
    n: "01",
    title: "Business Formation & Licensing",
    summary:
      "Mainland, Free Zone or Offshore — we advise on the right jurisdiction and legal structure, then take you from trade name to trade licence.",
    bullets: [
      "Jurisdiction & legal structure advisory",
      "Business activity & licence type selection",
      "Trade name reservation & initial approval",
      "MOA drafting & notarisation",
      "Trade licence issuance & establishment cards",
      "Amendments, renewal & liquidation",
    ],
    tone: "light",
  },
  {
    n: "02",
    title: "Tax & Regulatory Compliance",
    summary:
      "Stay registered, filed and compliant with UAE federal requirements.",
    bullets: [
      "Corporate Tax registration",
      "VAT registration & filing",
      "UBO & ESR filings, where applicable",
      "goAML / AML registration for DNFBP activities",
    ],
    tone: "gold",
  },
  {
    n: "03",
    title: "Business & Investment Consulting & Structuring",
    summary:
      "Strategy, structuring and deal support for entering, growing and exiting the UAE market.",
    bullets: [
      "Market entry strategy",
      "Business plan & feasibility study",
      "Corporate, shareholder & partnership structuring",
      "Investment advisory & financial modelling",
      "Due diligence, M&A & share transfers",
      "Golden Visa, exit & succession planning",
    ],
    tone: "blue",
  },
  {
    n: "04",
    title: "Marketing & Events",
    summary:
      "Brand, campaigns, content and events that turn a new licence into a visible, lead-generating business.",
    bullets: [
      "Brand identity & collateral",
      "Website design & development",
      "Social media management & paid advertising",
      "SEO & local search, content production",
      "Email & WhatsApp campaigns",
      "Events, exhibition stands, PR & media relations",
    ],
    tone: "light",
  },
];

const more = [
  {
    n: "05",
    title: "Immigration & PRO Services",
    desc: "Visas, Emirates ID and the day-to-day government liaison that keeps your company running.",
  },
  {
    n: "06",
    title: "Banking & Finance",
    desc: "Corporate bank accounts, bank compliance files, WPS payroll setup and bookkeeping.",
  },
  {
    n: "07",
    title: "Office & Infrastructure",
    desc: "Office or flexi-desk space, Ejari registration and utility connections.",
  },
  {
    n: "08",
    title: "Digital Footprint",
    desc: "The essentials once your licence is issued: domain, email, website and local profiles.",
  },
  {
    n: "09",
    title: "Recurring & Renewals",
    desc: "Licence, Ejari, visas, insurance and tax returns — tracked and renewed on time.",
  },
  {
    n: "10",
    title: "Government Service Centres",
    desc: "Transactions handled across Tasheel, Amer, DET, Tawjeeh and Notary.",
  },
  {
    n: "11",
    title: "HR",
    desc: "From recruitment and MOHRE-compliant contracts to payroll and end-of-service.",
  },
  {
    n: "12",
    title: "Legal Services",
    desc: "Contracts, corporate governance, trademarks and dispute support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-neutral-50 pb-2 sm:pb-3 md:pb-4">
      <div className="panel relative w-full overflow-hidden bg-brand-dark">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-80" />
        {/* Skyline glow behind the lower card rows */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[560px] opacity-35 mask-fade-top">
          <Image src="/images/hero-dubai.png" alt="" fill sizes="100vw" className="object-cover object-bottom" />
        </div>

        <div className="panel-inner relative pb-16 pt-16 sm:pb-20 sm:pt-20 md:pb-24 lg:pb-[100px] lg:pt-[110px]">
          <div>
            <p className="eyebrow-gold">Services</p>
            <h2 className="h2-display mt-5 text-white md:mt-6">
              Twelve service lines.<br /><span className="text-gold-500">One connected system.</span>
            </h2>
            <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-white/75 lg:text-[18px]">
              Start with the essentials, then add what your business needs
              next. Every category comes straight from the Builtpulse service catalogue.
            </p>
            <a href="#audit" className="btn-outline-light mt-7 h-[52px] py-0 md:mt-8">
              Talk to a consultant
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Featured */}
          <GroupLabel label="Featured services · 01 — 04" note="Hover a card for detail" className="mt-14 md:mt-[96px]" />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-[30px] lg:grid-cols-12">
            <FeaturedCard service={featured[0]} className="lg:col-span-7" />
            <FeaturedCard service={featured[1]} className="lg:col-span-5" />
            <FeaturedCard service={featured[2]} className="lg:col-span-5" />
            <FeaturedCard service={featured[3]} className="lg:col-span-7" />
          </div>

          {/* More */}
          <GroupLabel label="More services · 05 — 12" note="Hover or tap a card to expand" className="mt-12" />
          <div className="mt-6 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-[30px] lg:grid-cols-4">
            {more.map((s) => (
              <SmallCard key={s.n} n={s.n} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupLabel({ label, note, className = "" }: { label: string; note: string; className?: string }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-5 ${className}`}>
      <span className="eyebrow-gold shrink-0 !text-[11px]">{label}</span>
      <span className="h-px flex-1 bg-white/15" />
      <span className="hidden shrink-0 text-[13px] text-white/70 md:inline">{note}</span>
    </div>
  );
}

function FeaturedCard({ service, className = "" }: { service: Service; className?: string }) {
  const tone = {
    light: {
      bg: "bg-white",
      num: "text-blue-900",
      title: "text-blue-950",
      summary: "text-neutral-600",
      bullet: "text-blue-950",
      divider: "bg-neutral-100",
      explore: "text-blue-900",
      arrow: "border-blue-950 text-blue-950",
    },
    gold: {
      bg: "bg-gold-500",
      num: "text-blue-950",
      title: "text-blue-950",
      summary: "text-blue-950/80",
      bullet: "text-blue-950/90",
      divider: "bg-blue-950/40",
      explore: "text-blue-950",
      arrow: "border-blue-950 text-blue-950",
    },
    blue: {
      bg: "border border-white/10 bg-[linear-gradient(150deg,#334f98_0%,#1b2c5e_55%,#152349_100%)]",
      num: "text-gold-500",
      title: "text-white",
      summary: "text-white/80",
      bullet: "text-white/85",
      divider: "bg-white/60",
      explore: "text-gold-300",
      arrow: "border-white/70 text-white",
    },
  }[service.tone];

  return (
    <div className={`group relative overflow-hidden rounded-[22px] sm:rounded-[26px] ${tone.bg} ${className}`}>
      {/* Notch tab */}
      <div className="absolute right-0 top-0 flex h-[44px] items-center gap-2 rounded-bl-[20px] bg-brand-dark px-5 sm:h-[55px] sm:gap-2.5 sm:px-[30px]">
        <span className="h-2 w-2 rounded-full bg-gold-500" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[11px]">
          Featured
        </span>
      </div>

      <div className="flex flex-col p-6 pt-8 sm:p-8 sm:pt-10 lg:px-[46px] lg:pb-9 lg:pt-[42px]">
        <span className={`block text-[72px] font-extrabold leading-[0.9] tracking-[-0.04em] sm:text-[96px] lg:text-[120px] ${tone.num}`}>
          {service.n}
        </span>

        <h3 className={`mt-5 text-balance text-[24px] font-semibold leading-[1.15] tracking-[-0.015em] sm:text-[30px] lg:mt-6 lg:text-[36px] ${tone.title}`}>
          {service.title}
        </h3>

        <p className={`mt-4 text-[14px] leading-[1.6] sm:text-[15px] lg:text-[16px] ${tone.summary}`}>
          {service.summary}
        </p>

        <span className={`mt-5 h-px w-full ${tone.divider}`} />

        <ul className={`mt-5 text-[13px] leading-[1.6] ${tone.bullet}`}>
          {service.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>

        <div className={`mt-auto flex items-center justify-between pt-7 ${tone.explore}`}>
          <a href="#audit" className="text-[14px] font-semibold sm:text-[15px]">
            Explore service
          </a>
          <div className={`grid h-11 w-11 place-items-center rounded-full border transition group-hover:translate-x-1 ${tone.arrow}`}>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-soft transition hover:shadow-card sm:rounded-[22px] lg:p-[26px]">
      {/* Notch tab */}
      <div className="absolute right-0 top-0 grid h-[52px] w-[80px] place-items-center rounded-bl-[18px] bg-brand-dark sm:h-[58px] sm:w-[90px]">
        <span className="grid h-[30px] w-[30px] place-items-center rounded-full border border-white/80 text-white transition group-hover:rotate-90 sm:h-[34px] sm:w-[34px]">
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </div>

      <span className="block text-[44px] font-bold leading-none tracking-[-0.03em] text-blue-900 lg:text-[52px]">
        {n}
      </span>
      <p className="mt-5 text-[18px] font-semibold leading-[1.3] text-blue-950 lg:text-[20px]">{title}</p>
      <p className="mt-2.5 text-[14px] leading-[1.55] text-neutral-600">{desc}</p>
    </div>
  );
}
