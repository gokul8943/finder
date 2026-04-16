import { useQuery } from "@tanstack/react-query";
import axios from '../../constants/axios'

export const useProduct = (id: string) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const response = await axios.get(`/products/${id}`);
            return response.data;
        }
    });

    return { data, isLoading, error };
}