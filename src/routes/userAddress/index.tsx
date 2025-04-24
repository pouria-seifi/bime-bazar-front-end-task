import React from "react";
import { redirect } from "next/navigation";

import { BASE_URL } from "@/src/utils/constants";
import { PATH } from "@/src/enums/global.enum";
import { Address } from "@/src/types";
import UserAddressModal from "./components/userAddressModal";

const getUserAddress = async (): Promise<Address[] | null> => {
  try {
    const res = await fetch(`${BASE_URL}/my-addresses/`, {
      next: {
        tags: ["userAddress"],
      },
    });
    if (!res.ok) {
      redirect(PATH.home);
    }
    await new Promise((res) => {
      setTimeout(() => {
        // added delay to show loading modal
        res(true);
      }, 2000);
    });
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
