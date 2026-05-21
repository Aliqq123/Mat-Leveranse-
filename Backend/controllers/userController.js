//Här ligger logiken.

// Hanterar users
// Register user
// Login user
// Update user profile
// Delete user
// Hämta user information

import bcrypt from "bcrypt";

import {
  findUserByEmail,
  createUser
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

    // Finns email redan?
    const existingUser =
      await findUserByEmail(email);

    if (existingUser.rows.length > 0) {

      return res.status(400).json({
        message: "Email already exists"
      });

    }

    // Hasha lösenord
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Skapa user
    await createUser(
      username,
      email,
      phone,
      hashedPassword
    );


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

    const user =
      await findUserByEmail(email);

    // User finns inte
    if (user.rows.length === 0) {

      return res.status(400).json({
        message: "User not found"
      });

    }

    // Kolla password
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

    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.rows[0].username,
        email: user.rows[0].email,
        phone: user.rows[0].phone,
        role: user.rows[0].role
      }
    });


  } catch (error) {

    res.status(500).send(error.message);

  }
};