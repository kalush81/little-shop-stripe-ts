import React, { InputHTMLAttributes } from "react";
import "./input.css";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = ({ className, ...rest }: InputProps) => {
  const classes = clsx("ui-text-field", className);
  return <input {...rest} className={classes} />;
};

