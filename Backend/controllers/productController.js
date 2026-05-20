//Här ligger logiken.

// Hanterar produkter
// Hämta alla produkter
// Hämta en produkt
// Skapa ny produkt
// Uppdatera produkt
// Ta bort produkt
// Filter/search produkter

import { getAllProducts } from "../models/productModel.js";

export async function fetchProducts(req, res) {

  try {

    const products = await getAllProducts();

    res.json(products);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Could not fetch products"
    });
  }
}