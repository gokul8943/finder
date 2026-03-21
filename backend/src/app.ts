import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import authRoutes from "./modules/auth/authRoutes"
import productRoutes from "./modules/products/productRoutes";
import userRoutes from "./modules/user/userRoutes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth/v1', authRoutes)
app.use('/api/products/v1', productRoutes)
app.use('/api/user/v1', userRoutes)

export default app;