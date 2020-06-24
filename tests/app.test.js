var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEqual = require('../app')

describe('app', () => {
  describe('strictEqual', () => {
    it('returns true if two inputs are strictly equal to each other & returns false if not', () => {
      // setup test data
      var inputOne = '5'
      var inputTwo = 5
      // call the function with the test data
      var result = strictEqual(inputOne, inputTwo)
      // asserts what should be true

      expect(result).to.equal(false)
    })
  })
})
