
import * as userRepository from "./userRepository";

export const getProfile = async (userId: string) => {
    const profile = await userRepository.getProfile(userId);
    return profile;
}