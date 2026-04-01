import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  return (
    <section className="px-5 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#1a1a1a] via-[#131313] to-[#0d0d0d] p-8 text-center sm:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-sand">
          Ready when you are
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl">
          Make the next inquiry easy to send and even easier to say yes to.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
          Whether you need standout portraits, a meaningful couples session, or
          listing media that helps sell faster, the booking flow is already set
          up for momentum.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/book-now">Book Your Shoot</Button>
          <Button href="/contact" variant="secondary">
            Ask A Question
          </Button>
        </div>
      </div>
    </section>
  );
}
