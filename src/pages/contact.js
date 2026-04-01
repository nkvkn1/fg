import { Seo } from "@/components/seo/Seo";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Fotogracia for photography inquiries, Instagram, email, and quick pre-booking questions."
        path="/contact"
      />
      <ContactForm />
    </>
  );
}
