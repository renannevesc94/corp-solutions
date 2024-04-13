import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};
