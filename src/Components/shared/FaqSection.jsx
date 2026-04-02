import { faqItems } from "@/data/siteContent";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function FaqSection() {
  return (
    <section className="border-t border-white/10 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="FAQ"
          title="A few quick answers that help the right clients move forward faster."
          copy="The best portrait sites remove hesitation. These are the details most people want before they reach out."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-display text-2xl text-white">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-white/68">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
