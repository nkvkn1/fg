import Image from "next/image";
import { contactDetails, instagramPreview } from "@/data/siteContent";
import { SectionIntro } from "@/Components/ui/SectionIntro";

export function InstagramStrip() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Instagram"
          title="Built for the scroll, ready for the save."
          copy="A living feed reinforces style, consistency, and trust before someone ever taps the booking button."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {instagramPreview.map((image, index) => (
            <div key={image + index} className="overflow-hidden rounded-[1.7rem] border border-white/10">
              <Image
                src={image}
                alt="Fotogracia gallery highlight"
                width={700}
                height={900}
                className="h-44 w-full object-cover sm:h-60"
              />
            </div>
          ))}
        </div>

        <a
          href={contactDetails.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-sand/40 hover:text-sand"
        >
          Follow Fotogracia On Instagram
        </a>
      </div>
    </section>
  );
}
