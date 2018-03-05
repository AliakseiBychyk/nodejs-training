const fs = require('fs')

// fs.readFile('./chat.log', 'UTF-8', (err, chatlog) => {
//   if (err) throw err
//   console.log(`File Read ${chatlog.length}`)
// })

// console.log('Reading File...')


const stream = fs.createReadStream('./chat.log', 'UTF-8')

let data = ''

stream.once('data', () => {
  console.log('\n\n\n')
  console.log('Started Reading File')
  console.log('\n\n\n')
})

stream.on('data', chunk => {
  process.stdout.write(`  chunk: ${chunk.length} |`)
  data += chunk
})

stream.on('end', () => {
  console.log('\n\n\n')
  console.log(`Finished Reading File ${data.length}`)
  console.log('\n\n\n')
})