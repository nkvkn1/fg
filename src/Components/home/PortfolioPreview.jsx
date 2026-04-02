import Image from "next/image";
import { serviceCategories } from "@/data/siteContent";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function PortfolioPreview() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Session Types"
          title="Choose the portrait session that fits where you are right now."
          copy="Each session is unmistakably premium, but the focus shifts depending on whether you need business polish, everyday confidence, or profile-ready matrimony portraits."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.shortLabel}
                    width={900}
                    height={1100}
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-sand">
                      {service.badge}
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-white">
                      {service.shortLabel}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-white/72">
                    {service.description}
                  </p>
                  <p className="rounded-[1.2rem] border border-white/10 bg-black/25 px-4 py-3 text-sm leading-7 text-white/68">
                    {service.deliverables}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                      Starting at {service.price}
                    </p>
                    <Button href="/contact" variant="secondary">
                      Inquire
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
