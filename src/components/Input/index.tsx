import { useState } from "react";
import styles from "./style.module.css";

type InputProps = {
  label: string;
};
export const Input = ({ label }: InputProps) => {
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputText}
        placeholder={isInputFocused ? " " : label}
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => setInputFocused(false)}
      />
      {isInputFocused && <label className={styles.label}>{label}</label>}
    </div>
  );
};
