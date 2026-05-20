//Här pratar du med PostgreSQL.

// SQL queries för admin
// getAllUsers
// getAllOrders
// getStatistics

import db from "../db.js";

export async function getAllAdminProducts() {
  const result = await db.query(
    "SELECT * FROM products ORDER BY product_id DESC"
  );

  return result.rows;
}

export async function createAdminProduct(product) {
  const {
    product_name,
    product_origin,
    product_type,
    product_price,
    product_image,
    product_description
  } = product;

  const result = await db.query(
    `
    INSERT INTO products
    (
      product_name,
      product_origin,
      product_type,
      product_price,
      product_image,
      product_description
    )
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *
    `,
    [
      product_name,
      product_origin,
      product_type,
      product_price,
      product_image,
      product_description
    ]
  );

  return result.rows[0];
}

export async function deleteAdminProduct(id) {
  await db.query(
    "DELETE FROM products WHERE product_id = $1",
    [id]
  );
}