const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const apiRouter = require('./routes/api');

const PORT = 3000;

const PG_URI =
  'postgres://uuahdrdz:2w8-mc...@ruby.db.elephantsql.com:5432/uuahdrdz';

const pool = new Pool({ connectionString: PG_URI });

pool.query('SELECT * FROM people', (err, res) => {
  console.log(err, res);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;
