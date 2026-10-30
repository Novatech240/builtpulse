import { Archive, Briefcase, Building, Heart, IdCard, Refresh, Route, Sparkle, Stamp, Users, Wallet } from "../icons";
import type { ServiceContent } from "../types";

const immigrationProServices: ServiceContent = {
  slug: "immigration-pro-services",
  name: "Immigration & PRO Services",
  metadata: {
    title: "Immigration & PRO Services in Dubai — BuiltPulse",
    description: "BuiltPulse manages your company’s visas, Emirates IDs and government filings from first application to final stamp.",
  },

  hero: {
    eyebrow: "Services · Immigration & PRO · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          Visas, Emirates IDs and Paperwork,
        </span>
        <span data-hero className="block">
          Without the <span className="font-bold text-gold-500">Queues</span>
        </span>
      </>
    ),
    body: "BuiltPulse manages your company's visas, Emirates IDs and government filings from first application to final stamp, so your team starts work without rejected files or lost weeks.",
    primaryCta: "Book a consultation",
    secondaryCta: "See how it works",
  },

  form: {
    title: "Tell us what you need processed",
    body: "Two quick steps. We'll confirm the permits, documents and timeline within one working day.",
    submit: "Get my plan",
    field: "none",
    selects: [
      { label: "Service needed", options: ["Establishment card", "Employment visa", "Investor or Partner visa", "Family visa", "Emirates ID and medical", "Attestation", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Every visa and approval, tracked from application to stamp",
    body: "Visas, Emirates IDs and labour files each sit with a different authority, and one missing document can restart the clock. We run the whole sequence for you and tell you what is happening at every stage.",
    imageCaption: "BuiltPulse PRO consultant reviewing a visa application file",
    features: [
      { title: "Establishment card & labour file", problem: "Your company can't sponsor visas until these are in place, and errors here stall every hire.", solution: "We open or renew both and keep them ready for new applications.", Icon: Building },
      { title: "Employment, investor & partner visas", problem: "Each visa type has its own permits, medical and stamping steps, and a missed step restarts the process.", solution: "We run the full sequence and update you at each stage.", Icon: IdCard },
      { title: "Family & dependent visas", problem: "Sponsorship depends on salary, housing proof and attested documents, and rejections cost weeks.", solution: "We check eligibility first, prepare the file and submit it once.", Icon: Users },
      { title: "PRO services & Emirates ID", problem: "Medicals, Emirates ID, attestation, renewals and cancellations each sit with a different office.", solution: "One PRO team handles them all and tracks every expiry.", Icon: Stamp },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Immigration & Visas",
    headline: "Visas for owners, employees and families, processed right the first time",
    body: "Whether you are hiring a team, joining your own company as an owner or bringing your family to the UAE, we prepare the file, file it in the right order and follow it through to the residence stamp.",
    tags: ["Establishment card UAE", "Employment visa Dubai", "Investor visa UAE", "Partner visa Dubai", "Family visa UAE", "Golden visa Dubai", "Visa renewal UAE", "Visa cancellation Dubai", "Visa status change UAE"],
    cta: "Explore immigration services",
    imageCaption: "Employee and BuiltPulse consultant preparing visa documents",
    modal: {
      eyebrow: "Part 01 · Immigration & Visas",
      title: "Immigration services",
      description: "Whether you are hiring a team, joining your own company as an owner or bringing your family to the UAE, we prepare the file, file it in the right order and follow it through to the residence stamp.",
      layout: "grid",
      items: [
        { title: "Establishment card UAE", Icon: Building },
        { title: "Employment visa Dubai", Icon: Briefcase },
        { title: "Investor visa UAE", Icon: Wallet },
        { title: "Partner visa Dubai", Icon: Users },
        { title: "Family visa UAE", Icon: Heart },
        { title: "Golden visa Dubai", Icon: Sparkle },
        { title: "Visa renewal UAE", Icon: Refresh },
        { title: "Visa cancellation Dubai", Icon: Archive },
        { title: "Visa status change UAE", Icon: Route },
      ],
    },
  },

  steps: {
    eyebrow: "How it works",
    headline: "From application to visa stamp, step by step",
    body: "Most visas follow the same route: your company is cleared to sponsor, permits are issued, the applicant completes a medical and biometrics, and the residence visa is stamped. We manage each handover, so your part stays small.",
    items: [
      { title: "Document check", desc: "We review passports, licence and any attested papers before anything is filed.", you: "share the documents.", we: "flag gaps early." },
      { title: "Company readiness", desc: "We confirm your establishment card and labour file are active and cover the hire.", you: "approve the headcount.", we: "open or update the files." },
      { title: "Work and entry permits", desc: "We apply for the permits that let the applicant work and enter the UAE.", you: "sign the offer and contract.", we: "submit and track." },
      { title: "Medical fitness test", desc: "The applicant takes the screening at an approved centre, and a fit result is required to continue.", you: "confirm the appointment.", we: "book and follow up." },
      { title: "Emirates ID and biometrics", desc: "We register the application and schedule biometrics.", you: "attend the appointment.", we: "prepare the application." },
      { title: "Residence visa stamping", desc: "The visa is stamped in the passport and the file is closed.", you: "collect the passport.", we: "confirm and diarise the expiry." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through the visa process (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Companies we keep staffed and compliant",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · PRO and government services",
    headline: "PRO Services in Dubai: Every Government Step, Handled",
    body: "Visas are only part of the paperwork. We also handle the IDs, medicals, attestations and renewals that keep your team and your company in good standing.",
    cta: "Explore PRO services",
    imageCaption: "HR lead reviewing Emirates ID and renewal records with a BuiltPulse advisor",
    cards: [
      { title: "Emirates ID & medical tests", desc: "Applications, renewals and medical test bookings.", audience: "For new hires, owners and families.", includes: "Includes forms, appointments and tracking.", Icon: IdCard },
      { title: "Renewals, cancellations & status changes", desc: "Renew residence visas, cancel them when someone leaves and move people between visa types.", audience: "For companies with changing teams.", includes: "Includes filings, expiry reminders and exit paperwork.", Icon: Refresh },
      { title: "Attestation & typing-centre services", desc: "Degree and document attestation, plus Tasheel, Tawjeeh and Amer center filings.", audience: "For companies hiring from abroad and families sponsoring dependants.", includes: "Includes submission and tracking.", Icon: Stamp },
    ],
    modal: {
      eyebrow: "Part 02 · PRO and government services",
      title: "PRO services",
      description: "Visas are only part of the paperwork. We also handle the IDs, medicals, attestations and renewals that keep your team and your company in good standing.",
      items: [
        { title: "Emirates ID & medical tests", desc: "Applications, renewals and medical test bookings.", Icon: IdCard },
        { title: "Renewals, cancellations & status changes", desc: "Renew residence visas, cancel them when someone leaves and move people between visa types.", Icon: Refresh },
        { title: "Attestation & typing-centre services", desc: "Degree and document attestation, plus Tasheel, Tawjeeh and Amer center filings.", Icon: Stamp },
      ],
    },
  },

  testimonials: {
    title: "How clients got their teams and families settled",
    body: "Business owners and HR leads on what it was like to hand visas, Emirates IDs and renewals to one PRO team.",
  },

  cta: {
    title: "Not sure which visa or approval you need?",
    body: "Tell us who you are hiring or sponsoring. In a 10-minute call, a BuiltPulse consultant maps the permits, documents and timeline for you.",
    button: "Talk to a consultant",
  },

  faq: {
    intro: "The questions founders and HR teams ask us most before they start. We confirm the details for your case on a short call.",
    items: [
      {
        q: "What does a PRO services company in the UAE do?",
        a: "A PRO (public relations officer) service handles your company's government paperwork: visas, Emirates ID, labour and immigration files, attestations, renewals and cancellations. It saves you queuing at government offices and tracks expiry dates so nothing lapses.",
      },
      {
        q: "What does my company need before it can sponsor an employee visa?",
        a: "Your company needs a valid trade licence and an establishment card, which lets it hire foreign nationals. Then it applies for a work permit, the employee receives an entry permit, completes a medical test and Emirates ID registration, and the residence visa is stamped.",
      },
      {
        q: "How long does an employment visa take?",
        a: "It usually takes two to four weeks from permit to residence stamp, depending on the emirate, how quickly documents are signed and the medical results. The entry permit is valid for around 60 days, so the medical and Emirates ID steps should follow quickly.",
      },
      {
        q: "What salary do I need to sponsor my family?",
        a: "To sponsor a spouse and children you generally need a valid residence visa and a salary of AED 4,000 a month, or AED 3,000 plus accommodation provided by your employer. Sponsoring parents requires a higher salary threshold.",
      },
      {
        q: "Is a medical test required for a residence visa?",
        a: "Yes, a medical test is required for a residence visa. Applicants take a medical fitness test at an approved centre, and the visa cannot be processed without a fit result. Results usually take one to two days. Family members aged 18 and over also need the test.",
      },
      {
        q: "Who can get a UAE Golden Visa?",
        a: "The Golden Visa is a long-term residence for qualifying investors, entrepreneurs, specialised talents and others. The property route requires property worth at least AED 2 million for a 10-year visa, while other routes have their own criteria.",
      },
      {
        q: "What happens to my family's visas if mine is cancelled?",
        a: "Family residence permits are linked to the sponsor's permit, so cancelling the sponsor's visa requires cancelling the dependants' visas too. We plan cancellations and transfers so nobody is left without valid status.",
      },
      {
        q: "Do you handle visa renewals?",
        a: "Yes, BuiltPulse does handle visa renewals. A renewal repeats the medical, Emirates ID and stamping steps, and standard employment visas typically run for two years. We track every expiry and file before it lapses.",
      },
    ],
  },
};

export default immigrationProServices;
