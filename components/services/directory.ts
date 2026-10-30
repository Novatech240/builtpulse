/**
 * Every service page, in menu order. Kept separate from the page content so the
 * nav doesn't bundle every page's copy. Each slug is registered in `content/index.ts`.
 */
export const serviceDirectory: { label: string; slug: string }[] = [
  { label: "Business Formation & Licensing", slug: "business-formation-licensing" },
  { label: "Tax & Regulatory Compliance", slug: "tax-regulatory-compliance" },
  { label: "Business & Investment Consulting & Structuring", slug: "business-investment-consulting" },
  { label: "Marketing & Events", slug: "marketing-events" },
  { label: "Immigration & PRO Services", slug: "immigration-pro-services" },
  { label: "Banking & Finance", slug: "banking-finance" },
  { label: "Office & Infrastructure", slug: "office-infrastructure" },
  { label: "Digital Footprint", slug: "digital-footprint" },
  { label: "Recurring & Renewals", slug: "recurring-renewals" },
  { label: "Government Service Centres", slug: "government-service-centres" },
  { label: "HR Services", slug: "hr-services" },
  { label: "Legal Services", slug: "legal-services" },
];

export const serviceHref = (slug: string) => `/services/${slug}`;
