import { Seo } from "@/components/seo/Seo";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Fotogracia to inquire about men's branding, matrimony, and lifestyle portrait sessions."
        path="/contact"
      />
      <ContactForm />
    </>
  );
}
