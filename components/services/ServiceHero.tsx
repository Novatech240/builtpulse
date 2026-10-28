import Nav from "../Nav";
import AssessmentForm from "../AssessmentForm";
import { ArrowRight, Shield } from "../Icons";

const badges = ["[Licensing body]", "[Free zone]", "[Membership]", "[Certification]"];

export default function ServiceHero() {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden rounded-b-[22px] bg-[linear-gradient(155deg,#0b1332_0%,#121f4b_50%,#1f2c62_100%)] sm:rounded-b-[28px] md:rounded-b-[32px] lg:rounded-b-[40px]">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div
          className="pointer-events-none absolute -right-40 bottom-[-260px] h-[720px] w-[900px] rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(74,98,166,0.35), rgba(74,98,166,0))" }}
        />

        <Nav active="Services" />

        <div className="panel-inner relative grid grid-cols-1 gap-10 pb-[120px] pt-[96px] sm:pb-[150px] sm:pt-[110px] md:pb-[180px] md:pt-[130px] lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:pb-[191px] lg:pt-[154px] xl:grid-cols-[minmax(0,1fr)_470px]">
          <div className="flex min-w-0 flex-col text-white lg:pt-5">
            <span data-hero className="outline-pill inline-flex h-9 w-fit max-w-full items-center gap-2.5 pl-3.5 pr-4">
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(225,180,39,0.6)]" />
              <span className="truncate text-[12px] font-medium sm:text-[13px]">
                <a href="/#services" className="hover:text-gold-300">Services</a>
                <span className="mx-1.5 text-white/60">·</span>
                Business Formation &amp; Licensing
              </span>
            </span>

            <h1 className="mt-6 text-[48px] font-light leading-[1] tracking-[-0.035em] text-white/90 sm:text-[64px] md:text-[76px] lg:mt-5 lg:text-[72px] xl:text-[84px] min-[1400px]:text-[92px]">
              <span data-hero className="block">Business</span>
              <span data-hero className="block font-bold text-white">Formation</span>
              <span data-hero className="block">
                &amp; <span className="font-bold text-gold-500">Licensing</span>
              </span>
            </h1>

            <p data-hero className="mt-6 max-w-[690px] text-pretty text-[16px] leading-[1.6] text-white/80 sm:text-[17px] lg:mt-7 lg:text-[19px]">
              Start your business in Dubai with confidence. Builtpulse helps you navigate company formation,
              licensing, government approvals, and essential establishment requirements through a clear,
              structured process.
            </p>

            <div data-hero className="mt-7 flex flex-col gap-2.5">
              <span className="eyebrow-light">Accredited &amp; registered with</span>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
                {badges.map((b) => (
                  <span key={b} className="flex h-[52px] items-center gap-2.5 rounded-[14px] border border-white/20 bg-white/[0.06] pl-3 pr-4">
                    <Shield className="h-6 w-6 shrink-0" />
                    <span className="flex min-w-0 flex-col leading-none">
                      <span className="truncate text-[12px] font-medium sm:text-[13px]">{b}</span>
                      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-gold-300/85 sm:text-[10px]">Add verified</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div data-hero className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#audit" className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-gold-500 px-[26px] text-[15px] font-semibold text-blue-950 transition hover:brightness-[0.97]">
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex h-[52px] items-center justify-center rounded-full border-[1.2px] border-white/90 px-[26px] text-[15px] font-semibold text-white transition hover:bg-white/10">
                Speak to a Consultant
              </a>
            </div>
          </div>

          <div data-hero className="mx-auto w-full max-w-[470px] lg:mx-0">
            <div id="audit">
              <AssessmentForm variant="formation" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
