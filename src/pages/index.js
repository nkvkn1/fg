import { Seo } from "@/Components/seo/Seo";
import { HeroSection } from "@/Components/home/HeroSection";
import { PortfolioPreview } from "@/Components/home/PortfolioPreview";
import { WhyChooseSection } from "@/Components/home/WhyChooseSection";
import { TestimonialsSection } from "@/Components/home/TestimonialsSection";
import { PricingPreview } from "@/Components/home/PricingPreview";
import { FinalCtaSection } from "@/Components/home/FinalCtaSection";
import { FaqSection } from "@/Components/shared/FaqSection";

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
