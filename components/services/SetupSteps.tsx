import ImagePlaceholder, { Eyebrow } from "./ImagePlaceholder";
import type { ServiceContent } from "./types";

type Step = ServiceContent["steps"]["items"][number];

function StepText({ step, i, align = "left" }: { step: Step; i: number; align?: "left" | "right" }) {
  const right = align === "right";
  return (
    <div className={right ? "text-right" : ""}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-800">
        Step {String(i + 1).padStart(2, "0")}
      </p>
      <p className="mt-1.5 text-[18px] font-semibold leading-tight text-blue-950">{step.title}</p>
      {step.desc && (
        <p className={`mt-1.5 max-w-[340px] text-[14px] leading-[1.5] text-neutral-600 ${right ? "ml-auto" : ""}`}>{step.desc}</p>
      )}
      <dl className={`mt-2.5 max-w-[340px] space-y-1 text-[13px] leading-[1.45] ${right ? "ml-auto" : ""}`}>
        <div>
          <dt className="inline font-semibold text-blue-950">You: </dt>
          <dd className="inline text-neutral-600">{step.you}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-blue-950">We: </dt>
          <dd className="inline text-neutral-600">{step.we}</dd>
        </div>
      </dl>
    </div>
  );
}

const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`absolute z-10 h-[18px] w-[18px] rounded-full border-[3px] border-gold-500 bg-blue-950 ${className}`} />
);

/** Serpentine path: the middle steps sit inside alternating half-loops that share their horizontal edges. */
function Serpentine({ steps }: { steps: Step[] }) {
  const last = steps.length - 1;
  const middle = steps.slice(1, last);
  return (
    <div className="mx-3">
      <div data-reveal className="pb-4 pl-[62px]">
        <StepText step={steps[0]} i={0} />
      </div>
      {middle.map((step, idx) => {
        const i = idx + 1;
        const right = i % 2 === 1;
        return (
          <div
            key={step.title}
            data-reveal
            className={`relative -mt-[2px] flex min-h-[151px] items-center border-y-2 border-gold-500 py-7 first:mt-0 ${
              right
                ? "ml-[75px] justify-end rounded-r-[90px] border-r-2 pr-[35px]"
                : "mr-[75px] justify-start rounded-l-[90px] border-l-2 pl-[36px]"
            }`}
          >
            {i === 1 && <Dot className="-left-[9px] -top-[10px]" />}
            {i === last - 1 && <Dot className={`-bottom-[10px] ${right ? "-left-[9px]" : "-right-[9px]"}`} />}
            <Dot className={`top-1/2 -translate-y-1/2 ${right ? "-right-[10px]" : "-left-[10px]"}`} />
            <StepText step={step} i={i} align={right ? "right" : "left"} />
          </div>
        );
      })}
      <div data-reveal className={`pt-6 ${middle.length % 2 === 1 ? "pl-[62px]" : "pr-[62px] text-right"}`}>
        <StepText step={steps[last]} i={last} align={middle.length % 2 === 1 ? "left" : "right"} />
      </div>
    </div>
  );
}

function Vertical({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative ml-2 border-l-2 border-gold-500 pl-7">
      {steps.map((step, i) => (
        <li key={step.title} data-reveal className="relative pb-8 last:pb-0">
          <Dot className="-left-[38px] top-0" />
          <StepText step={step} i={i} />
        </li>
      ))}
    </ol>
  );
}

export default function SetupSteps({ steps }: { steps: ServiceContent["steps"] }) {
  return (
    <section id="how-it-works" className="section scroll-mt-6 pt-2 sm:pt-3 md:pt-4">
      <div className="panel w-full bg-neutral-50">
        <div className="panel-inner grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-[72px] lg:py-[111px]">
          <ImagePlaceholder
            reveal
            caption={steps.imageCaption}
            className="order-2 h-[360px] lg:order-1 lg:h-auto lg:min-h-full"
          />
          <div className="order-1 lg:order-2">
            <div data-reveal>
              <Eyebrow>{steps.eyebrow}</Eyebrow>
              <h2 className="mt-5 text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-blue-950 sm:text-[42px] lg:text-[46px]">
                {steps.headline}
              </h2>
              {steps.body && (
                <p className="mt-5 max-w-[660px] text-[16px] leading-[1.65] text-neutral-600 lg:text-[17px]">{steps.body}</p>
              )}
            </div>

            {steps.checklist && (
              <div data-reveal className="mt-8 rounded-[20px] border border-neutral-100 bg-white p-6 sm:p-7">
                <p className="text-[17px] font-semibold text-blue-950">{steps.checklist.title}</p>
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {steps.checklist.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[14px] leading-[1.5] text-neutral-600">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(steps.checklist?.outro ?? steps.intro) && (
              <p data-reveal className="mt-8 text-[16px] font-semibold text-blue-950">
                {steps.checklist?.outro ?? steps.intro}
              </p>
            )}

            <div className="mt-8">
              <div className="hidden md:block">
                <Serpentine steps={steps.items} />
              </div>
              <div className="md:hidden">
                <Vertical steps={steps.items} />
              </div>
            </div>

            {steps.mistakes && (
              <div data-reveal className="mt-10 rounded-[20px] border border-neutral-100 bg-white p-6 sm:p-7">
                <p className="text-[17px] font-semibold text-blue-950">{steps.mistakes.title}</p>
                <ul className="mt-4 space-y-3">
                  {steps.mistakes.items.map((it) => (
                    <li key={it} className="flex gap-3 text-[14px] leading-[1.5] text-neutral-600">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
