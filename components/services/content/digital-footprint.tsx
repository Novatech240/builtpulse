import { Chat, Globe, Mail, MapPin, Share } from "../icons";
import type { ServiceContent } from "../types";

const digitalFootprint: ServiceContent = {
  slug: "digital-footprint",
  name: "Digital Footprint",
  metadata: {
    title: "Digital Footprint Setup in Dubai — BuiltPulse",
    description: "A professional domain and business email, a website or landing page and a Google Business Profile, set up by BuiltPulse so customers can find you.",
  },

  hero: {
    eyebrow: "Services · Digital footprint · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block">
          <span className="font-bold text-white">Visible, credible and</span>{" "}<span className="font-bold text-gold-500">reachable</span>
        </span>
        <span data-hero className="block">
          from day one.
        </span>
      </>
    ),
    body: "A professional domain and business email, a website or landing page that explains what you do, and a Google Business Profile customers can find. We also set up the social and WhatsApp channels your customers use first, so every enquiry reaches the right inbox.",
    primaryCta: "Get My Digital Setup",
    secondaryCta: "See What Is Included",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "Digital footprint",
    title: "Tell us which online channels you need.",
    body: "Share your company details and the channels you want to set up first. We reply with a plan that fits your trade name and stage.",
    submit: "Get my digital plan",
    companyLabel: "Company or proposed trade name",
    companyPlaceholder: "Proposed trade name",
    selects: [
      { label: "Channels needed", options: ["Domain and email", "Website or landing page", "Google Business Profile", "Social media", "WhatsApp Business", "Not sure yet"] },
      { label: "Stage", options: ["Newly licensed", "Entering a new market", "Upgrading an existing presence", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "A digital footprint that gets your business found.",
    body: "Customers, banks and suppliers check your online presence before they trust a new company. A professional domain, a clear website and a verified Google listing signal that you are established. We set up these foundations in the right order, so each channel supports the others.",
    imageCaption: "BuiltPulse consultant reviewing a new company’s website and domain",
    features: [
      { title: "Professional domain and email", problem: "A free email address makes a new company look temporary to banks, suppliers and customers.", solution: "We register your domain and set up business email under your company name, with the addresses your team needs.", Icon: Mail },
      { title: "Website that explains you", problem: "Visitors who cannot tell what you do within seconds leave for a competitor.", solution: "We build a website or landing page around your services, with clear contact routes and an enquiry form.", Icon: Globe },
      { title: "Google listing customers find", problem: "A missing or unverified Google Business Profile hides your company from people searching nearby.", solution: "We create and submit your profile, then guide you through Google's verification step, which Google decides.", Icon: MapPin },
      { title: "Channels your customers use", problem: "Enquiries on WhatsApp and social media are missed when nobody owns those channels.", solution: "We set up social media profiles and WhatsApp Business, with the contact details and hours customers expect.", Icon: Chat },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Domain, email and website",
    headline: "Build the core channels before customers arrive.",
    body: "This part covers the assets that identify your company online: the domain, the business email addresses and a website or landing page. We check your trade name and business details first, so the domain, email and site all match your licence. Each step is then set up in the right order, so you can share a professional address on day one.",
    tags: ["Domain and business email", "Website design Dubai", "Business email setup Dubai", "Landing pages"],
    cta: "Talk to a Digital Advisor",
    imageCaption: "Founder and BuiltPulse consultant planning a website and business email",
  },

  steps: {
    eyebrow: "The digital setup roadmap",
    headline: "Five channels, built in the order customers find you.",
    body: "The domain and email come first, because the website, listing and social profiles all reference them. Google's verification and WhatsApp account checks can run on their own timelines, so we start those early.",
    items: [
      { title: "Name and details check", you: "confirm your trade name, business address and contact details.", we: "check the details that match your licence and set the naming for every channel." },
      { title: "Domain and business email", you: "choose the domain and the email addresses your team needs.", we: "register the domain and set up business email under your company name." },
      { title: "Website or landing page", you: "provide your services, photos and approved wording.", we: "build the page, add the contact routes and check it on mobile." },
      { title: "Google Business Profile", you: "complete the verification step Google requests, such as a video or code.", we: "create and submit the profile, then follow up on the verification." },
      { title: "Social media and WhatsApp Business", you: "approve the profile images and the business hours to publish.", we: "set up the social profiles and WhatsApp Business, and link them to your website." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through the digital setup roadmap (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Companies we have helped get online in Dubai",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Listings, social and messaging",
    headline: "Keep every channel consistent, credible and reachable.",
    body: "Customers search on Google, follow your social profiles and message you on WhatsApp, often before they visit your website. The name, address and hours must match across all of them, or enquiries are lost and trust drops. We set up these listings and profiles together, then check each one against your approved company details. Platforms decide their own verification and listing rules, so we confirm each requirement as we go.",
    cta: "Plan My Local Listings",
    imageCaption: "Business owner checking their Google listing and WhatsApp profile with a BuiltPulse advisor",
    cards: [
      { title: "Google listing that gets found", desc: "A Google Business Profile shows your company in local search and on Maps.", audience: "For businesses that want customers to find them nearby.", includes: "Includes profile setup, categories, photos and verification support.", Icon: MapPin },
      { title: "Social profiles set up correctly", desc: "Consistent social profiles that point customers to your website and contact details.", audience: "For founders who want a visible presence on social platforms from launch.", includes: "Includes profile setup, cover and profile images, and bio and link configuration.", Icon: Share },
      { title: "WhatsApp Business for enquiries", desc: "A WhatsApp Business profile with your hours, address and contact details.", audience: "For companies whose customers ask questions on WhatsApp.", includes: "Includes profile setup, business details, greeting and away messages.", Icon: Chat },
    ],
  },

  testimonials: {
    title: "What founders said after going live",
    body: "Founders share how their company looked online on launch day, and how consistent listings changed the enquiries they received. Their stories cover the domain, website and Google listing setup, in their own words.",
  },

  cta: {
    title: "Not sure where your online presence stands? Start with a short review.",
    body: "A short call looks at your domain, website, listings and messaging accounts, and notes what is missing or inconsistent. You leave with a clear list of the channels to set up first and the details we need from you. Our team then confirms the current requirements for each platform before we build anything.",
    button: "Book a Digital Review",
  },

  faq: {
    items: [
      {
        q: "Do I need a trade licence to register a .ae domain?",
        a: "Not for a plain .ae domain, which is open to anyone through an accredited registrar. A .co.ae domain is restricted, and it requires a UAE trade licence or a registered UAE trademark. Your company name and licence decide which option fits, so we check eligibility before you pay.",
      },
      {
        q: "What do I need to set up a business email?",
        a: "Business email runs on a domain you own, so the domain comes first. You then need one email account for each team member, set up under your company name. We set up the accounts and show your team how to sign in and manage them.",
      },
      {
        q: "Can you verify my Google Business Profile for me?",
        a: "We set up and submit your profile, but Google decides how it is verified. Video verification is now common, while postcards are less frequent. We confirm which method Google offers for your category and address before you start.",
      },
      {
        q: "Do I need a WhatsApp Business account for my company?",
        a: "It is not required, but a WhatsApp Business profile lets customers see your hours, address and contact details. We set it up with your approved company information. WhatsApp decides which account type your business qualifies for.",
      },
      {
        q: "Which social media platforms should my business use?",
        a: "Start with the platforms your customers already use, which is often a mix of LinkedIn, Instagram or Facebook. We set up profiles on the channels you choose and keep them consistent with your website and Google listing.",
      },
      {
        q: "Do I need a website before I can get a trade licence?",
        a: "A website is not usually a licence requirement, but a domain and business email make a new company look established to banks and suppliers. We advise on the order of steps, so the digital setup does not delay your licence or bank file.",
      },
      {
        q: "Who owns the domain and social accounts?",
        a: "You do. We register domains, email and profiles in your company's name, with you as the account owner. We hand over a record of each account and its access rights, so you stay in control.",
      },
    ],
  },
};

export default digitalFootprint;
