export const signup = async (req, res, db) => {
    const { username, email, password, phone } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const result = await db.query(
        "INSERT INTO users (username, email, password, phone) VALUES ($1, $2, $3, $4) RETURNING *",
        [username, email, hashedPassword, phone]
      );
  
      res.status(201).json({ message: "User created", user: result.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const login = async (req, res, db) => {
    const { email, password } = req.body;
  
    try {
      const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
  
      if (result.rows.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const user = result.rows[0];
  
      const match = await bcrypt.compare(password, user.password);
  
      if (!match) {
        return res.status(400).json({ message: "Wrong password" });
      }
  
      res.json({ message: "Login success", user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };