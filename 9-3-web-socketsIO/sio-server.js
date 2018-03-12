const express = require('express')
const app = express()
const server = require('http').Server(app)

const io = require('socket.io')(server)

server.listen(3000)

app.use(express.static('./public'))

io.on('connection', socket => {

    socket.emit('message', 'Welcome to Cyber Chat')

    socket.on('chat', message => {
        socket.broadcast.emit('message', message)
    })
})

console.log('Starting Socket App - http://localhost:3000')