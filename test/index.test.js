const { descSort, ascSort } = require('../src/index')
const assert = require('assert')

describe('sort an array', function() {
    it('should sorted array orderd by DESC', function() {
        assert.deepEqual([1,10000,21,30,4].sort(descSort),[10000,30,21,4,1])
    }); 
});