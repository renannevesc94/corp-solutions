// Home.tsx
import React from "react";

import "./style.css";
import { Modal } from "../modal-acessibilidade/modal/Modal";
import botaoAcessibilidade from "../modal-acessibilidade/assets/icone-baixa-visao.png";
import Cursor from "./Cursor";
import LupaConteudo from "./LupaConteudo";
import { useAcessibility } from "../../providers/AccessibilityProvider";

export const Home: React.FC = () => {
  const { modalAberto, setModalAberto, tipoFonteSerifada, fonteMaior, guiaLeitura } =
    useAcessibility();

  return (
    <>
      {guiaLeitura && <Cursor />}
      <LupaConteudo>
        <div
          className={`${tipoFonteSerifada ? "serifada" : ""}
            ${fonteMaior ? "fonteGrande" : ""}
          `}
        >
          <div>
            <h1>home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchaetraset sheetstook a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centurie Ipsum.
            </p>
          </div>
          {modalAberto ? (
            <Modal />
          ) : (
            <button onClick={() => setModalAberto(!modalAberto)} className="botao-acessibilidade">
              <img src={botaoAcessibilidade} alt="icone-fechar" />
            </button>
          )}
        </div>
      </LupaConteudo>

      <h1>HOME</h1>
    </>
  );
};

export default Home;
