import mongoose, { Schema } from "mongoose";


interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    frontCamera: string;
    rearCamera: Array<string>;
    ram: string;
    storage: string;
    storageType: string;
    refreshRate: string;
    display: string;
    processor: string;
    battery: string;
    os: string;
    category: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}


const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        frontCamera: { type: String, required: true },
        rearCamera: { type: [String], required: true },
        ram: { type: String, required: true },
        storage: { type: String, required: true },
        storageType: { type: String, required: true },
        refreshRate: { type: String, required: true },
        display: { type: String, required: true },
        processor: { type: String, required: true },
        battery: { type: String, required: true },
        os: { type: String, required: true },
        category: { type: String, required: true },
        stock: { type: Number, required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
