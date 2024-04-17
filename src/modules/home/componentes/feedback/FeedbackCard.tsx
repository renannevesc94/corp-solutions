import React from 'react';
import S from './styles.module.css';

interface FeedbackCardProps {
  imageUrl: string;
  role: string;
  name: string;
  comment: string;
  date: string;
  rating: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ imageUrl, role, name, comment, date, rating }) => {
  return (
    <div className={S.card}>
      <div className={S.cardTop}>
        <img className={S.image} src={imageUrl} alt={name} />
        <div className={S.content}>
          <h3 className={S.name}>{name}</h3>
          <span className={S.role}>{role}</span>
        </div>
        <img src="quotation.svg" alt="aspas" />
      </div>
      <p className={S.comment}>{comment}</p>
      <div className={S.info}>
        <span className={S.rating}><img src="./rating_home.svg" alt="star" />{rating}</span>
        <span className={S.date}>{date}</span>
      </div>
    </div>
  );
};

export { FeedbackCard };
