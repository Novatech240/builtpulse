import { Calendar, FileCheck, LicenseCard, Route, Stamp, Users } from "../icons";
import type { ServiceContent } from "../types";

const governmentServiceCentres: ServiceContent = {
  slug: "government-service-centres",
  name: "Government Service Centres",
  metadata: {
    title: "Government Service Centres in Dubai — BuiltPulse",
    description: "Tasheel, Amer, Tawjeeh, DET and notary transactions routed to the right channel. BuiltPulse prepares, submits and tracks each one.",
  },

  hero: {
    eyebrow: "Government service centres · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block font-bold text-white">
          The right government channel
        </span>
        <span data-hero className="block">
          for each <span className="font-bold text-gold-500">business transaction.</span>
        </span>
      </>
    ),
    body: "Sending a file to the wrong counter costs days, so we work out the right channel before anything is submitted. You keep the decisions, and we prepare, submit and track each transaction.",
    primaryCta: "Route My Transaction",
    secondaryCta: "See Which Channel Applies",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "Government service centres",
    title: "Tell us which transaction you need.",
    body: "Describe the transaction, such as a work permit, visa, Emirates ID, trade licence change or power of attorney. We reply with the right service channel and the documents to prepare.",
    submit: "Find my channel",
    companyLabel: "Company name",
    companyPlaceholder: "Company name",
    selects: [
      { label: "Transaction type", options: ["Labour and work permit", "Visa and Emirates ID", "Trade licence", "Notary and power of attorney", "Not sure yet"] },
      { label: "Number of transactions", options: ["1", "2 to 5", "6 or more", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Each transaction belongs at one specific government channel.",
    body: "Tasheel, Tawjeeh and Amer are separate service-centre networks, and each handles different transactions for the Ministry of Human Resources and Emiratisation or the Dubai residency authority. Sending a file to the wrong channel is one of the most common causes of delay for new companies. We map each transaction to its channel, prepare the file, and track it through to completion.",
    imageCaption: "BuiltPulse liaison checking a government transaction file",
    features: [
      { title: "Right channel from the start", problem: "Filing a labour transaction at the residency counter, or the reverse, returns the file and restarts the queue.", solution: "We confirm the channel for each transaction before anything is typed or submitted.", Icon: Route },
      { title: "Documents checked before submission", problem: "Missing attestations, expired passports or mismatched names send files back for correction.", solution: "We check each document against the channel's requirements and flag gaps before you attend.", Icon: FileCheck },
      { title: "One coordinated transaction sequence", problem: "Permits, visas and Emirates ID depend on each other, and a delay in one stalls the rest.", solution: "We map the order of transactions so each step opens the next, and track each reference number.", Icon: Calendar },
      { title: "Notary and attestation handled", problem: "Company documents such as a power of attorney must be notarised before government channels accept them.", solution: "We arrange the notary appointment and confirm the document is ready for the channel that needs it.", Icon: Stamp },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Labour and residency channels",
    headline: "Labour and residency files, sent to the right counter.",
    body: "Work permits, labour cards and contracts go through Tasheel for the Ministry of Human Resources and Emiratisation. Residence visas, entry permits and Emirates ID transactions go through Amer for the Dubai residency authority. We check which channel each step needs, prepare the documents and follow each reference number until the file is complete.",
    tags: ["Tasheel Dubai", "Amer center Dubai", "Tawjeeh UAE", "Document attestation Dubai"],
    cta: "Talk to a Government Liaison",
    imageCaption: "Founder and BuiltPulse liaison preparing labour and residency documents",
  },

  steps: {
    eyebrow: "How a government transaction moves",
    headline: "Five steps from channel check to completed file.",
    body: "Each transaction follows the same path: confirm the channel, prepare the file, submit it, attend if required, and collect the result. The order matters, because one approval often unlocks the next.",
    items: [
      { title: "Channel check", you: "tell us the transaction and the company or person involved.", we: "confirm whether it belongs to Tasheel, Amer, Tawjeeh, DET or a notary." },
      { title: "Document preparation", you: "provide passports, Emirates IDs, the trade licence and any signed documents.", we: "check each document against the channel's requirements and flag gaps." },
      { title: "Notarisation or attestation, where needed", you: "sign the power of attorney or company document in front of the required signatories.", we: "book the notary and arrange attestation where the channel asks for it." },
      { title: "Submission and attendance", you: "attend the appointment, or sign the form you are asked to sign.", we: "submit the file, prepare you for the visit and confirm the reference number." },
      { title: "Collection and follow-up", you: "collect the approved document or card.", we: "track the reference until the transaction closes and record the result." },
    ],
    imageCaption: "BuiltPulse liaison walking a client through a government transaction (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Companies we have guided through government transactions",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Licence, notary and orientation",
    headline: "Licence changes and company paperwork, signed off timely.",
    body: "Trade licence changes go through the Department of Economy and Tourism, and company documents such as a power of attorney often need notarising before any authority accepts them. Orientation sessions run through Tawjeeh where MOHRE requires them for a new hire. Each service has its own requirements and approval timing, so we confirm them for your company before anything is booked.",
    cta: "Plan My Paperwork",
    imageCaption: "Business owner reviewing a notarised document with a BuiltPulse advisor",
    cards: [
      { title: "Trade licence changes filed", desc: "DET handles trade licence transactions such as activity changes and amendments.", audience: "For companies changing activities, names or other details on their licence.", includes: "Includes application preparation, document checks and DET submission follow-up.", Icon: LicenseCard },
      { title: "Company documents notarised", desc: "Notarised powers of attorney, board resolutions and MOA changes for government and bank use.", audience: "For founders signing remotely or delegating signing authority.", includes: "Includes notary appointment, signatory checklist and a notarised copy handed over.", Icon: Stamp },
      { title: "Orientation sessions booked", desc: "MOHRE-approved Tawjeeh orientation sessions for employees and employers, where required.", audience: "For companies hiring staff whose skill level or sponsor requires the session.", includes: "Includes eligibility check, session booking and certificate follow-up.", Icon: Users },
    ],
  },

  testimonials: {
    title: "Clients on the counter, the queue and the follow-up",
    body: "Clients describe how a complicated government file moved once it went to the right channel, and what they no longer had to chase. Their stories cover labour, residency and notary transactions, in their own words.",
  },

  cta: {
    title: "Not sure which channel your transaction needs? Ask us first.",
    body: "A short call takes your transaction list and tells you which government channel handles each one, and which documents to prepare. You leave with an order of steps and a document checklist, with no obligation to proceed. Our team then confirms the current requirements before anything is submitted.",
    button: "Book a Channel Review",
  },

  faq: {
    items: [
      {
        q: "What is the difference between Tasheel, Amer and Tawjeeh?",
        a: "Tasheel handles Ministry of Human Resources and Emiratisation labour transactions, such as work permits and labour cards. Amer handles Dubai residency and entry permit transactions for the GDRFA. Tawjeeh delivers MOHRE orientation sessions for workers and employers. Each is a separate service network, so the right choice depends on the transaction.",
      },
      {
        q: "Do I need Amer for my company's visa?",
        a: "Visa transactions for Dubai residents go through Amer, the GDRFA's service channel in Dubai, and Emirates ID and entry permits follow the same route. Some centres offer both Amer and Tasheel services under one roof, but each transaction still belongs to one channel. We confirm the channel before you book an appointment.",
      },
      {
        q: "Can you notarise my company's power of attorney?",
        a: "We arrange notarisation for company documents such as a power of attorney, board resolution or memorandum changes. Dubai notaries are supervised by Dubai Courts, and the notary decides whether a document is accepted. We check the signatory details and the wording with you before the appointment.",
      },
      {
        q: "Do foreign documents need attestation before use in Dubai?",
        a: "Documents issued outside the UAE often need legalisation before they are accepted, which can include notarisation in the home country and attestation by the UAE Ministry of Foreign Affairs. The chain depends on the document and where it was issued, so we confirm it before you send anything. Attestation fees are set by each authority and change over time.",
      },
      {
        q: "Is Tawjeeh required for every new employee?",
        a: "Not always. Tawjeeh orientation applies to certain skill levels and sponsor types under MOHRE rules, and the categories are updated from time to time. We check whether each hire needs the session before you make an offer, so the work permit is not delayed.",
      },
      {
        q: "How long does a Tasheel or Amer transaction take?",
        a: "Timing depends on the transaction, appointment availability and whether the file is complete on first submission. Some steps finish the same day, while others depend on the authority's approval.",
      },
      {
        q: "Which channel handles my trade licence changes?",
        a: "Trade licence transactions, such as activity changes, amendments and renewals, are handled through the Department of Economy and Tourism. We prepare the file, submit it and track the result. DET decides each application, and the fee depends on the transaction.",
      },
      {
        q: "Do I need to attend a government centre in person?",
        a: "Some transactions need a visit, while others can be completed online or through a typing centre. The channel decides which steps need you in person, including biometric and signature steps. We confirm this for each transaction, so you can plan your time around the visit.",
      },
    ],
  },
};

export default governmentServiceCentres;
