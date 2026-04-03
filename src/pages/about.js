import { Seo } from "@/Components/seo/Seo";
import { AboutStory } from "@/Components/about/AboutStory";
import { TestimonialsSection } from "@/Components/home/TestimonialsSection";

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
