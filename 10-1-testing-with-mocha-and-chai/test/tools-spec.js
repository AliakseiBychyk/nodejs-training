const { expect } = require('chai')
const tools = require('../lib/tools')

describe('Tools', () => {
  
  describe('printName()', () => {
  
    it('should print the last name first', () => {
      const results = tools.printName({ first: 'Aleks', last: 'Byczyk' })
      expect(results).to.equal('Byczyk, Aleks')
    })
  })

  describe('loadWiki()', function () {
    
    // arrow function won't access the Mocha context 'this'
    this.timeout(5000)
    
    it('Load Abraham Lincoln wikipedia page', (done) => {
      tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, html => {
        expect(html).to.be.ok
        done()
      })
    })
  })

})

