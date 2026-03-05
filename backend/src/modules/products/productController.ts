import { Request, Response } from 'express';
import { AuthRequest } from '../../middleware/Auth';
import * as productService from '../products/productServices';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const search = (req.query.search as string) || "";

        const products = await productService.getProducts(page, limit, search);

        return res.status(200).json({
            message: "Products retrieved successfully",
            data: products
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve products",
            error
        });
    }
};


export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Product with ID ${id} retrieved successfully` });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve product", error });
    }
}

export const deleteProduct = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Product with ID ${id} deleted successfully` });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product", error });
    }
}


export const updateProduct = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({ message: `Product with ID ${id} updated successfully` });
    } catch (error) {
        res.status(500).json({ message: "Failed to update product", error });
    }
}