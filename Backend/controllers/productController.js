// Controller (logiklagret för produkter)
// Tar emot HTTP(commuincation btw clinet and server) request från route och hanterar vad som ska göras

import { getAllProducts } from "../models/productModel.js";


export async function fetchProducts(req, res) {

  try {

    const products = await getAllProducts(); // Hämtar alla produkter från databasen via modellen

    res.json(products); // Skickar tillbaka datan som JSON till klienten
    
  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: "Could not fetch products"
    });
  }
}