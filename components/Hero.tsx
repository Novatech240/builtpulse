import Image from "next/image";
import Nav from "./Nav";
import AssessmentForm from "./AssessmentForm";
import { ArrowRight, Shield } from "./Icons";

const badges = [
  { name: "[Licensing body]", detail: "Add verified" },
  { name: "[Free zone]", detail: "Add verified" },
  { name: "[Membership]", detail: "Add verified" },
  { name: "[Certification]", detail: "Add verified" },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden rounded-b-[22px] bg-[#0f1a3d] sm:rounded-b-[28px] md:rounded-b-[32px] lg:rounded-b-[40px]">
        {/* Dubai skyline photo — only the right edge shows through on desktop */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
          <Image
            src="/images/hero-dubai.png"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 62vw, 100vw"
            className="object-cover object-[70%_center]"
          />
        </div>

        {/* Mobile readability overlay */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,26,61,0.82) 0%, rgba(15,26,61,0.7) 40%, rgba(15,26,61,0.85) 75%, rgba(12,21,48,0.96) 100%)",
          }}
        />

        {/* Desktop overlays */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(11,20,46,0.35) 0%, rgba(11,20,46,0) 25%, rgba(11,20,46,0.1) 65%, rgba(11,20,46,0.85) 100%), linear-gradient(90deg, rgb(15,26,61) 0%, rgb(16,27,62) 62%, rgba(16,27,62,0.88) 76%, rgba(16,27,62,0.55) 92%, rgba(16,27,62,0.45) 100%)",
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-60" />

        {/* Giant word DUBAI — centred, clipped by the panel */}
        <p
          data-hero
          className="pointer-events-none absolute inset-x-0 bottom-[66px] select-none whitespace-nowrap sm:bottom-[80px] md:bottom-[90px] lg:bottom-[-0.05em] text-center font-extrabold leading-none tracking-[-0.05em]"
          aria-hidden="true"
          style={{
            fontSize: "clamp(104px, 30.5vw, 440px)",
            backgroundImage:
              "linear-gradient(180deg, #ffffff 0%, #e6e7eb 22%, #a5a9b4 58%, #8a8fa0 78%, rgba(138,143,160,0.85) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DUBAI
        </p>

        <Nav />

        <div className="panel-inner relative grid grid-cols-1 gap-8 pb-[190px] pt-[96px] sm:pb-[260px] sm:pt-[110px] md:pb-[300px] md:pt-[130px] lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_470px] lg:gap-10 lg:pb-[215px] lg:pt-[170px]">
          {/* Left: hero content */}
          <div className="flex min-w-0 flex-col text-white">
            <span data-hero className="outline-pill inline-flex h-9 w-fit max-w-full items-center gap-2.5 pl-3.5 pr-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(225,180,39,0.6)]" />
              <span className="truncate text-[12px] font-medium text-white sm:text-[13px]">
                <span className="sm:hidden">Setup · PRO · Compliance — Dubai</span>
                <span className="hidden sm:inline">Business setup · PRO · Compliance — Dubai, UAE</span>
              </span>
            </span>

            <h1 className="mt-6 text-[48px] font-light leading-[0.98] tracking-[-0.035em] text-white/85 sm:text-[64px] md:mt-8 md:text-[80px] lg:mt-10 lg:text-[68px] xl:text-[88px] min-[1400px]:text-[104px]">
              <span data-hero className="block">
                Build <span className="font-extrabold text-white">smarter.</span>
              </span>
              <span data-hero className="block">
                Grow <span className="font-extrabold text-gold-500">stronger.</span>
              </span>
            </h1>

            <p data-hero className="mt-5 max-w-[780px] text-pretty text-[16px] leading-[1.6] text-white/80 sm:text-[17px] lg:mt-4 lg:text-[19px]">
              From business setup to ongoing compliance, BuiltPulse brings the
              essential services, expertise and support your business needs to
              move forward in Dubai.
            </p>

            <div data-hero className="mt-6 flex flex-col gap-2.5">
              <span className="eyebrow-light">Accredited &amp; registered with</span>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
                {badges.map((b) => (
                  <span
                    key={b.name}
                    className="flex h-[52px] items-center gap-2.5 rounded-[14px] border border-white/20 bg-white/[0.06] pl-3 pr-4"
                  >
                    <Shield className="h-6 w-6 shrink-0" />
                    <span className="flex min-w-0 flex-col leading-none">
                      <span className="truncate text-[12px] font-medium text-white sm:text-[13px]">{b.name}</span>
                      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-gold-300/85 sm:text-[10px]">
                        {b.detail}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div data-hero className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#services"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-gold-500 px-[26px] text-[15px] font-semibold text-blue-950 transition hover:brightness-[0.97]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#lifecycle"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border-[1.2px] border-white/90 px-[26px] text-[15px] font-semibold text-white transition hover:bg-white/10"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Right: Assessment form */}
          <div data-hero className="mx-auto w-full max-w-[470px] lg:mx-0 lg:pt-11">
            <div id="audit">
              <AssessmentForm />
            </div>
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-2 right-5 hidden text-[10px] text-white/55 md:bottom-3 md:right-10 md:block md:text-[11px]">
          AI-generated demo photography — replace with licensed imagery before launch.
        </p>
      </div>
    </section>
  );
}
