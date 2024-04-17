import { Info } from './componentes/Info';
import { Feedback } from './componentes/feedback';
import { KnowMore } from './componentes/knowMore';
import { Newsletter } from './componentes/newsletter';
import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { Modal } from "../modal-acessibilidade/modal/Modal";
import botaoAcessibilidade from "../modal-acessibilidade/assets/icone-baixa-visao.png";
import Cursor from "./Cursor";
import { useAcessibility } from "../../providers/AccessibilityProvider";
import { useAuth } from '../../providers/AuthProvider';

export const Home: React.FC = () => {
  const { modalAberto, setModalAberto, tipoFonteSerifada, fonteMaior, guiaLeitura } =
    useAcessibility();

  // const { isAuthenticated } = useAuth();

    const navigate = useNavigate();
 
  const toChat = () => {
    navigate("/chat");
  };

  return (
    <>
      {guiaLeitura && <Cursor />}
      {/* {isAuthenticated ?  : null} */}
      <button className='botao-chat-anonimo' onClick={toChat}><img src="icone-chat.png" alt="ícone chat" /></button>
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
        
    </>
  );
};

export default Home;
