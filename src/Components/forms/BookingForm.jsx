import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { serviceCategories } from "@/data/siteContent";

const defaultForm = {
  name: "",
  email: "",
  shootType: "",
  preferredDate: "",
  message: "",
};

export function BookingForm() {
  const router = useRouter();
  const presetType =
    typeof router.query.type === "string" ? router.query.type : "";
  const [formData, setFormData] = useState({
    ...defaultForm,
    shootType: presetType,
  });
  const [status, setStatus] = useState("idle");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    setFormData((current) => ({ ...current, shootType: presetType }));
  }, [presetType]);

  const selectedService = useMemo(
    () =>
      serviceCategories.find((service) => service.slug === formData.shootType),
    [formData.shootType]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setConfirmation(payload.message);
      setStatus("success");
      setFormData({ ...defaultForm, shootType: presetType });
    } catch (error) {
      setConfirmation(error.message);
      setStatus("error");
    }
  };

  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.35em] text-sand">
            Book Now
          </p>
          <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
            Reserve your session in 2 steps.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
            Tell us who you are, what kind of shoot you want, and when you would
            love to make it happen. We&apos;ll confirm availability fast.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {["Choose shoot", "Pick a date", "Get confirmation"].map((step, index) => (
              <div
                key={step}
                className="rounded-[1.6rem] border border-white/10 bg-black/25 p-4"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-sand">
                  Step 0{index + 1}
                </p>
                <p className="mt-3 text-sm text-white/75">{step}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-white/72">
                <span>Name</span>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2 text-sm text-white/72">
                <span>Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm text-white/72">
                <span>Type of shoot</span>
                <select
                  required
                  name="shootType"
                  value={formData.shootType}
                  onChange={handleChange}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                >
                  <option value="">Select a service</option>
                  {serviceCategories.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.shortLabel}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm text-white/72">
                <span>Preferred date</span>
                <input
                  required
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-white/72">
              <span>Optional message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                placeholder="Tell us the vibe, occasion, location, or anything else we should know."
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Book My Shoot"}
              </Button>
              <p className="text-sm text-white/55">
                No long application. No hidden steps. Just a fast inquiry and
                confirmation.
              </p>
            </div>

            {status !== "idle" ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-[1.5rem] border p-4 text-sm leading-7 ${
                  status === "success"
                    ? "border-gold/30 bg-gold/10 text-white"
                    : "border-red-400/30 bg-red-400/10 text-red-100"
                }`}
              >
                {confirmation}
              </motion.div>
            ) : null}
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.2rem] border border-white/10 bg-[#101010] p-7">
            <p className="text-xs uppercase tracking-[0.35em] text-sand">
              Booking summary
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-white/60">Selected service</p>
                <p className="mt-2 font-display text-3xl text-white">
                  {selectedService?.shortLabel || "Choose a shoot"}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/62">
                  {selectedService?.deliverables ||
                    "Pick a category to preview starting price and what is included."}
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-gold/25 bg-gold/10 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-gold">
                  No-brainer offer
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Book now and receive 3 bonus edits at no extra charge.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-7">
            <p className="text-xs uppercase tracking-[0.35em] text-sand">
              Optional payment UI
            </p>
            <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-black/30 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60">Reserve your date</p>
                  <p className="mt-2 font-display text-3xl text-white">$99</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white/65">
                  Stripe UI placeholder
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/62">
                This is a visual placeholder so the flow feels complete. Hooking
                this into Stripe Checkout later will be straightforward.
              </p>
              <button
                type="button"
                disabled
                className="mt-5 w-full rounded-full border border-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/45"
              >
                Pay Deposit Soon
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
