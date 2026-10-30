import { Building, Plug, Route, Stamp, Users, Wifi } from "../icons";
import type { ServiceContent } from "../types";

const officeInfrastructure: ServiceContent = {
  slug: "office-infrastructure",
  name: "Office & Infrastructure",
  metadata: {
    title: "Office Space, Ejari & Utilities in Dubai — BuiltPulse",
    description: "Choose between an office and a flexi desk for your activity and budget. BuiltPulse manages the Ejari registration and the utility connections that follow.",
  },

  hero: {
    eyebrow: "Services · Office & infrastructure · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block">
          <span className="font-bold text-white">Office space in</span>{" "}<span className="font-bold text-gold-500">Dubai,</span>
        </span>
        <span data-hero className="block">
          sorted before you move in.
        </span>
      </>
    ),
    body: "Your premises have to match your trade licence, and your lease has to be registered on Ejari before the paperwork moves forward. We help you choose between an office and a flexi desk for your activity and budget. We then manage the Ejari registration and the utility connections that follow.",
    primaryCta: "Find My Workspace",
    secondaryCta: "Compare Workspace Options",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "Office & infrastructure",
    title: "Find your workspace",
    body: "Tell us your company, your team size and the type of workspace you are considering. We will reply with the options that fit your licence and budget, and the Ejari and utility steps that follow.",
    submit: "Show my options",
    companyLabel: "Company or proposed trade name",
    companyPlaceholder: "Proposed trade name",
    selects: [
      { label: "Workspace type", options: ["Office", "Flexi desk", "Virtual office", "Not sure yet"] },
      { label: "Team size", options: ["1 to 5", "6 to 15", "16 or more", "Not sure yet"] },
      { label: "Preferred area", options: ["Business Bay", "Deira", "Other Dubai areas", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Serviced office options in Dubai, matched to your licence.",
    body: "The space you rent has to suit the activity on your trade licence and the rules of the area or zone where it sits. A lease also has to be registered on Ejari before several next steps can move forward. We help you compare offices and flexi desks, then manage the Ejari registration and utility connections that follow.",
    imageCaption: "BuiltPulse consultant comparing office and flexi-desk options with a founder",
    features: [
      { title: "Premises matched to licence", problem: "A space that does not suit the licence activity can hold up the trade licence.", solution: "We check your activity against the space and the zone rules before you sign anything.", Icon: Building },
      { title: "Ejari handled end to end", problem: "Tenancy paperwork with errors sends the Ejari request back for correction.", solution: "We prepare the tenancy documents, submit the Ejari registration and track each request until it is confirmed.", Icon: Stamp },
      { title: "Connections ready at move-in", problem: "DEWA, Etisalat and du connections are left until move-in day, when the team needs them.", solution: "We start utility requests as soon as the space is confirmed, so connections are ready when your team arrives.", Icon: Plug },
      { title: "Space sized to team", problem: "A long lease for a small team locks in costs before the business has traction.", solution: "We compare offices and flexi desks, so you pay for the space your team uses.", Icon: Users },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Workspace and Ejari",
    headline: "Secure the right space, then make the lease official.",
    body: "This part covers the space itself, from the first viewing to a registered tenancy. We shortlist offices and flexi desks against your activity, team and budget. Once you choose, we prepare the tenancy documents and register the lease on Ejari. Lease terms, rent and deposits are agreed between you and the landlord or operator, and we explain each clause before you sign.",
    tags: ["Office space Dubai", "Flexi desk Dubai", "Serviced office Dubai", "Ejari registration Dubai"],
    cta: "Talk to a Workspace Advisor",
    imageCaption: "Founder and BuiltPulse consultant viewing an office in Dubai",
  },

  steps: {
    eyebrow: "The workspace roadmap",
    headline: "From a shortlist to a connected office in five steps.",
    body: "Each step has a clear owner on both sides, so the lease, the registration and the utilities move in order. Your part is mostly choosing and signing, and ours is checking, preparing and tracking each request.",
    items: [
      { title: "Shortlist and site check", you: "share your activity, team size and preferred areas.", we: "compare space options against your licence and visit the shortlisted sites with you." },
      { title: "Lease terms and signing", you: "review the lease and confirm the rent, deposit and term you accept.", we: "explain each clause and check the lease against your licence activity." },
      { title: "Ejari registration", you: "provide the signed tenancy, Emirates IDs and title deed details.", we: "prepare and submit the Ejari application and track it to confirmation." },
      { title: "DEWA, Etisalat and du connections", you: "confirm the meter and account holder details for DEWA, and your Etisalat or du account.", we: "submit the requests and follow up until the connections are scheduled." },
      { title: "Move-in and access setup", you: "collect keys, access cards and any staff access requests.", we: "check the space is ready for your team and hand over a summary of what is connected." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through the workspace roadmap (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Workspace operators & partners we work with",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Utilities and day-to-day running",
    headline: "Get the connections your team needs running on day one.",
    body: "A signed lease is only useful once electricity, water, telecom lines and internet are working. We start the DEWA and telecom requests as soon as the space is confirmed, then track them to completion. We keep each account's details in one place, so your team has what it needs after move-in.",
    cta: "Plan My Connections",
    imageCaption: "Team settling into a connected office with a BuiltPulse advisor",
    cards: [
      { title: "DEWA accounts set up", desc: "Opening electricity and water accounts in the right company name from the start.", audience: "For companies moving into a new office, flexi desk or business centre.", includes: "Includes account application, required documents and scheduling follow-up with the provider.", Icon: Plug },
      { title: "Telecom and internet connected", desc: "Setting up the telecom lines and internet your team needs on day one.", audience: "For companies moving into new premises that need telecom lines and internet connection from the start.", includes: "Includes provider comparison, application submission and installation scheduling.", Icon: Wifi },
      { title: "Upgrade to an office", desc: "Moving a growing team into a dedicated office with the new lease and connections in order.", audience: "For flexi-desk businesses that are ready to move into a physical office.", includes: "Includes space comparison, a new Ejari registration and a utility transfer plan for the new address.", Icon: Route },
    ],
  },

  testimonials: {
    title: "Founders on the space, the Ejari and the first week",
    body: "Founders share how it felt to move into their first office, with the lease, Ejari and utilities already in place. Their stories show the setup from first viewing to first working day, in their own words.",
  },

  cta: {
    title: "Planning a move? Start with the space and the paperwork together.",
    body: "A short call lets us look at your activity, team size and preferred area, then suggest the workspace types that fit. You leave with a shortlist approach and a list of the documents Ejari and the utility providers will ask for. Our advisors then confirm the current requirements for the space you choose.",
    button: "Book a Workspace Consultation",
  },

  faq: {
    items: [
      {
        q: "Do I need a physical office for a trade licence in Dubai?",
        a: "Mainland licences generally need a physical office backed by a registered Ejari tenancy, though the DET Instant Licence allows a virtual business address for the first year only. Many free zones accept a flexi desk, so we check your route before you commit to a space.",
      },
      {
        q: "Which is better for a new company, a flexi desk or an office?",
        a: "A flexi desk suits small teams that want flexibility, while a private office suits teams that need dedicated space or plan to grow. We explain both options for your route before you commit.",
      },
      {
        q: "Can I rent office space in Business Bay for my company?",
        a: "Yes, Business Bay has office and flexi desk options for many activities. Whether a space there suits your licence depends on the activity, the licence type and the Ejari terms. We compare Business Bay with other Dubai areas, such as Deira, so you can weigh cost against location.",
      },
      {
        q: "Can I move from a flexi desk to a private office later?",
        a: "Yes, in most cases. Moving up changes the Ejari tenancy and can affect the address on your licence, so the new lease and registration steps are planned together. We check the timing with you, so the move does not stall your utility connections.",
      },
      {
        q: "How do I get a DEWA connection in Dubai?",
        a: "Usually once your premises are confirmed and, in most cases, after the tenancy is registered on Ejari. The DEWA account is opened in your company's name using the premises details. We submit the request, follow it to scheduling, and tell you when the connection is ready. DEWA makes the final decision on connection timing.",
      },
      {
        q: "Do I need to register my office lease on Ejari?",
        a: "Yes. Every Dubai tenancy should be registered on Ejari, the Dubai Land Department's register of leases, and it is needed for utility connections and many government steps. Tenants usually register online through the Dubai REST app with the signed contract and Emirates ID. We prepare the file and track it to completion.",
      },
      {
        q: "How long does Ejari registration take?",
        a: "Online registration can be finished within an hour once documents are ready, but the landlord's approval step can add time. Trustee centre visits take longer because of queueing and paperwork checks. We aim to prepare complete files on the first submission.",
      },
    ],
  },
};

export default officeInfrastructure;
