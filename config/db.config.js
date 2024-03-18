const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
})

module.exports = connection;