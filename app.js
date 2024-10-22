const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Node App V1.0.0</title></head')
  res.write('<body><h1>Node App Server</h1></body>')
  res.write('</body>')
  res.end()
})

server.listen(3000)