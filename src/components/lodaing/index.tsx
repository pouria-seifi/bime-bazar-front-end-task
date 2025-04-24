import { FC } from "react";

import LoadingImg from "@/public/images/loading.svg";
import NextImage from "@/src/components/nextImage";

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
