import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PortraitsRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}

PortraitsRedirectPage.getLayout = (page) => page;
