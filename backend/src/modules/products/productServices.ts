import * as  productRepository from "./productRepository";


export const getProducts = async (
    page: number,
    limit: number,
    search: string
) => {

    const products = await productRepository.getProducts(page, limit, search);

    return products;
};

export const getProductById = async (id: any) => {
    const product = await productRepository.getProductById(id);
    return product;
}


export const deleteProduct = async (id: any, status: string) => {
    const product = await productRepository.deleteProduct(id, status);
    return product;
}

export const updateProduct = async (id: any, data: any) => {
    const product = await productRepository.updateProduct(id, data);
    return product;
}

export const getProductsByPreference = async (
    price?: string,
    camera?: string,
    storage?: string,
    frontCamera?: string,
    rearCamera?: string,
    brand?: string,
    display?: string
) => {
    return await productRepository.getProductsByPreference(
        price,
        camera,
        storage,
        frontCamera,
        rearCamera,
        brand,
        display
    );
};