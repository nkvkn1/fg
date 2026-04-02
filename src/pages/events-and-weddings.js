import { useEffect } from "react";
import { useRouter } from "next/router";

export default function EventsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}

EventsRedirectPage.getLayout = (page) => page;
