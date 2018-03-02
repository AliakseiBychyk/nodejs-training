const waitTime = 3000
let currentTime = 0
const waitInterval = 500

console.log('Wait for it')

const interval = setInterval(() => {
  currentTime += waitInterval
  console.log(`waiting ${currentTime/1000} seconds ...`)
}, waitInterval)

setTimeout(() => {
  clearInterval(interval)
  console.log('done')
}, waitTime)