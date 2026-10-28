import type { Metadata } from "next";
import FormationLicensingPage from "@/components/services/FormationLicensingPage";

export const metadata: Metadata = {
  title: "Business Formation & Licensing in Dubai — BuiltPulse",
  description:
    "Company formation, licensing, government approvals and establishment requirements in Dubai — through a clear, structured process with BuiltPulse.",
};

export default function Page() {
  return <FormationLicensingPage />;
}
