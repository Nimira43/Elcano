import http from 'http'

const PORT = 8000
const server = http.createServer((req, res) => {
  res.write('Testing')
  res.end()
})

server.listen(8000, () => {
  console.log(`Server running on Port ${PORT}`)
})