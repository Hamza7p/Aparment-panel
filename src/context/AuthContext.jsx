"use client";
import { getRole, getToken, getUser, removeRole, removeToken, removeUser, setRole, setToken, setUser } from "@/utils/methods";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUserState] = useState(null);
  const [role, setRoleState] = useState(null);
  const [token, setTokenState] = useState(null);


  useEffect(() => {
    const storedUser = getUser();
    const storedRole = getRole();
    const storedToken = getToken();

    if (storedUser && storedToken) {
        startTransition(() => {
            setUserState(JSON.parse(storedUser));
            setRoleState(storedRole);
            setTokenState(storedToken);
        })
    }
  }, []);

  // methods to update auth state
  const loginUser = (userData, tokenValue) => {
    const roleName = userData?.roleName || "customer";

    setUserState(userData);
    setRoleState(roleName);
    setTokenState(tokenValue);

    setUser(JSON.stringify(userData));
    setRole(roleName);
    setToken(tokenValue);
  };


  const logoutUser = () => {
    setUserState(null);
    setRoleState(null);
    setTokenState(null);

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
