import { Router } from "express";
import { getUserProfile, saveGeneration, updateUserProfile } from "./userController";
import { authenticateToken } from "../../middleware/Auth";


const router = Router();

router.get("/profile", authenticateToken, getUserProfile);
router.put("/profile", authenticateToken, updateUserProfile);
router.post('/generation',authenticateToken,saveGeneration)
export default router;