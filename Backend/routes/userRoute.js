// Här definieras API routes (URL-endpoints) för users.
// Routes kopplar en URL till en controller-funktion som hanterar logiken.
// User endpoints
// POST /signup
// POST /login
// GET /profile
// PUT /update
// DELETE /delete

//INGA ÄNDRING KRÄVS

import express from "express";
import multer from "multer";

// KONFIGURERING AV FIL-UPPLADDNING (multer)
// Bestämmer var och hur uppladdade filer ska sparas
const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "uploads/");

  },

    // Sätter unikt filnamn (för att undvika krockar)
  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  }

});

const upload = multer({
  storage
});


// Importerar nödvändiga info from usercontroller 
import {
  registerUser,
  loginUser,
  updateUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser); 

router.post("/login", loginUser); 

// Uppdaterar användarens data + hanterar bilduppladdning
// Put (är för ändra något som redan finns)
router.put(
  "/update",
  upload.single("profileImage"),
  updateUser
);

export default router;