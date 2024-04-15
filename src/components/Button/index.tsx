import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import { LoadingIcon } from "../Icons";

type ButtonProps = {
  variant: "primary" | "secondary";
  isLoading: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant, isLoading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {isLoading ? <LoadingIcon /> : children}
    </button>
  );
};
