import { trustPoints } from "@/data/siteContent";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function WhyChooseSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Why Fotogracia"
          title="A premium process that still feels easy, clear, and natural."
          copy="The goal is not just strong photographs. It is a smoother experience for men who want expert direction without a stiff or overcomplicated shoot."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trustPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <div className="rounded-[1.8rem] border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-sand">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl text-white">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  {point.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
