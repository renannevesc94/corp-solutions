
import { useGetHirings } from "../../hooks/useGetHirings/use-get-hirings";
import { Vacancy } from "./Vacancy";
import S from "./styles.module.css";

interface VacancyProps {
    nome: string;
    tipo: string;
    id: string;
}

 const Vacancies = () => {
    const { data } = useGetHirings();  

    return(
        <>
            <div className={S.vacancyList}>
                <div className={S.vacancyInfo}>{data && data.length} vagas encontradas</div>
                {data && data.map(({nome, tipo, id}: VacancyProps) => {
                    return <Vacancy key={id} name={nome} type={tipo} />
                })}
            </div>
        </>
    )
}

export { Vacancies };
