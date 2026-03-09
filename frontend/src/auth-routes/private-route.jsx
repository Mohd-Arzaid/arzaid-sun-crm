import { useAuthStore } from "@/store/auth-store";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  return token ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
