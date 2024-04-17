import { createContext, useContext, useState } from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
});

const useAuthBase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("token"));
  const navigate = useNavigate();

  const login = (token: string) => {
    Cookies.set("token", token);
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return {
    login,
    isAuthenticated,
    logout,
  };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useAuthBase();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
