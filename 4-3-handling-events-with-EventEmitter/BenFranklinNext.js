const { EventEmitter } = require('events')
const util = require('util')

const Person = function(name) {
  this.name = name
}

util.inherits(Person, EventEmitter) // Person inherits all properties from EventEmitter

const ben = new Person('Ben Franklin') 

ben.on('speak', function (said) {
  // we need traditional functon to access context of ben object 
  console.log(` ${this.name} -> ${said}  `)
})

ben.emit('speak', 'You may delay, but time will not')