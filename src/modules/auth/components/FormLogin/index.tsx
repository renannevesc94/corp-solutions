import { Input } from "../../../../components/Input";
import style from "./style.module.css";
import { InputPassword } from "../../../../components/InputPassword";

export const FormLogin = () => {
  return (
    <div className={style.container}>
      <h2>Login</h2>
      <Input label="Seu e-mail" />
      <InputPassword label="Sua a senha" />
    </div>
  );
};
