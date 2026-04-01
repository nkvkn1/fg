import { Seo } from "@/components/seo/Seo";
import { AboutStory } from "@/components/about/AboutStory";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Meet Fotogracia and learn about the personal, premium approach behind its portrait, couples, and real estate photography."
        path="/about"
      />
      <AboutStory />
      <TestimonialsSection />
    </>
  );
}
