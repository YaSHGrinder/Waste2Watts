import { fetchSummary } from "@/lib/api";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import RevenueModel from "./components/RevenueModel";
import BeforeAfterCalculator from "./components/BeforeAfterCalculator";
import ImpactCalculator from "./components/ImpactCalculator";
import AboutSection from "./components/AboutSection";
import CarbonCredits from "./components/CarbonCredits";
import TractionSection from "./components/TractionSection";
import PartnerForm from "./components/PartnerForm";
import DashboardPreview from "./components/DashboardPreview";

export default async function Home() {
  const summary = await fetchSummary();

  return (
    <>
      <HeroSection summary={summary} />
      <ProblemSection />
      <HowItWorks />
      <RevenueModel />
      <BeforeAfterCalculator />
      <ImpactCalculator />
      <CarbonCredits />
      <DashboardPreview />
      <TractionSection />
      <AboutSection />
      <PartnerForm />
    </>
  );
}