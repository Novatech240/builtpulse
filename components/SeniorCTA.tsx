import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

export default function SeniorCTA({
  title = <>Let&rsquo;s talk about your next move</>,
  body = "Get clarity on your next business step with guidance tailored to your goals.",
  cta = "Book a Call With a Senior Consultant",
  note = "Scheduling link — configurable (e.g. booking calendar URL)",
  titleClassName = "max-w-[1100px] text-[48px] sm:text-[72px] md:text-[96px] lg:text-[112px] xl:text-[124px]",
  sectionClassName = "pb-2 pt-3 sm:pb-3 sm:pt-5 md:pb-4 md:pt-8",
}: {
  title?: ReactNode;
  body?: string;
  cta?: string;
  note?: string | null;
  titleClassName?: string;
  sectionClassName?: string;
}) {
  return (
    <section className={`section ${sectionClassName}`}>
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

          <h2 data-reveal className={`mt-6 text-balance font-extrabold leading-[0.95] tracking-[-0.045em] text-blue-950 md:mt-8 ${titleClassName}`}>
            {title}{" "}
            <ArrowRight className="inline-block h-[0.8em] w-[0.8em] -translate-y-[0.04em] [&_path]:stroke-[2.6]" />
          </h2>

          <div data-reveal className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-blue-950/25 pt-7 md:mt-10 md:flex-row md:items-center md:pt-8">
            <p className="max-w-[500px] text-[16px] leading-[1.6] text-blue-950 sm:text-[18px] lg:text-[20px]">
              {body}
            </p>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a href="#audit" className="btn-dark h-[52px] py-0">
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              {note && <span className="text-[12px] text-blue-950/60 sm:text-[13px]">{note}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
