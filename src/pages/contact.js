import { Seo } from "@/Components/seo/Seo";
import { ContactForm } from "@/Components/forms/ContactForm";

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
