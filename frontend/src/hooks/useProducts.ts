import { useQuery } from "@tanstack/react-query";
import { productKeys } from "../utils/queryKey";
import type { ProductPreferenceParams, ProductPreferenceResponse } from "../types/product.type";
import axiosClient from "../constants/axios";


const fetchProductsByPreferences = async (
  params: ProductPreferenceParams
): Promise<ProductPreferenceResponse> => {
  const queryParams: Record<string, string> = {};

  if (params.useCase) queryParams.useCase = params.useCase;
  if (params.budget) queryParams.budget = params.budget;
  if (params.brand) queryParams.brand = params.brand;

  const { data } = await axiosClient.get<ProductPreferenceResponse>(
    "/api/v1/products/preference",
    { params: queryParams }
  );
  return data;
};

export const useProductsByPreferences = (
  params: ProductPreferenceParams,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: productKeys.preference(params),
    queryFn: () => fetchProductsByPreferences(params),
    enabled: options?.enabled ?? false, // manual trigger
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });
};