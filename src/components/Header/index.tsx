/* import { useAuth } from "../../providers/AuthProvider"; */
import { useAcessibility } from "../../providers/AccessibilityProvider";
import { Button } from "../Button";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  ///RETORNA TRUE SE O USUÁRIO ESTÁ LOGADO
  /* const { isAuthenticated } = useAuth(); */
  const {tipoFonteSerifada, fonteMaior } =
  useAcessibility();

  const toLogin = () => {
    navigate("/auth");
  };

  return (
    <div className={styles.headerContainer}>
    <header className={`${styles.header} ${tipoFonteSerifada ? "serifada" : ""} ${fonteMaior ? "fonteGrande" : ""}`}>
      <NavLink to="/">
        <img src="logo.png" alt="" />
      </NavLink>
      <ul>
        <a href="#">
          <li>Sobre nós</li>
        </a>
        <a href="#">
          <li className={styles.list}>Soluções</li>
        </a>
        <a href="#">
          <li className={styles.list}>Carreiras</li>
        </a>
        <a href="#">
          <li className={styles.list}>Treinamentos</li>
        </a>
      </ul>
      <div className={styles.navigate}>
        <div className={styles.searchBox}>
          <img src="lupa.png" alt="" />
          <input type="text" name="" id="" placeholder="Buscar..." />
        </div>
        <div className={styles.containerEntrar} >
                  <Button className={styles.entrar} onClick={toLogin} variant={"primary"} isLoading={false}>Entrar</Button>
        </div>
      </div>
    </header>
    </div>
  );
};
