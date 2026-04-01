import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { Reveal } from "@/components/ui/Reveal";
import { serviceCategories } from "@/data/siteContent";

export function ServicesShowcase() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Services"
          title="Three offers, each designed to remove hesitation and make the next step obvious."
          copy="Each service page block includes positioning, ideal-fit copy, clear starting pricing, imagery, and a direct booking action."
        />

        <div className="space-y-8">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <article className="grid gap-6 overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.shortLabel}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-7 sm:p-9">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs uppercase tracking-[0.35em] text-sand">
                        {service.shortLabel}
                      </p>
                      <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gold">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl text-white">
                      {service.headline}
                    </h3>
                    <p className="text-base leading-8 text-white/70">
                      {service.description}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-sand">
                          Who it&apos;s for
                        </p>
                        <p className="mt-3 text-sm leading-7 text-white/68">
                          {service.audience}
                        </p>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-sand">
                          Starting price
                        </p>
                        <p className="mt-3 font-display text-3xl text-white">
                          {service.price}
                        </p>
                        <p className="mt-2 text-sm text-white/60">
                          {service.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href={`/book-now?type=${service.slug}`}>
                      {service.cta}
                    </Button>
                    <Button href={`/portfolio?category=${service.slug}`} variant="secondary">
                      View Sample Images
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
