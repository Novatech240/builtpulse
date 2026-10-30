import type { ServiceContent } from "../types";
import formationLicensing from "./formation-licensing";
import taxRegulatoryCompliance from "./tax-regulatory-compliance";
import bankingFinance from "./banking-finance";
import immigrationProServices from "./immigration-pro-services";
import officeInfrastructure from "./office-infrastructure";
import digitalFootprint from "./digital-footprint";
import recurringRenewals from "./recurring-renewals";
import governmentServiceCentres from "./government-service-centres";
import marketingEvents from "./marketing-events";
import businessInvestmentConsulting from "./business-investment-consulting";
import hrServices from "./hr-services";
import legalServices from "./legal-services";

/**
 * Content for every built service page, keyed by URL slug.
 * To add a page: create `content/<slug>.tsx`, register it here and add it to
 * `../directory.ts`.
 */
export const services: Record<string, ServiceContent> = {
  [formationLicensing.slug]: formationLicensing,
  [taxRegulatoryCompliance.slug]: taxRegulatoryCompliance,
  [bankingFinance.slug]: bankingFinance,
  [immigrationProServices.slug]: immigrationProServices,
  [officeInfrastructure.slug]: officeInfrastructure,
  [digitalFootprint.slug]: digitalFootprint,
  [recurringRenewals.slug]: recurringRenewals,
  [governmentServiceCentres.slug]: governmentServiceCentres,
  [marketingEvents.slug]: marketingEvents,
  [businessInvestmentConsulting.slug]: businessInvestmentConsulting,
  [hrServices.slug]: hrServices,
  [legalServices.slug]: legalServices,
};
