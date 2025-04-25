"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

import Modal from "@/src/components/modal";
import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import Button from "@/src/components/button";

const FailedSubmit = () => {
  const router = useRouter();
  const { pending } = useFormStatus();

  const onClose = () => {
    router.back();
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      footer={
        <div className="flex flex-row gap-2 w-full">
          <Button
            type="submit"
            color="thirdinary"
            className="h-12"
            isLoading={pending}
          >
            تایید
          </Button>
          <Button
            type="button"
            color="secondary"
            className="h-12"
            onClick={onClose}
            isDisable={pending}
          >
            بازگشت
          </Button>
        </div>
      }
    >
      <div className="flex items-start justify-center flex-col px-3 py-4">
        <Typography.Text
          weight={FONT_WEIGHT.medium}
          size={FONT_SIZE.sm}
          color={COLORS.black}
          className="leading-6"
        >
          متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.
        </Typography.Text>
        <Typography.Text
          weight={FONT_WEIGHT.medium}
          size={FONT_SIZE.sm}
          color={COLORS.black}
          className="leading-6"
        >
          مجددا، تلاش کنید.
        </Typography.Text>
      </div>
    </Modal>
  );
};

export default FailedSubmit;
