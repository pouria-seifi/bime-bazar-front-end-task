"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PATH } from "@/src/enums/global.enum";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(PATH.home);
  }, [router]);

  return null;
};

export default RedirectPage;
