import { Request, Response } from 'express';
import { AuthRequest } from '../../middleware/Auth';
import * as productService from '../products/productServices';
import { pickBestSmartPhoneService } from '../../services/geminiServices';

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
        const product = await productService.getProductById(id);
        res.status(200).json({ message: `Product with ID ${id} retrieved successfully`, data: product });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve product", error });
    }
}

export const deleteProduct = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const product = await productService.deleteProduct(id, status);
        res.status(200).json({ message: `Product with ID ${id} deleted successfully`, product });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete product", error });
    }
}


export const updateProduct = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const product = await productService.updateProduct(id, data);
        res.status(200).json({ message: `Product with ID ${id} updated successfully`, product });
    } catch (error) {
        res.status(500).json({ message: "Failed to update product", error });
    }
}

export const getProductsByPreferences = async (req: Request, res: Response) => {
    try {
        const { useCase, budget, brand } = req.query as {
            useCase?: string;   // gaming | photography | battery| balance
            budget?: string;    // e.g. "10000-30000"
            brand?: string;     // e.g. "Samsung"
        };
        console.log(req.query);
        

        const products = await productService.getProductsByPreference(useCase, budget, brand);
        console.log('products',products);
        
        const aiResponse = await pickBestSmartPhoneService(req.query, products);

        res.status(200).json({
            message: "Products retrieved successfully based on user preferences",
            data: aiResponse,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve products based on user preferences",
            error,
        });
    }
};