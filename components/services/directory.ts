/**
 * Every planned service page, in menu order. Kept separate from the page
 * content so the nav doesn't bundle every page's copy. `live` marks the pages
 * registered in `content/index.ts`.
 */
export const serviceDirectory: { label: string; slug: string; live?: boolean }[] = [
  { label: "Business Formation & Licensing", slug: "business-formation-licensing", live: true },
  { label: "Tax & Regulatory Compliance", slug: "tax-regulatory-compliance", live: true },
  { label: "Immigration & PRO Services", slug: "immigration-pro-services", live: true },
  { label: "Banking & Finance", slug: "banking-finance", live: true },
  { label: "Office & Infrastructure", slug: "office-infrastructure", live: true },
  { label: "Digital Footprint", slug: "digital-footprint", live: true },
  { label: "Recurring & Renewals", slug: "recurring-renewals", live: true },
  { label: "Government Service Centres", slug: "government-service-centres", live: true },
  { label: "Marketing & Events", slug: "marketing-events", live: true },
  { label: "Business & Investment Consulting & Structuring", slug: "business-investment-consulting", live: true },
  { label: "HR Services", slug: "hr-services", live: true },
  { label: "Legal Services", slug: "legal-services", live: true },
  { label: "Business Liquidation", slug: "business-liquidation" },
];

export const serviceHref = (slug: string) => `/services/${slug}`;
