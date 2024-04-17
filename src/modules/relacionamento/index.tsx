import styles from "./Relacionamento.module.css";
import { iChat } from "../chat";
export const Relacionamento = () => {
  const chatsJson = localStorage.getItem("chats");
  const chats = chatsJson ? JSON.parse(chatsJson) : [];

  return (
    <section className={styles.masterContainer}>
      <h1>Central de sugestões</h1>
      <article className={styles.feedbackContainer}>
        {chats.map((chat: iChat) => {
          return (
            <div className={styles.feedback} key={chat.chatTitle}>
              <div className={styles.anonimo}>
                <img src="profile.png" alt="perfil anônimo" />
                <p>comentário anônimo</p>
              </div>
              <h2>{chat.chatTitle}</h2>
              <div className={styles.quotation}>
                <img src="quotation.png" alt="aspas" />
                {chat.chatMessage}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};
