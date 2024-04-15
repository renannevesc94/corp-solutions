import { createContext, useContext } from "react";

import Cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";

interface AuthContextType {
  login: (token: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  login: () => {},
});

const useAuthBase = () => {
  const navigate = useNavigate();
  const login = (token: string) => {
    Cookies.set("token", token);
    navigate("/");
  };

  return {
    login,
  };
};

export const AuthProvider = () => {
  const value = useAuthBase();
  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
