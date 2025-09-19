import express from "express";
import {
    followUser,
  getCurrentUser,
  getUserProfile,
  updateProfile,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//public route
router.get("/profile/:username", getUserProfile);

//protected route
router.put("/profile", protectRoute, updateProfile);
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;
