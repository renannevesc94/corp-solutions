import { FormLogin } from "./components/FormLogin";
import styles from "./style.module.css";
export const Auth = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.bannerLogin}>
          <img src="./background-login.png" alt="imagem mulher cadeirante" />
          <img
            src="./logoFullLogin.png"
            alt="logotipo corp solutions"
            className={styles.logoFull}
          />
        </div>
        <div className={styles.containerFormLogin}>
          <div className={styles.headerLogin}>
            <img src="./logoTransparent.png" alt="logo corp solutions" />
            <h3>Bem vindo de volta!</h3>
          </div>
          <div className={styles.formLogin}>
            <FormLogin />{" "}
          </div>
        </div>
      </main>
    </>
  );
};
