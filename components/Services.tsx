"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";

type Service = {
  n: string;
  title: string;
  summary: string;
  bullets: string[];
  cta: string;
  tone: "light" | "gold" | "blue";
  href?: string;
};

const featured: Service[] = [
  {
    n: "01",
    title: "Business Formation & Licensing",
    summary:
      "Establish your business in Dubai with the right structure for your goals, whether mainland, free zone, or offshore. BuiltPulse coordinates the formation process, from jurisdiction selection and licensing to approvals and renewals, reducing administrative complexity at every step.",
    bullets: [
      "Jurisdiction and legal structure advisory",
      "Business activity and licence type selection",
      "Trade name reservation and initial approval",
      "MOA drafting and notarisation",
      "Trade licence issuance and renewal",
      "Immigration establishment cards and MOHRE labour files",
      "Company amendments and liquidation coordination",
    ],
    cta: "Explore Business Formation & Licensing Options",
    tone: "light",
    href: "/services/business-formation-licensing",
  },
  {
    n: "02",
    title: "Tax & Regulatory Compliance",
    summary:
      "Stay on top of your tax obligations with a compliance approach tailored to your business structure, activities, and reporting requirements.",
    bullets: [
      "Corporate tax registration and filing",
      "VAT registration and return filing",
      "Tax compliance and deadline management",
      "UBO and ESR filing support",
      "Regulatory reporting and documentation",
      "Corporate governance documentation",
      "Ongoing compliance monitoring",
    ],
    cta: "Review Your Tax and Compliance Requirements",
    tone: "gold",
    href: "/services/tax-regulatory-compliance",
  },
  {
    n: "03",
    title: "Business Structuring & Investment Consulting",
    summary:
      "Make informed business and investment decisions with tailored guidance on market entry, financial modelling, and business structuring.",
    bullets: [
      "Market entry strategy and feasibility studies",
      "Business planning and financial modelling",
      "Business structuring and expansion strategy",
      "Investment advisory and opportunity assessment",
      "Due diligence and M&A support",
      "Share transfers and ownership restructuring",
      "Golden Visa advisory",
      "Business exit and succession planning",
    ],
    cta: "Plan Your Next Business Move",
    tone: "blue",
  },
  {
    n: "04",
    title: "Marketing & Events",
    summary:
      "Strengthen your brand presence and reach the right audience through strategic marketing, digital campaigns, and business events.",
    bullets: [
      "Brand strategy and positioning",
      "Digital marketing campaigns",
      "Social media management",
      "Website design and content development",
      "SEO content creation",
      "Email and WhatsApp campaigns",
      "Event planning and coordination",
      "Business networking and promotional events",
    ],
    cta: "Build Your Brand and Reach the Right Audience",
    tone: "light",
  },
];

type MoreService = { n: string; title: string; desc: string; bullets: string[]; cta: string };

const more: MoreService[] = [
  {
    n: "05",
    title: "Immigration & PRO Services",
    desc: "Keep your business and workforce documentation on track with visa processing, Emirates ID applications, renewals, and government liaison support.",
    bullets: [
      "Investor, partner, and employee visas",
      "Family and dependent visas",
      "Medical fitness tests, biometrics, and Emirates ID",
      "Health insurance coordination",
      "Visa renewals, cancellations, and status changes",
      "Document attestation and legal translation",
      "Typing, document clearing, and government liaison",
    ],
    cta: "Speak to a PRO Specialist",
  },
  {
    n: "06",
    title: "Banking & Finance",
    desc: "Manage essential banking and financial operations with corporate account assistance, bank compliance documentation, WPS payroll setup, and ongoing bookkeeping.",
    bullets: [
      "Corporate bank account opening assistance",
      "Bank compliance and KYC file preparation",
      "WPS registration and payroll setup",
      "Monthly or quarterly accounting and bookkeeping",
    ],
    cta: "Discuss Your Banking & Finance Needs",
  },
  {
    n: "07",
    title: "Office & Infrastructure",
    desc: "Secure a suitable workspace in Dubai with flexible office options, Ejari registration, and essential utility connections to get your business operational.",
    bullets: [
      "Office and flexi-desk rentals across Dubai",
      "Tenancy contracts and Ejari registration",
      "DEWA electricity and water account setup",
      "Etisalat and du landline and internet connections",
    ],
    cta: "Find the Right Workspace for Your Business",
  },
  {
    n: "08",
    title: "Digital Footprint",
    desc: "Establish your business online with a professional website, branded email, and key digital profiles that make your company easier to find and contact.",
    bullets: [
      "Domain registration and business email setup",
      "Website development, from landing pages to full websites",
      "Google Business Profile setup",
      "Social media account setup",
      "WhatsApp Business setup",
    ],
    cta: "Build Your Business\u2019s Digital Presence",
  },
  {
    n: "09",
    title: "Recurring & Renewals",
    desc: "Keep your business compliant with timely renewals, tax filings, and expiry tracking across essential licences, visas, insurance, and registrations.",
    bullets: [
      "Annual trade licence and Ejari renewals",
      "Immigration and labour card renewals",
      "Visa renewals and status tracking",
      "Health insurance renewals",
      "VAT and Corporate Tax return filing",
      "Compliance calendar and expiry tracking",
    ],
    cta: "Keep Your Business Compliant and Up to Date",
  },
  {
    n: "10",
    title: "Government Service Centres",
    desc: "Coordinate essential government transactions through key UAE service centres, covering labour procedures, residency, trade licensing, and document notarisation.",
    bullets: [
      "Tasheel: MOHRE permits, employment contracts, and quotas",
      "Amer: GDRFA entry permits, visas, and residency services",
      "DET: Trade licence transactions",
      "Tawjeeh: MOHRE-approved orientation services",
      "Notary: Memorandums of Association (MOAs), Powers of Attorney (POAs), and company resolutions",
    ],
    cta: "Get Support with UAE Government Transactions",
  },
  {
    n: "11",
    title: "HR Services",
    desc: "Manage your workforce with structured HR support covering recruitment, employee onboarding, payroll administration, and UAE labour law compliance.",
    bullets: [
      "Recruitment and candidate sourcing",
      "Employment contracts and employee onboarding",
      "HR policies and employee handbooks",
      "Payroll processing and WPS administration",
      "Leave management, gratuity, and end-of-service calculations",
      "Labour law compliance advisory",
    ],
    cta: "Build a Stronger HR Foundation for Your Business",
  },
  {
    n: "12",
    title: "Legal Services",
    desc: "Protect your business interests with legal support for contracts, corporate agreements, intellectual property, and disputes through qualified legal professionals.",
    bullets: [
      "Contract drafting and review",
      "MOAs, shareholder agreements, and partnership agreements",
      "Powers of Attorney and legal translation",
      "Trademark and intellectual property registration",
      "Labour dispute and debt recovery support",
      "Litigation support through licensed advocates",
    ],
    cta: "Discuss Your Business\u2019s Legal Requirements",
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
          <div data-reveal>
            <p className="eyebrow-gold">Services</p>
            <h2 className="h2-display mt-5 text-white md:mt-6">
              Twelve Core Capabilities.<br /><span className="text-gold-500">One Connected Ecosystem.</span>
            </h2>
            <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-white/75 lg:text-[18px]">
              Access the business setup services in Dubai and ongoing operational
              support your company needs today, with the flexibility to add more
              services as your business grows.
            </p>
            <a href="#audit" className="btn-outline-light mt-7 h-[52px] py-0 md:mt-8">
              Talk to a Consultant
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
              <SmallCard key={s.n} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupLabel({ label, note, className = "" }: { label: string; note: string; className?: string }) {
  return (
    <div data-reveal className={`flex items-center gap-3 sm:gap-5 ${className}`}>
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
    <div data-reveal className={`group relative overflow-hidden rounded-[22px] sm:rounded-[26px] ${tone.bg} ${className}`}>
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

        <p className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] ${tone.explore}`}>What BuiltPulse can deliver</p>
        <ul className={`mt-2.5 text-[13px] leading-[1.6] ${tone.bullet}`}>
          {service.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>

        <div className={`mt-auto flex items-center justify-between gap-4 pt-7 ${tone.explore}`}>
          <a href={service.href ?? "#audit"} className={`text-[14px] font-semibold sm:text-[15px] ${service.href ? "after:absolute after:inset-0" : ""}`}>
            {service.cta}
          </a>
          <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition group-hover:translate-x-1 ${tone.arrow}`}>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ service }: { service: MoreService }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-reveal
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-soft transition-shadow hover:shadow-card sm:rounded-[22px] lg:p-[26px]"
    >
      {/* Notch tab */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${open ? "Collapse" : "Expand"} ${service.title}`}
        className="absolute right-0 top-0 grid h-[52px] w-[80px] place-items-center rounded-bl-[18px] bg-brand-dark sm:h-[58px] sm:w-[90px]"
      >
        <span className={`grid h-[30px] w-[30px] place-items-center rounded-full border border-white/80 text-white transition sm:h-[34px] sm:w-[34px] ${open ? "rotate-45" : ""}`}>
          <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <span className="block text-[44px] font-bold leading-none tracking-[-0.03em] text-blue-900 lg:text-[52px]">
        {service.n}
      </span>
      <p className="mt-5 text-[18px] font-semibold leading-[1.3] text-blue-950 lg:text-[20px]">{service.title}</p>
      <p className="mt-2.5 text-[14px] leading-[1.55] text-neutral-600">{service.desc}</p>

      {open && (
        <div className="mt-4">
          <span className="block h-px w-full bg-neutral-100" />
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-900">What BuiltPulse can deliver</p>
          <ul className="mt-2.5 text-[13px] leading-[1.6] text-blue-950">
            {service.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <a href="#audit" className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-blue-900 transition hover:text-blue-800">
            {service.cta}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </div>
      )}
    </div>
  );
}
