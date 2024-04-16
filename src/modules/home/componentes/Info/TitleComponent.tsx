import React from 'react';
import S from "./styles.module.css";

const TitleComponent: React.FC = () => {
  return (
    <div className={S.titleContainer}>
      <div className={S.tag}>Diversidade & Inclusão</div>
      <div className={S.title}>Fazemos a festa e te tiramos pra dançar,<br /><strong>se você quiser</strong></div>
      <div className={S.subTitle}>Se inscreva e fique sabendo das nossas novas iniciativas</div>
    </div>
  );
};

export { TitleComponent };
