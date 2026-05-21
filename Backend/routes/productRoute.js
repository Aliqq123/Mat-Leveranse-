//Här kopllar eller defineras URL:er för i det här fallet produkter.

// GET /products
// GET /products/:id
// POST /products
// PUT /products/:id
// DELETE /products/:id

import express from "express";

import { fetchProducts } from "../controllers/productController.js";

const router = express.Router();

//En GET-förfrågan till "/products" (rooten för products),
// så körs funktionen fetchProducts som hämtar alla produkter från databasen
// och skickar tillbaka dem som JSON till klienten.

router.get("/", fetchProducts); 

export default router;