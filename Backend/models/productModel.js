//Här pratar du med PostgreSQL.

// SQL queries för produkter
// getAllProducts
// getProductById
// createProduct
// updateProduct
// deleteProduct

// GET ALL PRODUCTS.
//HÄR HÄMTAS PRODUCTERNA SOM SKAPADES I SQL ALLTSÅ Pg4Admin. 
//INGA ÄNRING KRÄVS(om annars du har nånting att lägga till)

import db from "../db.js";

export async function getAllProducts() {

  const result = await db.query(`
    SELECT
      product_id,
      product_name,
      product_description,
      product_image,
      product_price,
      product_origin,
      product_type
    FROM products
    ORDER BY product_id DESC
  `);

  return result.rows;
}