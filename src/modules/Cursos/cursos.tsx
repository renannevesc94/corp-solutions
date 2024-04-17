import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header";
import Banner from "./components/Banner/banner";
import Card from "./components/Card/card";
import styles from "./styles.module.css";

export const Cursos = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className={styles.banners}>
        <div className={styles.header}>
          <h2>Combatendo o preconceito dentro da empresa</h2>
        </div>
        <div className={styles.carousel}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className={styles.header}>
          <h2>Trilha diversidade</h2>
        </div>
        <div className={styles.carousel}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className={styles.header}>
          <h2>Trilha inclusão</h2>
        </div>
        <div className={styles.carousel}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className={styles.header}>
          <h2>Benefícios da diversidade</h2>
        </div>
        <div className={styles.carousel}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};
