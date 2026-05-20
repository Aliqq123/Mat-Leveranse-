// Main server file

// Import express
// Import routes
// Import middleware
// Connect database
// Static frontend
// API routes
// Start server
// Använda routes 
// Middleware

import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import adminRoutes from "./routes/adminRoute.js";

const server = express();
const port = 3000;


// FIX för __dirname i ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
server.use(cors());
server.use(express.json());
server.use("/uploads", express.static("uploads"));

// router in work
server.use("/api/users", userRoutes); // DET FÖR USER, INGA ÄNDIRNG KRÄVS 
server.use("/api/products", productRoutes); // DET ÄR FÖR PRODUCTER, använd den senare för att koppla frontend och backend
server.use("/api/admin", adminRoutes); // Det är för admin producter, läggas ny producter. 

// Gör FrontEnd-mappen offentlig
server.use(express.static(path.join(__dirname, "../FrontEnd")));


// VISA HOME/index.html
server.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../FrontEnd/Home/index.html")
  );

});

// VISA HOME/loging.html
server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../FrontEnd/logout-login/login.html")
  );
});

// SIGN UP 
server.get("/sign", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../FrontEnd/logout-login/sign.html")
  );
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});