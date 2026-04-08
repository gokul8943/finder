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
router.get("/preference", getProductsByPreferences)
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);


export default router;