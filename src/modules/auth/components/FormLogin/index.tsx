import { Input } from "../../../../components/Input";
import styles from "./style.module.css";
import { InputPassword } from "../../../../components/InputPassword";
import { Button } from "../../../../components/Button";

export const FormLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <Input label="Seu e-mail" />
        <InputPassword label="Sua  senha" />
        <div className={styles.actions}>
          <div className={styles.inputContainer}>
            <input type="checkbox" name="a" id="a" />
            <label htmlFor="a"> Me mantenha conectado</label>
          </div>
          <span>Esqueci minha senha</span>
        </div>
      </div>
      <div className={styles.buttonSubmit}>
        <Button variant="secondary">Entrar</Button>
      </div>
    </div>
  );
};
