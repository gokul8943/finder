import * as AuthRepository from "./authRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (
    username: string,
    email: string,
    mobile: string,
    password: string
) => {

    const existingUser = await AuthRepository.findUserByEmailOrMobile(email, mobile);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await AuthRepository.createUser(
        username,
        email,
        mobile,
        hashedPassword
    );

    return user;
};


export const loginUser = async (identifier: string, password: string) => {

    const user = await AuthRepository.findUserByIdentifier(identifier);

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" }
    );

    return {
        user: {
            id: user._id,
            name: user.username,
            email: user.email,
            mobile: user.mobile
        },
        token
    };
};