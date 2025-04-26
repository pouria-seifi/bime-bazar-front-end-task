"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { NEXT_API_URL } from "@/src/utils/constants";
import { PATH } from "@/src/enums/global.enum";
import { IAddress } from "@/src/types";

import UserAddressModal from "./components/userAddressModal";

const UserAddressModalInterceptedPage = () => {
  const [data, setData] = useState<IAddress[] | null>(null);

  useEffect(() => {
    getUserAddress();
  }, []);

  const getUserAddress = async () => {
    try {
      const res = await fetch(`${NEXT_API_URL}/user/`, {
        next: {
          revalidate: false,
          tags: ["userAddress"],
        },
      });
      
      if (!res.ok) {
        const error = await res.json();
        console.log("error", error);
        redirect(PATH.home);
      }

      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  if (!data) return null;

  return <UserAddressModal addresses={data} />;
};

export default UserAddressModalInterceptedPage;
