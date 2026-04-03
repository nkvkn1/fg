import Image from "next/image";
import { serviceCategories } from "@/data/siteContent";
import { Button } from "@/Components/ui/Button";
import { Reveal } from "@/Components/ui/Reveal";
import { SectionIntro } from "@/Components/ui/SectionIntro";

export function PortfolioPreview() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Portrait Sessions"
          title="Choose the portrait session that fits where you are right now."
          copy="Each session carries the same polished Fotogracia finish, with the focus shaped around business presence, everyday confidence, or matrimony portraits that feel composed and sincere."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur">
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

                <div className="flex flex-1 flex-col space-y-5 p-6">
                  <p className="text-sm leading-7 text-white/72">
                    {service.description}
                  </p>
                  <p className="rounded-[1.2rem] border border-white/10 bg-black/25 px-4 py-3 text-sm leading-7 text-white/68">
                    {service.deliverables}
                  </p>
                  <div className="mt-auto space-y-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                      Starting at {service.price}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button href={`/portfolio?category=${service.slug}`} variant="secondary">
                        Portfolio
                      </Button>
                      <Button href="/contact" className="sm:flex-1">
                        Inquire
                      </Button>
                    </div>
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
