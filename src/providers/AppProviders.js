"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/reactQueryClient";
import theme from "../theme/theme";

export default function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
