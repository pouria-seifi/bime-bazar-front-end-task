import { Typography } from "@/src/components/typography";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import { ILabelValuePairs } from "@/src/types";
import NextImage from "@/src/components/nextImage";

import CarPlate from "@/public/images/carPlate.svg";

const insurancePolicyDetails: ILabelValuePairs = [
  { label: "شرکت بیمه گر", value: "پارسیان" },
  { label: "برند خودرو", value: "پژو" },
  { label: "مدل خودرو", value: "206 تیپ 6" },
];

const InsurancePolicyDetails = () => {
  return (
    <div className="flex flex-col justify-center px-10 pt-6">
      <div className="relative h-[50px]">
        <NextImage className="" src={CarPlate} alt="car plate image" />
      </div>

      <div className="flex flex-col mt-6 gap-2">
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
  );
};

export default InsurancePolicyDetails;
