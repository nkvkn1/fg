import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function LeadCapturePopup() {
  const [open, setOpen] = useState(false);

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
            <h3 className="mt-3 font-display text-3xl">
              Save 20% on your portrait session.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Ideal if you have been meaning to book branding, lifestyle, or
              matrimony portraits and want a better reason to lock in your date.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="flex-1" onClick={dismiss}>
                Claim The Offer
              </Button>
              <button
                type="button"
                onClick={dismiss}
                className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
