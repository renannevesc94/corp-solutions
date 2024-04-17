
import { Vacancy } from './Vacancy';
import S from './styles.module.css';

const list = [
    {
        nome: "Analista de CRM - Júnior",
        tipo: "remoto",
        local: "São Paulo",
        area: "front-end",
        afirmativa: "PCD",
        id: "1"
    },
    {
        nome: "Analista de CRM - Júnior",
        tipo: "remoto",
        local: "São Paulo",
        area: "front-end",
        afirmativa: "PCD",
        id: "2"
    }
]

const Vacancies = () => {
    return(
        <>
            <div className={S.vacancyList}>
                {list.map(({nome, tipo, id}) => {
                    return <Vacancy key={id} name={nome} type={tipo} />
                })}
            </div>
        </>
    )
}

export { Vacancies }