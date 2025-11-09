"use client";
import { getRole, getToken, getUser, removeRole, removeToken, removeUser } from "@/utils/methods";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(() => {
    const storedUser = getUser();
    const storedRole = getRole();
    const storedToken = getToken();

    if (storedUser && storedToken) {
        startTransition(() => {
            setUser(JSON.parse(storedUser));
            setRole(storedRole);
             setToken(storedToken);
        })
    }
  }, []);

  // methods to update auth state
  const loginUser = (userData, tokenValue) => {
    const roleName = userData?.roleName || "customer";

    setUser(userData);
    setRole(roleName);
    setToken(tokenValue);

    setUser(JSON.stringify(userData));
    setRole(roleName);
    setToken(tokenValue);
  };


  const logoutUser = () => {
    setUser(null);
    setRole(null);
    setToken(null);

    removeUser();
    removeRole();
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ user, role, token, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
