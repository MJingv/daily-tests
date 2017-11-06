const { add, mul,cover } = require('./test')
const assert = require('assert')
const { should, expect, asserts } = require('chai')

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2+3', () => {
      expect(add(2, 3), 5)
    })
    it('should return 5 when 2+3', () => {
      expect(add(-1, 1), 0)
    })

  })
  describe('mul', () => {
    it('should return 6 when 2*3', () => {
      expect(add(2, 3), 6)
    })
    it('should return 0 when 0*2', () => {
      expect(add(0, 2), 0)
    })

  })
  describe('cover', () => {
    it('should return 5 when 2+3', () => {
      expect(add(2, 3), 1)
    })


  })

})
