import { fetchSummary } from "@/lib/api";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import AboutSection from "./components/AboutSection";
import ImpactCalculator from "./components/ImpactCalculator";
import CarbonCredits from "./components/CarbonCredits";
import PartnerForm from "./components/PartnerForm";
import DashboardPreview from "./components/DashboardPreview";

export default async function Home() {
  const summary = await fetchSummary();

  return (
    <>
      <HeroSection summary={summary} />
      <DashboardPreview />
      <HowItWorks />
      <ImpactCalculator />
      <CarbonCredits />
      <AboutSection />
      <PartnerForm />
    </>
  );
}