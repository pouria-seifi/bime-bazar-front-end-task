import React from "react";
import { redirect } from "next/navigation";

import { BASE_URL } from "@/src/utils/constants";
import { PATH } from "@/src/enums/global.enum";
import { IAddress } from "@/src/types";
import UserAddressModal from "./components/userAddressModal";

const getUserAddress = async (): Promise<IAddress[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/my-addresses/`, {
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
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

const UserAddressModalInterceptedPage = async () => {
  const data = await getUserAddress();

  if (!data) return null;

  return <UserAddressModal addresses={data} />;
};

export default UserAddressModalInterceptedPage;
