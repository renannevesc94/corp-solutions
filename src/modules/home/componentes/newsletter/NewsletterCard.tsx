import S from './styles.module.css';

interface CardProps {
  tag: string;
  imageUrl: string;
  isNew: boolean;
  readTime: string;
  title: string;
}

const NewsletterCard: React.FC<CardProps> = ({ tag, imageUrl, isNew, readTime, title }) => {
  return (
    <div className={S.card}>
        <img src={imageUrl} alt={title} />
        <span className={S.tag}>{tag}</span> 
         <div className={S.content}>
            {isNew && <span className={S.new}>Novo</span>}
            <span>{readTime}</span>
            <h3 className={S.title}>{title}</h3>
            <a href="#" className={S.link}>Ler Mais</a>
        </div>
    </div>
  );
};

export { NewsletterCard };
