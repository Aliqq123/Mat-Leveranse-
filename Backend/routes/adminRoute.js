import express from "express";
import multer from "multer";

// Importerar controller-funktioner som innehåller logiken för admin produkter
import {
  getProducts,
  addProduct,
  removeProduct
} from "../controllers/adminController.js";

// Skapar en Express router (hanterar admin routes)
const router = express.Router();


// KONFIGURERING AV FIL-UPPLADDNING (multer)
// Bestämmer var och hur uppladdade bilder sparas
const storage = multer.diskStorage({

  // Mapp där uppladdade filer sparas
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // Skapar unikt filnamn för att undvika krockar
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

// Skapar upload middleware som hanterar filuppladdning
const upload = multer({ storage });


// ROUTES (API endpoints för admin produkter)

// Hämta alla produkter (admin view)
router.get("/", getProducts);

// Lägg till ny produkt + hantera bilduppladdning
router.post("/", upload.single("productImage"), addProduct);

// Ta bort produkt
router.delete("/", removeProduct);


// MIDDLEWARE: kontroll om användaren är admin
// Körs innan vissa routes för att skydda admin-funktioner
function isAdmin(req, res, next) {

  // Hämtar roll från request headers
  const role = req.headers.role;

  // Om användaren inte är admin → blockera åtkomst
  if (role !== "admin") {

    return res.status(403).json({
      error: "Access denied"
    });

  }

  // Om användaren är admin → fortsätt till nästa funktion
  next();
}

export default router;