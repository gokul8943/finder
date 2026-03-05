import { Request } from "express";
import * as  productRepository from "./productRepository";


export const getProducts = async (
    page: number,
    limit: number,
    search: string
) => {

    const products = await productRepository.getProducts(page, limit, search);

    return products;
};