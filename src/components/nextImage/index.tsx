"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

type NextImageProps = ImageProps & {
  className?: string;
};

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}) => {
  const shouldFill = !width || !height;

  return (
    <Image
      src={src}
      alt={alt}
      width={shouldFill ? undefined : width}
      height={shouldFill ? undefined : height}
      fill={shouldFill}
      className={className}
      {...rest}
    />
  );
};

export default NextImage;
