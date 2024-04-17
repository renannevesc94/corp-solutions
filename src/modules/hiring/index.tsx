import { Fullbanner } from "./components/fullbanner";
import { Info } from "./components/info";
import { Vacancies } from "./components/vacancies";
import { useGetHirings } from "./hooks/useGetHirings/use-get-hirings";
import S from "./styles.module.css";

const Hiring = () => {
  const { data } = useGetHirings();
  console.log(data);

  return (
    <div className={S.hiringPage}>
      <Fullbanner />
      <Info />
      <Vacancies />
    </div>
  );
};
export { Hiring };
