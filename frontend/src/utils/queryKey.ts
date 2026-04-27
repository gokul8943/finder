import type { ProductPreferenceParams } from "../types/product.type";

export const productKeys = {
  all: ["products"] as const,
  preferences: () => [...productKeys.all, "preferences"] as const,
  preference: (params: ProductPreferenceParams) =>
    [...productKeys.preferences(), params] as const,
};