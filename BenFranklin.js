// const EventEmitter = require('events').EventEmitter
// const util = require('util')

// const Person = function(name) {
//   this.name = name
// }
// util.inherits(Person, EventEmitter)
const Person = require('./lib/Person') 

const ben = new Person('Ben Franklin')
const george = new Person('George Washington')

george.on('speak', function (said) {
  console.log(`${this.name} -> ${said}`)
})

ben.on('speak', function (said) {
  console.log(`${this.name}: ${said}`)
})

ben.emit('speak', 'You may delay, but time will not.')
george.emit('speak', 'It is far better to be alone, than to be in bad company.')

// const events = require('events')
// const emitter = new events.EventEmitter()

// emitter.on('customEvent', (message, status) => {
//   console.log(`${status}: ${message}`)
// })

// emitter.emit('customEvent', 'Hello World', 200)

