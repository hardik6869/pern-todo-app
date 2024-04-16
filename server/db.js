const Pool = require("pg").Pool;

const { PG_USER, PASSWORD, PG_PORT, PG_DATABASE } = process.env;

const pool = new Pool({
  user: PG_USER,
  password: PASSWORD,
  host: "localhost",
  port: PG_PORT,
  database: PG_DATABASE,
});

module.exports = pool;
