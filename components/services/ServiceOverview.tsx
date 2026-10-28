"use client";
import { useState } from "react";
import ImagePlaceholder, { Eyebrow } from "./ImagePlaceholder";
import { Briefcase, Compass, FileCheck, Route } from "./icons";
import type { Jurisdiction } from "./ServiceModals";

const features = [
  {
    title: "Jurisdiction & legal structure",
    desc: "Guidance on Mainland, Free Zone or Offshore, and on the legal form that fits your plans.",
    Icon: Compass,
  },
  {
    title: "Activity & licence selection",
    desc: "Help choosing your business activities and the licence type that matches them.",
    Icon: Briefcase,
  },
  {
    title: "Approvals & documentation",
    desc: "Support with trade name reservation, initial approval, MOA drafting and the documents each step needs.",
    Icon: FileCheck,
  },
  {
    title: "Establishment, step by step",
    desc: "A clear path through licence issuance and the immigration and labour establishment cards.",
    Icon: Route,
  },
];

const options: { key: Jurisdiction; label: string }[] = [
  { key: "mainland", label: "Mainland" },
  { key: "free-zone", label: "Free Zone" },
  { key: "offshore", label: "Offshore" },
];

export default function ServiceOverview({ onPick }: { onPick: (j: Jurisdiction) => void }) {
  const [active, setActive] = useState<Jurisdiction>("mainland");

  return (
    <section className="pb-20 pt-20 sm:pt-24 md:pb-28 lg:pb-[140px] lg:pt-[176px]">
      <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,539px)_minmax(0,1fr)] lg:gap-[72px] xl:gap-[89px]">
        {/* Visual + jurisdiction chooser */}
        <div className="relative lg:self-start lg:pt-7">
          <ImagePlaceholder
            caption="Builtpulse consultant walking a founder through company formation paperwork"
            className="h-[420px] sm:h-[520px] lg:h-[619px]"
          />
          <div className="relative mx-3 -mt-16 rounded-[18px] bg-gold-500 p-5 shadow-[0_30px_60px_-20px_rgba(18,31,66,0.45)] sm:mx-auto sm:max-w-[422px] sm:p-6 lg:absolute lg:bottom-[-40px] lg:left-[156px] lg:mx-0 lg:w-[422px] lg:max-w-none">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-950">Choose your jurisdiction</p>
            <div role="group" aria-label="Choose your jurisdiction" className="mt-4 grid grid-cols-3 gap-1 rounded-full bg-white p-1.5 shadow-[inset_0_1px_2px_rgba(18,31,66,0.08),0_10px_24px_-10px_rgba(18,31,66,0.35)]">
              {options.map((o) => {
                const on = active === o.key;
                return (
                  <button
                    key={o.key}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setActive(o.key);
                      onPick(o.key);
                    }}
                    className={`relative h-[46px] rounded-full text-[14px] font-medium text-blue-950 transition sm:h-[50px] sm:text-[15px] ${
                      on
                        ? "bg-neutral-100 shadow-[0_6px_14px_-6px_rgba(18,31,66,0.45)] before:absolute before:inset-x-6 before:top-0 before:h-[3px] before:rounded-full before:bg-gold-500/70 before:blur-[2px]"
                        : "hover:bg-neutral-50"
                    }`}
                  >
                    {o.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-3.5 text-[12px] font-semibold text-blue-950">Click a jurisdiction to view its setup requirements →</p>
          </div>
        </div>

        {/* Copy + features */}
        <div>
          <Eyebrow>The service</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.1] tracking-[-0.025em] text-blue-950 sm:text-[42px] lg:text-[48px]">
            From trade name to trade licence — one structured process.
          </h2>
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.65] text-neutral-600 lg:text-[17px]">
            Forming a company in Dubai involves several authorities, approvals and registrations. Builtpulse guides you
            through each one in order — so you know what is needed, when, and why.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2">
            {features.map(({ title, desc, Icon }) => (
              <div key={title} className="max-w-[300px]">
                <span className="grid h-[52px] w-[52px] place-items-center rounded-[12px] bg-gold-50 text-blue-950">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <p className="mt-5 text-[18px] font-semibold text-blue-950">{title}</p>
                <p className="mt-2 text-[14px] leading-[1.6] text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
