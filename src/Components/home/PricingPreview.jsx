import { serviceCategories } from "@/data/siteContent";
import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function PricingPreview() {
  return (
    <section id="pricing" className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[#111111] p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Pricing"
            title="Clear session pricing with polished deliverables and no cap on your final keepers."
            copy="Each session includes thoughtful planning, strong direction, and a fully edited gallery delivered with the same clean premium finish."
          />

          <div className="grid gap-4">
            {serviceCategories.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-sand">
                    {service.shortLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {service.deliverables}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                  <p className="font-display text-3xl text-white">{service.price}</p>
                  <Button href="/contact" variant="secondary" className="px-4 py-2.5 text-xs">
                    Inquire
                  </Button>
                </div>
              </div>
            ))}

            <div className="rounded-[1.8rem] border border-gold/25 bg-gold/10 p-5 text-sm leading-7 text-white/78">
              Standard delivery is 5 days. Rush delivery is available for an
              added $85 in 2 days or $125 in 1 day when timing matters.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
