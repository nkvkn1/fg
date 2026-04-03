import { useState } from "react";
import { motion } from "framer-motion";
import { contactDetails, serviceCategories } from "@/data/siteContent";
import { Button } from "@/components/ui/Button";
import { ProtectedPhoneLink } from "@/components/ui/ProtectedPhoneLink";

const initialState = {
  name: "",
  email: "",
  shootType: "",
  preferredDate: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const minimumDate = new Date().toISOString().split("T")[0];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setResponseMessage(payload.message);
      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      setResponseMessage(error.message);
      setStatus("error");
    }
  };

  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 rounded-[2.4rem] border border-white/10 bg-white/5 p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.35em] text-sand">Contact</p>
          <h1 className="font-display text-4xl text-white sm:text-5xl">
            Inquire about your portrait session.
          </h1>
          <p className="text-base leading-8 text-white/68">
            Share the type of shoot you want and the timing you have in mind.
            Fotogracia will follow up with availability and the best next step.
          </p>
          <div className="space-y-4 rounded-[1.8rem] border border-white/10 bg-black/25 p-5">
            <div>
              <p className="text-sm text-white/58">Email</p>
              <a
                href={`mailto:${contactDetails.email}`}
                className="mt-2 block text-lg text-white"
              >
                {contactDetails.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-white/58">Instagram</p>
              <a
                href={contactDetails.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-lg text-white"
              >
                @fotogracia
              </a>
            </div>
            <div>
              <p className="text-sm text-white/58">Phone</p>
              <ProtectedPhoneLink
                label="Call or text"
                className="mt-2 flex items-center gap-3 text-left text-lg text-white"
                revealClassName="text-sm text-white/60"
              />
            </div>
            <div>
              <p className="text-sm text-white/58">WhatsApp</p>
              <a
                href={contactDetails.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-lg text-white"
              >
                Start a quick chat
              </a>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-gold/25 bg-gold/10 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Current offer
            </p>
            <p className="mt-3 text-sm leading-7 text-white/80">
              The current 20% offer can be applied to new bookings when you
              mention it in your inquiry.
            </p>
          </div>
        </div>

        <div className="rounded-[2.4rem] border border-white/10 bg-[#101010] p-7 sm:p-9">
          <form onSubmit={handleSubmit} className="space-y-5">
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
                <span>Session type</span>
                <select
                  required
                  name="shootType"
                  value={formData.shootType}
                  onChange={handleChange}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                >
                  <option value="">Select a session</option>
                  {serviceCategories.map((service) => (
                    <option key={service.slug} value={service.shortLabel}>
                      {service.shortLabel}
                    </option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm text-white/72">
                <span>Preferred date</span>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={minimumDate}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-white/72">
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                placeholder="Tell us the vibe, use case, or anything else that matters for your shoot."
              />
            </label>

            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </Button>

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
                {responseMessage}
              </motion.div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
