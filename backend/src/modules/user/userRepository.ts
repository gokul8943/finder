import userModel from "../../models/userModels";

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