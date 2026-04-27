// services/productService.ts

import axiosClient from "../../constants/axios";
import type { ProductPreferenceParams, ProductPreferenceResponse } from "../../types/product.type";

export const fetchProductsByPreferences = async (
    params: ProductPreferenceParams
): Promise<ProductPreferenceResponse> => {
    const { data } = await axiosClient.get<ProductPreferenceResponse>(
        "/products/preferences",
        { params }
    );
    return data;
};