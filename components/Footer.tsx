"use client";
import Image from "next/image";
import { ArrowRight, Clock, Facebook, Instagram, LinkedIn, Mail, Phone, Pin, YouTube } from "./Icons";

const siteMap = ["Home", "Services", "Business lifecycle", "Insights", "FAQ"];
const serviceLinks = [
  "Formation & Licensing",
  "Tax & Compliance",
  "Consulting & Structuring",
  "Marketing & Events",
  "Immigration & PRO",
];

/** An icon only shows once its profile URL is filled in. */
const socials = [
  { Icon: LinkedIn, label: "LinkedIn", href: "" },
  { Icon: Facebook, label: "Facebook", href: "" },
  { Icon: YouTube, label: "YouTube", href: "" },
  { Icon: Instagram, label: "Instagram", href: "" },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer id="contact" className="section py-2 sm:py-3 md:py-4">
      <div className="panel relative w-full overflow-hidden bg-[linear-gradient(180deg,#0b152f_0%,#0e1a3d_45%,#122043_100%)]">
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />

        {/* Skyline band behind the CTA buttons */}
        <div className="pointer-events-none absolute inset-x-0 top-[260px] h-[340px] opacity-60 sm:top-[250px] lg:top-[280px] lg:h-[320px]">
          <Image src="/images/hero-dubai.png" alt="" fill sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0e1a3d_0%,rgba(14,26,61,0.2)_35%,rgba(14,26,61,0.35)_70%,#102043_100%)]" />
        </div>
        {/* Horizon glow + arc */}
        <div
          className="pointer-events-none absolute left-1/2 top-[440px] h-[260px] w-[1400px] -translate-x-1/2 rounded-full lg:top-[470px]"
          style={{ background: "radial-gradient(closest-side, rgba(74,98,166,0.5), rgba(74,98,166,0))" }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[420px] h-[70px] w-[110%] max-w-[1200px] -translate-x-1/2 lg:top-[453px]"
          viewBox="0 0 1200 70"
          fill="none"
          preserveAspectRatio="none"
        >
          <path d="M0 68 Q 600 -6 1200 68" stroke="url(#arc)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="arc" x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EED37C" stopOpacity="0" />
              <stop offset="0.5" stopColor="#EED37C" stopOpacity="0.9" />
              <stop offset="1" stopColor="#EED37C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* CTA */}
        <div className="panel-inner relative pb-20 pt-16 text-center sm:pt-20 lg:pb-[120px] lg:pt-[100px]">
          <span className="outline-pill inline-flex h-[34px] items-center gap-2 px-4">
            <span className="h-2 w-2 rounded-full bg-gold-500" />
            <span className="text-[13px] font-medium text-white">Get started</span>
          </span>
          <h2 data-reveal className="h2-light mx-auto mt-5 max-w-[960px] text-white md:mt-6">
            Ready to Set Up Your Business <br className="hidden sm:block" />
            <span className="text-gold-500">in Dubai</span>?
          </h2>
          <p data-reveal className="mx-auto mt-5 max-w-[530px] text-[16px] leading-[1.6] text-white/75 lg:text-[17px]">
            Tell us your business goals, and we&rsquo;ll outline the setup, services, and compliance steps suited to your next stage.
          </p>
          <div data-reveal className="mt-7 flex flex-col items-center gap-3.5">
            <a href="#audit" className="btn-primary h-[52px] py-0">
              Book Your Business Audit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/971501012709" className="btn-outline-light h-[52px] bg-blue-950/40 py-0">
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div data-reveal className="panel-inner relative grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:pb-14 xl:grid-cols-[300px_150px_190px_250px_276px] xl:justify-between xl:gap-x-4">
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-1">
            <Image
              src="/brand/builtpulse-logo-white-lg.png"
              alt="BuiltPulse"
              width={252}
              height={75}
              className="h-[46px] w-auto"
              style={{ width: "auto" }}
            />
            <p className="mt-5 text-[17px] font-semibold text-white">Where Businesses Take Shape.</p>
            <p className="mt-2 max-w-[290px] text-[15px] leading-[1.6] text-white/80">
              From business incubation and company formation to compliance and growth, BuiltPulse provides the services and support to build your business in Dubai.
            </p>
            <div className={socials.length ? "mt-6 flex items-center gap-2.5" : "hidden"}>
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-[42px] w-[42px] place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white transition hover:bg-white/15"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Site map" items={siteMap} />
          <FooterCol title="Services" items={serviceLinks} viewAll />

          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">Contact</p>
            <ul className="mt-5 space-y-4 text-[15px] leading-[1.5] text-white/85">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-500" />
                <span>+971 50 101 2709</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-500" />
                <span>[Email — to be confirmed]</span>
              </li>
              <li className="flex items-start gap-3">
                <Pin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-500" />
                <span className="max-w-[190px]">Office 1001, Ibis Hotel, Al Rigga Road, Deira, Dubai</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-500" />
                <span>Mon – Sat · 09:00 – 18:00</span>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ibis+Hotel+Al+Rigga+Road+Deira+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-[34px] items-center gap-1.5 rounded-full border border-gold-500/60 px-4 text-[13px] font-semibold text-white transition hover:bg-gold-500/10"
            >
              Open in Maps
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">Stay updated</p>
            <div className="mt-5 rounded-[20px] border border-white/[0.12] bg-white/[0.05] p-[22px] backdrop-blur-sm">
              <p className="text-[17px] font-semibold text-white">Business insights, monthly</p>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-white/70">
                Licensing updates, compliance deadlines and growth tips for Dubai businesses.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-5 flex items-center gap-1 rounded-full border border-white/15 bg-blue-950/60 p-1 pl-4 focus-within:border-gold-500/60"
              >
                <input
                  type="email"
                  aria-label="Your email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-white/50"
                />
                <button className="shrink-0 rounded-full bg-gold-500 px-4 py-2.5 text-[13px] font-semibold text-blue-950 hover:brightness-95">
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-[12px] text-white/50">Prototype — newsletter not connected.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[60px] w-[80%] max-w-[1100px]"
            viewBox="0 0 1100 60"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d="M0 58 Q 550 -4 1100 58" stroke="rgba(238,211,124,0.35)" strokeWidth="1" />
          </svg>
          <div className="panel-inner relative flex flex-col items-start justify-between gap-3 py-5 md:flex-row md:items-center lg:py-6">
            <p className="text-[13px] text-white/60">© 2026 BuiltPulse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const hrefs: Record<string, string> = {
  Home: "/",
  Services: "/#services",
  "Business lifecycle": "/#lifecycle",
  Insights: "/#insights",
  FAQ: "#faq",
  "Formation & Licensing": "/services/business-formation-licensing",
  "Tax & Compliance": "/services/tax-regulatory-compliance",
  "Consulting & Structuring": "/services/business-investment-consulting",
  "Marketing & Events": "/services/marketing-events",
  "Immigration & PRO": "/services/immigration-pro-services",
};

function FooterCol({ title, items, viewAll = false }: { title: string; items: string[]; viewAll?: boolean }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/55">{title}</p>
      <ul className="mt-5 space-y-[18px] text-[15px] leading-[1.5] text-white/85">
        {items.map((i) => (
          <li key={i}>
            <a href={hrefs[i] ?? "#"} className="whitespace-nowrap transition hover:text-gold-300">{i}</a>
          </li>
        ))}
        {viewAll && (
          <li>
            <a href="/#services" className="inline-flex items-center gap-2 font-semibold text-gold-500 hover:text-gold-300">
              View all 12
              <ArrowRight className="h-4 w-4" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
