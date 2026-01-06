import PremiumHero from "@/components/PremiumHero";
import HeroSection from "@/components/HeroSection";
import DarkSection from "@/components/DarkSection";
import StatsSection from "@/components/StatsSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <PremiumHero />
      <HeroSection />
      <StatsSection />
      <ContactForm />
      <DarkSection />
    </main>
  );
};

export default Index;
