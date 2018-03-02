const waitTime = 3000
let currentTime = 0
const waitInterval = 10
let percentWaited = 0

console.log('Wait for it')

function writeWaitingPercent(p) {
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`waiting... ${p} %`)
}

const interval = setInterval(() => {
  currentTime += waitInterval
  percentWaited = Math.floor((currentTime / waitTime) * 100)
  // console.log(`waiting ${currentTime/1000} seconds ...`)
  writeWaitingPercent(percentWaited)
}, waitInterval)

setTimeout(() => {
  clearInterval(interval)
  writeWaitingPercent(100)
  console.log('done')
}, waitTime)

process.stdout.write('\n\n')
writeWaitingPercent(percentWaited)