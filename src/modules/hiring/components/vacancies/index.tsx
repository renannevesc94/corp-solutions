import { useState } from "react";
import S from "./styles.module.css";

const Vacancies = () => {
  const [vacanciesList, setVacanciesList] = useState("");
  return <div className={S.infoContainer}></div>;
};

export { Vacancies };
