"use client";

import {
  IPostVehicleOwnerDetailsResponse,
  IVehicleOwnerDetailsForm,
  IVehicleOwnerDetailsFormErrors,
} from "@/src/types";
import { isValidMobile, isValidNationalId } from "@/src/utils/helper";
import { NEXT_API_URL } from "@/src/utils/constants";

export async function postVehicleOwnerDetails(
  _: IPostVehicleOwnerDetailsResponse,
  formData: FormData
): Promise<IPostVehicleOwnerDetailsResponse> {
  const data: IVehicleOwnerDetailsForm = {
    nationalId: (formData.get("nationalId") as string)?.trim() || "",
    phoneNumber: (formData.get("phoneNumber") as string)?.trim() || "",
    addressId: (formData.get("addressId") as string)?.trim() || "",
  };

  const errors: IVehicleOwnerDetailsFormErrors = {
    nationalIdError: "",
    phoneNumberError: "",
    addressIdError: "",
  };

  if (!data.nationalId || !isValidNationalId(data.nationalId)) {
    errors.nationalIdError = "کدملی وارد شده معتبر نیست.";
  }
  if (!data.phoneNumber || !isValidMobile(data.phoneNumber)) {
    errors.phoneNumberError = "شماره تلفن همراه معتبر نیست.";
  }
  if (!data.addressId) {
    errors.addressIdError = "آدرسی وارد نشده است.";
  }

  const hasError = Object.values(errors).some(Boolean);
  if (hasError)
    return {
      success: false,
      message: "اطلاعات فرم نا معتبر است",
      errors,
    };

  const response = await fetch(`${NEXT_API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();

    return {
      success: false,
      message: error.errors?.[0] || "پردازش اطلاعات با مشکل مواجه شد.",
      errors: {
        isBackendError: true,
      },
    };
  }

  return {
    success: true,
    message: "فرم با موفقیت ارسال شد",
  };
}
