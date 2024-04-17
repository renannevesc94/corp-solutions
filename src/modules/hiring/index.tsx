import { Fullbanner } from "./components/fullbanner";
import { Info } from "./components/info";
import { Vacancies } from "./components/vacancies";
import S from "./styles.module.css";

const Hiring = () => { 

  return (
    <div className={S.hiringPage}>
      <Fullbanner />
      <Info />
      <Vacancies />
    </div>
  );
};
export { Hiring };
