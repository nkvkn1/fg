import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { LeadCapturePopup } from "@/components/layout/LeadCapturePopup";

export function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-ink bg-haze text-white">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatingActions />
      <LeadCapturePopup />
    </div>
  );
}
