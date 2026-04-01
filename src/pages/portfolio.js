import { Seo } from "@/components/seo/Seo";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse Fotogracia's men's portraits, couples photography, and real estate gallery with a filterable lightbox portfolio."
        path="/portfolio"
      />
      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Portfolio"
            title="A filterable gallery built to prove range while staying curated and premium."
            copy="Explore the three core categories below and open any image in a clean lightbox view."
          />
          <PortfolioGallery />
        </div>
      </section>
      <FinalCtaSection />
    </>
  );
}
