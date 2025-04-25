"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/src/components/modal";
import { IAddress } from "@/src/types";
import Button from "@/src/components/button";
import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import NextImage from "@/src/components/nextImage";
import useUserStore from "@/src/stores/user";
import { PATH } from "@/src/enums/global.enum";

import RedCloseIcon from "@/public/images/redCloseIcon.svg";

interface UserAddressModalProps {
  addresses: IAddress[];
}

const UserAddressModal = ({ addresses }: UserAddressModalProps) => {
  const [selectedAddress, setSelectedAddress] = useState<IAddress | null>(null);
  const router = useRouter();

  const setUserSelectedAddress = useUserStore(
    (state) => state.setUserSelectedAddress
  );
  const setUserAddressList = useUserStore((state) => state.setUserAddressList);
  const userAddressList = useUserStore((state) => state.userAddressList);
  const setselectedToRemoveAddress = useUserStore(
    (state) => state.setselectedToRemoveAddress
  );

  useEffect(() => {
    // addresses cache here and on re renders set the zustand value to cached
    // so if we have value we do not need to set it again
    if (userAddressList) return;
    setUserAddressList(addresses);
  }, [addresses.length]);

  const onClose = () => {
    router.back();
  };

  const deleteAddress = (
    e: React.MouseEvent<HTMLDivElement>,
    address: IAddress
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setselectedToRemoveAddress(address);
    router.push(PATH.deleteUserAddress);
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
          className="h-12 w-full"
          isDisable={!selectedAddress}
          onClick={() => {
            if (!selectedAddress) return;
            setUserSelectedAddress(selectedAddress);
            onClose();
          }}
        >
          انتخاب
        </Button>
      }
    >
      <div className="flex flex-col px-3 py-4 gap-4">
        {/* to prevent in first render before set userAddressList show no address found  */}
        {/* i added userAddressList || addresses and in first render before setState it shows addresses */}
        {/* and then i see  userAddressListin next re renders */}
        {(userAddressList || addresses)?.length ? (
          (userAddressList || addresses).map((address: IAddress) => (
            <label
              key={address.id}
              className="flex items-start justify-center w-full"
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

              <div className="relative flex flex-col w-full cursor-pointer">
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
                  onClick={(e) => deleteAddress(e, address)}
                />
              </div>
            </label>
          ))
        ) : (
          <Typography.Text
            weight={FONT_WEIGHT.regular}
            size={FONT_SIZE.base}
            color={COLORS.black}
            className="leading-6 m-auto"
          >
            آدرسی یافت نشد!
          </Typography.Text>
        )}
      </div>
    </Modal>
  );
};

export default UserAddressModal;
