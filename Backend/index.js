import express from "express";
import path from "path";
import { Client } from "pg";

const app = express();
const port = 3000;

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "Matleverans",
  password: "Mango7meluv",
  port: 5432,
});

db.connect();


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });