import { Chart, Compass, Exit, IdCard, Route, Search, Users } from "../icons";
import type { ServiceContent } from "../types";

const businessInvestmentConsulting: ServiceContent = {
  slug: "business-investment-consulting",
  name: "Business & Investment Consulting & Structuring",
  metadata: {
    title: "Business & Investment Consulting in Dubai — BuiltPulse",
    description: "BuiltPulse tests the market, builds the financial case and sets the ownership structure before money moves.",
  },

  hero: {
    eyebrow: "Services · Business & investment consulting · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          Better business and investment decisions,
        </span>
        <span data-hero className="block">
          with <span className="font-bold text-gold-500">structured support.</span>
        </span>
      </>
    ),
    body: "We test the market, build the financial case and set the ownership structure before money moves. Whether you are entering the UAE, bringing in a partner or planning an exit, each decision comes with the numbers and the trade-offs. The decision stays with you, and we give you the analysis to make it well.",
    primaryCta: "Book a Confidential Consultation",
    secondaryCta: "Explore Advisory Services",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "Business & investment consulting",
    title: "Describe the decision you are weighing.",
    body: "Share your situation. We reply with the analysis we would start with and the information we need. Your details stay confidential.",
    submit: "Request my analysis",
    companyLabel: "Company name",
    companyPlaceholder: "Company name",
    selects: [
      { label: "Decision type", options: ["Market entry", "Business plan or feasibility", "Shareholder or partner structure", "Investment or acquisition", "Exit or succession", "Not sure yet"] },
      { label: "Stage", options: ["Idea", "Planning", "Active deal", "Post-transaction", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Structure and numbers settled before the deal is signed.",
    body: "A business or investment decision depends on three things working together: the market case, the ownership structure and the financial model. Weakness in any one of them tends to surface later, when it is more expensive to fix. We test each part with you before money or shares move.",
    imageCaption: "BuiltPulse consultant reviewing a financial model with an investor",
    features: [
      { title: "Market entry tested first", problem: "Entering the UAE without testing demand, pricing and licensing routes can cost more than the market returns.", solution: "We run a market entry review and a feasibility study before you commit to a structure.", Icon: Compass },
      { title: "Ownership that works for partners", problem: "Unclear shareholder rights and transfer terms create disputes once the business grows.", solution: "We structure shareholder and partnership terms, and align them with the MOA and the licence.", Icon: Users },
      { title: "Investment case backed by numbers", problem: "Projections built on optimistic assumptions mislead investors and lenders.", solution: "We build financial models with stated assumptions and sensitivity tests you can challenge.", Icon: Chart },
      { title: "Exit planned from the start", problem: "Founders who plan an exit late face weaker prices and unresolved succession questions.", solution: "We map exit and succession options early, including share transfers and due diligence readiness.", Icon: Exit },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Strategy, plans and structure",
    headline: "Build the case and the structure before you commit.",
    body: "We review the market, run a feasibility study and draft the business plan that lenders and partners will ask for. We then design the corporate and shareholder structure, including the terms that govern transfers and decisions.",
    tags: ["Business plan Dubai", "Feasibility study UAE", "Corporate structuring", "Shareholder structuring", "Financial modelling"],
    cta: "Plan My Investment Case",
    imageCaption: "Founder and BuiltPulse consultant working through a business plan",
  },

  steps: {
    eyebrow: "The advisory roadmap",
    headline: "Five stages from question to a decision you can defend.",
    body: "Each stage gives you a document or a number you can review before the next one starts. Advice is given on your facts, and the final decision and its legal effect remain with you and your advisers.",
    items: [
      { title: "Scoping and information request", you: "share your goals, the transaction or entry plan, and the financial records you hold.", we: "confirm the scope and the list of information we still need." },
      { title: "Market and feasibility review", you: "review the market findings and the assumptions we propose.", we: "test demand, pricing and the licensing route, and report the findings." },
      { title: "Structure and financial model", you: "confirm the ownership split, the funding plan and the key assumptions.", we: "draft the structure options and build the model with sensitivity tests." },
      { title: "Due diligence or deal support", you: "provide the corporate, tax and contract documents for review.", we: "review the documents, flag the risks and support the negotiation." },
      { title: "Execution and handover", you: "approve the final structure and the filings it requires.", we: "coordinate the documents and hand over the model and the decision file." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through the advisory roadmap (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Investors and owners we have advised in Dubai",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Deals, visas and exits",
    headline: "Deals, investor visas and exits handled with care.",
    body: "Buyers and investors need the records checked before they commit, owners need share transfers documented correctly, and long-term residency depends on meeting the investment route's criteria. Each of these has its own evidence and deadlines. The outcome depends on the documents and the authority or counterparty, so we set expectations with you early.",
    cta: "Discuss My Transaction",
    imageCaption: "Business owner reviewing a share transfer with a BuiltPulse advisor",
    cards: [
      { title: "Due diligence before signing", desc: "Review of corporate, tax, contract and licence records before a deal closes.", audience: "For buyers, investors and partners entering a transaction.", includes: "Includes document review, a risk register, a findings summary and negotiation points.", Icon: Search },
      { title: "Share transfers handled correctly", desc: "Structuring and documenting share transfers between shareholders or new investors.", audience: "For owners selling, buying or reallocating shares in a UAE company.", includes: "Includes transfer agreement support, MOA amendment coordination and a filing checklist.", Icon: Route },
      { title: "Golden Visa route assessed", desc: "Eligibility review for investor and business Golden Visa routes.", audience: "For owners and investors considering long-term UAE residency.", includes: "Includes route assessment, a document checklist and an eligibility summary before application.", Icon: IdCard },
    ],
  },

  testimonials: {
    title: "Owners and investors on decisions made with better numbers",
    body: "Clients describe the plan, structure or transaction that they took into a decision with clearer terms. Their stories cover the feasibility work, the shareholder terms and any deal support, in their own words.",
  },

  cta: {
    title: "Facing a big decision? Start with a confidential review.",
    body: "A short call covers your decision, the information you hold and the outcome you are working towards. You leave with a suggested first analysis, the documents we would need, and a clear view of what we can and cannot advise on. Our team then confirms the scope and fees before any work begins.",
    button: "Book a Confidential Consultation",
  },

  faq: {
    items: [
      {
        q: "What is the difference between a business plan and a feasibility study?",
        a: "A business plan describes the business, its market, operations and financial projections, while a feasibility study tests whether the idea works before you commit. Banks, partners and some authorities ask for one or both. We scope the depth you need, so the work matches the decision in front of you.",
      },
      {
        q: "Can a foreigner own 100% of a company in Dubai?",
        a: "Many free zone companies allow 100% foreign ownership, and many mainland activities now do too. Some activities still require a local partner or a specific approval. We check the ownership rules for your activity before you commit to a structure.",
      },
      {
        q: "Which Golden Visa route applies to a business owner?",
        a: "The business route generally requires a company stake of a stated minimum value, commonly AED 2 million or more, with supporting company and tax documents. Thresholds and document lists change, so we confirm the current route before you apply.",
      },
      {
        q: "How long does a share transfer take?",
        a: "Timing depends on the agreement, the consents needed and the approvals required to update the company's records. Transfers between existing shareholders usually move faster than transfers to new investors. We give you a timetable once the parties and documents are confirmed.",
      },
      {
        q: "Do I still need a lawyer for a transaction?",
        a: "Yes, for most transactions. We explain the commercial and structural points and coordinate with your legal advisers, but we do not provide legal advice. Shareholder agreements and other legal documents should be drafted or reviewed by a qualified lawyer.",
      },
      {
        q: "Can you help plan an exit or succession?",
        a: "Yes, we map exit routes such as a sale to a partner or buyer, a share transfer, or a handover to family or managers. For each route we assess the value drivers and the documents needed. Final transfers depend on the parties and the authorities.",
      },
      {
        q: "How are your advisory fees set?",
        a: "We agree on the scope and fee in writing before any work starts. Fees depend on the depth of analysis, the number of documents and the timeline. We do not begin billable work without a written agreement.",
      },
      {
        q: "Is the information I share kept confidential?",
        a: "Yes, we use the information only for your engagement and keep it confidential, subject to any legal duty to disclose. We agree on confidentiality terms in writing before reviewing deal documents.",
      },
    ],
  },
};

export default businessInvestmentConsulting;
