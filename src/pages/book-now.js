import { Seo } from "@/components/seo/Seo";
import { BookingForm } from "@/components/forms/BookingForm";

export default function BookNowPage() {
  return (
    <>
      <Seo
        title="Book Now"
        description="Book a Fotogracia shoot in minutes with a streamlined inquiry form for portraits, couples sessions, and real estate projects."
        path="/book-now"
      />
      <BookingForm />
    </>
  );
}
