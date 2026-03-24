import { Router } from "express";
import { getAllGeneration, getGenerationById, getUserProfile, saveGeneration, updateUserProfile } from "./userController";
import { authenticateToken } from "../../middleware/Auth";


const router = Router();

router.get("/profile", authenticateToken, getUserProfile);
router.put("/profile", authenticateToken, updateUserProfile);
router.post('/generation', authenticateToken, saveGeneration)
router.get('/generation/:id', authenticateToken, getGenerationById)
router.get('/generation', authenticateToken, getAllGeneration)
export default router;