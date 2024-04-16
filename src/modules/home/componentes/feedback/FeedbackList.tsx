import React from 'react';
import S from './styles.module.css';
import { FeedbackCard } from './FeedbackCard';
import { feedbackItems } from '../../../../mocks/home';

const FeedbackList: React.FC = () => {
  return ( 
    <div className={S.list}>
      {feedbackItems.map((item, index) => (
        <FeedbackCard key={index} {...item} />
      ))}
    </div>
  );
};

export { FeedbackList };
