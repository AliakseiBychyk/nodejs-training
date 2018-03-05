const fs = require('fs')
const path = require('path')

// const contents = fs.readFileSync('./lib/sayings.md') // binary
// const contents = fs.readFileSync('./lib/sayings.md', 'UTF-8') // text

// console.log(contents)


// fs.readFile('./lib/sayings.md', 'UTF-8', (err, contents) => {
//   if (err) console.log(err)
//   console.log(contents)
// })

fs.readdir('./lib', (err, files) => {
  files.forEach(fileName => {
    const file = path.join(__dirname, 'lib', fileName)
    const stats = fs.statSync(file)
    if (stats.isFile() && fileName !== '.DS_Store') {
      fs.readFile(file, 'UTF-8', (err, contents) => {
        if (err) throw err
        console.log(contents)
      })
    }
  })
})