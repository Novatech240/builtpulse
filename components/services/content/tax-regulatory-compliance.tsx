import { Archive, Building, Calendar, FileCheck, Pencil, Percent, Receipt, Search, ShieldCheck } from "../icons";
import type { ServiceContent } from "../types";

const taxRegulatoryCompliance: ServiceContent = {
  slug: "tax-regulatory-compliance",
  name: "Tax & Regulatory Compliance",
  metadata: {
    title: "Tax & Regulatory Compliance in the UAE — BuiltPulse",
    description:
      "Corporate Tax and VAT registration, on-time filing and UBO and AML obligations managed for your UAE company by BuiltPulse.",
  },

  hero: {
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          Corporate Tax, VAT and AML Compliance,
        </span>
        <span data-hero className="block">
          Handled for You in the <span className="font-bold text-gold-500">UAE</span>
        </span>
      </>
    ),
    body: "BuiltPulse registers your company for Corporate Tax and VAT, files on time and manages your UBO and AML obligations, so a deadline never becomes a penalty.",
    primaryCta: "Book a Compliance Review",
    secondaryCta: "See How It Works",
  },

  form: {
    title: "Check Your Compliance Status",
    body: "Two quick steps. We'll tell you what you need to register for and by when, within [one working day].",
    submit: "Check My Status",
    field: "company",
  },

  overview: {
    headline: "Four obligations, one team keeping them current",
    body: "UAE compliance runs on fixed deadlines and separate portals. We work out what applies to your company and handle each filing before it is due.",
    imageCaption: "BuiltPulse consultant reviewing a client's tax registrations and filing calendar",
    features: [
      {
        title: "Corporate Tax registration",
        problem:
          "Every taxable company must register, even when no tax is due, and late registration carries a fixed AED 10,000 penalty.",
        solution: "We confirm your deadline, register you on EmaraTax and set up your filing calendar.",
        Icon: Receipt,
      },
      {
        title: "VAT registration & filing",
        problem: "Passing the registration threshold starts a 30-day clock, and returns follow a fixed cycle.",
        solution: "We check whether you must or should register, then register you and file your returns on time.",
        Icon: Percent,
      },
      {
        title: "UBO & ESR filings",
        problem: "Ownership records must stay current, and past ESR positions can still raise questions.",
        solution: "We file and update your UBO records and review any historical ESR position.",
        Icon: Building,
      },
      {
        title: "goAML / AML registration",
        problem: "Some activities fall under AML rules, and businesses often don't realise they are covered.",
        solution: "We confirm whether your activity is in scope, register you on goAML and set up reporting.",
        Icon: ShieldCheck,
      },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Tax Registration and Filing",
    headline: "Corporate Tax and VAT, Registered Right and Filed on Time",
    body: "We register your company with the Federal Tax Authority, build your calendar and file every return, so the position you report matches your business.",
    tags: [
      "Corporate tax registration Dubai",
      "Corporate tax returns",
      "Free Zone Qualifying Person review",
      "VAT registration UAE",
      "VAT return filing Dubai",
      "Tax record updates",
      "Deregistration",
    ],
    cta: "Explore Tax Services",
    imageCaption: "Finance lead and BuiltPulse consultant reviewing a Corporate Tax return",
    modal: {
      eyebrow: "Part 01 · Tax Registration and Filing",
      title: "Tax services",
      description:
        "We register your company with the Federal Tax Authority, build your calendar and file every return, so the position you report matches your business.",
      layout: "grid",
      items: [
        { title: "Corporate tax registration Dubai", Icon: Receipt },
        { title: "Corporate tax returns", Icon: FileCheck },
        { title: "Free Zone Qualifying Person review", Icon: Search },
        { title: "VAT registration UAE", Icon: Percent },
        { title: "VAT return filing Dubai", Icon: Calendar },
        { title: "Tax record updates", Icon: Pencil },
        { title: "Deregistration", Icon: Archive },
      ],
    },
  },

  steps: {
    eyebrow: "How it works",
    headline: "From First Review to Filings That Never Go Late",
    body: "UAE compliance depends on registrations, filing dates and records that must stay current. We begin by reviewing which obligations apply to your company, register you with the right authorities, then run a calendar of filings and reminders so nothing slips. Your part is to share your records and approve what we prepare; we handle the rest in five steps.",
    intro: "Five steps, and your part in each is small.",
    items: [
      { title: "Compliance review", desc: "We check your licence, activity, turnover and ownership and list what applies.", you: "share your licence and latest financials.", we: "map your obligations and deadlines." },
      { title: "Registration", desc: "We register you with the FTA and, if needed, on goAML.", you: "approve the details.", we: "submit and track." },
      { title: "Compliance calendar", desc: "Every return, payment and renewal gets a date and a reminder.", you: "confirm your reporting periods.", we: "set up the calendar." },
      { title: "Preparation & filing", desc: "We prepare returns from your records and file before the deadline.", you: "send your records and sign off.", we: "prepare and file." },
      { title: "Ongoing monitoring", desc: "We watch thresholds and rule changes and update your records when something changes.", you: "tell us about changes in the business.", we: "handle the updates." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through their compliance calendar (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Companies We Keep Compliant",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Regulatory filings and AML",
    headline: "UBO Registration UAE and AML Compliance, Kept Current",
    body: "We maintain your beneficial-owner records, register businesses that fall under AML rules and clear up past filings, so regulators find your file in order.",
    audience:
      "Every company that keeps ownership records, businesses in AML-regulated activities and companies with older ESR filings or penalties to review.",
    cta: "Explore regulatory services",
    imageCaption: "Business owner reviewing beneficial-owner records with a BuiltPulse advisor",
    cards: [
      {
        title: "UBO registration & updates",
        desc: "File your beneficial-owner records and keep them current as ownership changes.",
        audience: "For every company with owners to record.",
        includes: "Includes filing, updates and supporting documents.",
        Icon: Building,
      },
      {
        title: "goAML & AML compliance",
        desc: "Register on goAML and set up the reporting your activity requires.",
        audience: "For businesses in AML-regulated activities.",
        includes: "Includes a scope check, registration and reporting set-up.",
        Icon: ShieldCheck,
      },
      {
        // Title is cut off in the source doc ("re"); confirm with the content team.
        title: "ESR filing review",
        desc: "Review older Economic Substance filings and any penalties tied to them.",
        audience: "For companies with filings from earlier years.",
        includes: "Includes a filing check, penalty review and next steps.",
        Icon: Search,
      },
    ],
    modal: {
      eyebrow: "Part 02 · Regulatory filings and AML",
      title: "Regulatory services",
      description:
        "We maintain your beneficial-owner records, register businesses that fall under AML rules and clear up past filings, so regulators find your file in order.",
      items: [
        { title: "UBO registration & updates", desc: "File your beneficial-owner records and keep them current as ownership changes.", Icon: Building },
        { title: "goAML & AML compliance", desc: "Register on goAML and set up the reporting your activity requires.", Icon: ShieldCheck },
        { title: "ESR filing review", desc: "Review older Economic Substance filings and any penalties tied to them.", Icon: Search },
      ],
    },
  },

  testimonials: {
    title: "What Clients Say About Staying Compliant With Us",
    body: "Founders and finance leads on what changed once BuiltPulse took over their registrations, filings and deadlines.",
  },

  cta: {
    title: "Unsure which filings apply to you?",
    body: "In a 20-minute review, a BuiltPulse consultant shows what you must register for, what is due next and what may already be overdue.",
    button: "Book a Compliance Review",
  },

  faq: {
    title: "Tax and compliance questions, answered",
    intro: "The questions we hear most. We confirm the details for your company on a short call.",
    items: [
      {
        q: "Do I need corporate tax registration in the UAE if my company makes no profit?",
        a: "Yes, most taxable UAE companies must register for Corporate Tax even when they make no profit. The Federal Tax Authority (FTA) imposes an AED 10,000 penalty for late registration. Eligible businesses may qualify for a penalty waiver if they meet the FTA’s conditions.",
      },
      {
        q: "When must my business register for VAT in the UAE?",
        a: "A UAE business must register for VAT when its taxable supplies and imports exceed AED 375,000 over 12 months. Registration is also required when the threshold is expected to be exceeded within 30 days. Voluntary registration is available from AED 187,500, subject to FTA rules.",
      },
      {
        q: "What is UBO registration in the UAE, and who must file it?",
        a: "Ultimate Beneficial Owner (UBO) registration identifies the individuals who ultimately own or control a company. UAE businesses must maintain accurate beneficial ownership records and provide the required information to their relevant licensing or registration authority. Requirements depend on the entity and applicable exemptions.",
      },
      {
        q: "Is Economic Substance Regulations (ESR) filing still required in the UAE?",
        a: "No, ESR reporting requirements no longer apply to financial years ending after 31 December 2022. Businesses must still address applicable obligations for earlier financial periods. Free Zone companies seeking the 0% Corporate Tax rate must independently satisfy the Qualifying Free Zone Person conditions.",
      },
      {
        q: "Which businesses need goAML registration and AML compliance in the UAE?",
        a: "Certain Designated Non-Financial Businesses and Professions (DNFBPs) must register on goAML and comply with applicable anti-money laundering requirements. Covered activities include real estate brokerage, dealing in precious metals and stones, and specified accounting and legal services. Requirements depend on the business activity and applicable regulations.",
      },
      {
        q: "What happens if my business misses a UAE tax filing deadline?",
        a: "Missing a UAE tax deadline can result in administrative penalties and additional compliance obligations. The applicable consequences depend on the filing, delay and circumstances. We review outstanding filings, assess the penalty position and check whether any applicable waiver or relief is available.",
      },
      {
        q: "Does your company provide accounting and bookkeeping services in the UAE?",
        a: "If provided, accounting and bookkeeping services can include recording transactions, reconciling accounts, maintaining financial records and preparing reports. The scope depends on your company’s requirements and agreed service package.",
      },
      {
        q: "How much does UAE tax compliance support cost?",
        a: "Tax compliance fees depend on the services required, filing frequency, transaction volume and business structure. Confirm whether your package covers VAT returns, Corporate Tax filings, bookkeeping, advisory services and additional compliance requirements.",
      },
      {
        q: "How often must UAE businesses file VAT returns?",
        a: "UAE businesses must file VAT returns according to the tax periods assigned by the FTA, typically quarterly or monthly. Returns and related payments are generally due within 28 days after the end of the relevant tax period.",
      },
      {
        q: "Do Free Zone companies pay Corporate Tax in the UAE?",
        a: "Yes, Free Zone companies are subject to UAE Corporate Tax rules. Qualifying Free Zone Persons can benefit from a 0% rate on qualifying income and a 9% rate on taxable income that does not qualify. They must meet the applicable conditions, including adequate substance requirements, and fulfil their registration and filing obligations.",
      },
    ],
  },
};

export default taxRegulatoryCompliance;
