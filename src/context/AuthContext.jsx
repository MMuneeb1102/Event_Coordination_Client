import { createContext, useContext, useState, useEffect } from "react";
import React from "react";
const AuthContext = createContext();
import Cookies from 'universal-cookie'
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const cookies = new Cookies()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  useEffect(() => {
    const token = cookies.get("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, showAlert, setShowAlert }}>
      {children}
    </AuthContext.Provider>
  );
};
