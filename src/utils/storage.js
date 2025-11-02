import Cookies from "js-cookie";

// token
export const getToken = () => Cookies.get('token');
export const setToken = (token, rememberMe) => Cookies.set("token", token, {
  expires: rememberMe ? 7 : undefined,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
});
export const removeToken = () => Cookies.remove('token');
