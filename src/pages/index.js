import { Seo } from "@/components/seo/Seo";
import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingPreview } from "@/components/home/PricingPreview";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FaqSection } from "@/components/shared/FaqSection";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Premium Photography"
        description="Fotogracia creates premium men's portraits, couples shoots, and real estate photography with an easy booking flow and a luxury-modern aesthetic."
        path="/"
      />
      <HeroSection />
      <PortfolioPreview />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingPreview />
      <InstagramStrip />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
