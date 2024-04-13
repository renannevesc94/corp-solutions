import { FormLogin } from "./components/FormLogin";
import styles from "./style.module.css";
export const Auth = () => {
  return (
    <>
      <main className={styles.container}>
        <FormLogin />
      </main>
    </>
  );
};
