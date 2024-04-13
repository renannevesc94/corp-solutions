import { useState } from "react";
import style from "./style.module.css";

type InputProps = {
  label: string;
};
export const Input = ({ label }: InputProps) => {
  const [isInputFocused, setInputFocused] = useState(false);
  return (
    <div className={style.inputContainer}>
      <input
        className={style.inputText}
        placeholder={isInputFocused ? " " : label}
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => setInputFocused(false)}
      />
      {isInputFocused && <label className={style.label}>{label}</label>}
    </div>
  );
};
