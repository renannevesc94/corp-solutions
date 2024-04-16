import React from 'react';
import { InfoItemComponent } from './InfoItemComponent';
import S from "./styles.module.css";
import { infoItems } from '../../../../mocks/home';

const InfoListComponent: React.FC = () => {
  

  return (
    <div className={S.infoList}>
      {infoItems.map(([key, title, subtitle]) => (
        <InfoItemComponent key={key} number={key} title={title} text={subtitle} />
      ))}
    </div>
  );
};

export { InfoListComponent };
