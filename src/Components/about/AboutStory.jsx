import Image from "next/image";
import { Button } from "@/Components/ui/Button";
import { aboutMedia } from "@/data/siteContent";

export function AboutStory() {
  const isVideo = aboutMedia.type === "video";

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
            Fotogracia is built around one thing: helping men look sharper,
            more grounded, and more confident in photographs without losing the
            parts of themselves that make the work feel real.
          </p>
          <p className="text-base leading-8 text-white/70">
            The approach is calm, intentional, and highly directed. Whether the
            goal is personal branding, a matrimony profile, or a stronger set of
            lifestyle portraits, the session is designed to feel natural while
            still producing work that looks distinctly premium.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Inquire Now</Button>
            <Button href="/contact" variant="secondary">
              Start A Conversation
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0f0f0f] shadow-glow">
          {isVideo ? (
            <video
              className="h-[520px] w-full object-cover"
              src={aboutMedia.src}
              poster={aboutMedia.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={aboutMedia.src}
              alt="Behind the scenes portrait for Fotogracia"
              width={683}
              height={1024}
              className="h-[520px] w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="max-w-sm rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.32em] text-sand">
                Behind the scenes
              </p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Clean styling, subtle mood, and strong direction are what make
                the final images feel expensive without feeling forced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
