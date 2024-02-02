import { useState, useEffect, createContext, useContext } from "react";
import { navigateTo } from "../utils/navigate";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parse = JSON.parse(data);
      setAuth({
        ...auth,
        user: parse.user,
        token: parse.token,
      });
    }
  }, []);

  // logout
  const handleLogout = () => {
    const ask = window.confirm("Do you really want to logout?");
    if (!ask) return;
    if (ask) {
      localStorage.removeItem("auth");
      setAuth(null);
      navigateTo("/signup_login");
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
