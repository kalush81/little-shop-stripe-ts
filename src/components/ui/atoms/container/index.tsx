import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import "./container.css";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className, children, ...rest }: ContainerProps) => {
  const classes = clsx("container", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};