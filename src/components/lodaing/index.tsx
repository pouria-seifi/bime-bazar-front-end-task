import { FC } from "react";

import NextImage from "@/src/components/nextImage";
import LoadingImg from "@/public/images/loading.svg";

const Loading: FC = () => {
  return (
    <NextImage
      className="mx-2 rotate"
      src={LoadingImg}
      alt="loading icon"
      width={20}
      height={20}
    />
  );
};

export default Loading;
