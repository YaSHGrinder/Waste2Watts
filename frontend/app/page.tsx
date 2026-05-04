import { fetchSummary } from "@/lib/api";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import BeforeAfterCalculator from "./components/BeforeAfterCalculator";
import AboutSection from "./components/AboutSection";
import PartnerForm from "./components/PartnerForm";
import DashboardPreview from "./components/DashboardPreview";

export default async function Home() {
  const summary = await fetchSummary();

  return (
    <>
      <HeroSection summary={summary} />
      <ProblemSection />
      <HowItWorks />
      <BeforeAfterCalculator />
      <DashboardPreview />
      <AboutSection />
      <PartnerForm />
    </>
  );
}
