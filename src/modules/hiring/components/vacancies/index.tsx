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

  return (
    <>
      <div className={S.vacancyList}>
        <input
          className={S.inputPesquisaVaga}
          placeholder="Digite o nome da vaga"
        ></input>
                <div className={S.vagasFiltros}>
        <div className={S.selectVagas}>
          <label htmlFor="tipo">Tipo de vaga</label>
          <select name="tipo" id="tipo" className={S.filtroVagaTipo}>
            <option value="Todas">Todas</option>
          </select>
        </div>
        <div className={S.selectVagas}>
          <label htmlFor="tipo">Locais de trabalho</label>
          <select name="tipo" id="tipo" className={S.filtroVagaTipo}>
            <option value="Todas">Todas</option>
          </select>
        </div>
        <div className={S.selectVagas}>
          <label htmlFor="tipo">Áreas</label>
          <select name="tipo" id="tipo" className={S.filtroVagaTipo}>
            <option value="Todas">Todas</option>
          </select>
        </div>
        <div className={S.selectVagas}>
          <label htmlFor="tipo">Vagas afirmativas</label>
          <select name="tipo" id="tipo" className={S.filtroVagaTipo}>
            <option value="Todas">Todas</option>
          </select>
        </div>
        </div>
        <div className={S.vacancyInfo}>
          {data && data.length} vagas encontradas
        </div>
        {data &&
          data.map(({ nome, tipo, id }: VacancyProps) => {
            return <Vacancy key={id} name={nome} type={tipo} />;
          })}
      </div>
    </>
  );
};

export { Vacancies };
