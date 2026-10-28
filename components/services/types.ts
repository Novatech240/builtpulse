import type { ComponentType, ReactNode, SVGProps } from "react";
import type { FormCopy } from "../AssessmentForm";
import type { FaqItem } from "../FAQ";

export type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Jurisdiction = "mainland" | "free-zone" | "offshore";

/** A list of services shown in a modal when a Part panel's "Explore" button is pressed. */
export type ServiceModalContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; desc?: string; Icon: Icon }[];
  /** Two-column grid for long lists, single column for short ones. */
  layout?: "grid" | "list";
};

export type JurisdictionGuide = {
  n: string;
  label: string;
  title: string;
  description: string;
  facts: { label: string; value: string }[];
  requirements: string[];
  goodToKnow: string[];
  /** Primary modal button, e.g. "Start My Mainland Setup". */
  cta: string;
};

/**
 * Everything a service page needs. Each service has one of these in
 * `components/services/content/`; the layout lives in `ServicePage`.
 */
export type ServiceContent = {
  slug: string;
  /** Short name used in breadcrumbs and links. */
  name: string;
  metadata: { title: string; description: string };

  hero: {
    title: ReactNode;
    /** "lg" for short titles (2–3 words per line), "md" for sentence-length titles. */
    titleSize?: "lg" | "md";
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };

  form: FormCopy;

  overview: {
    headline: string;
    body: string;
    imageCaption: string;
    features: { title: string; problem: string; solution: string; Icon: Icon }[];
    /** Optional jurisdiction chooser over the image; opens the guides below. */
    jurisdictions?: {
      label: string;
      guides: Record<Jurisdiction, JurisdictionGuide>;
      disclaimer: string;
    };
  };

  partOne: {
    eyebrow: string;
    headline: string;
    body: string;
    tags: string[];
    cta: string;
    imageCaption: string;
    modal: ServiceModalContent;
  };

  steps: {
    eyebrow: string;
    headline: string;
    body: string;
    checklist?: { title: string; items: string[]; outro: string };
    intro?: string;
    items: { title: string; desc: string; you: string; we: string }[];
    imageCaption: string;
  };

  about: {
    eyebrow: string;
    headline: string;
    /** "statement" renders the headline as smaller body-size copy. */
    style?: "headline" | "statement";
    note: string;
  };

  partTwo: {
    eyebrow: string;
    headline: string;
    body: string;
    audience?: string;
    cta: string;
    imageCaption: string;
    cards: { title: string; desc: string; audience: string; includes: string; Icon: Icon }[];
    modal: ServiceModalContent;
  };

  testimonials: { title: string; body: string };

  cta: { title: string; body: string; button: string };

  faq: { title: string; intro: string; items: FaqItem[] };
};
