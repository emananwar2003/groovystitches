import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [status, setstatus] = useState(false);
    const [userinfo, setuserinfo] = useState(null);
    const [loading, setLoading] = useState(true);


    const login = (user) => {
        const { id } = user;
        setuserinfo(user);
        setstatus(true);
        localStorage.setItem("id", id);
    };



    useEffect(() => {
        const storedId = localStorage.getItem("id");
        if (storedId) {
            setuserinfo({ id: storedId });
            setstatus(true);
        }
        setLoading(false);
    }, []);


    const logout = () => {
        localStorage.removeItem("id");
        setuserinfo(null);
        setstatus(false);
    };

    return (
        <AuthContext.Provider value={{ status, setstatus, userinfo, setuserinfo, logout , login , loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);