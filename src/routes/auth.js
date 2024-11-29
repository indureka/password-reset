import express from 'express';
import { registerUser, requestPasswordReset, resetPassword, verifyToken } from '../controllers/authController.js';  

import User from '../models/User.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/request-reset", requestPasswordReset);
router.post("/reset-password", resetPassword);
router.post("/verify-token", verifyToken);

export default router;
