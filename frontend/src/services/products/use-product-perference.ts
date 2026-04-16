import axios from '../../constants/axios'
import { useMutation } from "@tanstack/react-query";

export const useProductPreference = (productId: string) => {
    const mutation = useMutation({
        mutationFn: async (preference: string) => {
            const response = await axios.put(`/products/${productId}/preference`, { preference });
            return response.data;
        }
    });
    return mutation;
}

