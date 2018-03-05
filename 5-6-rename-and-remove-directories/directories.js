const fs = require('fs')

// move directory 
fs.renameSync('./assets/logs', './logs')
console.log('Direcrory moved')

// remove directory
fs.rmdir('./assets', err => {
  if (err) console.log(err)
  console.log('Directory removed')
})

fs.readdirSync('./logs').forEach(filename => {
  fs.unlinkSync('./logs' + filename)
})

fs.rmdir('./logs', err => {
  if (err) throw err
  console.log('Logs directory removed')
})