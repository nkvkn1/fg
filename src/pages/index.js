/**
 * This file must NOT render any UI.
 * It must ONLY redirect "/" to "/portraits".
 * Do not render Navbar or any page sections here.
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/portraits");
  }, [router]);

  return null;
}

// Skip layout for redirect-only page
Home.getLayout = (page) => page;
