import { EyesIcon, TimerIcon } from "../../../../components/Icons";
import { Rating } from "../Rating";
import styles from "./style.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src="./public/cardsCourse/course01.png" alt="capa do curso" />
        <img src="./cardsCourse/logoFull.png" alt="logo corp solution" />
      </div>

      <div className={styles.footer}>
        <Rating />
        <div className={styles.iconContainer}>
          <TimerIcon />
          <span>5h</span>
        </div>
        <div className={styles.iconContainer}>
          <EyesIcon />
          <span>100</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
