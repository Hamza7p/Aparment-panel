// src/app/dashboard/create-product/page.jsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductForm from "./components/ProductForm";
import { Container, Typography } from "@mui/material";

const queryClient = new QueryClient();

export default function CreateProductPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
          Create New Product
        </Typography>
        <ProductForm />
      </Container>
    </QueryClientProvider>
  );
}
