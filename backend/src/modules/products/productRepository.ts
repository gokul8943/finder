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
    useCase?: string,
    budget?: string,
    brand?: string
) => {
    const filter: any = { status: "active" };

    // ── Budget filter ─────────────────────────────────────────────
    if (budget) {
        const [min, max] = budget.split("-").map(Number);
        filter.$expr = {
            $and: [
                { $gte: [{ $toDouble: "$price" }, min] },
                { $lte: [{ $toDouble: "$price" }, max] },
            ],
        };
    }

    // ── Brand filter ──────────────────────────────────────────────
    if (brand) {
        // ✅ String pattern + $options instead of /regex/i literal
        filter.brand = { $regex: brand, $options: "i" };
    }

    // ── Use-case filter ───────────────────────────────────────────
    if (useCase) {
        switch (useCase.toLowerCase()) {

            case "gaming":
                filter.ram = { $regex: "\\b([89]|1[0-9]|[2-9][0-9])\\s*GB", $options: "i" };
                filter.refreshRate = { $regex: "\\b(90|120|144|165|240)\\s*Hz", $options: "i" };
                break;

            case "photography":
                filter.rearCamera = {
                    $elemMatch: { $regex: "\\b([5-9][0-9]|[1-9][0-9]{2,})\\s*MP", $options: "i" },
                };
                break;

            case "battery":
                filter.battery = { $regex: "\\b([5-9][0-9]{3}|[1-9][0-9]{4,})\\s*mAh", $options: "i" };
                break;

            case "balance":
                filter.ram = { $regex: "\\b([6-9]|1[0-9]|[2-9][0-9])\\s*GB", $options: "i" };
                filter.battery = { $regex: "\\b(4[5-9][0-9]{2}|[5-9][0-9]{3}|[1-9][0-9]{4,})\\s*mAh", $options: "i" };
                filter.refreshRate = { $regex: "\\b(60|90|120|144|165|240)\\s*Hz", $options: "i" };
                break;

            default:
                break;
        }
    }

    const products = await productModel.find(filter).sort({ field: -1 }).limit(10);

    if (products.length === 0 && useCase) {
        console.warn(`No products for useCase="${useCase}", falling back to brand/budget only`);
        const fallbackFilter: any = { status: "active" };
        if (filter.$expr) fallbackFilter.$expr = filter.$expr;
        if (filter.brand) fallbackFilter.brand = filter.brand;
        return await productModel.find(fallbackFilter).limit(10);
    }

    return products;
};

