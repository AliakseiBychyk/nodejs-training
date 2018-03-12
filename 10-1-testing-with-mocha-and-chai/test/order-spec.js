const { expect } = require('chai')
const rewire = require('rewire')
const order = rewire('../lib/order') // instead of require we rewire

describe('Ordering Items', () => {

  beforeEach(function() {
    this.testData = [
      { sku: 'AAA', qty: 10 },
      { sku: 'BBB', qty: 0 },
      { sku: 'CCC', qty: 3 }
    ]
    order.__set__('inventoryData', this.testData)
  })

  it('order an item there are enough in stock', (done) => {
    order.orderItem('CCC', 3, () => {
      done()
    })
  })
})