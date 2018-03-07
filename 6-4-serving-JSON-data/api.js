const http = require('http')

const data = require('./data/inventory')

const listInStock = res => {
  const inStock = data.filter(item => item.avail === 'In stock')
  res.end(JSON.stringify(inStock))
}

const listOnOrder = res => {
  const onOrder = data.filter(item => item.avail === 'On back order')
  res.end(JSON.stringify(onOrder))
}

http.createServer((req, res) => {
  
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/json' })
    res.end(JSON.stringify(data))
  } else if (req.url === '/instock') {
    listInStock(res)
  } else if (req.url === '/onorder') {
    listOnOrder(res)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Whoooops... Not found data.')
  }
  
}).listen(3000)

console.log('Server listening on port 3000')

