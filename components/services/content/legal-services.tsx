import { Building, Pen, Receipt, Scale, ShieldCheck, Users } from "../icons";
import type { ServiceContent } from "../types";

const legalServices: ServiceContent = {
  slug: "legal-services",
  name: "Legal Services",
  metadata: {
    title: "Legal Services in Dubai — BuiltPulse",
    description: "Contracts, shareholder agreements, powers of attorney, trademark registration and governance records, coordinated with licensed advocates.",
  },

  hero: {
    eyebrow: "Legal services · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          Legal services Dubai,
        </span>
        <span data-hero className="block">
          coordinated with <span className="font-bold text-gold-500">licensed advocates.</span>
        </span>
      </>
    ),
    body: "Contracts, shareholder and partnership agreements, powers of attorney, trademark registration and governance records, written so that they match how the business actually operates. Where a matter needs court representation or formal legal advice, we coordinate with a licensed advocate and keep the file organised.",
    primaryCta: "Book a Legal Review",
    secondaryCta: "See Legal Services",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "Legal services",
    title: "Tell us what document or matter you need.",
    body: "Describe the contract, agreement or dispute. We reply with the service that fits and the documents to prepare.",
    submit: "Request a legal review",
    companyLabel: "Company name",
    companyPlaceholder: "Company name",
    selects: [
      { label: "Matter type", options: ["Contract drafting or review", "Shareholder or partnership agreement", "Power of attorney", "Trademark", "Debt or legal notice", "Dispute support", "Not sure yet"] },
      { label: "Urgency", options: ["Within a week", "Within a month", "No deadline", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Paperwork that holds up when the business is tested.",
    body: "A contract with unclear terms, a shareholder agreement that is silent on exits, or a trademark filed late can each cost far more to fix later. We draft and review documents so they match how the business works, and we keep governance records current.",
    imageCaption: "BuiltPulse consultant reviewing a commercial contract",
    features: [
      { title: "Contracts that match the deal", problem: "A contract with vague terms or missing clauses leaves each side with a different understanding.", solution: "We draft or review the contract, setting out terms, obligations and how disputes are handled.", Icon: Pen },
      { title: "Governance that survives changes", problem: "Shareholder rights and decision-making rules that were never written down cause disputes as the company grows.", solution: "We document the shareholder agreement, the MOA terms and the governance records, and keep them current.", Icon: Building },
      { title: "Brand protected from the start", problem: "A trade name or mark used without registration can be claimed by someone else.", solution: "We check the mark against existing registrations and file the trademark with the Ministry of Economy and Tourism.", Icon: ShieldCheck },
      { title: "Disputes handled in order", problem: "Unpaid invoices and disputes escalate when no formal notice has been sent.", solution: "We prepare legal notices and coordinate debt recovery steps, with a licensed advocate where litigation is needed.", Icon: Scale },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Contracts and governance",
    headline: "Agreements and governance records written to last.",
    body: "Our designated lawyer drafts and reviews commercial contracts, shareholder and partnership agreements, and the MOA terms that sit alongside them. Powers of attorney are drafted for the people who will sign on the company's behalf, with the scope set out clearly. Documents in another language are translated by qualified translators, so each version can be checked against the original.",
    tags: ["Contract drafting Dubai", "Shareholder agreement Dubai", "Power of attorney Dubai", "Legal translation Dubai"],
    cta: "Plan My Document Review",
    imageCaption: "Business partners and BuiltPulse consultant reviewing a shareholder agreement",
  },

  steps: {
    eyebrow: "How a legal matter moves",
    headline: "Five steps from first review to a signed, filed document.",
    body: "Each matter follows the same path: review the facts, agree the scope, draft or file, and record the outcome.",
    items: [
      { title: "Scope and facts review", you: "share the background, existing drafts and the outcome you want.", we: "confirm the scope and whether a licensed advocate is needed." },
      { title: "Drafting or review", you: "answer the questions on terms, pricing and responsibilities.", we: "draft the document or mark up the other side's draft with comments." },
      { title: "Negotiation and sign-off", you: "approve the final terms and the people who will sign.", we: "coordinate changes and prepare the signing version." },
      { title: "Filing or registration", you: "provide the signatory details and any supporting documents.", we: "submit trademark or governance filings and track each reference number." },
      { title: "Records and follow-up", you: "store the signed documents and note any renewal or expiry dates.", we: "keep a register of documents, deadlines and renewals." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through a legal matter (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Businesses we have supported on documents and filings",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Brand, disputes and notices",
    headline: "Protect the brand, and handle disputes in good order.",
    body: "We register trademarks with the Ministry of Economy and Tourism, prepare legal notices for unpaid amounts, and support employment disputes with the documents they will need.",
    cta: "Discuss My Matter",
    imageCaption: "Business owner reviewing a trademark filing with a BuiltPulse advisor",
    cards: [
      { title: "Trademark registered and monitored", desc: "Trademark search, filing and registration with the Ministry of Economy and Tourism.", audience: "For businesses with a brand name, logo or product name they want to protect.", includes: "Includes mark search, class selection, filing, and a renewal reminder ahead of expiry.", Icon: ShieldCheck },
      { title: "Employment disputes documented", desc: "Support with the records and correspondence needed for a labour dispute.", audience: "For employers facing a claim or complaint from a current or former employee.", includes: "Includes document collation, a timeline of events and coordination with the relevant advocate.", Icon: Users },
      { title: "Debts recovered through formal steps", desc: "Legal notices and recovery steps for unpaid invoices and amounts owed.", audience: "For companies with customers or partners who have not paid.", includes: "Includes demand letter drafting, a payment record and referral to a licensed advocate if needed.", Icon: Receipt },
    ],
  },

  testimonials: {
    title: "Owners who put their agreements in order",
    body: "Clients describe the agreement, filing or notice that gave them a clearer position with a partner, supplier or customer.",
  },

  cta: {
    title: "Not sure whether a document or a notice is needed? Ask first.",
    body: "A short call looks at the agreement, dispute or brand question in front of you. You leave with a view on which documents or steps apply, and whether a licensed advocate should be involved.",
    button: "Book a Legal Review",
  },

  faq: {
    items: [
      {
        q: "Can BuiltPulse represent my company in court?",
        a: "No, court representation is handled by licensed advocates where the law requires it. We prepare the documents and the timeline, and we coordinate with the advocate you engage. We tell you early if a matter needs a licensed advocate, so the decision is made in time.",
      },
      {
        q: "How long does trademark registration take in the UAE?",
        a: "Trademark registration through the Ministry of Economy and Tourism usually takes a few months, depending on the examination, the publication stage and any opposition. A 30-day objection period applies after publication. We give you the expected timeline for your mark once the search is complete.",
      },
      {
        q: "How much does a UAE trademark cost?",
        a: "Government fees are set by the Ministry of Economy and Tourism, are charged per class, and changed recently. Each class you register adds its own fee, so the number of classes affects the total. We confirm the current fee schedule and give you a written quote before you file.",
      },
      {
        q: "Do I need a written contract with every customer or supplier?",
        a: "Not always, but a written contract protects both sides when terms are important or the amount is significant. We advise on when a contract is worth the time. For each agreement, we set out the scope, price, payment terms and how disputes are handled.",
      },
      {
        q: "Can you draft a power of attorney for a company?",
        a: "Yes, we draft the power of attorney with the scope of authority the company needs, and check the signatories and wording before signing. Some uses need notarisation or attestation, which we arrange alongside the document.",
      },
      {
        q: "Can you send a legal notice for an unpaid invoice?",
        a: "Yes, we draft a formal demand notice that sets out the amount owed, the payment terms and the response period. If the debt is not paid, we advise on the next step, which may include referral to a licensed advocate.",
      },
      {
        q: "Do you handle labour disputes?",
        a: "We support employers and employees with the documents and timeline a labour dispute needs, including the correspondence and records. Where a dispute goes further, a licensed advocate represents the party.",
      },
      {
        q: "Is legal translation done by a qualified translator?",
        a: "Yes, documents are translated by qualified translators and checked against the original. For official submissions, the authority sets the translation and attestation requirements, which we confirm before the translation is ordered.",
      },
    ],
  },
};

export default legalServices;
