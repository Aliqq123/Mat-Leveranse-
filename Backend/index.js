import express from "express";
import { Client } from "pg";
import dotenv from "dotenv"

dotenv.config();

const server = express();
const port = 3000;

server.use(express.json());

const db = new Client({
  user: process.env.postgres,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.log(err));

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));


// USERS
server.get("/users", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PRODUCTS
server.get("/products", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ORDERS
server.get("/orders", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM orders");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});