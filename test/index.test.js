const { descSort, ascSort } = require('../src/index')
const assert = require('assert')

describe('sort an array', function() {
    it('should sorted array orderd by DESC', function() {
        assert.deepEqual([1,10000,21,30,4].sort(descSort),[10000,30,21,4,1])
    });
    it('should sorted array orderd by ASC', function() {
        assert.deepEqual([1,10000,21,30,4].sort(ascSort),[1,4,21,30,10000])
    });
    it('should sorted array orderd by ASC', function() {

      assert.deepEqual([5,-10].sort(ascSort),[5,-10])
  });
});