import express from "express";
import { getProducts } from "./productController";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProducts);
router.delete("/products/:id", getProducts);
router.put("/products/:id", getProducts);


export default router;