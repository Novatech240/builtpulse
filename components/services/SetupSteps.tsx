import ImagePlaceholder, { Eyebrow } from "./ImagePlaceholder";

const steps = [
  { title: "Discovery call", desc: "We understand your business activity, goals and target market." },
  { title: "Structure & jurisdiction", desc: "Choose Mainland, Free Zone or Offshore and the right legal form." },
  { title: "Trade name & initial approval", desc: "Reserve a compliant trade name and secure initial approval." },
  { title: "Documents & MOA", desc: "Prepare documents and draft the MOA or Local Service Agent agreement." },
  { title: "Office & Ejari", desc: "Secure office or flexi-desk space and register the tenancy contract." },
  { title: "Trade licence issued", desc: "Fees paid, registrations completed and your licence in hand." },
  { title: "Establishment & visas", desc: "Immigration and labour files opened — ready for visa processing." },
];

function StepText({ i, align = "left" }: { i: number; align?: "left" | "right" }) {
  const s = steps[i];
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-800">
        Step {String(i + 1).padStart(2, "0")}
      </p>
      <p className="mt-1.5 text-[18px] font-semibold leading-tight text-blue-950">{s.title}</p>
      <p className={`mt-1.5 max-w-[300px] text-[14px] leading-[1.5] text-neutral-600 ${align === "right" ? "ml-auto" : ""}`}>
        {s.desc}
      </p>
    </div>
  );
}

const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`absolute z-10 h-[18px] w-[18px] rounded-full border-[3px] border-gold-500 bg-blue-950 ${className}`} />
);

/** Serpentine path: steps 2–6 sit inside alternating half-loops that share their horizontal edges. */
function Serpentine() {
  return (
    <div className="mx-3">
      <div data-reveal className="pb-4 pl-[62px]">
        <StepText i={0} />
      </div>
      {[1, 2, 3, 4, 5].map((i) => {
        const right = i % 2 === 1;
        return (
          <div
            key={i}
            data-reveal
            className={`relative -mt-[2px] flex h-[151px] items-center border-y-2 border-gold-500 first:mt-0 ${
              right
                ? "ml-[75px] justify-end rounded-r-full border-r-2 pr-[35px]"
                : "mr-[75px] justify-start rounded-l-full border-l-2 pl-[36px]"
            }`}
          >
            {i === 1 && <Dot className="-left-[9px] -top-[10px]" />}
            {i === 5 && <Dot className="-bottom-[10px] -left-[9px]" />}
            <Dot className={`top-1/2 -translate-y-1/2 ${right ? "-right-[10px]" : "-left-[10px]"}`} />
            <StepText i={i} align={right ? "right" : "left"} />
          </div>
        );
      })}
      <div data-reveal className="pl-[62px] pt-6">
        <StepText i={6} />
      </div>
    </div>
  );
}

function Vertical() {
  return (
    <ol className="relative ml-2 border-l-2 border-gold-500 pl-7">
      {steps.map((_, i) => (
        <li key={i} data-reveal className="relative pb-8 last:pb-0">
          <Dot className="-left-[38px] top-0" />
          <StepText i={i} />
        </li>
      ))}
    </ol>
  );
}

export default function SetupSteps() {
  return (
    <section className="section pt-2 sm:pt-3 md:pt-4">
      <div className="panel w-full bg-neutral-50">
        <div className="panel-inner grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-[72px] lg:py-[111px]">
          <ImagePlaceholder
            reveal
            caption="Builtpulse consultant guiding a client through each setup step (process visual)"
            className="order-2 h-[360px] lg:order-1 lg:h-auto lg:min-h-full"
          />
          <div className="order-1 lg:order-2">
            <div data-reveal>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-5 text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-blue-950 sm:text-[48px] lg:text-[54px]">
                Your company setup,
                <br />
                <span className="text-gold-500">step by step.</span>
              </h2>
              <p className="mt-5 max-w-[660px] text-[16px] leading-[1.65] text-neutral-600 lg:text-[17px]">
                A clear, structured path from your first conversation to a licensed, fully established company. Builtpulse
                manages each stage and keeps you updated along the way.
              </p>
            </div>
            <div className="mt-10">
              <div className="hidden md:block">
                <Serpentine />
              </div>
              <div className="md:hidden">
                <Vertical />
              </div>
            </div>
            <p className="mt-8 font-mono text-[11px] text-neutral-600/80">
              DUMMY CONTENT — confirm steps, order and timings with the operations team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
