import { useAuthStore } from "@/store/auth-store";
import { Navigate } from "react-router-dom";

const OpenRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  return token ? <Navigate to="/dashboard" replace /> : children;
};

export default OpenRoute;