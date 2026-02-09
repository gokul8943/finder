import { Request, Response } from "express";
import userModel from "../models/userModels";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, mobile, password } = req.body;

        if (!username || !email || !password || !mobile) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const alreadyExists = await userModel.findOne({ email, username, mobile })
        if (alreadyExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            data: {
                name: username,
                email,
                phone: mobile,
                password: hashedPassword
            }
        });
        return res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const { identifier, password } = req.body;

        if (!identifier || !password) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const user = await userModel.findOne({ username: identifier }) || await userModel.findOne({ email: identifier }) || await userModel.findOne({ mobile: identifier });

        if (!user) {
            return res.status(400).json({ message: `Invalid ${identifier}` });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "User logged in successfully",
             
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.mobile,
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}