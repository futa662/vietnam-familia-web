import Navigation from "@/components/ui/Navigation";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import MarketGrowth from "@/components/sections/MarketGrowth";
import WhyNow from "@/components/sections/WhyNow";
import CbreZebhub from "@/components/sections/CbreZebhub";
import RevenueModel from "@/components/sections/RevenueModel";
import Investment from "@/components/sections/Investment";
import RiskAnalysis from "@/components/sections/RiskAnalysis";
import Roadmap from "@/components/sections/Roadmap";
import Conclusion from "@/components/sections/Conclusion";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen lg:pl-56 pb-20 lg:pb-0">
        <ExecutiveSummary />
        <MarketGrowth />
        <WhyNow />
        <CbreZebhub />
        <RevenueModel />
        <Investment />
        <RiskAnalysis />
        <Roadmap />
        <Conclusion />
      </main>
    </>
  );
}