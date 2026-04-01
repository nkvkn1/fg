import Image from "next/image";
import { instagramPreview } from "@/data/siteContent";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function InstagramStrip() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Instagram Preview"
          title="Built for the scroll, ready for the save."
          copy="A simple preview strip adds freshness and gives visitors another trust signal before they reach out."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {instagramPreview.map((image, index) => (
            <div key={image + index} className="overflow-hidden rounded-[1.7rem] border border-white/10">
              <Image
                src={image}
                alt="Fotogracia Instagram preview"
                width={700}
                height={900}
                className="h-44 w-full object-cover sm:h-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
