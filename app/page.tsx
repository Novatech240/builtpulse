import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import Lifecycle from "@/components/Lifecycle";
import LogoStrip from "@/components/LogoStrip";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import SeniorCTA from "@/components/SeniorCTA";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";
import PageMotion from "@/components/motion/PageMotion";

export default function Home() {
  return (
    <main className="relative">
      <PageMotion>
        <Hero />
        <TrustMetrics />
        <Lifecycle />
        <LogoStrip />
        <Services />
        <Achievements />
        <Testimonials />
        <SeniorCTA />
        <FAQ />
        <Insights />
        <Footer />
      </PageMotion>
    </main>
  );
}
