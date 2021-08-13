const express = require("express");

const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  const users = await pool.query("SELECT * FROM users");

  res.status(200).json(users.rows);
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await pool.query(
    "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *",
    [name, email, password]
  );

  res.status(201).json(newUser.rows);
});

module.exports = router;
