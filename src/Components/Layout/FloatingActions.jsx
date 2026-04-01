import { Button } from "@/components/ui/Button";
import { contactDetails } from "@/data/siteContent";

export function FloatingActions() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-4 z-40 px-4 sm:hidden">
        <Button href="/book-now" className="flex w-full justify-center">
          Book Now
        </Button>
      </div>

      <a
        href={contactDetails.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#171717] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:bg-[#202020]"
      >
        Chat Now
      </a>
    </>
  );
}
