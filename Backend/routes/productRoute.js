//Här definierar du URL:er.

// Product endpoints
// GET /products
// GET /products/:id
// POST /products
// PUT /products/:id
// DELETE /products/:id

import express from "express";

import { fetchProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", fetchProducts);

export default router;