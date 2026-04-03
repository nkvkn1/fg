import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { LeadCapturePopup } from "@/components/layout/LeadCapturePopup";

export function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-ink bg-haze text-white">
      <SiteHeader />
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/[0.03] to-transparent" />
        {children}
      </main>
      <SiteFooter />
      <FloatingActions />
      <LeadCapturePopup />
    </div>
  );
}
