import React from 'react';
import S from "./styles.module.css";

interface InfoItemProps {
  number: string;
  title: string;
  text: string;
}

const InfoItemComponent: React.FC<InfoItemProps> = ({ number, title, text }) => {
  return (
    <div className={S.infoItem}>
      <span className={S.infoTitle}>{number +  ".  " + title}</span>
      <span className={S.infoBar}></span>
      <span className={S.infoText}>{text}</span>
    </div>
  );
};

export { InfoItemComponent };
