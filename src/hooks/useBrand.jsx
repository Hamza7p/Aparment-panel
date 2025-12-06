import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { index, store, show, update, remove } from '../api/Base/stander';
import { brandsApi } from '../api/Base/apis';

// Fetch all
export const useBrands = () => {
  return useQuery({
    queryKey: ['brands'],
    queryFn: index(brandsApi),
    select: (data) => data?.data,
  });
};

// Fetch single 
export const useBrand = (id) => {
  return useQuery({
    queryKey: ['brand', id],
    queryFn: () => show(brandsApi, id),
    enabled: !!id,
    select: (data) => data?.data,
  });
};

// Add 
export const useAddBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({data}) => store(brandsApi, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
};

// Update 
export const useUpdateBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => update(brandsApi, id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['brands', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
};

// Delete 
export const useDeleteBrand = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id}) => remove(brandsApi, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
    },
  });
};
