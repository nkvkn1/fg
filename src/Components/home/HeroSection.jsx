import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { serviceCategories } from "@/data/siteContent";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(203,169,107,0.08),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-sand backdrop-blur">
            Premium men&apos;s portrait photography
          </div>
          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl font-display text-5xl leading-none text-white xs:text-6xl lg:text-7xl"
            >
              Men&apos;s portraits that look refined, masculine, and unmistakably premium.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="max-w-2xl text-lg leading-8 text-white/70"
            >
              Built for branding, matrimony, and lifestyle sessions with clean
              direction, moody styling, and portraits that elevate how you are
              seen online and in person.
            </motion.p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Inquire Now</Button>
            <Button href="/about" variant="secondary">
              About Fotogracia
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {serviceCategories.map((service) => (
              <div
                key={service.slug}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-sand">
                  {service.navLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  Starting at {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-[#0f0f0f] shadow-glow">
            <Image
              src="https://fotogracia.com/wp-content/uploads/2026/03/Sanket-Portrait-1-of-7-scaled.jpg"
              alt="Hero portrait for Fotogracia"
              width={1024}
              height={1536}
              priority
              className="h-[480px] w-full object-cover sm:h-[620px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-3 p-5">
              <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur">
                5-day turnaround
              </div>
              <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur">
                20% off current offer
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
