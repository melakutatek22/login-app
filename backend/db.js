const { Pool } = require('pg');

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'login_db',
  port: 5432,
});

module.exports = pool;