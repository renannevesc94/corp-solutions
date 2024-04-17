import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

type Props = {
  children: React.ReactNode;
};

export const ProtectedRouter = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} />;
  }

  return children;
};
