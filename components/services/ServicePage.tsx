"use client";
import { useCallback, useState } from "react";
import type { FormPreset } from "../AssessmentForm";
import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import { PartOne, PartTwo } from "./PartPanels";
import SetupSteps from "./SetupSteps";
import LogoMarquee from "./LogoMarquee";
import ServiceModals, { type ModalKey } from "./ServiceModals";
import TrustMetrics from "../TrustMetrics";
import Testimonials from "../Testimonials";
import SeniorCTA from "../SeniorCTA";
import FAQ from "../FAQ";
import Footer from "../Footer";
import PageMotion from "../motion/PageMotion";
import { services } from "./content";
import type { Jurisdiction } from "./types";

/** Shared layout for every service page; the copy comes from `content/<slug>.tsx`. */
export default function ServicePage({ slug }: { slug: string }) {
  const content = services[slug];
  const [modal, setModal] = useState<ModalKey>(null);
  const [preset, setPreset] = useState<FormPreset>(null);
  const close = useCallback(() => setModal(null), []);
  const choose = useCallback((j: Jurisdiction) => setPreset({ jurisdiction: j, nonce: Date.now() }), []);

  return (
    <main className="relative">
      <PageMotion>
        <ServiceHero name={content.name} hero={content.hero} form={content.form} preset={preset} />
        <TrustMetrics size="lg" caption={false} />
        <ServiceOverview overview={content.overview} onPick={setModal} onChoose={choose} />
        <PartOne part={content.partOne} onExplore={() => setModal("part-one")} />
        <SetupSteps steps={content.steps} />
        <LogoMarquee about={content.about} />
        <PartTwo part={content.partTwo} onExplore={() => setModal("part-two")} />
        <Testimonials title={content.testimonials.title} body={content.testimonials.body} />
        <SeniorCTA
          title={content.cta.title}
          body={content.cta.body}
          cta={content.cta.button}
          note={null}
          titleClassName="max-w-[1100px] text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[84px]"
          sectionClassName="pb-2 pt-2 sm:pb-3 sm:pt-3 md:pb-4 md:pt-4"
        />
        <FAQ
          title={content.faq.title}
          faqs={content.faq.items}
          intro={content.faq.intro}
          formVariant="service"
          formCopy={content.form}
          className="!pt-0"
        />
        <Footer />
      </PageMotion>
      <ServiceModals content={content} open={modal} onClose={close} onChoose={choose} />
    </main>
  );
}
