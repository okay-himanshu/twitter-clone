import { useState, createContext, useContext, useEffect } from "react";
import URL_CONFIG from "../config/url_config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [API_ENDPOINTS] = useState(URL_CONFIG.API_ENDPOINTS);
  const [auth, setAuth] = useState({ user: null, token: "" });

  return (
    <AuthContext.Provider value={[API_ENDPOINTS]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
