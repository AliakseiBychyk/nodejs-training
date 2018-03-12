const { expect } = require('chai')
const tools = require('../lib/tools')

describe('printName()', () => {
  it('should print the last name first', () => {
    const results = tools.printName({ first: 'Aleks', last: 'Byczyk' })
    expect(results).to.equal('Byczyk, Aleks')
  })
})