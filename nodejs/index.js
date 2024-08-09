const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./conn')
const response = require('./response')


app.use(bodyParser.json())

//routes utama /URL /endpoint
app.get('/', (req, res) => {
  const sql = `SELECT * from users`
    db.query( sql , (error, result) => {
        response(200, result, "get all data from user", res)
    })
 
})

app.get('/user/:id',(req, res) => {
  const id = req.params.id
  const sql = `SELECT * from users WHERE id = ${id}`

  db.query(sql, (error, result) =>{
  response(200, result,`User dengan id ${id}`, res)
  })
})

app.post('/user', (req, res) => {
  const {name, email, password} = req.body
  const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`

  db.query( sql , (error, result) => {
    if (error) {
      console.error("SQL Error:", error); // Log any SQL errors
      return response(500, null, 'An error occurred while inserting the user', res)
    }
    if (result?.affectedRows){ 
      const data = {
      isSuccess: result.affectedRows,
      id: result.insertId}
      response(200, data ,"Data berhasil dimasukkan", res)
    }
    
  })
})

app.put('/user', (req, res) => {
const {id, name, email, password} = req.body
const sql = `UPDATE users SET name = '${name}',email = '${email}',password = '${password}' WHERE id = ${id}`

db.query( sql , (error, result) => {
  if (error) {
    console.error("SQL Error:", error); // Log any SQL errors
    return response(500, null, 'An error occurred while inserting the user', res)
  }
  response(200, result,"Data berhasil diubah", res)
})


})

app.delete('/user', (req, res) => {
  const {id}= req.body
  const sql = `DELETE FROM users WHERE id = ${id}`

db.query( sql , (error, result) => {
  if (error) {
    console.error("SQL Error:", error); // Log any SQL errors
    return response(500, null, 'An error occurred id not found', res)
  }
  response(200, result,"Data berhasil dihapus", res)})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})