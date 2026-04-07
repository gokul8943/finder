import express from "express";
import {
    deleteProduct,
    getProductById,
    getProducts,
    getProductsByPreferences,
    updateProduct
} from "./productController";

const router = express.Router();


router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get('/preference', getProductsByPreferences)


export default router;