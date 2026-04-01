import { testimonials } from "@/data/siteContent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Social Proof"
          title="Trusted by clients who wanted confidence, chemistry, or stronger listings."
          copy="These are placeholders for now, but the structure is ready for real testimonials, logos, or star-rating snippets as soon as you have them."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <blockquote className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <p className="text-lg leading-8 text-white/82">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sand">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-white/55">{item.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
