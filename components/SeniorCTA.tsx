import { ArrowRight } from "./Icons";

export default function SeniorCTA() {
  return (
    <section className="section pb-2 pt-3 sm:pb-3 sm:pt-5 md:pb-4 md:pt-8">
      <div className="panel relative w-full overflow-hidden bg-gold-500">
        {/* orbit lines (dark on gold), centred near the top-right corner */}
        {[824, 560, 300].map((d) => (
          <div
            key={d}
            className="pointer-events-none absolute rounded-full border border-blue-950/15"
            style={{ width: d, height: d, right: 36 - d / 2, top: 60 - d / 2 }}
          />
        ))}

        <div className="panel-inner relative pb-12 pt-12 sm:pb-14 sm:pt-16 lg:pb-[70px] lg:pt-[86px]">
          <p className="text-[11px] font-bold uppercase leading-none tracking-[0.14em] text-blue-950">
            Speak with a senior business consultant
          </p>

          <h2 className="mt-6 max-w-[1100px] text-balance text-[48px] font-extrabold leading-[0.95] tracking-[-0.045em] text-blue-950 sm:text-[72px] md:mt-8 md:text-[96px] lg:text-[112px] xl:text-[124px]">
            Let&rsquo;s talk about your next move{" "}
            <ArrowRight className="inline-block h-[0.8em] w-[0.8em] -translate-y-[0.04em] [&_path]:stroke-[2.6]" />
          </h2>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-blue-950/25 pt-7 md:mt-10 md:flex-row md:items-center md:pt-8">
            <p className="max-w-[500px] text-[16px] leading-[1.6] text-blue-950 sm:text-[18px] lg:text-[20px]">
              Get clarity on your next business step with guidance tailored to your goals.
            </p>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a href="#audit" className="btn-dark h-[52px] py-0">
                Book a Call With a Senior Consultant
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-[12px] text-blue-950/60 sm:text-[13px]">
                Scheduling link — configurable (e.g. booking calendar URL)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
