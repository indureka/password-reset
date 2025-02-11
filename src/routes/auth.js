import express from 'express';
import { loginUser, registerUser, requestPasswordReset, resetPassword, verifyToken } from '../controllers/authController.js';  



const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/request-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);
router.post("/verify-token", verifyToken);

export default router;
