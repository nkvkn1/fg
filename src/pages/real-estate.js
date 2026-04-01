import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RealEstateRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services?focus=real-estate");
  }, [router]);

  return null;
}

RealEstateRedirectPage.getLayout = (page) => page;
