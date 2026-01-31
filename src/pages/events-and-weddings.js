import Head from "next/head";
import EventsAndWeddings from "@/Components/Contant/Eventsandweddings/Events_and_weddings";

export default function EventsAndWeddingsPage() {
  return (
    <>
      <Head>
        <title>Events and Weddings | Fotogracia</title>
        <meta
          name="description"
          content="Fotogracia – Wedding and Events Photography"
        />
      </Head>
      <EventsAndWeddings />
    </>
  );
}
