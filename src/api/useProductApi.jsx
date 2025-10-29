// src/app/dashboard/create-product/hooks/useProductAPI.js
import axiosInstance from "./axiosInstance";

export const createProduct = async (data) => {
  const response = await axiosInstance.post("/create-product", data);
  return response.data;
};
