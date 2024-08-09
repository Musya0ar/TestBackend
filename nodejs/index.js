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
    console.log(result)
  })
  res.send("selesai")
})

app.put('/user', (req, res) => {
  response(200, "post", res)
})

app.delete('/user', (req, res) => {
  response(200, "Delete", res)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})