const https = require('https')

module.exports = {
  
  printName({ first, last }) {
    return `${last}, ${first}`
  },

  loadWiki({ first, last }, callback) {
    const url = `https://en.wikipedia.org/wiki/${first}_${last}`
    https.get(url, (res) => {
      let body = ''

      res.setEncoding('UTF-8')
      
      res.on('data', chunk => {
        body += chunk
      })
      
      res.on('end', () => {
        callback(body)
      })
    })
  }
}