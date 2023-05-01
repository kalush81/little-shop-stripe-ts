import React, { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children: React.ReactNode;
};

export const Link = ({ className, children, ...rest }: LinkProps) => {
  const classes = clsx("ui-link", className);
  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
};