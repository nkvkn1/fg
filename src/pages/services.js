import { Seo } from "@/components/seo/Seo";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";
import { FaqSection } from "@/components/shared/FaqSection";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore Fotogracia's services for men's portraits, couples shoots, and real estate photography with clear pricing and booking CTAs."
        path="/services"
      />
      <ServicesShowcase />
      <FaqSection />
    </>
  );
}
