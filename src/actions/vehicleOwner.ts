"use server";

import {
  IPostVehicleOwnerDetailsResult,
  IVehicleOwnerDetailsFormErrors,
} from "@/src/types";
import { isValidMobile, isValidNationalId } from "@/src/utils/helper";
import { BASE_URL } from "@/src/utils/constants";

export async function postVehicleOwnerDetails(
  _: IPostVehicleOwnerDetailsResult,
  formData: FormData
): Promise<IPostVehicleOwnerDetailsResult> {
  const nationalId = (formData.get("nationalId") as string)?.trim() || "";
  const phoneNumber = (formData.get("phoneNumber") as string)?.trim() || "";
  const addressId = (formData.get("addressIdId") as string)?.trim() || "";

  const errors: IVehicleOwnerDetailsFormErrors = {
    nationalIdError: "",
    phoneNumberError: "",
    addressIdError: "",
  };

  if (!nationalId || !isValidNationalId(nationalId)) {
    errors.nationalIdError = "کدملی وارد شده معتبر نیست.";
  }
  if (!phoneNumber || !isValidMobile(phoneNumber)) {
    errors.phoneNumberError = "شماره تلفن همراه معتبر نیست.";
  }
  if (!addressId) {
    errors.addressIdError = "true";
  }

  const hasError = Object.values(errors).some(Boolean);

  if (hasError) return { errors } as IPostVehicleOwnerDetailsResult;

  const data = { nationalId, phoneNumber, addressId };
  const response = await fetch(`${BASE_URL}/order/completion/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    // alert here
  }

  return data;
}
