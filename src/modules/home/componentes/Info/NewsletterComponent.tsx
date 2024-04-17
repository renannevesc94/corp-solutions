import React from 'react';
import S from "./styles.module.css";

const NewsletterComponent: React.FC = () => {
  return (
    <div className={S.newsletterContainer}>
      <input type="text" placeholder='Digite seu email'/>
      <button>Ir</button>
    </div>
  );
};

export { NewsletterComponent };
