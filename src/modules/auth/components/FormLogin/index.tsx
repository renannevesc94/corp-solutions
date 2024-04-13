import { Input } from "../../../../components/Input";
import styles from "./style.module.css";
import { InputPassword } from "../../../../components/InputPassword";
import { Button } from "../../../../components/Button";

export const FormLogin = () => {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <Input label="Seu e-mail" />
      <InputPassword label="Sua a senha" />
      <Button variant="secondary">Entrar</Button>
    </div>
  );
};
