"use client";
import React, { useActionState } from "react";

import { Typography } from "@/src/components/typography";
import { FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import Input from "@/src/components/input";
import Button from "@/src/components/button";

interface Props {
  title?: string;
}

const VehicleOwnerDetailsForm: React.FC<Props> = () => {
  const [message, formAction, isPending] = useActionState(() => {}, null);

  return (
    <form action={formAction} className="flex flex-col px-5 py-6">
      <Typography.Text
        weight={FONT_WEIGHT.medium}
        size={FONT_SIZE.base}
        className="leading-7 mb-2"
      >
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </Typography.Text>
      <Input name="nationalCode" placeholder="کد ملی" />
      <Input name="phoneNumber" placeholder="شماره تلفن همراه" />

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
        className="leading-7"
      >
        لطفا آدرسی را که می خواهید روی بیمه نامه درج شود, وارد کنید.
      </Typography.Text>
      <Button color="primary" className="h-12 mt-2">
        <Typography.Text
          weight={FONT_WEIGHT.semiBold}
          size={FONT_SIZE.base}
          className="leading-7"
        >
          انتخاب از آدرس های من
        </Typography.Text>
      </Button>
      <Button
        color="thirdinary"
        className="h-12 mt-6 max-w-32 mr-auto"
        isDisable
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
