import { NewsletterList } from './NewsletterList';
import S from './styles.module.css';

const Newsletter = () => {
  return (
    <section className={S.newsletter}>
      <div className={S.content}>
        <h2>Novidades e Atualizações</h2>
        <p>
            Nós valorizamos sua opinião e queremos ouvi-la! Caso seja crítica, nos ajude
            sugira também uma solução. Juntos, podemos transformar desafios 
        </p>
      </div>
    <NewsletterList />
    </section>
  );
};

export { Newsletter };
