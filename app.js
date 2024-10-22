const express = require('express')

const app = express()

app.use('/add-product', (req, res, next) => {
  console.log('Middleware 1')
  res.send('<h1>"Add Product"</h1>')
})
app.use('/', (req, res, next) => {
  console.log('Middleware 2')
  res.send('<h1>The Store</h1>')
})

app.listen(3000)