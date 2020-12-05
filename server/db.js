const { Pool } = require('pg');
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
