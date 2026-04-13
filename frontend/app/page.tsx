import { fetchSummary } from "@/lib/api";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import RevenueModel from "./components/RevenueModel";
import BeforeAfterCalculator from "./components/BeforeAfterCalculator";
// REMOVED: import ImpactCalculator from "./components/ImpactCalculator";
import AboutSection from "./components/AboutSection";
// REMOVED: import CarbonCredits from "./components/CarbonCredits";
// REMOVED: import TractionSection from "./components/TractionSection";
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
{/* REMOVED: ImpactCalculator - <ImpactCalculator /> */}
{/* REMOVED: CarbonCredits - <CarbonCredits /> */}
      <DashboardPreview />
{/* REMOVED: TractionSection - <TractionSection /> */}
      <AboutSection />
      <PartnerForm />
    </>
  );
}