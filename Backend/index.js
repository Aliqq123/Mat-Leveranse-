import express from "express";
import { Client } from "pg";

const app = express();
const port = 3000;

app.use(express.json());

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "Matleverans",
  password: "Mango7meluv",
  port: 5432,
});

db.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.log(err));


// USERS
app.get("/users", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PRODUCTS
app.get("/products", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ORDERS
app.get("/orders", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM orders");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});