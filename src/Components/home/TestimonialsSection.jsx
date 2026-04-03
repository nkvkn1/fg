import { proofStats, testimonials } from "@/data/siteContent";
import { Reveal } from "@/Components/ui/Reveal";
import { SectionIntro } from "@/Components/ui/SectionIntro";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Social Proof"
          title="Trusted by men who wanted stronger first impressions without looking overdone."
          copy="The sessions are designed to feel calm and directed, and the finished work is built to look sharp across personal, professional, and matrimonial use."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {proofStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.7rem] border border-white/10 bg-black/25 p-5"
            >
              <p className="font-display text-4xl text-white">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

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
