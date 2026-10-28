/**
 * Every planned service page, in menu order. Kept separate from the page
 * content so the nav doesn't bundle every page's copy. `live` marks the pages
 * registered in `content/index.ts`.
 */
export const serviceDirectory: { label: string; slug: string; live?: boolean }[] = [
  { label: "Business Formation & Licensing", slug: "business-formation-licensing", live: true },
  { label: "Tax & Regulatory Compliance", slug: "tax-regulatory-compliance", live: true },
  { label: "Immigration & PRO Services", slug: "immigration-pro-services" },
  { label: "Banking & Finance", slug: "banking-finance" },
  { label: "Office & Infrastructure", slug: "office-infrastructure" },
  { label: "Digital Footprint", slug: "digital-footprint" },
  { label: "Recurring & Renewals", slug: "recurring-renewals" },
  { label: "Government Service Centres", slug: "government-service-centres" },
  { label: "Marketing & Events", slug: "marketing-events" },
  { label: "Business & Investment Consulting & Structuring", slug: "business-investment-consulting" },
  { label: "HR Services", slug: "hr-services" },
  { label: "Legal Services", slug: "legal-services" },
  { label: "Business Liquidation", slug: "business-liquidation" },
];

export const serviceHref = (slug: string) => `/services/${slug}`;
