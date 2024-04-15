import { forwardRef, useState } from "react";
import styles from "./style.module.css";
import { ClosedEyes, OpenedEyes } from "../Icons";

type InputPasswordProps = {
  label: string;
  error?: string;
} & React.ComponentPropsWithoutRef<"input">;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ ...props }: InputPasswordProps, ref) => {
    const [isInputFocused, setInputFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { label, error } = props;
    return (
      <div className={styles.InputContainer}>
        <input
          className={styles.inputText}
          ref={ref}
          type={showPassword ? "text" : "password"}
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

        <button className={styles.button} onClick={() => setShowPassword(!showPassword)}>
          <span className={styles.showPaswordIcon}>
            {showPassword ? <OpenedEyes /> : <ClosedEyes />}
          </span>
        </button>
        {error && <span className={styles.errorMessage}>{error}</span>}
        {isInputFocused && <label className={styles.label}>{label}</label>}
      </div>
    );
  }
);
