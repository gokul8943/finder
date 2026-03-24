import userModel from "../../models/userModels";
import generationModel from "../../models/generationModel";

export const getProfile = async (userId: string) => {
    try {
        const user = await userModel.findById(userId).select("-password");
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    catch (error) {
        throw new Error("Failed to retrieve user profile");
    }
}


export const updateProfile = async (userId: string, data: any) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, data, { new: true }).select("-password");
        if (!updatedUser) {
            throw new Error("User not found");
        }
        return updatedUser;
    }
    catch (error) {
        throw new Error("Failed to update user profile");
    }
}


export const saveGeneration = async (data: any) => {
    try {
        const report = await generationModel.create(data)
        return report
    } catch (error) {

    }
}

export const getAllGeneration = async (userId: any) => {
    try {
        const report = await generationModel.find({ createdBy: userId }).sort({ createdAt: -1 });
        return report;
    } catch (error) {
        throw new Error("Failed to fetch generation reports");
    }
}

export const getGenerationById = async (id: any) => {
    try {
        const report = await generationModel.findById(id);
        return report;
    } catch (error) {
        throw new Error("Failed to fetch generation report");
    }
}