const fs = require('fs')

// const files = fs.readdirSync('./lib') // synchronous request blocks the thread
// console.log(files)

fs.readdir('./lib', (err, data) => {
  if (err) throw err
  console.log(data)
})

console.log('Reading Files...')
