const events = require('events')
const emitter = new events.EventEmitter()

emitter.on('customEvent', (message, status) => {
  console.log(`${status}: ${message}`)
})

emitter.emit('customEvent', 'Hello World', 200)

