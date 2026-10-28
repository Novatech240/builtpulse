"use client";
import { useState } from "react";
import { ArrowRight } from "./Icons";

type Stage = {
  key: string;
  n: string;
  label: string;
  sub: string;
  title: string;
  copy: string;
  pills: string[];
  explore: string;
  href?: string;
};

const stages: Stage[] = [
  {
    key: "start",
    n: "01",
    label: "Start",
    sub: "Formation & licensing",
    title: "Launch on the right foundation.",
    copy: "Choose your jurisdiction and legal structure, reserve the trade name, draft the MOA and get licensed — with immigration and labour files opened.",
    pills: [
      "Jurisdiction & structure",
      "Trade name & initial approval",
      "MOA & notarisation",
      "Trade licence issuance",
      "Establishment cards",
      "Office & Ejari",
    ],
    explore: "Explore Business Formation & Licensing",
    href: "/services/business-formation-licensing",
  },
  {
    key: "operate",
    n: "02",
    label: "Operate",
    sub: "Banking · PRO · Office",
    title: "Keep operations running on a predictable rhythm.",
    copy: "Open banking, run PRO work, clear residencies and keep office, visa and ID files current — a single calendar for the busy months.",
    pills: [
      "Corporate banking",
      "PRO & GDRFA liaison",
      "Visas & Emirates ID",
      "Payroll & WPS",
      "Office management",
      "Renewal calendar",
    ],
    explore: "Explore Operate services",
  },
  {
    key: "grow",
    n: "03",
    label: "Grow",
    sub: "Marketing · Consulting · HR",
    title: "Add activities, markets or capital with confidence.",
    copy: "Restructure cleanly for new revenue lines, hire into the right contracts and launch campaigns that respect the UAE media calendar.",
    pills: [
      "Activity amendments",
      "Investment structuring",
      "Hiring & HR contracts",
      "Launch campaigns",
      "Events & delegations",
      "Digital footprint",
    ],
    explore: "Explore Grow services",
  },
  {
    key: "comply",
    n: "04",
    label: "Stay compliant",
    sub: "Tax · Legal · Renewals",
    title: "Stay audit-ready as rules and thresholds shift.",
    copy: "A compliance calendar that follows your licences, tax groups and workforce — with legal, audit and renewal workflows that trigger before deadlines.",
    pills: [
      "Corporate tax & VAT",
      "ESR / UBO / AML",
      "Audit coordination",
      "Legal retainers",
      "Licence renewals",
      "Policy & governance",
    ],
    explore: "Explore Stay compliant services",
  },
];

export default function Lifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stage = stages[activeIdx];
  const nextStage = stages[(activeIdx + 1) % stages.length];

  return (
    <section id="lifecycle" className="pb-20 pt-20 sm:pb-24 sm:pt-24 md:pb-28 md:pt-32 lg:pb-32 lg:pt-[150px]">
      <div className="wrap">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_360px] md:gap-10 lg:grid-cols-[1fr_400px]">
          <div>
            <p className="eyebrow">Business lifecycle</p>
            <h2 className="h2-display mt-5 text-blue-950 md:mt-6">
              One partner for every stage of your business.
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[16px] leading-[1.6] text-neutral-600 lg:text-[18px]">
              Businesses rarely move in straight lines. Pick a stage to see how
              Builtpulse supports it — and how compliance loops you back into
              operating and growing.
            </p>
            <button
              type="button"
              onClick={() => setActiveIdx((i) => (i + 1) % stages.length)}
              className="mt-4 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-blue-900 transition hover:text-blue-800 lg:text-[15px]"
            >
              Select a stage
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Progress rail */}
        <div className="relative mt-10 hidden items-center justify-between px-[34px] sm:flex md:mt-14">
          <span className="absolute inset-x-[34px] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-neutral-100" />
          {stages.map((s, i) => {
            const active = i === activeIdx;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-label={`Go to ${s.label}`}
                className={`relative grid shrink-0 place-items-center rounded-full transition ${
                  active
                    ? "h-[14px] w-7 bg-gold-500 shadow-[0_0_14px_rgba(225,180,39,0.5)]"
                    : "h-3 w-3 bg-neutral-300 hover:bg-blue-600/60"
                }`}
              >
                {active && <span className="h-1 w-1 rounded-full bg-white/80" />}
              </button>
            );
          })}
        </div>

        {/* Stage tabs */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4 lg:grid-cols-4 lg:gap-[18px]">
          {stages.map((s, i) => {
            const active = i === activeIdx;
            return (
              <button
                key={s.key}
                onClick={() => setActiveIdx(i)}
                className={`flex min-h-[132px] flex-col justify-between rounded-[18px] border p-4 text-left transition sm:min-h-[160px] sm:rounded-[22px] sm:p-6 lg:min-h-[187px] lg:p-7 ${
                  active
                    ? "border-transparent bg-brand-dark text-white shadow-card"
                    : "border-neutral-100 bg-neutral-50 text-blue-950 hover:border-gold-500/40 hover:bg-white"
                }`}
              >
                <span
                  className={`text-[36px] font-bold leading-none tracking-[-0.03em] sm:text-[48px] lg:text-[60px] ${
                    active ? "text-gold-500" : "text-blue-900"
                  }`}
                >
                  {s.n}
                </span>
                <span>
                  <span className={`block text-[18px] font-semibold leading-tight tracking-[-0.01em] sm:text-[24px] lg:text-[30px] ${active ? "text-white" : "text-blue-950"}`}>
                    {s.label}
                  </span>
                  <span className={`mt-1 block text-[12px] sm:mt-1.5 sm:text-[13px] lg:text-[14px] ${active ? "text-white/70" : "text-neutral-600"}`}>
                    {s.sub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="panel-sm relative mt-4 overflow-hidden bg-brand-dark px-5 py-8 sm:mt-5 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-14 lg:pb-[56px] lg:pt-[60px]">
          {/* Giant watermark number — bleeds off the top edge */}
          <p
            aria-hidden="true"
            className="pointer-events-none absolute right-[-6px] select-none font-extrabold leading-none tracking-[-0.05em] text-blue-800/60 md:text-blue-800/90"
            style={{ fontSize: "clamp(180px, 30vw, 430px)", top: "-0.23em" }}
          >
            {stage.n}
          </p>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10">
            <div className="max-w-[800px]">
              <p className="eyebrow-gold">Stage {stage.n} of 04</p>
              <h3 className="mt-4 max-w-[680px] text-[30px] font-bold leading-[1.04] tracking-[-0.025em] text-white sm:text-[40px] md:mt-5 md:text-[48px] lg:text-[60px]">
                {stage.title}
              </h3>
              <p className="mt-5 max-w-[640px] text-[16px] leading-[1.6] text-white/80 lg:text-[18px]">
                {stage.copy}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                {stage.pills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/20 bg-white/[0.06] px-4 py-2.5 text-[12px] leading-none text-white/90 sm:text-[13px]"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <a
                href={stage.href ?? "#services"}
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-gold-300 transition hover:text-gold-500 lg:text-[15px]"
              >
                {stage.explore}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Next stage button */}
            <div className="relative flex items-end">
              <button
                onClick={() => setActiveIdx((i) => (i + 1) % stages.length)}
                className="group flex w-full items-center justify-between gap-10 rounded-[14px] bg-gold-500 px-6 py-4 text-left transition hover:brightness-[0.97] sm:w-[260px] sm:py-5"
              >
                <span>
                  <span className="block text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-blue-950/80">
                    Next stage
                  </span>
                  <span className="mt-2 block text-[20px] font-semibold leading-none text-blue-950 lg:text-[22px]">
                    {nextStage.label}
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 text-blue-950 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
