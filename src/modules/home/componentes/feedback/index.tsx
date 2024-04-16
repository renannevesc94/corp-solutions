
import S from './styles.module.css';
import { FeedbackList } from './FeedbackList';

FeedbackList
const Feedback: React.FC = () => {
  return (
    <section className={S.feedback}>
      <div className={S.content}>
        <h2>Nossos feedbacks</h2>
        <p>
          Oferecemos serviços abrangentes de RH, do recrutamento à gestão de
          desempenho, garantindo o sucesso e a eficiência de sua equipe.
        </p>
      </div>
      <FeedbackList />
    </section>
  );
};

export { Feedback };
