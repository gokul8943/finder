// geminiServices.ts
import { GoogleGenerativeAI, GoogleGenerativeAIFetchError } from "@google/generative-ai";
import { buildPrompt } from "../utils/prompt";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const RETRY_CONFIG = {
  maxRetries: 3,
  baseDelayMs: 1000,   // 1s → 2s → 4s
  retryableStatuses: new Set([503, 429, 500]),
};

const MODEL_FALLBACK_CHAIN = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
];

// Sleep helper
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Single model call with exponential backoff retries
async function callWithRetry(modelName: string, prompt: string): Promise<string> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= RETRY_CONFIG.maxRetries; attempt++) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      lastError = error;

      const status = (error as GoogleGenerativeAIFetchError)?.status;
      const isRetryable = status && RETRY_CONFIG.retryableStatuses.has(status);

      if (!isRetryable) {
        // Non-transient error (e.g. 400 bad request) — don't retry
        throw error;
      }

      if (attempt < RETRY_CONFIG.maxRetries) {
        const delay = RETRY_CONFIG.baseDelayMs * Math.pow(2, attempt - 1);
        console.warn(
          `[Gemini] ${modelName} attempt ${attempt} failed with ${status}. ` +
          `Retrying in ${delay}ms...`
        );
        await sleep(delay);
      }
    }
  }

  throw lastError;
}

// Parse and clean the raw text response
function parseResponse(text: string): any {
  const cleaned = text.replace(/```json|```/g, "").trim();
  return JSON.parse(cleaned);
}

export const pickBestSmartPhoneService = async (
  userPreferences: any,
  products: any[]
): Promise<any> => {
  const prompt = buildPrompt(userPreferences, products);
  let lastError: unknown;

  for (const modelName of MODEL_FALLBACK_CHAIN) {
    try {
      console.log(`[Gemini] Trying model: ${modelName}`);
      const text = await callWithRetry(modelName, prompt);
      const parsed = parseResponse(text);
      console.log(`[Gemini] Success with model: ${modelName}`);
      return parsed;
    } catch (error) {
      lastError = error;
      const status = (error as GoogleGenerativeAIFetchError)?.status;
      console.warn(`[Gemini] Model ${modelName} exhausted. Status: ${status}`);
      // Only fall through to next model for transient errors
      if (status && !RETRY_CONFIG.retryableStatuses.has(status)) {
        break; // A 400/401/403 won't be fixed by switching models
      }
    }
  }

  console.error("[Gemini] All models failed:", lastError);
  throw new Error("AI recommendation service is temporarily unavailable. Please try again.");
};