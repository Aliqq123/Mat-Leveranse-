// MAIN SERVER FILE
// Den här filen startar och konfigurerar hela backend-servern

import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Import av routes (API endpoints)
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productRoute.js";
import adminRoutes from "./routes/adminRoute.js";

const server = express();
const port = 3000;


// FIX för __dirname i ES Modules (så att path fungerar korrekt)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// =========================
// MIDDLEWARE
// =========================

// Tillåter frontend att prata med backend (CORS)
server.use(cors());

// Gör så att servern kan läsa JSON i requests (req.body)
server.use(express.json());

// Gör uploads-mappen offentlig så bilder kan visas i browsern
server.use("/uploads", express.static("uploads"));


// =========================
// API ROUTES
// =========================

// Kopplar URL:er till respektive route-fil
server.use("/api/users", userRoutes);     // User endpoints (register, login, update)
server.use("/api/products", productRoutes); // Product endpoints
server.use("/api/admin", adminRoutes);     // Admin endpoints


// Extra static access till uploads (säkerställer bildåtkomst)
server.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);


// =========================
// FRONTEND STATIC FILES
// =========================

// Gör FrontEnd-mappen tillgänglig för webbläsaren
server.use(express.static(path.join(__dirname, "../FrontEnd")));


// =========================
// FRONTEND ROUTES (HTML pages)
// =========================

// Home page
server.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../FrontEnd/Home/index.html")
  );
});


// Login page
server.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../FrontEnd/logout-login/login.html")
  );
});


// Sign up page
server.get("/sign", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../FrontEnd/logout-login/sign.html")
  );
});


// =========================
// START SERVER
// =========================


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});