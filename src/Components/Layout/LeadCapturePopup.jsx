import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/Components/ui/Button";

export function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("offer");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const dismissed = window.sessionStorage.getItem("fotogracia-popup-dismissed");
      if (!dismissed) {
        setOpen(true);
      }
    }, 7000);

    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem("fotogracia-popup-dismissed", "true");
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/popup-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage(payload.message.replace("&apos;", "'"));
      window.sessionStorage.setItem("fotogracia-popup-dismissed", "true");
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end bg-black/60 p-4 sm:items-center sm:justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#101010] p-7 text-white shadow-glow"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-sand">
              Private offer
            </p>
            {step === "offer" ? (
              <>
                <h3 className="mt-3 font-display text-3xl">
                  Save 20% on your portrait session.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Ideal if you have been meaning to book branding, lifestyle, or
                  matrimony portraits and want a better reason to lock in your date.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button type="button" className="flex-1" onClick={() => setStep("capture")}>
                    Yes, Save My Offer
                  </Button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white"
                  >
                    Maybe later
                  </button>
                </div>
              </>
            ) : (
              <form className="mt-3 space-y-4" onSubmit={handleSubmit}>
                <h3 className="font-display text-3xl">Where should we send it?</h3>
                <p className="text-sm leading-7 text-white/70">
                  Enter your email and the 20% offer will be saved for you.
                </p>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/25 px-4 py-3 text-white outline-none transition focus:border-sand"
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="flex-1" disabled={status === "submitting"}>
                    {status === "submitting" ? "Saving..." : "Save My Offer"}
                  </Button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white"
                  >
                    Close
                  </button>
                </div>
                {status !== "idle" ? (
                  <p className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/78">
                    {message}
                  </p>
                ) : null}
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
