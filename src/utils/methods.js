import Cookies from "js-cookie";

// token
export const getToken = () => Cookies.get('token');
export const setToken = (token, rememberMe) => Cookies.set("token", token, {
  expires: rememberMe ? 7 : undefined,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
});
export const removeToken = () => Cookies.remove('token');


// user
export const getUser = () => localStorage.getItem("user");
export const setUser = (user) => localStorage.setItem("user", JSON.stringify(user));
export const removeUser = () => localStorage.removeItem("user");

// role
export const getRole = () => localStorage.getItem("role");
export const setRole = (role) => localStorage.setItem("role", role);
export const removeRole = () => localStorage.removeItem("role");