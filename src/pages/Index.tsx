import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyArupa from "@/components/WhyArupa";
import Features from "@/components/Features";
import SupportedPlatforms from "@/components/SupportedPlatforms";
import Security from "@/components/Security";
import DisasterRecovery from "@/components/DisasterRecovery";
import Pricing from "@/components/Pricing";
import Trial from "@/components/Trial";
import Support from "@/components/Support";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <WhyArupa />
      <Features />
      <SupportedPlatforms />
      <Security />
      <DisasterRecovery />
      <Pricing />
      <Trial />
      <Support />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
