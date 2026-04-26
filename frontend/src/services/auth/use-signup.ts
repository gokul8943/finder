import axios from  '../../constants/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useSignUp = (id: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const response = await axios.post(`/products/${id}`);
            return response.data;
        }
    });

    return { data, isLoading, error };
}