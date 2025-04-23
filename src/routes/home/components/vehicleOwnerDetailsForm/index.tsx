"use client";
import React, {
  startTransition,
  useActionState,
  useRef,
  useState,
} from "react";

import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import Input from "@/src/components/input";
import Button from "@/src/components/button";
import { postVehicleOwnerDetails } from "@/src/actions/vehicleOwner";
import { IPostVehicleOwnerDetailsResult } from "@/src/types";
import NextLink from "@/src/components/nextLink";
import { PATH } from "@/src/enums/global.enum";

const VehicleOwnerDetailsForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const [message, formAction, isPending] = useActionState<
    IPostVehicleOwnerDetailsResult,
    FormData
  >(postVehicleOwnerDetails, {
    nationalId: "",
    phoneNumber: "",
    addressId: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  const validateInputs = () => {
    const form = formRef.current;
    if (!form) return;

    const nationalId =
      (form.elements.namedItem("nationalId") as HTMLInputElement)?.value ?? "";
    const phoneNumber =
      (form.elements.namedItem("phoneNumber") as HTMLInputElement)?.value ?? "";

    const isValid = !!(
      nationalId &&
      nationalId.trim() &&
      phoneNumber &&
      phoneNumber.trim()
    );
    setIsFormValid(isValid);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onInput={validateInputs}
      className="flex flex-col px-5 py-6"
    >
      <Typography.Text
        weight={FONT_WEIGHT.medium}
        size={FONT_SIZE.base}
        className="leading-7 mb-2"
      >
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </Typography.Text>
      <Input
        name="nationalId"
        placeholder="کد ملی"
        error={message?.errors?.nationalIdError}
      />
      <Input
        name="phoneNumber"
        placeholder="شماره تلفن همراه"
        error={message?.errors?.phoneNumberError}
      />

      <Typography.Text
        weight={FONT_WEIGHT.medium}
        size={FONT_SIZE.base}
        className="leading-7 mb-2 mt-6"
      >
        آدرس جهت درج روی بیمه نامه
      </Typography.Text>
      <Typography.Text
        weight={FONT_WEIGHT.regular}
        size={FONT_SIZE.sm}
        color={message?.errors?.addressIdError ? COLORS.red : COLORS.black}
        className="leading-7"
      >
        لطفا آدرسی را که می خواهید روی بیمه نامه درج شود, وارد کنید.
      </Typography.Text>

      <NextLink href={PATH.userAddressModal}>
        <Button color="primary" className="h-12 mt-2">
          <Typography.Text
            weight={FONT_WEIGHT.semiBold}
            size={FONT_SIZE.base}
            className="leading-7"
          >
            انتخاب از آدرس های من
          </Typography.Text>
        </Button>
      </NextLink>

      <Button
        type="submit"
        color="thirdinary"
        className="h-12 mt-6 max-w-32 mr-auto"
        isDisable={!isFormValid}
        isLoading={isPending}
      >
        <Typography.Text
          weight={FONT_WEIGHT.medium}
          size={FONT_SIZE.base}
          className="leading-7"
        >
          تایید و ادامه
        </Typography.Text>
      </Button>
    </form>
  );
};

export default VehicleOwnerDetailsForm;
