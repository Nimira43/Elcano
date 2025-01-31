const express = require('express')
const port = 5001

const app = express()

app.get('/', (req, res) => {
  res.send('Elano Random Ideas Application')
})

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`)
})