const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.status(200).json({
    message: 'Server side is operating.',
    app: 'Elcano'
  })
})

app.post('/', (req, res) => {
  res.end('This is where you can post to this endpoint...')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
}) 