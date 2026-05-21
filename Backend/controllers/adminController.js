//Här ligger logiken.

// Hanterar admin funktioner
// Se alla users
// Se alla orders
// Se alla produkter
// Ta bort users
// Statistik
// Dashboard logic

import {
    getAllAdminProducts,
    createAdminProduct,
    deleteAdminProduct
  } from "../models/adminModel.js";
  
  export async function getProducts(req, res) {
    try {
      const products = await getAllAdminProducts();
      res.json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  }
  
  export async function addProduct(req, res) {

    try {
  
      const product = {
        product_name: req.body.product_name,
        product_origin: req.body.product_origin,
        product_type: req.body.product_type,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
  
        // bildväg
        product_image: "/uploads/" + req.file.filename
      };
  
      const newProduct = await createAdminProduct(product);
  
      res.status(201).json(newProduct);
  
    } catch (err) {
  
      console.log(err);
  
      res.status(500).json({
        error: "Could not add product"
      });
  
    }
  
  }
 

  export async function removeProduct(req, res) {

    try {
  
      const {
        product_name,
        product_origin
      } = req.body;
  
      await deleteAdminProduct(
        product_name,
        product_origin
      );
  
      res.json({
        message: "Product deleted"
      });
  
    } catch (err) {
  
      console.log(err);
  
      res.status(500).json({
        error: "Could not delete product"
      });
  
    }
  
  }