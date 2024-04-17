import React from 'react';
import S from './styles.module.css';
import { NewsletterCard } from './NewsletterCard';
import { newsletterItems } from '../../../../mocks/home';

const NewsletterList: React.FC = () => {
    
    return (
        <div className={S.list}>
            {newsletterItems.map((item, index) => (
                <NewsletterCard key={index} {...item} />
            ))}
        </div>
    );
};

export { NewsletterList };

