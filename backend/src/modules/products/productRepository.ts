import productModel from "../../models/productModel";

export const getProducts = async (
    page: number,
    limit: number,
    search: string
) => {
    const skip = (page - 1) * limit;
    const query = search
        ? { name: { $regex: search, $options: "i" } }
        : {};

    const products = await productModel
        .find(query)
        .skip(skip)
        .limit(limit);

    return products;
};

export const getProductById = async (id: string) => {
    const product = await productModel.findById(id);
    return product;
}

export const deleteProduct = async (id: string, status: string) => {
    const product = await productModel.findByIdAndUpdate(id, { status }, { new: true });
    return product;
}

export const updateProduct = async (id: string, data: any) => {
    const product = await productModel.findByIdAndUpdate(id, data);
    return product;
}