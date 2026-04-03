import Link from "next/link";
import { contactDetails, navLinks } from "@/data/siteContent";
import { ProtectedPhoneLink } from "@/components/ui/ProtectedPhoneLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-display text-3xl text-white">Fotogracia</p>
          <p className="max-w-md text-sm leading-7 text-white/60">
            Premium men&apos;s portraits for branding, matrimony, and lifestyle
            sessions with a moody, clean, and confident visual direction.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-sand">
            Explore
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-sand">
            Connect
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            <a href={`mailto:${contactDetails.email}`} className="hover:text-white">
              {contactDetails.email}
            </a>
            <ProtectedPhoneLink
              label="Call or text"
              className="flex items-center gap-3 text-left hover:text-white"
              revealClassName="text-white/50"
            />
            <a
              href={contactDetails.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
