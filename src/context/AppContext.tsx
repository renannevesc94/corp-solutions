import { createContext, Dispatch, SetStateAction } from "react";

export interface AppContextProps {
  modalAberto: boolean;
  setModalAberto: Dispatch<SetStateAction<boolean>>;

  tipoFonteSerifada: boolean;
  setTipoFonteSerifada: Dispatch<SetStateAction<boolean>>;

  guiaLeitura: boolean;
  setGuiaLeitura: Dispatch<SetStateAction<boolean>>;

  lupaConteudo: boolean;
  setLupaConteudo: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps | null>(null);
