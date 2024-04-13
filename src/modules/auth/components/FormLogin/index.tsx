import { Input } from "../../../../components/Input";
import styles from "./style.module.css";
import { InputPassword } from "../../../../components/InputPassword";
import { Button } from "../../../../components/Button";

export const FormLogin = () => {
  return (
    <div className={styles.container}>
      <img src="./logo.webp" className={styles.imageTop} />
      <h1>Login</h1>

      <div className={styles.inputGroup}>
        <Input label="Seu e-mail" />
        <InputPassword label="Sua a senha" />
      </div>
      <Button variant="secondary">Entrar</Button>
    </div>
  );
};
