require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('keshavdotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1> plaease login in this page </h1>')
})

app.get('/youtube', (req,res) => {
  res.send("<h2>chai aur code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})