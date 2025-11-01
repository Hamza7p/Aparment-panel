"use client";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const signUpRequest = async (payload) => {
  const { data } = await axios.post("/api/signup", payload);
  return data;
};

export function useSignUp(options = {}) {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: signUpRequest,
    ...options,
  });
}

