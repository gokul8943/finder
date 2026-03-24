
import * as userRepository from "./userRepository";

export const getProfile = async (userId: string) => {
    const profile = await userRepository.getProfile(userId);
    return profile;
}

export const updateProfile = async (userId: string, data: any) => {
    const updatedProfile = await userRepository.updateProfile(userId, data);
    return updatedProfile;
}


export const saveGeneration = async (data: any) => {
    const createReport = await userRepository.saveGeneration(data)
    return createReport
}

export const getAllGeneration = async(userId: any) => {
    const report = await userRepository.getAllGeneration(userId)
    return report
}

export const getGenerationById = async(id: any) => {
    const report = await userRepository.getGenerationById(id)
    return report
}