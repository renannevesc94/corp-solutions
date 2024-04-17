import { Info } from './componentes/Info';
import { Feedback } from './componentes/feedback';
import { KnowMore } from './componentes/knowMore';
import { Newsletter } from './componentes/newsletter';
import React from "react";
import "./style.css";
import { Modal } from "../modal-acessibilidade/modal/Modal";
import botaoAcessibilidade from "../modal-acessibilidade/assets/icone-baixa-visao.png";
import Cursor from "./Cursor";
import { useAcessibility } from "../../providers/AccessibilityProvider";

export const Home: React.FC = () => {
  const { modalAberto, setModalAberto, tipoFonteSerifada, fonteMaior, guiaLeitura } =
    useAcessibility();

  return (
    <>
      {guiaLeitura && <Cursor />}
        <div
          className={`${tipoFonteSerifada ? "serifada" : ""}
            ${fonteMaior ? "fonteGrande" : ""}
          `}
        >
          <div>
            <Info />
            <KnowMore />
            <Newsletter />
            <Feedback />

          </div>
          {modalAberto ? (
            <Modal />
          ) : (
            <button onClick={() => setModalAberto(!modalAberto)} className="botao-acessibilidade">
              <img src={botaoAcessibilidade} alt="icone-fechar" />
            </button>
          )}
        </div>
    </>
  );
};

export default Home;
