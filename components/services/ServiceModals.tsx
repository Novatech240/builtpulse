"use client";
import { Modal, ServiceItem } from "./Modal";
import type { Jurisdiction, ServiceContent, ServiceModalContent } from "./types";

export type ModalKey = "part-one" | "part-two" | Jurisdiction | null;

const footerNote = "Not sure where to start? A consultant can map the steps for your business.";
const ic = "h-[22px] w-[22px]";

function ListModal({ content, open, onClose }: { content: ServiceModalContent; open: boolean; onClose: () => void }) {
  const grid = (content.layout ?? (content.items.length > 4 ? "grid" : "list")) === "grid";
  return (
    <Modal
      open={open}
      onClose={onClose}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      footerNote={footerNote}
      widthClass={grid ? undefined : "max-w-[720px]"}
    >
      <div className={grid ? "grid grid-cols-1 items-start gap-4 md:grid-cols-2" : "flex flex-col gap-4"}>
        {content.items.map(({ title, desc, Icon }, i) => (
          <ServiceItem key={title} n={String(i + 1).padStart(2, "0")} title={title} desc={desc} icon={<Icon className={ic} />} />
        ))}
      </div>
    </Modal>
  );
}

export default function ServiceModals({
  content,
  open,
  onClose,
  onChoose,
}: {
  content: ServiceContent;
  open: ModalKey;
  onClose: () => void;
  /** Sends a jurisdiction to the assessment form. */
  onChoose: (j: Jurisdiction) => void;
}) {
  const jurisdictions = content.overview.jurisdictions;
  return (
    <>
      <ListModal content={content.partOne.modal} open={open === "part-one"} onClose={onClose} />
      <ListModal content={content.partTwo.modal} open={open === "part-two"} onClose={onClose} />

      {jurisdictions &&
        (Object.keys(jurisdictions.guides) as Jurisdiction[]).map((key) => {
          const g = jurisdictions.guides[key];
          return (
            <Modal
              key={key}
              open={open === key}
              onClose={onClose}
              eyebrow={`Jurisdiction guide · ${g.n} ${g.label}`}
              title={g.title}
              description={g.description}
              widthClass="max-w-[920px]"
              primaryLabel={g.cta}
              secondaryLabel="Book a Call"
              onPrimary={() => onChoose(key)}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {g.facts.map((f) => (
                  <div key={f.label} className="rounded-[16px] bg-neutral-50 px-5 py-5">
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-blue-800">{f.label}</p>
                    <p className="mt-2.5 text-[16px] font-semibold leading-[1.35] text-blue-950">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                <GuideList title="Key requirements" items={g.requirements} />
                <GuideList title="Good to know" items={g.goodToKnow} />
              </div>

              <p className="mt-8 rounded-[14px] bg-gold-50 px-5 py-4 text-[13px] leading-[1.6] text-blue-950">
                {jurisdictions.disclaimer}
              </p>
            </Modal>
          );
        })}
    </>
  );
}

function GuideList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[17px] font-semibold text-blue-950">{title}</p>
      <ul className="mt-4 space-y-3.5">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[15px] leading-[1.5] text-neutral-600">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
