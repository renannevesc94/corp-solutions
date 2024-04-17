import { useState } from "react";
import { IconStar } from "../../../../components/Icons";
import styles from "./styles.module.css";

export const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="cardRating">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          className={styles.buttonStar}
          onClick={() => {
            setRating(index + 1);
          }}
        >
          <IconStar
            key={index}
            strokeColor={index < rating ? "#00c375" : "#ccc"}
            fillColor={index < rating ? "#00c375" : "none"}
          />
        </button>
      ))}
    </div>
  );
};
