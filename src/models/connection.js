const mysql = require("mysql2/promise");

const connection = mysql.createPool(
    host: "",
    user: "",
    password: "",
    database: ""
);

module.exports = connection;