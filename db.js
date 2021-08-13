const Pool = require("pg").Pool;

const pool = new Pool({
  database: process.env.database,
  user: process.env.user,
  host: process.env.host,
  password: process.env.password,
  port: process.env.port,
});

module.exports = pool;
