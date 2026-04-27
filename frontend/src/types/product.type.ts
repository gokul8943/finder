// types/product.types.ts

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  useCase: string;
  [key: string]: unknown;
}

export interface ProductPreferenceParams {
  useCase?: "gaming" | "photography" | "battery" | "balance";
  budget?: string;   // e.g. "10000-30000"
  brand?: string;   
}

export interface ProductPreferenceResponse {
  message: string;
  data: string;
}