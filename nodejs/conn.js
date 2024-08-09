const mysql = require('mysql')

const db = mysql.createConnection({
  host : "localhost", 
    user: "root",   
    password : "",
    database: "test_ppb"
})

module.exports = db
