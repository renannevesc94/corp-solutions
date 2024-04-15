import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import styles from "./style.module.css";

type InputProps = {
  label: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }: InputProps, ref) => {
    const [isInputFocused, setInputFocused] = useState(false);
    return (
      <div className={styles.inputContainer}>
        <input
          ref={ref}
          className={styles.inputText}
          placeholder={isInputFocused ? " " : label}
          onFocus={() => {
            setInputFocused(true);
          }}
          onBlur={e => {
            if (!e.target.value) {
              setInputFocused(false);
            }
          }}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
        {isInputFocused && <label className={styles.label}>{label}</label>}
      </div>
    );
  }
);
