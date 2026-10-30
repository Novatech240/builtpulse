import { Building, Chat, Megaphone, Pen, Search, Sparkle } from "../icons";
import type { ServiceContent } from "../types";

const marketingEvents: ServiceContent = {
  slug: "marketing-events",
  name: "Marketing & Events",
  metadata: {
    title: "Marketing & Events in Dubai — BuiltPulse",
    description: "Brand identity, paid advertising, SEO, exhibition stands and PR, planned by BuiltPulse so each channel supports the next.",
  },

  hero: {
    eyebrow: "Services · Marketing & events · Dubai, UAE",
    titleSize: "md",
    title: (
      <>
        <span data-hero className="block">
          <span className="font-bold text-white">Visibility that brings in</span>{" "}<span className="font-bold text-gold-500">enquiries,</span>
        </span>
        <span data-hero className="block">
          online and on the floor.
        </span>
      </>
    ),
    body: "Brand identity, paid advertising, SEO, plus exhibition stands and PR, all work toward the same target. We plan the sequence with you, so each channel supports the next. You set the budget and the goals, and we run the work and report what it produces.",
    primaryCta: "Book a Marketing Review",
    secondaryCta: "See Our Channels",
    secondaryHref: "#overview",
  },

  form: {
    eyebrow: "Marketing & events",
    title: "Tell us what you want to launch or promote.",
    body: "Share your company, your goal and the channels you are considering, such as social media, search or an exhibition. We reply with a plan and the first steps.",
    submit: "Get my marketing plan",
    companyLabel: "Company or brand name",
    companyPlaceholder: "Brand name",
    selects: [
      { label: "Main goal", options: ["Brand awareness", "Leads and enquiries", "Event or exhibition", "Launch", "Not sure yet"] },
      { label: "Channels of interest", options: ["Brand identity", "Website", "Social media", "Paid ads", "SEO", "Events and stands", "PR", "Not sure yet"] },
    ],
  },

  overview: {
    headline: "Marketing that connects search, social and the exhibition floor.",
    body: "A brand is seen in many places before a customer contacts you, and each place needs to look and say the same thing. Visibility without a plan spends the budget without bringing in enquiries. We set the brand, the channels and the targets together, then run each channel against its goal.",
    imageCaption: "BuiltPulse consultant reviewing a brand and campaign plan",
    features: [
      { title: "Brand that looks consistent", problem: "Mismatched logos, colours and messages across platforms make a new brand look unfinished.", solution: "We build the brand identity and collateral once, then apply it across web, social and print.", Icon: Sparkle },
      { title: "Visibility when customers search", problem: "A brand missing from search results and maps loses enquiries to competitors who appear there.", solution: "We combine SEO, local search and paid ads, with a measured target for each channel.", Icon: Search },
      { title: "Campaigns that reach customers", problem: "Scattered emails and WhatsApp messages get ignored, or they reach people who never opted in.", solution: "We plan campaigns for opted-in contacts, with a clear call to action in each message.", Icon: Chat },
      { title: "Stands and events that convert", problem: "An exhibition stand built late or without a plan wastes most of the event budget.", solution: "We design, build and staff the stand around one measurable goal, such as leads captured per day.", Icon: Building },
    ],
  },

  partOne: {
    eyebrow: "Part 01 of 02 · Brand, digital and search",
    headline: "Brand, website and search built as one system.",
    body: "This part covers how your brand is seen online. We start with the brand identity and then build or refresh the website and landing pages, so the messages match from the first click. Social media content, paid advertising and SEO are planned against the same audience and goals.",
    tags: ["Brand identity", "Website design Dubai", "Social media agency UAE", "SEO services Dubai", "Paid advertising"],
    cta: "Plan My Brand Build",
    imageCaption: "Founder and BuiltPulse consultant planning a brand and website build",
  },

  steps: {
    eyebrow: "The campaign roadmap",
    headline: "Five stages from brief to a measured launch.",
    body: "Each stage builds on the one before, so the brand is set before the channels are switched on. The first two weeks are mostly decisions, while the later stages are production and testing.",
    items: [
      { title: "Brief and goals", you: "share the goal, budget, target customers and any launch or event date.", we: "agree on measurable targets and the channel mix that serves them." },
      { title: "Brand and collateral", you: "approve the logo direction, colours and key messages.", we: "produce the brand identity and the core collateral." },
      { title: "Website and content", you: "provide approved wording, photos and product details.", we: "build the pages, produce the content and set up tracking." },
      { title: "Channels and stands", you: "confirm the event dates, stand location and campaign approvals.", we: "launch the paid, social, search and email activity, and design the stand." },
      { title: "Launch and reporting", you: "review the first results and agree to any changes.", we: "report against the agreed targets and adjust the spend each month." },
    ],
    imageCaption: "BuiltPulse consultant walking a client through the campaign roadmap (process visual)",
  },

  about: {
    eyebrow: "Trusted network",
    headline: "Brands we have launched and promoted in Dubai",
    note: "Fictional demo wordmarks — not real clients. Replace with approved logos.",
  },

  partTwo: {
    eyebrow: "Part 02 of 02 · Content, events and media",
    headline: "Campaigns, stands and press that bring people to you.",
    body: "Once the brand and channels are ready, the work shifts to filling them with content, meeting people in person and earning coverage. Email and WhatsApp campaigns reach contacts who have opted in, while exhibitions and launches create the conversations those campaigns follow up on. We plan these together, so each event and message points to the same goal.",
    cta: "Plan My Launch",
    imageCaption: "Exhibition stand team meeting visitors at a Dubai trade show",
    cards: [
      { title: "Content that keeps attention", desc: "Content produced for each channel, from short videos to articles and posts.", audience: "For brands that need a steady flow of material for social media and the website.", includes: "Includes content plan, copywriting, design and a publishing schedule.", Icon: Pen },
      { title: "Exhibition stands built to convert", desc: "Stand design, build and on-site staffing for trade shows and launches.", audience: "For companies exhibiting at or hosting an event in Dubai.", includes: "Includes stand concept, build management, event coordination and lead capture set-up.", Icon: Building },
      { title: "Press and media coverage", desc: "Press releases and media outreach that help a launch reach the right journalists.", audience: "For companies with news to share, such as a launch, expansion or award.", includes: "Includes press release drafting, media list building and follow-up with editors.", Icon: Megaphone },
    ],
  },

  testimonials: {
    title: "What clients said after their first campaign",
    body: "Clients describe the brand, campaign or stand project that changed how their company was seen. Their stories cover the launch, the results they measured and the team's day-to-day support, in their own words.",
  },

  cta: {
    title: "Planning a launch or an exhibition? Start with the goal.",
    body: "A short call looks at your brand, your next launch or event, and the channels that suit your budget. You leave with a suggested channel mix, a rough order of steps and the questions we need answered. Our team then confirms the timing and costs for each part before any work starts.",
    button: "Book a Marketing Review",
  },

  faq: {
    items: [
      {
        q: "Do I need a permit to advertise on social media in the UAE?",
        a: "Individuals who publish paid or sponsored promotional content need an Advertiser Permit, which has applied from 1 February 2026. Brands running their own ads follow the platform and advertising rules instead. We confirm which permit applies before any creator posts for your brand.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Search results usually improve over several months, depending on competition, the current state of your website and the content added. We set monthly checkpoints and report changes in visibility.",
      },
      {
        q: "Do you run paid advertising campaigns?",
        a: "Yes, we plan and manage paid campaigns on the platforms you choose, within a budget you approve. Ad spend is paid to the platform, and results depend on targeting, competition and your offer. We report spend and results each month.",
      },
      {
        q: "How much does an exhibition stand cost in Dubai?",
        a: "Stand cost depends on size, design, materials, location and the organiser's rules. Each exhibition also sets its own stand build requirements. We give a written quote once the stand size and event dates are confirmed.",
      },
      {
        q: "Do I need approval to hold an event in Dubai?",
        a: "Events usually need approval from the venue and the relevant authority, and the requirements depend on the venue and the type of event. We check these with you before booking. Each authority makes its own decision on the event.",
      },
      {
        q: "Can you send WhatsApp campaigns legally?",
        a: "We send WhatsApp campaigns only to contacts who have opted in, and we follow the platform's business messaging rules. Every message includes a clear way to opt out. We check where your contact list came from before the first message goes out.",
      },
      {
        q: "Do you handle press coverage for my launch?",
        a: "Yes, we write the press release and contact relevant media, but publication is the editor's decision. We agree the story angle and timing with you, and we report which outlets picked it up, if any.",
      },
      {
        q: "Do I need a website before I run ads?",
        a: "Not always, but ads perform better when they send people to a clear landing page with a contact route. A campaign landing page is often faster to build than a full website. We advise on the option that fits your budget and timing.",
      },
      {
        q: "Who owns the creative and the accounts?",
        a: "You do. Accounts, profiles and files are set up in your company's name, and you keep access to them. We agree on the usage terms for creative before production starts.",
      },
    ],
  },
};

export default marketingEvents;
