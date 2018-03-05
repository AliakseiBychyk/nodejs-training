const fs = require('fs')

const md = `

Sample Markdown Title
===========================

Sample subtitle
---------------------------

* point
* point
* point

`

fs.writeFile('sample.md', md.trim(), (err) => {
  if (err) throw err
  console.log('File Created.')
})