// Controller (logik lagret för user)
// Tar emot HTTP(commuincation btw clinet and server) request från route och hanterar vad som ska göras

// Hanterar users
// Register user
// Login user
// Update user profile
// Delete user
// Hämta user information

import bcrypt from "bcrypt";

import {
  findUserByEmail,
  createUser,
  updateUserProfile
} from "../models/userModel.js";


// SIGN UP
export const registerUser = async (req, res) => {

  const {
    username,
    email,
    phone,
    password
  } = req.body;

  try {

    // Kollar om email redan finns i databasen
    const existingUser =
      await findUserByEmail(email);

    if (existingUser.rows.length > 0) {

      return res.status(400).json({
        message: "Email already exists"
      });

    }

  
    // Krypterar lösenord innan det sparas i databasen (säkerhet)
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Skapar en ny user i databasen
    await createUser(
      username,
      email,
      phone,
      hashedPassword
    );

    // Skickar tillbaka svar till client att user är skapad
    res.status(201).json({
      message: "User created successfully",
      user: {
        username,
        email,
        phone
      }
    });

  } catch (error) {

    res.status(500).send(error.message);

  }
};


// LOGIN
export const loginUser = async (req, res) => {

  const {
    email,
    password
  } = req.body;

  try {

  // Hämtar user från databasen baserat på email
    const user =
      await findUserByEmail(email);

    // User finns inte
    if (user.rows.length === 0) {

      return res.status(400).json({
        message: "User not found"
      });

    }

    // Jämför inskrivet lösenord med hashat lösenord i databasen
    const validPassword =
      await bcrypt.compare(
        password,
        user.rows[0].password
      );

    if (!validPassword) {

      return res.status(401).json({
        message: "Wrong password"
      });

    }

    // Login lyckades → skickar user-data tillbaka
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.rows[0].id,
        username: user.rows[0].username,
        email: user.rows[0].email,
        phone: user.rows[0].phone,
        role: user.rows[0].role,
        profile_image: user.rows[0].profile_image
      }
    });

  } catch (error) {

    res.status(500).send(error.message);

  }
};

export const updateUser = async (req, res) => {
  try {
    const { id, username, email, phone } = req.body;

    // Hämta nuvarande user först
    const currentUser = await findUserByEmail(email);

    let profile_image =
      currentUser.rows[0].profile_image;

    // om ny bild laddas upp ersätt
    if (req.file) {
      profile_image = "/uploads/" + req.file.filename;
    }

    // Uppdaterar user i databasen
    const updatedUser = await updateUserProfile(
      id,
      username,
      email,
      phone,
      profile_image
    );

    res.json({
      message: "User updated",
      user: updatedUser.rows[0]
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Could not update user"
    });
  }
};