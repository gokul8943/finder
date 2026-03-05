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