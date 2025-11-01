"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const loginRequest = async (payload) => {
  const { data } = await axios.post("/api/login", payload);
  return data;
};

export function useLogin(options = {}) {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginRequest,
    ...options,
  });
}

