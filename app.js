const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('In Middleware')
  next()
})

app.use((req, res, next) => {
  console.log('In Middleware Again')
})

const server = http.createServer(app)

server.listen(3000)