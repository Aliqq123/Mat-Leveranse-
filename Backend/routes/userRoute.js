import express from "express";


// Importerar nödvändiga info from usercontroller 
import {
  registerUser,
  loginUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser);

router.post("/login", loginUser);

export default router;