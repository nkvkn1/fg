import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function AboutStory() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-sand">
            About Fotogracia
          </p>
          <h1 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Friendly direction, premium results, and a style rooted in trust.
          </h1>
          <p className="text-base leading-8 text-white/70">
            Fotogracia was built for people who want images that feel elevated
            without becoming overly polished or impersonal. The goal is to make
            clients feel comfortable fast, then create work that makes them feel
            proud to be seen.
          </p>
          <p className="text-base leading-8 text-white/70">
            That means helping men show up with confidence, giving couples a
            space to connect naturally, and delivering real estate visuals that
            communicate value clearly from the first click.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/book-now">Book Your Shoot</Button>
            <Button href="/contact" variant="secondary">
              Start A Conversation
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10">
          <Image
            src="/images/AboutUsMainImage.jpeg"
            alt="Behind the scenes placeholder for Fotogracia"
            width={1000}
            height={1200}
            className="h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="max-w-sm rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.32em] text-sand">
                Behind the scenes
              </p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Swap this image with a real BTS portrait or working scene to make
                the personal brand side even stronger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
