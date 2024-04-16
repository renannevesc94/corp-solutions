/* import Carousel from "../Carousel/carousel"; */

import { Rating } from "../Rating";
import styles from "./style.module.css";

type CardProps = {
  id: string;
  imagem: string;
  title: string;
};

function Card({ id, imagem, title }: CardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.content}>
        <img src="./public/cardsCourse/course01.png" alt="capa do curso" />

        <img src="./cardsCourse/logoFull.png" alt="logo corp solution" />
      </div>

      <div className={styles.footer}>
        <Rating />
      </div>
    </section>
  );
}

export default Card;
