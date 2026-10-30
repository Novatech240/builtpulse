import { Building, Calendar, Heart, IdCard, LicenseCard, Percent, Receipt, Refresh } from "../icons";
import type { ServiceContent } from "../types";

const recurringRenewals: ServiceContent = {
  slug: "recurring-renewals",
  name: "Recurring & Renewals",
  metadata: {
    title: "Licence, Visa & Filing Renewals in Dubai — BuiltPulse",
    description: "BuiltPulse tracks every expiry and filing date for your company and handles each renewal, so a lapsed licence, visa or return never disrupts your business.",
  },

  hero: {
    eyebrow: "Recurring & Renewals",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          Renewals and Filing Dates,
        </span>
        <span data-hero className="block">
          Managed in <span className="font-bold text-gold-500">One Calendar</span>
        </span>
      </>
    ),
    body: "BuiltPulse tracks every expiry and filing date for your company and handles each renewal, so a lapsed licence, visa or return never disrupts your business.",
    primaryCta: "Book a consultation",
    secondaryCta: "See how it works",
  },

  form: {
    eyebrow: "Renewal check",
    title: "Find out what's due next",
    body: "Two quick steps. We'll list your upcoming dates and what each needs, within one working day.",
    submit: "Check my dates",
    field: "none",
    selects: [
      { label: "What needs renewing?", options: ["Trade licence", "Ejari", "Visas and labour cards", "Health insurance", "VAT or Corporate Tax returns", "Bookkeeping", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "One calendar for every expiry and filing",
    body: "Licences, tenancies, visas, insurance and tax returns all expire or fall due on different dates, and each lapse can block the next. We put every date in one calendar and handle each renewal in the right order.",
    imageCaption: "BuiltPulse consultant reviewing a company’s renewal calendar",
    features: [
      { title: "Licence & tenancy renewals", problem: "In Dubai, a mainland licence generally can't renew without a valid Ejari tenancy, so one late lease stalls everything.", solution: "We renew the tenancy and Ejari first, then the licence.", Icon: LicenseCard },
      { title: "Visa, immigration & insurance renewals", problem: "Visas, labour and immigration cards and health insurance expire separately, and in Dubai an insurance gap can block a visa renewal and add a fine of AED 500 per person per month.", solution: "We schedule them together and renew insurance before the visa.", Icon: IdCard },
      { title: "VAT & Corporate Tax returns", problem: "Returns follow fixed deadlines, and a missed date means penalties.", solution: "We prepare and file each return before it is due.", Icon: Receipt },
      { title: "Accounting, bookkeeping & compliance calendar", problem: "Returns and renewals depend on current records, and nobody owns the dates.", solution: "We keep your books up to date and run one expiry and filing calendar with reminders.", Icon: Calendar },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02",
    headline: "Licences, tenancies, visas and insurance, renewed before they lapse",
    body: "We track each expiry date, prepare the documents and file the renewal early, so nothing reaches the day it stops your business from operating.",
    tags: ["Trade license renewal Dubai", "Ejari registration UAE", "Immigration and labour card renewal", "Visa renewal UAE", "Health insurance Dubai"],
    cta: "Explore renewal services",
    imageCaption: "Business owner and BuiltPulse consultant renewing a trade licence",
    modal: {
      eyebrow: "Part 01 · Renewals",
      title: "Renewal services",
      description: "We track each expiry date, prepare the documents and file the renewal early, so nothing reaches the day it stops your business from operating.",
      layout: "grid",
      items: [
        { title: "Trade license renewal Dubai", Icon: LicenseCard },
        { title: "Ejari registration UAE", Icon: Building },
        { title: "Immigration and labour card renewal", Icon: IdCard },
        { title: "Visa renewal UAE", Icon: Refresh },
        { title: "Health insurance Dubai", Icon: Heart },
      ],
    },
  },

  steps: {
    eyebrow: "Step-by-step guide",
    headline: "How to Renew Your Trade License in the UAE Without Delays",
    checklist: {
      title: "Before you start, have these ready",
      items: ["Your current trade licence", "A valid Ejari-registered tenancy contract (mainland) or your free zone workspace agreement", "Passport and Emirates ID copies for owners and partners", "Your MOA", "Any activity-specific approvals or NOCs"],
    },
    items: [
      { title: "Check your expiry date and clear fines", desc: "Confirm the date and look for unpaid fines or pending approvals, because they can block renewal.", you: "share your licence.", we: "check the file." },
      { title: "Renew your tenancy and Ejari", desc: "Renew the lease first, then register it so the Ejari is current.", you: "sign the lease.", we: "register it." },
      { title: "Gather documents and approvals", desc: "Collect the documents and any third-party approvals your activity needs.", you: "send what's missing.", we: "review for gaps." },
      { title: "Submit the renewal", desc: "File the application with your licensing authority.", you: "approve the details.", we: "submit and track." },
      { title: "Pay fees and collect your licence", desc: "Pay the renewal fees and receive the renewed licence.", you: "approve the fees.", we: "pay and collect." },
      { title: "Update everything that depends on it", desc: "Check visas, the establishment card, the bank and insurance for the new dates.", you: "confirm changes.", we: "update and diarise." },
    ],
    mistakes: {
      title: "Common mistakes to avoid",
      items: ["Letting the Ejari or lease expire before starting the licence renewal.", "Ignoring fines or pending approvals on the file.", "Waiting until last week, when one missing document causes a lapse."],
    },
    imageCaption: "BuiltPulse consultant walking a client through a licence renewal (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Companies whose renewals we keep on schedule",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02",
    headline: "Returns and books that never miss a date",
    body: "Tax returns depend on accurate records, and records only help if someone owns the deadlines. We prepare your returns, keep your books current and give you one calendar of what is due.",
    cta: "Explore filings and records",
    imageCaption: "Finance lead reviewing tax returns and records with a BuiltPulse advisor",
    cards: [
      { title: "VAT returns", desc: "Prepare and file your VAT returns on the FTA's schedule.", audience: "For VAT-registered companies.", includes: "Includes return preparation, sign-off and filing.", Icon: Percent },
      { title: "Corporate Tax returns", desc: "Prepare and file your annual Corporate Tax return.", audience: "For companies registered for Corporate Tax.", includes: "Includes return preparation, sign-off and filing.", Icon: Receipt },
      { title: "Accounting, bookkeeping & compliance calendar", desc: "Keep your records current and track every expiry and filing date.", audience: "For any operating company that wants its renewals and dates managed in one place.", includes: "Includes organised records, expiry tracking and reminders.", Icon: Calendar },
    ],
    modal: {
      eyebrow: "Part 02 · Filings and records",
      title: "Filings and records",
      description: "Tax returns depend on accurate records, and records only help if someone owns the deadlines. We prepare your returns, keep your books current and give you one calendar of what is due.",
      items: [
        { title: "VAT returns", desc: "Prepare and file your VAT returns on the FTA's schedule.", Icon: Percent },
        { title: "Corporate Tax returns", desc: "Prepare and file your annual Corporate Tax return.", Icon: Receipt },
        { title: "Accounting, bookkeeping & compliance calendar", desc: "Keep your records current and track every expiry and filing date.", Icon: Calendar },
      ],
    },
  },

  testimonials: {
    title: "Clients who stopped worrying about expiry dates",
    body: "Owners and finance leads explain what changed once one team took over their renewals, filings and reminders.",
  },

  cta: {
    title: "Not sure what expires next?",
    body: "Share your licence and visa details. In a 10-minute call, a BuiltPulse consultant maps every renewal and filing date for the next 12 months.",
    button: "Build my calendar",
  },

  faq: {
    title: "Renewal and filing questions, answered",
    items: [
      {
        q: "When should I start my trade licence renewal?",
        a: "Start two to four weeks before expiry. In Dubai, fines can begin the day after the licence expires, and a mainland renewal first needs a valid Ejari tenancy. A lapsed lease or an old fine on file can stall it, so an early start absorbs those problems. BuiltPulse tracks your expiry date and starts the renewal early.",
      },
      {
        q: "Do I need Ejari to renew a mainland licence in Dubai?",
        a: "Yes. A valid Ejari-registered tenancy contract is mandatory before the Department of Economy and Tourism renews a mainland licence, and it generally needs at least a month of validity left. Renew the lease and Ejari first, then the licence. We handle both for you.",
      },
      {
        q: "What documents do I need for a trade licence renewal?",
        a: "Usually your current trade licence, a valid Ejari or tenancy contract, owners' passport and Emirates ID copies, the MOA and any activity-specific approvals. Mainland renewals may also need chamber of commerce membership. Requirements vary by authority, so send us your licence and we'll prepare your exact list.",
      },
      {
        q: "What happens if my licence expires?",
        a: "You cannot legally trade on an expired licence, and in Dubai fines can start the day after expiry. Unpaid fines or an expired Ejari can also block the renewal itself, so act as soon as you notice and clear any blockers first. We clear them and file the renewal for you.",
      },
      {
        q: "Is health insurance renewal linked to visa renewal?",
        a: "Yes. In Dubai, employers and sponsors must keep valid health insurance for each visa holder, and it is checked when visas are renewed. Uninsured periods are fined AED 500 per person per month, and policy renewal notices are due at least 30 days before expiry. We renew cover before your visas fall due.",
      },
      {
        q: "When are VAT returns due?",
        a: "Most businesses file quarterly, and the FTA may assign monthly periods instead. Each return is due within 28 days of the period end, so a quarter ending on 31 March is due by 28 April. We prepare it, you sign off and we file.",
      },
      {
        q: "When is the Corporate Tax return due?",
        a: "Within nine months of the end of your financial year, so a 31 December year-end is due by 30 September. Registered companies must file even when no tax is payable. We prepare the return and file it ahead of the deadline.",
      },
      {
        q: "What does a compliance calendar include?",
        a: "It lists every expiry and filing date: licence, Ejari, visas, labour and immigration cards, health insurance, VAT and Corporate Tax returns. We track the dates, send reminders and handle each renewal so nothing slips.",
      },
    ],
  },
};

export default recurringRenewals;
