import { FC, MouseEvent, ReactNode } from "react";

import Loading from "@/public/images/loading.svg";
import NextImage from "@/src/components/nextImage";

export interface IButton {
  children?: string | ReactNode;
  color?: "primary" | "secondary" | "thirdinary";
  isDisable?: boolean;
  isLoading?: boolean;
  width?: string;
  type?: "submit" | "button" | "reset";
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const defaultButtonClasses = {
  base: "appearance-none flex transition-all duration-100 font-normal flex items-center justify-center",
  primary: {
    disabled: "",
    active: "justify-center text-center bg-yellow text-black",
    loading: "",
  },
  secondary: {
    disabled:
      "justify-center text-center bg-white border-gray-2 border text-gray-2",
    active:
      "justify-center text-center bg-white border-black border text-black",
    loading: "!border-gray-2 !text-gray-2",
  },
  thirdinary: {
    disabled: "justify-center text-center bg-gray-5 text-gray-6 ",
    active: "justify-center text-center bg-black text-white ",
    loading: "!bg-gray-3 !text-gray-4",
  },
};

const Button: FC<IButton> = ({
  children,
  width = "w-full",
  color = "primary",
  isLoading = false,
  isDisable = false,
  onClick,
  type = "button",
  className = "",
  ...rest
}) => {
  return (
    <button
      disabled={isLoading || isDisable}
      onClick={onClick}
      type={type}
      className={
        `${defaultButtonClasses.base} ` +
        `${width} ` +
        `${isDisable ? defaultButtonClasses[color].disabled : ""} ` +
        `${!isDisable ? defaultButtonClasses[color].active : ""} ` +
        `${isLoading ? defaultButtonClasses[color].loading : ""} ` +
        `${!isLoading && !isDisable ? "cursor-pointer" : ""} ` +
        `${className} `
      }
      {...rest}
    >
      {isLoading ? (
        <NextImage
          className="mx-2 rotate"
          src={Loading}
          alt="loading icon"
          width={20}
          height={20}
        />
      ) : (
        <></>
      )}
      {children}
    </button>
  );
};

export default Button;
