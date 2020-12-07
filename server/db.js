const { Pool } = require('pg');
require('dotenv').config();
const password = process.env.DB_PASSWORD_DEV;
const host = process.env.DB_HOST_DEV;
const user = process.env.DB_USER_DEV;

const pool = new Pool({
  user: 'postgres',
  password: 'gogogohome',
  host: 'localhost',
  port: 5432,
  database: 'reviews',
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
