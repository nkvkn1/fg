import { useEffect } from "react";
import { useRouter } from "next/router";

export default function BookNowPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/contact");
  }, [router]);

  return null;
}

BookNowPage.getLayout = (page) => page;
