import type { ServiceContent } from "../types";
import formationLicensing from "./formation-licensing";
import taxRegulatoryCompliance from "./tax-regulatory-compliance";

/**
 * Content for every built service page, keyed by URL slug.
 * To add a page: create `content/<slug>.tsx`, register it here and set
 * `live: true` for it in `../directory.ts`.
 */
export const services: Record<string, ServiceContent> = {
  [formationLicensing.slug]: formationLicensing,
  [taxRegulatoryCompliance.slug]: taxRegulatoryCompliance,
};
