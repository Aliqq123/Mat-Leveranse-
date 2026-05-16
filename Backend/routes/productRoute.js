//Här definierar du URL:er.

// Product endpoints
// GET /products
// GET /products/:id
// POST /products
// PUT /products/:id
// DELETE /products/:id

import express from "express";
import db from "../db.js";

const router = express.Router();

// GET ALL PRODUCTS.
//HÄR HÄMTAS PRODUCTERNA SOM SKAPADES I SQL ALLTSÅ Pg4Admin. 
//INGA ÄNRING KRÄVS(om annars du har nånting att lägga till)
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT product_id, product_name, product_description, product_image, product_price FROM products"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;