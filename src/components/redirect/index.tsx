"use client";

import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

import { PATH } from "@/src/enums/global.enum";

export interface IRedirect {
  to?: string;
}

const Redirect: FC<IRedirect> = ({ to = PATH.home }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router]);

  return null;
};

export default Redirect;
