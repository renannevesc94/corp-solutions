import { ReactNode, useState, Dispatch, SetStateAction } from "react";
import { AppContext } from "../context/AppContext";

interface ProviderProps {
  children: ReactNode;
}

interface AppContextProps {
  modalAberto: boolean;
  setModalAberto: Dispatch<SetStateAction<boolean>>;

  tipoFonteSerifada: boolean;
  setTipoFonteSerifada: Dispatch<SetStateAction<boolean>>;

  fonteMaior: boolean;
  setFonteMaior: Dispatch<SetStateAction<boolean>>;

  mascaraLeitura: boolean;
  setMascaraLeitura: Dispatch<SetStateAction<boolean>>;

  guiaLeitura: boolean;
  setGuiaLeitura: Dispatch<SetStateAction<boolean>>;

  lupaConteudo: boolean;
  setLupaConteudo: Dispatch<SetStateAction<boolean>>;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [tipoFonteSerifada, setTipoFonteSerifada] = useState<boolean>(false);
  const [fonteMaior, setFonteMaior] = useState<boolean>(false);
  const [mascaraLeitura, setMascaraLeitura] = useState<boolean>(false);
  const [guiaLeitura, setGuiaLeitura] = useState<boolean>(false);
const [lupaConteudo, setLupaConteudo] = useState<boolean>(false)


  const value: AppContextProps = {
    modalAberto,
    setModalAberto,
    tipoFonteSerifada,
    setTipoFonteSerifada,
    fonteMaior,
    setFonteMaior,
    mascaraLeitura,
    setMascaraLeitura,
    guiaLeitura,
    setGuiaLeitura,
    lupaConteudo,
    setLupaConteudo
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
