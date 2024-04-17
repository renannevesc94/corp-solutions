import { createContext, useContext, useState } from "react";

type AcessibilityContextType = {
  modalAberto: boolean;
  setModalAberto: React.Dispatch<React.SetStateAction<boolean>>;
  tipoFonteSerifada: boolean;
  setTipoFonteSerifada: React.Dispatch<React.SetStateAction<boolean>>;
  fonteMaior: boolean;
  setFonteMaior: React.Dispatch<React.SetStateAction<boolean>>;
  guiaLeitura: boolean;
  setGuiaLeitura: React.Dispatch<React.SetStateAction<boolean>>;
  lupaConteudo: boolean;
  setLupaConteudo: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AcessibilityContext = createContext<AcessibilityContextType>({
  modalAberto: false,
  setModalAberto: () => {},
  setTipoFonteSerifada: () => {},
  tipoFonteSerifada: false,
  fonteMaior: false,
  setFonteMaior: () => {},
  guiaLeitura: false,
  setGuiaLeitura: () => {},
  lupaConteudo: false,
  setLupaConteudo: () => {},
});

const useAppContextBase = () => {
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [tipoFonteSerifada, setTipoFonteSerifada] = useState<boolean>(false);
  const [fonteMaior, setFonteMaior] = useState<boolean>(false);
  const [mascaraLeitura, setMascaraLeitura] = useState<boolean>(false);
  const [guiaLeitura, setGuiaLeitura] = useState<boolean>(false);
  const [lupaConteudo, setLupaConteudo] = useState<boolean>(false);

  return {
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
    setLupaConteudo,
  };
};

export const AcessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useAppContextBase();
  return <AcessibilityContext.Provider value={value}>{children}</AcessibilityContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAcessibility = () => {
  const context = useContext(AcessibilityContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
