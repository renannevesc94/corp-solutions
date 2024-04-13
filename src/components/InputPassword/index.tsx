import { forwardRef, useState } from "react";
import style from "./style.module.css";
import { ClosedEyes, OpenedEyes } from "../Icons";

type InputPasswordProps = {
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ ...props }: InputPasswordProps, ref) => {
    const [isInputFocused, setInputFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { label } = props;
    return (
      <div className={style.InputContainer}>
        <input
          className={style.inputText}
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

        <button className={style.button} onClick={() => setShowPassword(!showPassword)}>
          <span className={style.showPaswordIcon}>
            {showPassword ? <OpenedEyes /> : <ClosedEyes />}
          </span>
        </button>

        {isInputFocused && <label className={style.label}>{label}</label>}
      </div>
    );
  }
);
