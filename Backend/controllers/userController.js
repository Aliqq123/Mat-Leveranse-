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
      message: "User created successfully"  //här ska vi tilläga så att det går visa user.html
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
      message: "Login successful" // samma sak gäller här, det renderas till user.html
    });

  } catch (error) {

    res.status(500).send(error.message);

  }
};