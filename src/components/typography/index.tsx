import { FC, ReactNode } from "react";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";

export interface ITypography {
  size?: FONT_SIZE;
  weight?: FONT_WEIGHT;
  color?: COLORS;
  className?: string;
  children?: ReactNode | string;
  onClick?: () => void;
}

const Text: FC<ITypography> = ({
  size = FONT_SIZE.base,
  weight = FONT_WEIGHT.regular,
  color = COLORS.black,
  children,
  className,
  ...rest
}) => {
  return (
    <span className={`${size} ${weight} ${color} ${className}`} {...rest}>
      {children}
    </span>
  );
};

export const Typography = { Text };
