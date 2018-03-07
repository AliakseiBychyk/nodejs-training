const { Server: WebSocketServer } = require('ws')

const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', (ws) => {
  ws.send('Welcome to cyber chat')
})
