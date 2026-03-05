import mongoose, { Schema } from "mongoose";


interface IProduct extends Document {
    name: string;
    description: string;
    price: string;
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
    status?: string;
    updateBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
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
        updateBy: { type: Schema.Types.ObjectId, ref: 'User' },
        status: { type: String, enum: ['active', 'inactive'], default: 'active' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
