const http = require('http')

const server = http.createServer((req, res) => {
  
  // res.writeHead(200, { 'Content-Type': 'text/plain' })
  // res.end('Hello World')

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML Response</title>
      </head>
      <body>
        <h1>Serving HTML Text</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
        <p>${JSON.stringify(req.headers)}</p>
      </body>
    </html>
  `)

})

server.listen(3000)

console.log('Server listening on port 3000')