//Här definierar du URL:er.

// Admin endpoints
// GET /admin/users
// GET /admin/orders
// DELETE /admin/user/:id

import express from "express";
import multer from "multer";

import {
  getProducts,
  addProduct,
  removeProduct
} from "../controllers/adminController.js";

const router = express.Router();
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

const upload = multer({ storage });

router.get("/", getProducts);
router.post("/", upload.single("productImage"), addProduct);
router.delete("/", removeProduct);

function isAdmin(req, res, next) {

  const role = req.headers.role;

  if (role !== "admin") {

    return res.status(403).json({
      error: "Access denied"
    });

  }

  next();
}

export default router;