const path = require('path')
const util = require('util')
const v8 = require('v8') 

console.log(path.resolve(__dirname))
console.log(path.resolve(__filename))
console.log(path.basename(__dirname))
console.log(path.basename(__filename))
util.log(path.basename(__filename))

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads')
console.log(dirUploads)

util.log(dirUploads)

util.log(v8.getHeapSpaceStatistics())