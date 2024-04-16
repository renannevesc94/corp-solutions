import { Input } from "../../../../components/Input";
import styles from "./style.module.css";
import { InputPassword } from "../../../../components/InputPassword";
import { Button } from "../../../../components/Button";
import { useLogin } from "../../hooks/use-login";

export const FormLogin = () => {
  const { register, errors, handleSubmit, isPending } = useLogin();
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputGroup}>
        <Input
          label="Seu e-mail"
          {...register("email")}
          error={errors?.email ? errors.email.message : ""}
        />
        <InputPassword
          label="Sua  senha"
          {...register("password")}
          error={errors?.password ? errors.password.message : ""}
        />
        <div className={styles.actions}>
          <div className={styles.inputContainer}>
            <input type="checkbox" name="a" id="a" />
            <label htmlFor="a"> Me mantenha conectado</label>
          </div>
          <span>Esqueci minha senha</span>
        </div>
      </div>
      <div className={styles.buttonSubmit}>
        <Button variant="secondary" isLoading={isPending}>
          Entrar
        </Button>
      </div>
    </form>
  );
};
