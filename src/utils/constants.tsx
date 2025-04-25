import { ILabelValuePairs } from "@/src/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const insurancePolicyDetails: ILabelValuePairs = [
  { label: "شرکت بیمه گر", value: "پارسیان" },
  { label: "برند خودرو", value: "پژو" },
  { label: "مدل خودرو", value: "206 تیپ 6" },
];

export { BASE_URL, insurancePolicyDetails };
