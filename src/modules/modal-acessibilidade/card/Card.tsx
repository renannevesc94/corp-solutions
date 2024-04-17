import { ButtonHTMLAttributes, useState } from "react";

import { useAcessibility } from "../../../providers/AccessibilityProvider";

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ferramenta: {
    icone: string;
    nome: string;
    estado: boolean;
  };
}
export function Card({ ferramenta, ...props }: CardProps) {
  const {
    tipoFonteSerifada,
    setTipoFonteSerifada,
    fonteMaior,
    setFonteMaior,
    guiaLeitura,
    setGuiaLeitura,
  } = useAcessibility();

  const [ativado, setAtivado] = useState(ferramenta.estado);

  const ativaFerramenta = () => {
    setAtivado(!ativado);
    ativaFerramentaNome(ferramenta.nome);
  };

  const ativaFerramentaNome = (nome: string) => {
    if (nome === "Tipo de fonte") {
      setTipoFonteSerifada(!tipoFonteSerifada);
    }
    if (nome === "Tamanho de fonte") {
      setFonteMaior(!fonteMaior);
    }
    if (nome === "Guia de Leitura") {
      setGuiaLeitura(!guiaLeitura);
    }
  };

  return (
    <button
      {...props}
      onClick={ativaFerramenta}
      className={`botao-card ${ativado ? "ativado" : ""}`}
    >
      <img
        src={ferramenta.icone}
        alt={ferramenta.nome}
        className={`icone-ferramenta ${ativado ? "icone-branco" : ""}`}
      />
      <span className={`nome-ferramenta ${ativado ? "ativado" : ""}`}>{ferramenta.nome}</span>
      <span className={`estado-ferramenta ${ativado ? "ativado" : ""}`}>
        {ativado ? "Ativado" : "Desativado"}
      </span>
    </button>
  );
}
