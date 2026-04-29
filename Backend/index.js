import express from "express";
import { Client } from "pg";
import dotenv from "dotenv"
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

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

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/public", (req, res) => {
  res.render("login.html");
});

app.get("/public", (req, res) => {
  res.render("sign.html");
});


app.post("/public", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  console.log(email)
  console.log(password)
try{
  const checkresult = await db.query(
    "SELECT * FROM users WHERE email = $1", [username]
    )

    if(checkresult.rows.length > 0){
      res.send("Email alreadt exsts. Try logga in")
    } else{
      await db.query(
        "INSERT INTO users (email, password) VALUES ($1,$2)",
        [email, password])
        res.render("secrets.ejs")
    }
    
} catch(err){
  console.log(err)
}

});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  console.log(email)
  console.log(password)

  try{
    const result = await db.query("SELECT * FROM users WHERE email = $1", [username])
    if(result.rows.length >0){
      const user = result.rows[0]
      const storedpassword = user.password

      if (password = storedpassword){
        res.render("secrets.ejs")
       }else{
          res.send("incorrect password")
       }
    } else{
      res.send("user not found")
    }
  }

  catch{}
});


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