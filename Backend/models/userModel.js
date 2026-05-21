// Här hämtas datan (users) från PostgreSQL.
// Den här filen innehåller SQL queries som pratar direkt med databasen.

import db from "../db.js";


// SKAPA NY USER (INSERT)
// Lägger till en ny användare i tabellen "users"
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


// HITTA USER VIA EMAIL (SELECT)
// Hämtar en user från databasen baserat på email
export const findUserByEmail = async (email) => {

  return await db.query(
    `
    SELECT * FROM users
    WHERE email = $1
    `,
    [email]
  );

};


// UPPDATERA USER (UPDATE)
// Uppdaterar user-information i databasen och returnerar den uppdaterade raden
export const updateUserProfile = async (
  id,
  username,
  email,
  phone,
  profile_image
) => {

  return await db.query(
    `
    UPDATE users
    SET
      username = $1,
      email = $2,
      phone = $3,
      profile_image = $4
    WHERE id = $5
    RETURNING *
    `,
    [
      username,
      email,
      phone,
      profile_image,
      id
    ]
  );

};