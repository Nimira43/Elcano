const express = require('express')

const port = 5001

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.get('/', (req, res) => {
  res.json('Elcano Random Ideas Application')
})

const ideasRouter = require('./routes/ideas')
app.use('/api/ideas', ideasRouter)

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`)
})