"use client";

import { useRouter } from "next/navigation";
import Modal from "@/src/components/modal";
import { Address } from "@/src/types";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import NextImage from "@/src/components/nextImage";

import RedCloseIcon from "@/public/images/redCloseIcon.svg";
import { useState } from "react";

interface UserAddressModalProps {
  addresses: Address[];
}

const UserAddressModal = ({ addresses }: UserAddressModalProps) => {
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <Modal
      title="انتخاب آدرس"
      isOpen={true}
      onClose={onClose}
      footer={
        <Button type="button" color="thirdinary" className="h-12">
          انتخاب
        </Button>
      }
    >
      <div className="flex flex-col px-3 py-4 gap-4">
        {addresses.map((address: Address) => (
          <div
            key={address.id}
            className="flex items-start justify-center flex-row w-full"
          >
            <Input
              type="radio"
              name="address"
              className="mt-1"
              onChange={() => {
                console.log("address.id", address.id);

                setSelectedAddressId(address.id);
              }}
              checked={selectedAddressId === address.id}
            />
            <div className="relative flex flex-col w-full mr-1">
              <Typography.Text
                weight={FONT_WEIGHT.medium}
                size={FONT_SIZE.sm}
                color={COLORS.black}
                className="leading-6 pl-1"
              >
                {address.name}
              </Typography.Text>
              <Typography.Text
                weight={FONT_WEIGHT.regular}
                size={FONT_SIZE.xs}
                color={COLORS.gray2}
                className="leading-5 pl-1"
              >
                {address.details}
              </Typography.Text>

              <NextImage
                src={RedCloseIcon}
                width={10}
                height={10}
                alt="delete address icon"
                className="absolute top-0 left-0 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default UserAddressModal;
