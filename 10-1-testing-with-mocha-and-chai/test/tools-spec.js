const { expect } = require('chai')
const tools = require('../lib/tools')
const nock = require('nock')

describe('Tools', () => {
  
  describe('printName()', () => {
  
    it('should print the last name first', () => {
      const results = tools.printName({ first: 'Aleks', last: 'Byczyk' })
      expect(results).to.equal('Byczyk, Aleks')
    })
  })

  describe('loadWiki()', () => {

    before(() => {
      nock('https://en.wikipedia.org')
        .get('/wiki/Abraham_Lincoln')
        .reply(200, 'Mock Abraham Lincoln Page')
    })
    
    it('Load Abraham Lincoln wikipedia page', (done) => {
      tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, html => {
        expect(html).to.equal('Mock Abraham Lincoln Page')
        done()
      })
    })
  })

})

