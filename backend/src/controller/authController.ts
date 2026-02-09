import { Request, Response } from "express";
import userModel from "../models/userModels";
import bcrypt from "bcryptjs";


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
          
        res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}