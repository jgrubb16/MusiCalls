const { Pool } = require('pg');

const pool = new Pool({
  connectionString: PG_URI,
});

const PG_URI =
  'postgres://uuahdrdz:2w8-mc...@ruby.db.elephantsql.com:5432/uuahdrdz';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    // console.log(pool.query(text, params, callback));
    return pool.query(text, params, callback);
  },
};
