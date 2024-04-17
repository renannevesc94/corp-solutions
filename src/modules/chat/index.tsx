import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import styles from "./Chat.module.css";
import { NavLink } from "react-router-dom";

export interface iChat {
  chatTitle: string;
  chatMessage: string;
}

export const Chat = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  watch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const chatData = data as iChat;
    const chats: iChat[] = JSON.parse(localStorage.getItem("chats") || "[]");
    chats.push(chatData);
    localStorage.setItem("chats", JSON.stringify(chats));
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSideContent}>
        <NavLink className={styles.nav} to="/">
        <div className={styles.logo}>
          <img src="logo_preto.png" alt="Logo Corp Solutions" />
        </div>
        </NavLink>
        <div className={styles.leftHeading}>
          <h1>Uma Oportunidade para crescer juntos</h1>
        </div>
        <div className={styles.leftParagraph}>
          <p>
            Nós valorizamos sua opinião e queremos ouvi-la! <br />
            Caso seja crítica, nos ajude e sugira também uma solução. Juntos,
            podemos transformar desafios em oportunidades e fortalecer nossa
            equipe.
          </p>
        </div>
      </div>

      <div className={styles.rightSide}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Escreva um título"
            className={styles.formTitle}
            {...register("chatTitle")}
          />
          <textarea
            placeholder="Deixe aqui sua mensagem"
            className={styles.formText}
            {...register("chatMessage")}
          ></textarea>
          <div className={styles.submitButtonContainer}>
            <input
              type="submit"
              value="Enviar mensagem"
              className={styles.formSend}
            />
          </div>
          <br />
          <button type="button" onClick={() => reset()} className={styles.formCancel}>
            Cancelar
          </button>
        </form>
      </div>
      </div>
  );
};
