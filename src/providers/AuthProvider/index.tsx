import { createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

//TIPAGEM DO CONTEXT
interface AuthContextType {
  login: (token: string) => void;
}

//CRIANDO O CONTEXT
const AuthContext = createContext<AuthContextType>({
  login: () => {},
});

//BASE COM OS MÉTODOS E VALORES QUE VÃO ESTAR DISPONÍVEIS NO CONTEXT
const useAuthBase = () => {
  const navigate = useNavigate();

  const login = (token: string) => {
    Cookies.set("token", token);
    navigate("/home");
  };

  return {
    login,
  };
};

//CRIANDO O PROVIDER E RECEBENDO UM "FILHO" JÁ ENVOLVIDO NELE
export const AuthProvider = () => {
  const value = useAuthBase();
  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};

//CRIANDO UM HOOK PARA CONSUMO DO CONTEXT
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
