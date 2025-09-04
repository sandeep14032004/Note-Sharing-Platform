import express from 'express';
import { signup, login, logout, verifyotp, checkAuth } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.moddleware.js';



const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.post("/verify-otp",verifyotp)

router.get("/check",protectRoute,checkAuth)
export default router;