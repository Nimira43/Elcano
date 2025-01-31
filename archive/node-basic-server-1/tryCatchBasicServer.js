const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            try {
                await fs.writeFile('message.txt', message);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.write('Internal Server Error');
                return res.end();
            }
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node App V1.0.5</title></head>');
    res.write('<body><h1>Node App Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})