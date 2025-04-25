"use client";
import React, {
  Fragment,
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import Input from "@/src/components/input";
import Button from "@/src/components/button";
import { postVehicleOwnerDetails } from "@/src/actions/vehicleOwner";
import { IPostVehicleOwnerDetailsResult } from "@/src/types";
import NextLink from "@/src/components/nextLink";
import { PATH } from "@/src/enums/global.enum";
import useUserStore from "@/src/stores/user";

interface VehicleOwnerDetailsFormProps {
  children: React.ReactNode;
}

const VehicleOwnerDetailsForm: React.FC<VehicleOwnerDetailsFormProps> = ({
  children,
}) => {
  const router = useRouter();
  const userSelectedAddress = useUserStore(
    (state) => state.userSelectedAddress
  );
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

  useEffect(() => {
    if (!message?.errors) return;
    const hasError = Object.values(message?.errors || []).some(Boolean);

    if (hasError && message?.errors?.sumbitError) {
      router.push(PATH.failedSubmit);
      return;
    }

    if (!hasError) {
      router.push(PATH.successSubmit);
    }
  }, [message?.errors]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (userSelectedAddress?.id)
      formData.append("addressId", String(userSelectedAddress?.id));

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
      {children}
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
        type="tel"
        pattern="[0-9]*"
        className="placeholder:text-right"
        dir="ltr"
      />
      <Input
        name="phoneNumber"
        placeholder="شماره تلفن همراه"
        error={message?.errors?.phoneNumberError}
        type="tel"
        pattern="[0-9]*"
        className="placeholder:!text-right"
        dir="ltr"
      />

      <Typography.Text
        weight={FONT_WEIGHT.medium}
        size={FONT_SIZE.base}
        className="leading-7 mb-2 mt-6"
      >
        آدرس جهت درج روی بیمه نامه
      </Typography.Text>
      {userSelectedAddress?.details ? (
        <Typography.Text
          weight={FONT_WEIGHT.regular}
          size={FONT_SIZE.xs}
          color={COLORS.gray2}
          className="leading-5"
        >
          {userSelectedAddress.details}
        </Typography.Text>
      ) : (
        <Typography.Text
          weight={FONT_WEIGHT.regular}
          size={FONT_SIZE.sm}
          color={message?.errors?.addressIdError ? COLORS.red : COLORS.black}
          className="leading-7"
        >
          لطفا آدرسی را که می خواهید روی بیمه نامه درج شود, وارد کنید.
        </Typography.Text>
      )}

      {userSelectedAddress?.id ? (
        <Fragment />
      ) : (
        <NextLink href={PATH.userAddressModal}>
          <Button color="primary" className="h-12 mt-2 w-full">
            <Typography.Text
              weight={FONT_WEIGHT.semiBold}
              size={FONT_SIZE.base}
              className="leading-7"
            >
              انتخاب از آدرس های من
            </Typography.Text>
          </Button>
        </NextLink>
      )}

      <Button
        type="submit"
        color="thirdinary"
        className="h-12 w-32 mt-6 mr-auto"
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
