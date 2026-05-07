import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoute.js";

const server = express();
const port = 3000;


// FIX för __dirname i ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
server.use(express.json());
// router in work
server.use("/api/users", userRoutes);


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