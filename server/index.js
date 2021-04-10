const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'root',
  database: 'employeesystem',
});

app.listen(3001, () => {
  console.log('Yay, your server is running on port 3001');
});
