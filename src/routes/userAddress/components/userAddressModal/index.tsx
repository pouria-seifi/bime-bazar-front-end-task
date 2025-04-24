"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/src/components/modal";
import { Address } from "@/src/types";
import Button from "@/src/components/button";
import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import NextImage from "@/src/components/nextImage";
import useUserStore from "@/src/stores/user";

import RedCloseIcon from "@/public/images/redCloseIcon.svg";

interface UserAddressModalProps {
  addresses: Address[];
}

const UserAddressModal = ({ addresses }: UserAddressModalProps) => {
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const router = useRouter();
  const addAddress = useUserStore((state) => state.addAddress);

  const onClose = () => {
    router.back();
  };

  return (
    <Modal
      title="انتخاب آدرس"
      isOpen={true}
      onClose={onClose}
      footer={
        <Button
          type="button"
          color="thirdinary"
          className="h-12"
          isDisable={!selectedAddress}
          onClick={() => {
            if (!selectedAddress) return;
            addAddress(selectedAddress);
            onClose();
          }}
        >
          انتخاب
        </Button>
      }
    >
      <div className="flex flex-col px-3 py-4 gap-4">
        {addresses.map((address: Address) => (
          <label
            key={address.id}
            className="flex items-start justify-center w-full cursor-pointer"
            htmlFor={address.id}
          >
            <input
              type="radio"
              name="address"
              id={address.id}
              checked={selectedAddress?.id === address.id}
              onChange={() => setSelectedAddress(address)}
              className="sr-only peer"
            />
            <div className="w-3 h-3 mt-1 ml-1 rounded-full border-2 border-gray-300 peer-checked:bg-black transition-all" />

            <div className="relative flex flex-col w-full">
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
          </label>
        ))}
      </div>
    </Modal>
  );
};

export default UserAddressModal;
