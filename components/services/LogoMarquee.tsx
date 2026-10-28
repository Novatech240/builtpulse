import { Eyebrow } from "./ImagePlaceholder";

const names = ["Logoipsum", "Sample Co.", "Placeholder Ltd", "Demo Trading", "Your Logo", "Acme Group"];

export default function LogoMarquee() {
  const loop = [...names, ...names];
  return (
    <section className="pb-20 pt-16 lg:pb-[100px] lg:pt-[95px]">
      <div className="wrap grid grid-cols-1 gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-center lg:gap-10">
        <div data-reveal>
          <Eyebrow>Trusted network</Eyebrow>
          <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-blue-950 sm:text-[28px]">
            Businesses build <br className="hidden lg:block" />
            better together.
          </h3>
          <p className="mt-3 max-w-[230px] text-[13px] leading-[1.55] text-neutral-600">
            Fictional demo wordmarks — not real clients. Replace with approved logos.
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
