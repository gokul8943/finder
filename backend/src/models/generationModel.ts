import mongoose, { Schema } from "mongoose";


export interface IGeneration extends Document {
    name: string;
    products: string[];
    recommendation: string,
    createdBy: mongoose.Types.ObjectId
    createdAt: Date;
    updatedAt: Date;
}

const generationSchema = new mongoose.Schema<IGeneration>(
    {
        name: { type: String, required: true, trim: true },
        products: [{ type: String, required: true }],
        recommendation: { type: String, required: true },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const generationModel = mongoose.model<IGeneration>("Generation", generationSchema);

export default generationModel;
