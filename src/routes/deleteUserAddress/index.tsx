"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Modal from "@/src/components/modal";
import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import useUserStore from "@/src/stores/user";
import Button from "@/src/components/button";

const DeleteUserAddress = () => {
  const router = useRouter();
  const selectedToRemoveAddress = useUserStore(
    (state) => state.selectedToRemoveAddress
  );
  const removeAddress = useUserStore((state) => state.removeAddress);

  const onClose = () => {
    router.back();
  };

  const deleteAddress = async () => {
    if (!selectedToRemoveAddress?.id) return;
    await removeAddress(selectedToRemoveAddress);
    onClose();
  };

  return (
    <Modal
      title="حذف آدرس"
      isOpen={true}
      onClose={onClose}
      footer={
        <div className="flex flex-row gap-2 w-full">
          <Button
            type="button"
            color="thirdinary"
            className="h-12 w-full"
            onClick={deleteAddress}
          >
            تایید
          </Button>
          <Button
            type="button"
            color="secondary"
            className="h-12 w-full"
            onClick={onClose}
          >
            بازگشت
          </Button>
        </div>
      }
    >
      <div className="flex flex-col px-3 py-4 gap-4">
        <Typography.Text
          weight={FONT_WEIGHT.medium}
          size={FONT_SIZE.sm}
          color={COLORS.black}
          className="leading-6"
        >
          آیا از حذف آدرس خود، مطمین هستید؟
        </Typography.Text>
        <div className="flex flex-col p-2 bg-gray-8 gap-2">
          <Typography.Text
            weight={FONT_WEIGHT.medium}
            size={FONT_SIZE.sm}
            color={COLORS.black}
            className="leading-6"
          >
            {selectedToRemoveAddress?.name}
          </Typography.Text>
          <Typography.Text
            weight={FONT_WEIGHT.regular}
            size={FONT_SIZE.xs}
            color={COLORS.gray2}
            className="leading-6"
          >
            {selectedToRemoveAddress?.details}
          </Typography.Text>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserAddress;
