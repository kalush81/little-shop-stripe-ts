import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

export const Button = ({
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) => {
  const classes = clsx("ui-button", className);
  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
};
