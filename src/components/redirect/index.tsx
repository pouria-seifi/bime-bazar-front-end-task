import { redirect } from "next/navigation";
import { FC } from "react";

import { PATH } from "@/src/enums/global.enum";

export interface IRedirect {
  to?: string;
}

const Redirect: FC<IRedirect> = ({ to = PATH.home }) => {
  redirect(to);
};

export default Redirect;
