import { Seo } from "@/Components/seo/Seo";
import { PortfolioGallery } from "@/Components/portfolio/PortfolioGallery";
import { SectionIntro } from "@/Components/ui/SectionIntro";
import { FinalCtaSection } from "@/Components/home/FinalCtaSection";

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Browse Fotogracia men's portrait work across lifestyle, matrimony, and branding sessions."
        path="/portfolio"
      />
      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionIntro
            eyebrow="Portfolio"
            title="A focused gallery of portrait work across each session type."
            copy="Filter the work by session type to see the mood, styling, and finishing direction for each kind of portrait experience."
          />
          <PortfolioGallery />
        </div>
      </section>
      <FinalCtaSection />
    </>
  );
}
