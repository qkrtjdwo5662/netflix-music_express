const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1111',
  port: '3306',
  database: 'netflix-music',
});

module.exports = connection;
