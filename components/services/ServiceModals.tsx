"use client";
import { Modal, ServiceItem } from "./Modal";
import {
  Archive,
  Briefcase,
  Compass,
  IdCard,
  LicenseCard,
  Pen,
  Pencil,
  Refresh,
  Stamp,
  Tag,
  Users,
} from "./icons";

export type ModalKey = "formation" | "licensing" | "mainland" | "free-zone" | "offshore" | null;
export type Jurisdiction = "mainland" | "free-zone" | "offshore";

const footerNote = "Not sure where to start? A consultant can map the steps for your business activity.";
const ic = "h-[22px] w-[22px]";

const formationItems = [
  { title: "Jurisdiction & Legal Structure Advisory", desc: "Mainland, Free Zone or Offshore; LLC, Sole Establishment, Civil Company or Branch.", icon: <Compass className={ic} /> },
  { title: "Business Activity & License Type Selection", desc: "Commercial, Professional, Industrial or Tourism.", icon: <Briefcase className={ic} /> },
  { title: "Trade Name Reservation", desc: "Must follow DET naming rules.", icon: <Tag className={ic} /> },
  { title: "Initial Approval", desc: "DET confirms name, legal form and activities.", icon: <Stamp className={ic} /> },
  { title: "MOA Drafting & Notarisation / Local Service Agent Agreement", desc: "MOA drafting and notarisation, or a Local Service Agent agreement where applicable.", icon: <Pen className={ic} /> },
  { title: "Trade License Issuance", desc: "Fees paid, registrations completed.", icon: <LicenseCard className={ic} /> },
  { title: "Immigration Establishment Card", desc: "Opens the company immigration file; required before any visa.", icon: <IdCard className={ic} /> },
  { title: "MOHRE Labour Establishment Card & Labour File", desc: "Separate registration from the immigration card.", icon: <Users className={ic} /> },
];

const licensingItems = [
  { title: "Company Amendments", desc: "Add activities, share transfer, manager change or address change.", icon: <Pencil className={ic} /> },
  { title: "License Renewal", desc: "Annual renewal of your trade licence.", icon: <Refresh className={ic} /> },
  { title: "Liquidation / Cancellation", desc: "Closing the company properly.", icon: <Archive className={ic} /> },
];

type Guide = {
  n: string;
  label: string;
  title: string;
  description: string;
  facts: { label: string; value: string }[];
  requirements: string[];
  goodToKnow: string[];
};

export const guides: Record<Jurisdiction, Guide> = {
  mainland: {
    n: "01",
    label: "Mainland",
    title: "Setting up on the Mainland",
    description:
      "A Dubai Mainland company is licensed by the Department of Economy and Tourism and can trade directly across the UAE market.",
    facts: [
      { label: "Licensing authority", value: "Dubai Department of Economy & Tourism (DET)" },
      { label: "Ownership", value: "Up to 100% foreign ownership for most activities" },
      { label: "Office", value: "Physical office with a registered Ejari" },
    ],
    requirements: [
      "Choose your business activity and legal form: LLC, Sole Establishment, Civil Company or Branch.",
      "Reserve a trade name that follows DET naming rules, then obtain Initial Approval.",
      "Lease physical office space and register the tenancy on Ejari — required before the licence is issued.",
      "Draft and notarise the MOA for an LLC, or sign a Local Service Agent agreement where the licence requires one.",
      "Get extra approvals where your activity needs them (for example health or transport authorities).",
    ],
    goodToKnow: [
      "Trade freely across the UAE and bid for government contracts.",
      "Employee visa quota is set by MOHRE against your office size and activity.",
      "Corporate Tax registration applies to every licensed business — 9% on taxable profit above AED 375,000.",
      "A UBO (Ultimate Beneficial Owner) register must be maintained.",
      "Some strategic activities may still carry ownership restrictions.",
    ],
  },
  "free-zone": {
    n: "02",
    label: "Free Zone",
    title: "Setting up in a Free Zone",
    description:
      "A Free Zone company is licensed by the zone’s own authority and offers full foreign ownership, with activities limited to the zone’s permitted list.",
    facts: [
      { label: "Licensing authority", value: "The free zone’s own authority (e.g. DMCC, IFZA, DIFC)" },
      { label: "Ownership", value: "100% foreign ownership" },
      { label: "Office", value: "Flexi-desk or office inside the zone" },
    ],
    requirements: [
      "Pick a free zone whose permitted activity list covers your business.",
      "Choose a package — flexi-desk, shared or dedicated office — which also shapes your visa allocation.",
      "Submit shareholder and manager documents; corporate shareholders provide attested company documents.",
      "Register with the zone authority, which issues the licence and the establishment card.",
    ],
    goodToKnow: [
      "You can only carry out the activities your free zone licence permits.",
      "Selling directly into the Dubai mainland needs a distributor, a mainland setup or the Free Zone Mainland Operating Permit (DET, AED 5,000 per six months; non-regulated activities first).",
      "Qualifying Free Zone Persons can pay 0% Corporate Tax on qualifying income; other income, including mainland revenue, is taxed at 9%.",
      "Corporate Tax registration and UBO filings still apply.",
    ],
  },
  offshore: {
    n: "03",
    label: "Offshore",
    title: "Setting up an Offshore company",
    description:
      "An Offshore company (for example JAFZA Offshore or RAK ICC) is built for international business and holding assets — not for trading inside the UAE.",
    facts: [
      { label: "Registrar", value: "An offshore registry such as JAFZA Offshore or RAK ICC" },
      { label: "Ownership", value: "100% foreign; registered shares only" },
      { label: "Office", value: "Registered address through a registered agent" },
    ],
    requirements: [
      "Register and file through an approved registered agent — the registry does not accept direct applications.",
      "Appoint at least one shareholder (individual or corporate) and a director.",
      "Corporate shareholders provide notarised, attested documents showing beneficial ownership.",
      "Prepare KYC and source-of-funds documents for bank account opening; timelines vary by bank.",
    ],
    goodToKnow: [
      "Cannot trade within the UAE or open a shop or office in the local market.",
      "Cannot sponsor residence visas for owners or staff.",
      "Suited to international trade, holding companies and asset protection.",
      "JAFZA Offshore companies can own freehold property in Dubai’s designated areas.",
      "UAE Corporate Tax and UBO rules may still apply — confirm for your structure.",
    ],
  },
};

export default function ServiceModals({ open, onClose }: { open: ModalKey; onClose: () => void }) {
  return (
    <>
      <Modal
        open={open === "formation"}
        onClose={onClose}
        eyebrow="Part 01 · Business Formation"
        title="Formation services"
        description="Eight steps, from choosing your structure to opening your labour file. Service names and notes follow the Builtpulse service catalogue."
        footerNote={footerNote}
      >
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {formationItems.map((it, i) => (
            <ServiceItem key={it.title} n={String(i + 1).padStart(2, "0")} {...it} />
          ))}
        </div>
      </Modal>

      <Modal
        open={open === "licensing"}
        onClose={onClose}
        eyebrow="Part 02 · Business Licensing"
        title="Licensing services"
        description="Keep your licence current and your company records accurate — from amendments and annual renewal to a proper closure."
        footerNote={footerNote}
        widthClass="max-w-[720px]"
      >
        <div className="flex flex-col gap-4">
          {licensingItems.map((it, i) => (
            <ServiceItem key={it.title} n={String(i + 1).padStart(2, "0")} {...it} />
          ))}
        </div>
      </Modal>

      {(Object.keys(guides) as Jurisdiction[]).map((key) => {
        const g = guides[key];
        return (
          <Modal
            key={key}
            open={open === key}
            onClose={onClose}
            eyebrow={`Jurisdiction guide · ${g.n} ${g.label}`}
            title={g.title}
            description={g.description}
            widthClass="max-w-[920px]"
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
              General guidance only. Requirements depend on your activity and authority, and rules change — confirm the details for your setup with a Builtpulse consultant.
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
