import { Book, FileCheck, IdCard, Landmark, Receipt, Search, ShieldCheck, Wallet } from "../icons";
import type { ServiceContent } from "../types";

const bankingFinance: ServiceContent = {
  slug: "banking-finance",
  name: "Banking & Finance",
  metadata: {
    title: "Banking & Finance Services in Dubai — BuiltPulse",
    description: "From licence to financially operational: a bank-ready application, WPS payroll and organised books, with one BuiltPulse team handling each step.",
  },

  hero: {
    eyebrow: "Services · Banking & Finance · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          Bank-Ready, Payroll-Ready and Audit-Ready,
        </span>
        <span data-hero className="block">
          Without the <span className="font-bold text-gold-500">Chasing</span>
        </span>
      </>
    ),
    body: "BuiltPulse takes your company from licence to financially operational: a bank-ready application, WPS payroll and organised books, with one team handling each step.",
    primaryCta: "Book a consultation",
    secondaryCta: "See how it works",
  },

  form: {
    eyebrow: "Finance setup check",
    title: "Tell us where you are",
    body: "Two quick steps. We'll tell you what to prepare first, within one working day.",
    submit: "Get my plan",
    field: "none",
    selects: [
      { label: "Service needed", options: ["Bank account", "KYC pack", "WPS and payroll", "Accounting and bookkeeping", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Four steps to a company that can bank, pay and report",
    body: "A trade licence is only the start. Banks, payroll and accounting each have their own rules, and mistakes in one slow the others. We set them up in the right order, so your company can operate from day one.",
    imageCaption: "BuiltPulse consultant reviewing a company’s bank application file",
    features: [
      { title: "Corporate bank account opening support", problem: "A valid licence doesn't guarantee an account, and many first applications are delayed or declined.", solution: "We guide you to a suitable bank, prepare the application and support you until the bank decides.", Icon: Landmark },
      { title: "Bank compliance file & KYC pack", problem: "Mismatched names, missing documents or a thin source-of-funds story trigger follow-up requests and rejections.", solution: "We assemble a complete, consistent file before it reaches the bank.", Icon: FileCheck },
      { title: "WPS registration & payroll setup", problem: "Salaries must now go through WPS by the first day of the following month, with no grace period, and late pay can block work permits.", solution: "We register you and set up payroll so salaries go out on time.", Icon: Wallet },
      { title: "Accounting & bookkeeping", problem: "UAE law expects proper accounting records, kept for years, and messy books cause trouble with tax, banks and audits.", solution: "We organise your records so they are ready when anyone asks.", Icon: Book },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Banking",
    headline: "Bank-ready from the first application",
    body: "A licence alone doesn't open an account. We prepare a complete KYC file that tells one consistent story about your company, then support the application until the bank decides.",
    tags: ["Business bank account Dubai", "KYC pack preparation", "Bank compliance file", "Source-of-funds documentation", "Signatory and UBO documents"],
    cta: "Explore banking support",
    imageCaption: "Founder and BuiltPulse consultant preparing a KYC pack",
    modal: {
      eyebrow: "Part 01 · Banking",
      title: "Banking support",
      description: "A licence alone doesn't open an account. We prepare a complete KYC file that tells one consistent story about your company, then support the application until the bank decides.",
      layout: "grid",
      items: [
        { title: "Business bank account Dubai", Icon: Landmark },
        { title: "KYC pack preparation", Icon: FileCheck },
        { title: "Bank compliance file", Icon: ShieldCheck },
        { title: "Source-of-funds documentation", Icon: Search },
        { title: "Signatory and UBO documents", Icon: IdCard },
      ],
    },
  },

  steps: {
    eyebrow: "Step-by-step guide",
    headline: "How to Open a Business Bank Account and Set Up Payroll in the UAE",
    body: "This guide shows how to get a UAE company bank-ready, paying staff through WPS and keeping proper books, in the order that works. BuiltPulse handles each step so your part stays small.",
    items: [
      { title: "Check your readiness", desc: "Review your licence, MOA, ownership, office address and business plan for gaps before any bank sees them.", you: "gather the documents.", we: "flag what banks will question." },
      { title: "Build your KYC pack", desc: "Assemble the file: company documents, signatory and UBO details and source-of-funds evidence, with names matching everywhere.", you: "confirm the facts.", we: "prepare and cross-check every document." },
      { title: "Apply for the account", desc: "Choose a suitable bank and take the application through its compliance questions.", you: "attend any bank meeting.", we: "guide the choice, submit and follow up." },
      { title: "Register for WPS and set up payroll", desc: "Once the account is active, register your company on WPS and set up payroll so salaries go out by the first day of the following month.", you: "provide your staff list and salaries.", we: "register and configure." },
      { title: "Set up your books", desc: "Set up accounting records so every transaction is captured from day one.", you: "share invoices and statements.", we: "organise and record them." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through bank, payroll and bookkeeping steps (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Companies we help get financially set up",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Payroll and accounting",
    headline: "Payroll and books that keep you compliant every month",
    body: "Once the account is open, the ongoing work begins: paying staff through the approved system and keeping records tax authorities and banks can rely on.",
    cta: "Explore payroll and accounting",
    imageCaption: "Finance lead reviewing payroll records with a BuiltPulse advisor",
    cards: [
      { title: "WPS registration", desc: "Register your company on the Wage Protection System so salaries move through the approved channel.", audience: "For employers hiring staff.", includes: "Includes registration and set-up checks.", Icon: Wallet },
      { title: "Payroll setup", desc: "Set up payroll so salaries are calculated, recorded and ready to pay on schedule.", audience: "For companies hiring their first or next employees.", includes: "Includes salary records and a payroll routine you can follow.", Icon: Receipt },
      { title: "Accounting & bookkeeping", desc: "Record transactions and keep your books organised and audit-ready.", audience: "For SMEs and any business that needs clean accounting records.", includes: "Includes organised records and monthly summaries.", Icon: Book },
    ],
    modal: {
      eyebrow: "Part 02 · Payroll and accounting",
      title: "Payroll and accounting",
      description: "Once the account is open, the ongoing work begins: paying staff through the approved system and keeping records tax authorities and banks can rely on.",
      items: [
        { title: "WPS registration", desc: "Register your company on the Wage Protection System so salaries move through the approved channel.", Icon: Wallet },
        { title: "Payroll setup", desc: "Set up payroll so salaries are calculated, recorded and ready to pay on schedule.", Icon: Receipt },
        { title: "Accounting & bookkeeping", desc: "Record transactions and keep your books organised and audit-ready.", Icon: Book },
      ],
    },
  },

  testimonials: {
    title: "Founders and employers on getting financially set up",
    body: "Owners and finance leads share how it felt to hand over bank applications, payroll and bookkeeping to one team.",
  },

  cta: {
    title: "Ready to get your finances set up?",
    body: "Tell us what stage you're at. In a 20-minute call, a BuiltPulse consultant maps your bank, payroll and bookkeeping steps.",
    button: "Book a consultation",
  },

  faq: {
    intro: "The questions new companies and employers ask us most. We confirm the details for your case on a short call.",
    items: [
      {
        q: "What documents do I need to open a corporate bank account in the UAE?",
        a: "Banks typically ask for your trade licence, MOA, certificate of incorporation, shareholder and signatory passports and Emirates IDs, proof of address, a UBO declaration and source-of-funds details. Requirements vary by bank, and names must match across every document.",
      },
      {
        q: "How long does it take to open a business bank account?",
        a: "It varies by bank and company. Digital banks can take around one to two weeks, traditional banks often take several weeks, and non-resident or complex structures can take longer. A complete, consistent KYC file is the biggest factor in avoiding delays.",
      },
      {
        q: "Why do banks reject business account applications?",
        a: "Common reasons are incomplete or inconsistent documents, unclear ownership, weak source-of-funds evidence and activities the bank sees as higher risk. A clean KYC pack that explains the business and where funds come from reduces the risk of delay or rejection.",
      },
      {
        q: "What is WPS, and is it mandatory?",
        a: "The Wage Protection System is the electronic salary-transfer system run by MOHRE with the Central Bank. Private-sector employers registered with MOHRE must pay salaries through it, in full and on time. Many free zones run their own equivalent system.",
      },
      {
        q: "What are the WPS payment deadlines in 2026?",
        a: "Since 1 June 2026, private-sector employers must pay each month's salaries by the first day of the following month through WPS, with no 15-day grace period. Late payment can lead to fines, work permit suspensions and other penalties.",
      },
      {
        q: "Does my company need bookkeeping if it is in a Free Zone or makes no profit?",
        a: "Yes, UAE companies, including Free Zone companies, must keep accounting records. Corporate tax records must be kept for at least seven years and VAT records for at least five, even when no tax is payable.",
      },
      {
        q: "What is the difference between bookkeeping and accounting?",
        a: "Bookkeeping records your day-to-day transactions. Accounting uses those records to prepare financial statements, tax filings and business decisions. For UAE corporate tax, financial statements must follow IFRS or IFRS for SMEs.",
      },
      {
        q: "Can you guarantee my bank account will be approved?",
        a: "No one can, because the bank makes the final decision. We prepare a complete, consistent file and guide the application, which improves your chances and avoids delays you can control.",
      },
    ],
  },
};

export default bankingFinance;
