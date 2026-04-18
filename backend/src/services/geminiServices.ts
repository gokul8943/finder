import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPrompt } from "../utils/prompt";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const pickBestSmartPhoneService = async (
  userPreferences: any,
  products: any[]
) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = buildPrompt(userPreferences, products);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Optional: safely parse JSON
    const cleaned = text.replace(/```json|```/g, "");
    const parsed = JSON.parse(cleaned);

    return parsed;
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    throw new Error("Failed to pick best smartphones");
  }
};