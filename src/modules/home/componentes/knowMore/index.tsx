import { NavLink } from 'react-router-dom';
import S from './styles.module.css';

const KnowMore = () => {
  return (
    <section className={S.section}>
      <div className={S.imageContainer}>
        <img src="knowmore.png" alt="" />
      </div>
      <div className={S.content}>
        <h2>Do recrutamento à gestão de desempenho, cuidamos de tudo em RH</h2>
        <p>Oferecemos serviços abrangentes de RH, do recrutamento à gestão de desempenho, garantindo o sucesso e a eficiência de sua equipe.</p>
        <div className={S.buttons}>
          <NavLink to={"/recrutamento"}>
            <button className={S.button}>Quero</button>
          </NavLink>
          <NavLink to={"/recrutamento"}>
            <button className={S.button}>Saber Mais</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export { KnowMore };
