const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('In Middleware')
  next()
})

app.use((req, res, next) => {
  console.log('In Middleware Again')
  res.send('<h1>Hello from Express</h1>')
})

app.listen(3000)