import { Seo } from "@/components/seo/Seo";
import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { FaqSection } from "@/components/shared/FaqSection";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Premium Men&apos;s Portraits"
        description="Fotogracia creates premium men's portraits for branding, matrimony, and lifestyle sessions with a clean, moody, and polished visual style."
        path="/"
      />
      <HeroSection />
      <PortfolioPreview />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingPreview />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
