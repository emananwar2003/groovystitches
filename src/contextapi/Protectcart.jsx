import { useAuth } from "./Authcontext";
import { Navigate } from "react-router-dom";

const Protectcart = ({ children }) => {
  const { status, loading } = useAuth();
  if (loading) return null;
  return status ? children : <Navigate to="/registration/login" replace />;
};

export default Protectcart;
