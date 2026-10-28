import ImagePlaceholder, { Eyebrow } from "./ImagePlaceholder";
import { ArrowRight } from "../Icons";
import { Archive, Pencil, Refresh } from "./icons";

const formationPills = [
  "Jurisdiction & structure",
  "Activity & licence type",
  "Trade name",
  "Initial approval",
  "MOA / LSA agreement",
  "Trade licence",
  "Immigration card",
  "MOHRE labour file",
];

export function FormationPart({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="section">
      <div className="panel relative w-full overflow-hidden bg-[linear-gradient(160deg,#0e1838_0%,#0c1430_100%)]">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute left-[40%] select-none font-extrabold leading-none tracking-[-0.05em] text-blue-800/30"
          style={{ fontSize: "clamp(220px, 29vw, 420px)", top: "-0.42em" }}
        >
          01
        </p>
        <div className="panel-inner relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,594px)] lg:gap-14 lg:py-[88px]">
          <div>
            <Eyebrow tone="gold">Part 01 of 02 · Business Formation</Eyebrow>
            <h2 className="mt-5 text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px] xl:text-[64px]">
              Business Formation
            </h2>
            <p className="mt-5 max-w-[590px] text-[16px] leading-[1.65] text-white/85 lg:text-[17px]">
              Launch on the right foundation. We take you from structure and activity selection through trade name,
              approvals and MOA, to your trade licence and establishment cards.
            </p>
            <div className="mt-6 flex max-w-[640px] flex-wrap gap-2">
              {formationPills.map((p) => (
                <span key={p} className="inline-flex h-[34px] items-center rounded-full border border-white/25 px-4 text-[13px] text-white/90">
                  {p}
                </span>
              ))}
            </div>
            <button type="button" onClick={onExplore} className="btn-primary mt-8 h-[52px] py-0">
              Explore Formation Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <ImagePlaceholder
            caption="Founder and consultant reviewing company formation documents in a Dubai office"
            className="h-[360px] sm:h-[440px] lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

const licensingCards = [
  { title: "Company Amendments", desc: "Add activities, share transfer, manager change or address change.", Icon: Pencil },
  { title: "License Renewal", desc: "Annual renewal, so your trade licence never lapses.", Icon: Refresh },
  { title: "Liquidation / Cancellation", desc: "Closing the company properly when the business ends.", Icon: Archive },
];

export function LicensingPart({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="section pb-2 sm:pb-3 md:pb-4">
      <div className="panel relative w-full overflow-hidden bg-neutral-50">
        <p
          aria-hidden="true"
          className="pointer-events-none absolute right-[-0.08em] select-none font-extrabold leading-none tracking-[-0.05em] text-neutral-100"
          style={{ fontSize: "clamp(220px, 29vw, 420px)", top: "-0.3em" }}
        >
          02
        </p>
        <div className="panel-inner relative pb-16 pt-16 sm:pt-20 lg:pb-[86px] lg:pt-[87px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16">
            <ImagePlaceholder
              caption="Business owner reviewing a renewed trade licence with a Builtpulse advisor"
              className="order-2 h-[320px] sm:h-[400px] lg:order-1 lg:h-[440px]"
            />
            <div className="order-1 lg:order-2">
              <Eyebrow>Part 02 of 02 · Business Licensing</Eyebrow>
              <h2 className="mt-5 text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-blue-950 sm:text-[52px] lg:text-[60px] xl:text-[64px]">
                Business Licensing
              </h2>
              <p className="mt-5 max-w-[640px] text-[16px] leading-[1.65] text-neutral-600 lg:text-[17px]">
                Already licensed? Keep your company current — update your licence when the business changes, renew on
                time every year, and close the company properly when the time comes.
              </p>
              <button type="button" onClick={onExplore} className="btn-dark mt-7 h-[52px] py-0">
                Explore Licensing Services
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {licensingCards.map(({ title, desc, Icon }) => (
              <button
                key={title}
                type="button"
                onClick={onExplore}
                className="group rounded-[16px] border border-neutral-100 bg-white p-6 text-left transition hover:border-gold-500/50 hover:shadow-soft lg:p-7"
              >
                <span className="grid h-[52px] w-[52px] place-items-center rounded-[12px] bg-blue-950 text-gold-500">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <p className="mt-5 text-[19px] font-semibold text-blue-950 lg:text-[20px]">{title}</p>
                <p className="mt-2.5 text-[14px] leading-[1.6] text-neutral-600">{desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
