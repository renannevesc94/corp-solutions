/* import Carousel from "../Carousel/carousel"; */

import { EyesIcon, TimerIcon } from "../../../../components/Icons";
import { Rating } from "../Rating";
import styles from "./style.module.css";

/* type CardProps = {
  id: string;
  imagem: string;
  title: string;
};
 */
function Card() {
  return (
    <section className={styles.card}>
      <div className={styles.content}>
        <img src="./public/cardsCourse/course01.png" alt="capa do curso" />
        <img src="./cardsCourse/logoFull.png" alt="logo corp solution" />
      </div>

      <div className={styles.footer}>
        <div>
          <Rating />
        </div>
        <div>
          <TimerIcon /> <span>5h</span>
        </div>
        <div>
          <EyesIcon /> <span>100</span>
        </div>
      </div>
    </section>
  );
}

export default Card;
