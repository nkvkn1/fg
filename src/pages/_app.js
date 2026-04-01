import "@/styles/globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteShell>{page}</SiteShell>);

  return getLayout(<Component {...pageProps} />);
}
