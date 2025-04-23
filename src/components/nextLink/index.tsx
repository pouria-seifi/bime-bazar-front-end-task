"use client";

import Link from "next/link";
import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
}

const NextLink: React.FC<LinkProps> = ({
  href,
  children,
  className,
  scroll,
  ...rest
}) => {
  return (
    <Link href={href} className={className} scroll={scroll} {...rest}>
      {children}
    </Link>
  );
};

export default NextLink;
