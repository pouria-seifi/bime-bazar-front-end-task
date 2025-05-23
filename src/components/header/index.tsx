import React from "react";

import { Typography } from "@/src/components/typography";
import { FONT_SIZE, FONT_WEIGHT } from "@/src/enums/tailwind.enum";
import NextImage from "@/src/components/nextImage";

interface HeaderProps {
  title: string;
  src: string;
}

const Header: React.FC<HeaderProps> = ({ title, src }) => {
  return (
    <header className="h-14 flex flex-row items-center gap-1.5 px-2 py-3 shadow-1">
      <NextImage src={src} alt="car logo" width={32} height={32} />
      <Typography.Text
        weight={FONT_WEIGHT.medium}
        size={FONT_SIZE.lg}
        className="leading-7"
      >
        {title}
      </Typography.Text>
    </header>
  );
};

export default Header;
