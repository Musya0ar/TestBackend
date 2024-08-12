import mysql from "mysql"

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_pbb'
})

export default  db