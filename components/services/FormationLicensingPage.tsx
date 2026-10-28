"use client";
import { useCallback, useState } from "react";
import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import { FormationPart, LicensingPart } from "./PartPanels";
import SetupSteps from "./SetupSteps";
import LogoMarquee from "./LogoMarquee";
import ServiceModals, { type ModalKey } from "./ServiceModals";
import TrustMetrics from "../TrustMetrics";
import Testimonials from "../Testimonials";
import SeniorCTA from "../SeniorCTA";
import FAQ, { type FaqItem } from "../FAQ";
import Footer from "../Footer";
import PageMotion from "../motion/PageMotion";

const faqs: FaqItem[] = [
  {
    q: "What is the difference between Mainland, Free Zone, and Offshore company formation?",
    a: "The right option depends on your business activity, operational requirements, and intended market. Builtpulse can help you assess the available structures and choose an appropriate setup.",
  },
  {
    q: "How do I choose the right business activity and licence type?",
    a: "Start from what the company will actually do. Activities sit under commercial, professional, industrial or tourism licences, and each authority keeps its own activity list — we match your plans to the right activities and licence type.",
  },
  {
    q: "What documents are required to establish a company?",
    a: "Typically passport copies of shareholders and managers, a proposed trade name and activity, and office or Ejari details for Mainland setups. Corporate shareholders also provide attested company documents.",
  },
  {
    q: "What is an MOA, and when is it required?",
    a: "The Memorandum of Association sets out the company’s shareholders, capital and management. It is drafted and notarised for an LLC; some licences need a Local Service Agent agreement instead.",
  },
  {
    q: "Do I need an establishment card before applying for company visas?",
    a: "Yes. The immigration establishment card opens the company’s immigration file and is required before any visa can be processed. The MOHRE labour file is a separate registration.",
  },
  {
    q: "Can Builtpulse help with licence renewals and company amendments?",
    a: "Yes. Our licensing services cover company amendments — new activities, share transfers, manager or address changes — annual licence renewal, and liquidation when the time comes.",
  },
];

export default function FormationLicensingPage() {
  const [modal, setModal] = useState<ModalKey>(null);
  const close = useCallback(() => setModal(null), []);

  return (
    <main className="relative">
      <PageMotion>
        <ServiceHero />
        <TrustMetrics size="lg" caption={false} />
        <ServiceOverview onPick={setModal} />
        <FormationPart onExplore={() => setModal("formation")} />
        <SetupSteps />
        <LogoMarquee />
        <LicensingPart onExplore={() => setModal("licensing")} />
        <Testimonials />
        <SeniorCTA
          title="Need Help Choosing the Right Setup?"
          body="Speak with a Builtpulse consultant to discuss your business activity, jurisdiction, licensing requirements, and next steps."
          cta="Speak to a Consultant"
          note={null}
          titleClassName="max-w-[1000px] text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px] xl:text-[100px]"
          sectionClassName="pb-2 pt-2 sm:pb-3 sm:pt-3 md:pb-4 md:pt-4"
        />
        <FAQ
          faqs={faqs}
          intro="Straight answers on company formation and licensing. General guidance only — exact requirements depend on your business activity, jurisdiction and applicable rules."
          formVariant="formation"
          className="!pt-0"
        />
        <Footer />
      </PageMotion>
      <ServiceModals open={modal} onClose={close} />
    </main>
  );
}
