const Pool = require("pg").Pool;

const pool = new Pool({
  database: "pern",
  user: "postgres",
  host: "localhost",
  password: "9630*lie",
  port: 5432,
});

module.exports = pool;
