import { Request, Response } from 'express';
import { AuthRequest } from '../../middleware/Auth';





export const getProducts = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Products retrieved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve products", error });
    }
}


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