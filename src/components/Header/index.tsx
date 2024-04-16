import { useAuth } from "../../providers/AuthProvider";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  ///RETORNA TRUE SE O USUÁRIO ESTÁ LOGADO
  const { isAuthenticated } = useAuth();

  return (
    <header className={styles.header}>
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
        <div className={styles.entrar} onClick={() => {}}>
          Entrar
        </div>
      </div>
    </header>
  );
};
