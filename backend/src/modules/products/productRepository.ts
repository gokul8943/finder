import productModel from "../../models/productModel";

export const getProducts = async (page: number, limit: number, search: string) => {
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

export const getProductsByPreference = async (
    price?: string,
    camera?: string,
    storage?: string,
    frontCamera?: string,
    rearCamera?: string,
    brand?: string,
    display?: string
) => {
    const filter: any = {};

    if (price) {
        const [min, max] = price.split("-").map(Number);
        filter.price = { $gte: min, $lte: max };
    }

    if (camera === "high") {
        filter.rearCamera = { $gte: 50 };
    }

    if (frontCamera) {
        filter.frontCamera = { $gte: Number(frontCamera) };
    }

    if (rearCamera) {
        filter.rearCamera = { $gte: Number(rearCamera) };
    }

    if (storage) {
        filter.storage = { $gte: Number(storage) };
    }

    if (brand) {
        filter.brand = brand;
    }

    if (display) {
        filter.display = { $gte: Number(display) };
    }

    const products = await productModel.find(filter);

    return products;
};