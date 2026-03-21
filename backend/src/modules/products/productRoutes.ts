import express from "express";
import { deleteProduct, getProductById, getProducts, getProductsByPreferences, updateProduct } from "./productController";

const router = express.Router();


router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);
router.get('/product/preference',getProductsByPreferences)


export default router;