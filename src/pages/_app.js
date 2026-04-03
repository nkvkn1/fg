import "@/styles/globals.css";
import { SiteShell } from "@/Components/Layout/SiteShell";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteShell>{page}</SiteShell>);

  return getLayout(<Component {...pageProps} />);
}
