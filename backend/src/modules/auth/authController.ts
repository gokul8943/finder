import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { generateOtp } from "../../helper/authHelper";
import * as AuthService from "./authServices";


export const signup = async (req: Request, res: Response) => {
    try {
        const { username, email, mobile, password } = req.body;

        if (!username || !email || !mobile || !password) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const newUser = await AuthService.signUp(
            username,
            email,
            mobile,
            password
        );

        return res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });

    } catch (error: any) {

        if (error.message === "User already exists") {
            return res.status(400).json({ message: error.message });
        }

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const login = async (req: Request, res: Response) => {
    try {

        const { identifier, password } = req.body;

        if (!identifier || !password) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        const result = await AuthService.loginUser(identifier, password);

        return res.status(200).json({
            message: "User logged in successfully",
            user: result.user,
            token: result.token
        });

    } catch (error: any) {

        if (error.message === "User not found") {
            return res.status(400).json({ message: "Invalid username/email/mobile" });
        }

        if (error.message === "Invalid password") {
            return res.status(400).json({ message: "Invalid password" });
        }

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const sendOtp = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        const user = await AuthService.sendOtp(email);
        if (!user) {
            return res.status(400).json({ message: "User with this email number does not exist" });
        }
    } catch (error) {
        console.log('Error sending otp', error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const verifyOtp = async (req: Request, res: Response) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: "Email and OTP are required" });
        }
        const user = await AuthService.verifyOtp(email, otp);
        if (!user) {
            return res.status(400).json({ message: "User with this email does not exist" });
        }
        res.status(200).json({
            message: "OTP verified successfully",
        });
    } catch (error) {
        console.log('Error verifying OTP', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// export const sendOtp = async (req: Request, res: Response) => {
//     try {
//         const { mobile } = req.body;
//         if (!mobile) {
//             return res.status(400).json({ message: "Mobile number is required" });
//         }
//         const user = await userModel.findOne({ mobile });
//         if (!user) {
//             return res.status(400).json({ message: "User with this mobile number does not exist" });
//         }
//         const otp = generateOtp();
//         console.log(`Sending OTP ${otp} to mobile number ${mobile}`);
//         res.status(200).json({ message: "OTP sent successfully", otp });
//     } catch (error) {
//         console.log('Error sending otp', error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }


// export const verifyOtp = async (req: Request, res: Response) => {
//     try {
//         const { mobile, otp } = req.body;
//         if (!mobile || !otp) {
//             return res.status(400).json({ message: "Mobile number and OTP are required" });
//         }
//         const user = await userModel.findOne({ mobile });
//         if (!user) {
//             return res.status(400).json({ message: "User with this mobile number does not exist" });
//         }
//         res.status(200).json({
//             message: "OTP verified successfully",
//         });
//     } catch (error) {
//         console.log('Error verifying OTP', error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }