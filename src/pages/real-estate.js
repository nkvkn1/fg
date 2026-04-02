import { useEffect } from "react";
import { useRouter } from "next/router";

export default function RealEstateRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}

RealEstateRedirectPage.getLayout = (page) => page;
