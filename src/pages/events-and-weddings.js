import { useEffect } from "react";
import { useRouter } from "next/router";

export default function EventsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/portfolio?category=couples");
  }, [router]);

  return null;
}

EventsRedirectPage.getLayout = (page) => page;
