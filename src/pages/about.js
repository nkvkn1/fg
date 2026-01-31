import Head from "next/head";
import About from "@/Components/Contant/About/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Fotogracia</title>
        <meta
          name="description"
          content="Learn more about Fotogracia photography services."
        />
      </Head>

      <About />
    </>
  );
}
