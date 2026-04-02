import { Seo } from "@/components/seo/Seo";
import { AboutStory } from "@/components/about/AboutStory";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Meet Fotogracia and learn about the premium, portrait-first approach behind its branding, matrimony, and lifestyle sessions for men."
        path="/about"
      />
      <AboutStory />
      <TestimonialsSection />
    </>
  );
}
