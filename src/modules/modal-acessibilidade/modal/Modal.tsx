import "./style.css";
import iconeFechar from "../../modal-acessibilidade/assets/icone-fechar.png";
import logotipo from "../../modal-acessibilidade/assets/logotipo.png";
import iconeTamanhoFonte from "../../modal-acessibilidade/assets/icone-tamanho-fonte.png";
import iconeTipoFonte from "../../modal-acessibilidade/assets/icone-tipo-fonte.png";
import iconeGuiaLeitura from "../../modal-acessibilidade/assets/icone-guia-leitura.png";

import { Card } from "../card/Card";
import { useAcessibility } from "../../../providers/AccessibilityProvider";

export const Modal = () => {
  const { modalAberto, setModalAberto } = useAcessibility();

  const controleTexto = [
    { icone: iconeTamanhoFonte, nome: "Tamanho de fonte", estado: false },
    { icone: iconeTipoFonte, nome: "Tipo de fonte", estado: false },
  ];
  const controleLeitura = [
    { icone: iconeGuiaLeitura, nome: "Guia de Leitura", estado: false },
  ];

  return (
    <>
      <div className="container-modal">
        <div className="content-modal">
          <div className="container-header-modal">
            <div className="content-header-modal">
              <img src={logotipo} alt="logotipo corp solutions" className="logotipo" />

              <button onClick={() => setModalAberto(!modalAberto)} className="botao-fechar">
                <img src={iconeFechar} alt="icone-fechar" className="icone-fechar" />
              </button>
            </div>
          </div>
          <h4 className="titulo-ferramenta">Controle de texto</h4>
          {controleTexto.map((item, index) => (
            <Card key={index} ferramenta={item} />
          ))}
          <h4 className="titulo-ferramenta">Auxílio de leitura</h4>
          {controleLeitura.map((item, index) => (
            <Card key={index} ferramenta={item} />
          ))}
        </div>
      </div>
    </>
  );
};
