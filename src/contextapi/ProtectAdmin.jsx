import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

const ProtectAdmin = ({ children }) => {
    const { status, userinfo, loading } = useAuth();

    if (loading) return null; 
    if (!status) return <Navigate to="/registration/login" replace />; 
    if (userinfo?.role !== "admin") return <Navigate to="/" replace />; 
    return children; 
};

export default ProtectAdmin;
