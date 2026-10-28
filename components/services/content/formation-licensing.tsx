import {
  Archive,
  Briefcase,
  Compass,
  FileCheck,
  IdCard,
  LicenseCard,
  Pen,
  Pencil,
  Refresh,
  Route,
  Stamp,
  Tag,
  Users,
} from "../icons";
import type { ServiceContent } from "../types";

const formationLicensing: ServiceContent = {
  slug: "business-formation-licensing",
  name: "Business Formation & Licensing",
  metadata: {
    title: "Business Formation & Licensing in Dubai — BuiltPulse",
    description:
      "End-to-end company registration UAE support: jurisdiction, approvals and paperwork, handled by one consultant across every authority.",
  },

  hero: {
    title: (
      <>
        <span data-hero className="block">Business</span>
        <span data-hero className="block font-bold text-white">Formation</span>
        <span data-hero className="block">
          &amp; <span className="font-bold text-gold-500">Licensing</span>
        </span>
      </>
    ),
    body: "BuiltPulse offers end-to-end company registration UAE support: jurisdiction, approvals and paperwork, handled by one consultant across every authority. Your company setup in Dubai moves forward without guesswork.",
    primaryCta: "Book a consultation",
    secondaryCta: "See how it works",
  },

  form: {
    title: "Get your company setup plan",
    body: "Two quick steps. We'll recommend a jurisdiction and your next steps within [one working day].",
    submit: "Get my plan",
    field: "jurisdiction",
  },

  overview: {
    headline: "Company Setup in Dubai, One Structured Process",
    body: "Our company formation UAE service covers a process that involves several authorities, each with its own steps and paperwork. We manage the sequence for you, so you always know what's happening, what's needed and what comes next.",
    imageCaption: "BuiltPulse consultant walking a founder through company formation paperwork",
    features: [
      {
        title: "Jurisdiction & legal structure",
        problem: "Mainland, Free Zone or Offshore? The wrong choice can limit where you trade and who can own the company.",
        solution: "We match the structure to your activity, ownership and growth plans before anything is filed.",
        Icon: Compass,
      },
      {
        title: "Activity & licence selection",
        problem: "Pick the wrong activity and you pay for things you don't need or can't do what you planned.",
        solution: "We choose the licence that fits what you actually do.",
        Icon: Briefcase,
      },
      {
        title: "Approvals & documentation",
        problem: "Rejected names, missing documents and MOA errors cause delays.",
        solution: "We prepare and submit name reservation, initial approval and the MOA, and check everything before it's filed.",
        Icon: FileCheck,
      },
      {
        title: "Establishment, step by step",
        problem: "Licensing and labour files involve several authorities, and it's hard to know what comes next.",
        solution: "A clear path through each stage, with an update at every step.",
        Icon: Route,
      },
    ],
    jurisdictions: {
      label: "Which company setup in Dubai fits you?",
      disclaimer:
        "General guidance only. Requirements vary by activity and authority, and rules change. Confirm your setup with a BuiltPulse consultant.",
      guides: {
        mainland: {
          n: "01",
          label: "Mainland",
          title: "Setting up on the Mainland",
          description: "Licensed by Dubai DET, with the right to trade directly across the UAE.",
          facts: [
            { label: "Licensing authority", value: "Dubai Department of Economy & Tourism (DET)" },
            { label: "Ownership", value: "Up to 100% foreign for most activities" },
            { label: "Office", value: "Physical office with registered Ejari" },
          ],
          requirements: [
            "Choose your activity and legal form (LLC, Sole Establishment, Civil Company or Branch)",
            "Reserve a trade name and get Initial Approval",
            "Lease an office and register the tenancy on Ejari",
            "Notarise the MOA (LLC) or sign a Local Service Agent agreement if required",
            "Get extra approvals for regulated activities, such as health or transport",
          ],
          goodToKnow: [
            "Trade across the UAE and bid for government contracts",
            "MOHRE sets your visa quota based on office size and activity",
            "9% Corporate Tax on taxable profit above AED 375,000",
            "UBO register required",
            "Some strategic activities restrict ownership",
          ],
          cta: "Start My Mainland Setup",
        },
        "free-zone": {
          n: "02",
          label: "Free Zone",
          title: "Setting up in a Free Zone",
          description:
            "Licensed by the zone’s own authority, with full foreign ownership and activities limited to the zone’s permitted list.",
          facts: [
            { label: "Licensing authority", value: "The zone’s own authority (e.g. DMCC, IFZA, DIFC)" },
            { label: "Ownership", value: "100% foreign" },
            { label: "Office", value: "Flexi-desk or office inside the zone" },
          ],
          requirements: [
            "Pick a zone whose permitted activities cover your business",
            "Choose a package (flexi-desk, shared or dedicated office), which also sets your visa allocation",
            "Submit shareholder and manager documents; corporate shareholders provide attested documents",
            "Register with the zone authority to receive your licence and establishment card",
          ],
          goodToKnow: [
            "Only activities on your licence are allowed",
            "Selling into the Dubai mainland needs a distributor, a mainland setup or a Free Zone Mainland Operating Permit (DET, AED 5,000 per six months; non-regulated activities first)",
            "Qualifying Free Zone Persons pay 0% Corporate Tax on qualifying income; other income, including mainland revenue, is taxed at 9%",
            "Corporate Tax registration and UBO filings still apply",
          ],
          cta: "Find My Free Zone",
        },
        offshore: {
          n: "03",
          label: "Offshore",
          title: "Setting up an Offshore company",
          description: "For international business and holding assets, not for trading inside the UAE.",
          facts: [
            { label: "Registrar", value: "JAFZA Offshore or RAK ICC" },
            { label: "Ownership", value: "100% foreign, registered shares" },
            { label: "Office", value: "Registered agent address" },
          ],
          requirements: [
            "Apply through an approved registered agent",
            "Appoint at least one shareholder and one director",
            "Corporate shareholders provide notarised, attested documents",
            "Prepare KYC and source-of-funds documents for banking",
          ],
          goodToKnow: [
            "No UAE trading or local office",
            "No residence visas for owners or staff",
            "Suited to international trade, holding and asset protection",
            "JAFZA Offshore companies can own freehold property in designated Dubai areas",
            "Corporate Tax and UBO rules may still apply",
          ],
          cta: "Plan My Offshore Setup",
        },
      },
    },
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Business formation in UAE",
    headline: "Business Formation in UAE: Start on the Right Foundation",
    body: "From first idea to licensed company: jurisdiction, activity, trade name, MOA and everything in between. Choose company formation Dubai on the Mainland or in a Free Zone and you still get one team, one timeline and no surprises.",
    tags: [
      "Jurisdiction & structure",
      "Activity & licence type",
      "Trade name",
      "Initial approval",
      "MOA / LSA agreement",
      "Trade licence",
      "Immigration card",
      "MOHRE labour file",
    ],
    cta: "Explore Company Formation Services",
    imageCaption: "Founder and consultant reviewing company formation documents in a Dubai office",
    modal: {
      eyebrow: "Part 01 · Business Formation",
      title: "Formation services",
      description:
        "Eight steps, from choosing your structure to opening your labour file. Service names and notes follow the BuiltPulse service catalogue.",
      layout: "grid",
      items: [
        { title: "Jurisdiction & Legal Structure Advisory", desc: "Mainland, Free Zone or Offshore; LLC, Sole Establishment, Civil Company or Branch.", Icon: Compass },
        { title: "Business Activity & License Type Selection", desc: "Commercial, Professional, Industrial or Tourism.", Icon: Briefcase },
        { title: "Trade Name Reservation", desc: "Must follow DET naming rules.", Icon: Tag },
        { title: "Initial Approval", desc: "DET confirms name, legal form and activities.", Icon: Stamp },
        { title: "MOA Drafting & Notarisation / Local Service Agent Agreement", desc: "MOA drafting and notarisation, or a Local Service Agent agreement where applicable.", Icon: Pen },
        { title: "Trade License Issuance", desc: "Fees paid, registrations completed.", Icon: LicenseCard },
        { title: "Immigration Establishment Card", desc: "Opens the company immigration file; required before any visa.", Icon: IdCard },
        { title: "MOHRE Labour Establishment Card & Labour File", desc: "Separate registration from the immigration card.", Icon: Users },
      ],
    },
  },

  steps: {
    eyebrow: "How it works",
    headline: "Company Registration UAE: Step-by-Step Guide",
    body: "Not sure where to start? This is the full route from first idea to licensed company, in the order it usually happens.",
    checklist: {
      title: "Before you start, have these ready",
      items: [
        "Your business activity, described in one or two sentences",
        "Who the shareholders and managers will be",
        "Passport copies and proof of address for each shareholder [confirm list]",
        "Two or three trade name options",
        "Your office plan: physical office, flexi-desk or free zone package",
        "How many visas you expect to need in year one",
      ],
      outro: "Once you have those, the work follows seven steps.",
    },
    items: [
      { title: "Discovery call", desc: "Tell us your plans. We map your activity, goals and target market.", you: "share your idea and timeline.", we: "outline your options." },
      { title: "Structure & jurisdiction", desc: "We recommend Mainland, Free Zone or Offshore, and explain why.", you: "confirm the choice.", we: "handle the comparison and costing." },
      { title: "Trade name & initial approval", desc: "We check availability, reserve a compliant name and secure initial approval.", you: "approve your name options.", we: "submit and track." },
      { title: "Documents & MOA", desc: "We draft the MOA or Local Service Agent agreement.", you: "review and sign.", we: "prepare and file." },
      { title: "Office & Ejari", desc: "Secure a physical or flexi-desk office and register the tenancy contract.", you: "choose the office.", we: "register it." },
      { title: "Trade licence issued", desc: "Fees paid, registrations complete, your licence in hand.", you: "pay the fees.", we: "complete the registrations." },
      { title: "Establishment & visas", desc: "Immigration and labour files are opened so your team can start work.", you: "provide visa documents.", we: "process the applications." },
    ],
    imageCaption: "BuiltPulse consultant guiding a client through each setup step (process visual)",
  },

  about: {
    eyebrow: "About BuiltPulse",
    style: "statement",
    headline:
      "We launched our business formation service so that nobody has to face a maze of authorities and paperwork alone.",
    note: "We work one way: one process, one point of contact and a clear update at every stage, from your first licence to every renewal after it.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Business licensing and renewals in the UAE",
    headline: "Already licensed? Keep it that way.",
    body: "Renew on time, update your company as it grows, or close it properly when the time comes. We track the deadlines and handle the filings.",
    cta: "Explore licensing services",
    imageCaption: "Business owner reviewing a renewed trade licence with a BuiltPulse advisor",
    cards: [
      {
        title: "Company Amendments",
        desc: "Change activities, add or remove partners, transfer shares or update your address, handled end to end.",
        audience: "For growing or restructuring companies.",
        includes: "Includes filings, approvals and updated documents.",
        Icon: Pencil,
      },
      {
        title: "Licence Renewal",
        desc: "Renew every year without penalties. We track your expiry date so you don't have to.",
        audience: "For every licensed company, every year.",
        includes: "Includes reminders and the renewal filing.",
        Icon: Refresh,
      },
      {
        title: "Liquidation & cancellation",
        desc: "Close your company cleanly, with the right approvals and clearances.",
        audience: "For companies closing or exiting.",
        includes: "Includes filings and final cancellation.",
        Icon: Archive,
      },
    ],
    modal: {
      eyebrow: "Part 02 · Business Licensing",
      title: "Licensing services",
      description:
        "Renew on time, update your company as it grows, or close it properly when the time comes. We track the deadlines and handle the filings.",
      items: [
        { title: "Company Amendments", desc: "Change activities, add or remove partners, transfer shares or update your address, handled end to end.", Icon: Pencil },
        { title: "Licence Renewal", desc: "Renew every year without penalties. We track your expiry date so you don't have to.", Icon: Refresh },
        { title: "Liquidation & cancellation", desc: "Close your company cleanly, with the right approvals and clearances.", Icon: Archive },
      ],
    },
  },

  testimonials: {
    title: "Licensed, launched and still with us",
    body: "Setting up a company in the UAE is a big step. Here is how founders and teams describe working with BuiltPulse: how clear the process was, the support they had along the way and what came next once their licence was issued.",
  },

  cta: {
    title: "Not sure which company setup in Dubai fits? Let's work it out together.",
    body: "In a 20-minute call, a BuiltPulse consultant will recommend a jurisdiction, licence type and next steps, so your company formation UAE journey starts with a clear plan.",
    button: "Talk to a consultant",
  },

  faq: {
    title: "Business Formation & Licensing Frequently Asked Questions",
    intro:
      "The questions founders ask us most before they start. Your exact requirements depend on your business, so we confirm the details on a short call.",
    items: [
      {
        q: "Should I Choose Mainland, Free Zone, or Offshore Company Formation in the UAE?",
        a: "Mainland companies can access the UAE local market, subject to applicable licensing rules. Free Zones offer jurisdiction-specific benefits and often allow 100% foreign ownership. Offshore structures generally support asset holding and ownership arrangements rather than operating a local business. The right option depends on your activities, customers, and business goals.",
      },
      {
        q: "Which Business License Do I Need in Dubai?",
        a: "The business licence you need in Dubai depends on your commercial activities, services, and target customers. We identify the appropriate licence category and required approvals based on your planned operations. This helps you avoid paying for activities your business does not need.",
      },
      {
        q: "What Documents Are Required for Company Registration in the UAE?",
        a: "Company registration in the UAE typically requires passport copies, shareholder details, proof of address, and information about your planned business activities. Additional documents may be required depending on the jurisdiction, legal structure, and licensing authority.",
      },
      {
        q: "What Is a Memorandum of Association (MOA), and Is It Required for Company Formation?",
        a: "A Memorandum of Association (MOA) is a legal document that outlines a company's ownership structure and the rights and responsibilities of its shareholders. Many company formations require an MOA, depending on the legal structure and jurisdiction. We prepare the required document for your review and signature.",
      },
      {
        q: "When Is an Establishment Card Required in the UAE?",
        a: "An establishment card is generally required when a company needs to process employee visas or access relevant immigration services. The exact requirements depend on the jurisdiction and the company's activities. We coordinate the applicable establishment procedures as part of your company setup.",
      },
      {
        q: "Can You Handle Company License Renewals and Amendments After Setup?",
        a: "Yes, we handle company licence renewals and business amendments after setup. These services can include activity changes, shareholder updates, address changes, and company liquidation. We also track upcoming deadlines to help you maintain compliance.",
      },
      {
        q: "How Long Does Company Setup in Dubai Take?",
        a: "The time of company setup in Dubai can vary depending on the jurisdiction, business activity, required approvals, and document processing. Timelines may vary between Mainland and Free Zone authorities. We confirm the expected timeframe after reviewing your business requirements.",
      },
      {
        q: "How Much Does Company Formation in Dubai Cost?",
        a: "The cost of company formation in Dubai can vary depending on the jurisdiction, licence type, office requirements, and visa allocation. Your total cost also depends on applicable government fees and additional services. We provide a written quotation outlining the costs before you commit.",
      },
      {
        q: "Can I Set Up a Company in Dubai Without Being Physically Present?",
        a: "Yes, some company formation procedures can be completed remotely, depending on the jurisdiction and legal structure. Certain steps may require an in-person visit, identity verification, or additional documentation. We confirm which procedures can be handled remotely before starting your application.",
      },
      {
        q: "Can You Help Me Open a Corporate Bank Account in the UAE?",
        a: "Yes, we can assist with the corporate bank account application process. Requirements vary by bank, business activity, ownership structure, and risk assessment. The bank makes the final decision on account approval, so opening an account cannot be guaranteed.",
      },
    ],
  },
};

export default formationLicensing;
