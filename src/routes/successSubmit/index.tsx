"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import Header from "@/src/components/header";
import NextImage from "@/src/components/nextImage";
import { ILabelValuePairs } from "@/src/types";
import Button from "@/src/components/button";

import Logo from "@/public/images/logo.svg";
import Success from "@/public/images/success.svg";
import CarPlate from "@/public/images/carPlate.svg";

const insurancePolicyDetails: ILabelValuePairs = [
  { label: "شرکت بیمه گر", value: "پارسیان" },
  { label: "برند خودرو", value: "پژو" },
  { label: "مدل خودرو", value: "206 تیپ 6" },
];

const SuccessSubmit = () => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <div className="fixed flex flex-col inset-0 bg-white z-30">
      <Header title="مشخصات بیمه نامه" src={Logo} />

      <div className="flex flex-col justify-center items-center pt-6">
        <NextImage src={Success} alt="car logo" width={60} height={66} />

        <div className="flex flex-row items-center mt-4">
          <Typography.Text
            weight={FONT_WEIGHT.medium}
            size={FONT_SIZE.base}
            color={COLORS.black}
            className="leading-6"
          >
            ثبت اطلاعات شما، با
          </Typography.Text>

          <Typography.Text
            weight={FONT_WEIGHT.medium}
            size={FONT_SIZE.base}
            color={COLORS.green}
            className="leading-6 px-1"
          >
            موفقیت
          </Typography.Text>

          <Typography.Text
            weight={FONT_WEIGHT.medium}
            size={FONT_SIZE.base}
            color={COLORS.black}
            className="leading-6"
          >
            انجام شد.
          </Typography.Text>
        </div>

        <div className="relative h-[50px] w-full mt-8">
          <NextImage className="" src={CarPlate} alt="car plate image" />
        </div>

        <div className="flex flex-col mt-4 gap-2 w-full px-10">
          {insurancePolicyDetails.map(({ label, value }, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center"
            >
              <Typography.Text
                weight={FONT_WEIGHT.regular}
                size={FONT_SIZE.sm}
                color={COLORS.gray1}
                className="leading-6 pl-1"
              >
                {label}
              </Typography.Text>
              <div className="flex-1 border-t border-dashed border-gray-300"></div>
              <Typography.Text
                weight={FONT_WEIGHT.regular}
                size={FONT_SIZE.sm}
                className="leading-6 pr-1"
              >
                {value}
              </Typography.Text>
            </div>
          ))}
        </div>
      </div>

      <Button
        type="button"
        color="thirdinary"
        className="h-12 w-36 mt-auto mr-auto mb-3 ml-4"
        onClick={back}
      >
        بازگشت
      </Button>
    </div>
  );
};

export default SuccessSubmit;
