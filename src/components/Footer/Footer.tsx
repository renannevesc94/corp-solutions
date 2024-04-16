import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={styles.mainContainer}>
      <section className={styles.container}>
        <div className={styles.firstSection}>
          <img src="logo.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <div className={styles.socialMedia}>
            <img src="instagram.png" alt="instagram" />
            <img src="github.png" alt="github" />
            <img src="linkedin.png" alt="linkedin" />
          </div>
        </div>

        <div className={styles.sobreNos}>
          <h4>Sobre nós</h4>
          <ul>
            <a href="#">
              <li>Como nós trabalhamos</li>
            </a>
            <a href="#">
              <li>Blogs</li>
            </a>
            <a href="#">
              <li>Novidade</li>
            </a>
          </ul>
        </div>

        <div className={styles.solucoes}>
          <h4>Soluções</h4>
          <ul>
            <a href="#">
              <li>Inovação</li>
            </a>{" "}
            <a href="#">
              <li>FAQs</li>
            </a>{" "}
            <a href="#">
              <li>Contato</li>
            </a>{" "}
          </ul>
        </div>

        <div className={styles.carreiras}>
          <h4>Carreiras</h4>
          <ul>
            <a href="#">
              <li>Nossas vagas</li>
            </a>
            <a href="#">
              <li>Como mudar</li>
            </a>{" "}
          </ul>

          <h4>Treinamentos</h4>
          <ul>
            <a href="#">
              <li>Evolução</li>
            </a>
          </ul>
        </div>
      </section>
      <section className={styles.direitos}>
        <p>Todos os direitos reservados Corp Solutions</p>
      </section>
    </section>
  );
};
