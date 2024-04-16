import { TitleComponent } from './TitleComponent';
import { NewsletterComponent } from './NewsletterComponent';
import { InfoListComponent } from './InfoListComponent';
import S from "./styles.module.css";

export const Info = () => {
  return (
    <section className={S.containerBg}>
      <div className={S.container}>
        <TitleComponent />
        <NewsletterComponent />
        <InfoListComponent />
      </div>
    </section>
  );
};
