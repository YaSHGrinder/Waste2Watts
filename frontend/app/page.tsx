import { fetchSummary } from "@/lib/api";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";
import UseCases from "./components/UseCases";
import FinalCTA from "./components/FinalCTA";
import PartnerForm from "./components/PartnerForm";

export default async function Home() {
  const summary = await fetchSummary();

  return (
    <>
      <HeroSection summary={summary} />
      <StatsStrip />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <DashboardPreview />
      <UseCases />
      <FinalCTA />
      <PartnerForm />
    </>
  );
}
