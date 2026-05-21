//Här pratar du med PostgreSQL.

// SQL queries för users
// findUserByEmail
// createUser
// getUserById
// updateUser
// deleteUser

// iNGA ÄNDRING KRÄVS

import db from "../db.js";

// Skapa ny user
export const createUser = async (
  username,
  email,
  phone,
  password
) => {

  return await db.query(
    `
    INSERT INTO users
    (username, email, phone, password, role)
    VALUES ($1, $2, $3, $4, $5)
    `,
    [
      username,
      email,
      phone,
      password,
      "user"
    ]
  );

};


// Hitta user via email
export const findUserByEmail = async (email) => {

    return await db.query(
      `
      SELECT * FROM users
      WHERE email = $1
      `,
      [email]
    );
  
  };