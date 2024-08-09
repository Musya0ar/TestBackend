const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./conn')
const response = require('./response')


app.use(bodyParser.json())

//routes utama /URL /endpoint
app.get('/', (req, res) => {
    db.query("SELECT * from users", (error, result) => {
        response(200, result, "get all data from user", res)
    })
 
})

app.post('/post', (req, res) => {
    console.log({requesrFromOutsides: req.body})
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})