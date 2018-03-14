const { exec } = require('child_process')

// exec('start https://www.lynda.com')
// exec('start cmd .')
exec('dir', (err, stdout) => {
  if (err) throw err
  console.log('Listing Finished')
  console.log(stdout)
})

exec('git version', (err, stdout) => {
  if (err) throw err
  console.log(`Git version executed \n${stdout}`)
})