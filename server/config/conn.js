import mysql from "mysql"

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_ppb'
})

export default  db