import { Eyebrow } from "./ImagePlaceholder";
import type { ServiceContent } from "./types";

const names = ["Logoipsum", "Sample Co.", "Placeholder Ltd", "Demo Trading", "Your Logo", "Acme Group"];

export default function LogoMarquee({ about }: { about: ServiceContent["about"] }) {
  const loop = [...names, ...names];
  const statement = about.style === "statement";
  return (
    <section className="pb-20 pt-16 lg:pb-[100px] lg:pt-[95px]">
      <div
        className={`wrap grid grid-cols-1 gap-8 lg:items-center lg:gap-10 ${
          statement ? "lg:grid-cols-[420px_minmax(0,1fr)]" : "lg:grid-cols-[300px_minmax(0,1fr)]"
        }`}
      >
        <div data-reveal>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          {statement ? (
            <p className="mt-3 text-[17px] font-semibold leading-[1.45] text-blue-950 sm:text-[18px]">{about.headline}</p>
          ) : (
            <h3 className="mt-3 text-balance text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-blue-950 sm:text-[28px]">
              {about.headline}
            </h3>
          )}
          <p
            className={`mt-3 text-[14px] leading-[1.55] ${
              statement ? "text-blue-950/80" : "max-w-[230px] text-[13px] text-neutral-600"
            }`}
          >
            {about.note}
          </p>
        </div>
        <div data-reveal className="group relative overflow-hidden mask-fade-edges">
          <ul className="marquee-track flex w-max items-center gap-14 group-hover:[animation-play-state:paused]" style={{ animationDuration: "30s" }}>
            {loop.map((n, i) => (
              <li key={`${n}-${i}`} aria-hidden={i >= names.length} className="flex items-center gap-3 whitespace-nowrap">
                <span className="h-3.5 w-3.5 rotate-45 rounded-[3px] bg-blue-950" />
                <span className="text-[18px] font-semibold text-blue-950">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
