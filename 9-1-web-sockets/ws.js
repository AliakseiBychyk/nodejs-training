const { Server: WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', (ws) => {
  ws.on('message', message => {
    if (message === 'exit') {
      ws.close()
    } else {
      wss.clients.forEach(client => {
        client.send(message)
      })
    }
  })
  ws.send('Welcome to cyber chat')
})
