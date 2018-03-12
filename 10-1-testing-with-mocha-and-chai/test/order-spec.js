const { expect } = require('chai')
const rewire = require('rewire')
const order = rewire('../lib/order') // instead of require we rewire
const sinon = require('sinon')

describe('Ordering Items', () => {

  beforeEach(function() {
    this.testData = [
      { sku: 'AAA', qty: 10 },
      { sku: 'BBB', qty: 0 },
      { sku: 'CCC', qty: 3 }
    ]

    this.console = {
      log: sinon.spy()
    }

    order.__set__('inventoryData', this.testData)
    order.__set__('console', this.console)
  })

  it('order an item there are enough in stock', function(done) {
    // arrow function won't access to the Mocha this context
    order.orderItem('CCC', 3, () => {    
      expect(this.console.log.callCount).to.equal(2)
      done()
    })
  })
})