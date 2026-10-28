import ImagePlaceholder, { Eyebrow } from "./ImagePlaceholder";
import { ArrowRight } from "../Icons";
import type { ServiceContent } from "./types";

export function PartOne({ part, onExplore }: { part: ServiceContent["partOne"]; onExplore: () => void }) {
  return (
    <section className="section">
      <div className="panel relative w-full overflow-hidden bg-[linear-gradient(160deg,#0e1838_0%,#0c1430_100%)]">
        <p
          aria-hidden="true"
          data-parallax="10"
          className="pointer-events-none absolute left-[40%] select-none font-extrabold leading-none tracking-[-0.05em] text-blue-800/30"
          style={{ fontSize: "clamp(220px, 29vw, 420px)", top: "-0.42em" }}
        >
          01
        </p>
        <div className="panel-inner relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,594px)] lg:gap-14 lg:py-[88px]">
          <div data-reveal>
            <Eyebrow tone="gold">{part.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-balance text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[46px] xl:text-[50px]">
              {part.headline}
            </h2>
            <p className="mt-5 max-w-[590px] text-[16px] leading-[1.65] text-white/85 lg:text-[17px]">{part.body}</p>
            <div className="mt-6 flex max-w-[640px] flex-wrap gap-2">
              {part.tags.map((t) => (
                <span key={t} className="inline-flex h-[34px] items-center rounded-full border border-white/25 px-4 text-[13px] text-white/90">
                  {t}
                </span>
              ))}
            </div>
            <button type="button" onClick={onExplore} className="btn-primary mt-8 h-[52px] py-0">
              {part.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <ImagePlaceholder reveal caption={part.imageCaption} className="h-[360px] sm:h-[440px] lg:h-[520px]" />
        </div>
      </div>
    </section>
  );
}

export function PartTwo({ part, onExplore }: { part: ServiceContent["partTwo"]; onExplore: () => void }) {
  return (
    <section className="section pb-2 sm:pb-3 md:pb-4">
      <div className="panel relative w-full overflow-hidden bg-neutral-50">
        <p
          aria-hidden="true"
          data-parallax="10"
          className="pointer-events-none absolute right-[-0.08em] select-none font-extrabold leading-none tracking-[-0.05em] text-neutral-100"
          style={{ fontSize: "clamp(220px, 29vw, 420px)", top: "-0.3em" }}
        >
          02
        </p>
        <div className="panel-inner relative pb-16 pt-16 sm:pt-20 lg:pb-[86px] lg:pt-[87px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16">
            <ImagePlaceholder
              reveal
              caption={part.imageCaption}
              className="order-2 h-[320px] sm:h-[400px] lg:order-1 lg:h-[440px]"
            />
            <div data-reveal className="order-1 lg:order-2">
              <Eyebrow>{part.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-balance text-[34px] font-bold leading-[1.06] tracking-[-0.03em] text-blue-950 sm:text-[42px] lg:text-[46px] xl:text-[50px]">
                {part.headline}
              </h2>
              <p className="mt-5 max-w-[640px] text-[16px] leading-[1.65] text-neutral-600 lg:text-[17px]">{part.body}</p>
              {part.audience && (
                <p className="mt-4 max-w-[640px] text-[15px] leading-[1.6] text-neutral-600">
                  <span className="font-semibold text-blue-950">Who it&rsquo;s for: </span>
                  {part.audience}
                </p>
              )}
              <button type="button" onClick={onExplore} className="btn-dark mt-7 h-[52px] py-0">
                {part.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {part.cards.map(({ title, desc, audience, includes, Icon }) => (
              <button
                key={title}
                type="button"
                data-reveal
                onClick={onExplore}
                className="group flex flex-col items-start justify-start rounded-[16px] border border-neutral-100 bg-white p-6 text-left transition-[border-color,box-shadow] hover:border-gold-500/50 hover:shadow-soft lg:p-7"
              >
                <span className="grid h-[52px] w-[52px] place-items-center rounded-[12px] bg-blue-950 text-gold-500">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <p className="mt-5 text-[19px] font-semibold text-blue-950 lg:text-[20px]">{title}</p>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-neutral-600">{desc}</p>
                <span className="mt-4 block h-px w-full bg-neutral-100" />
                <p className="mt-4 text-[13px] leading-[1.55] text-blue-950">{audience}</p>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-neutral-600">{includes}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
