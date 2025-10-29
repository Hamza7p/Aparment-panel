import { useState, useEffect } from 'react';
import { useMutation } from "@tanstack/react-query";
import { createProduct } from "@/api/useProductAPI";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};



export const useCreateProduct = () => {
  return useMutation({
    mutationFn: createProduct,
  });
};

