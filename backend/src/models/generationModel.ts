import mongoose, { Schema } from "mongoose";


export interface IGeneration extends Document {
    name: string;
    image: string;
    updateBy: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const generationSchema = new mongoose.Schema<IGeneration>(
    {
        name: { type: String, required: true, trim: true },
        image: { type: String, required: true },
        updateBy: { type: Schema.Types.ObjectId, ref: 'User' },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const generationModel = mongoose.model<IGeneration>("Generation", generationSchema);

export default generationModel;
