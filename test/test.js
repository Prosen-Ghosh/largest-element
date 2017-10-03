const largest = require('../largest');
const assert = require('chai').assert;
describe('Average Of An Array',function(){
    it('Function Shuld Return Largest Of An Array',function(){
        assert.equal(largest([1,-2,-1,-5]),1);
        assert.equal(largest([1]),1);
        assert.equal(largest([]),null);
        assert.equal(largest([-10,-2,-1,{}]),-1);
    });
    it('Function Shuld Return A Type Error',function(){
        assert.equal(largest(),'TypeError: largest() expects an array parameter');
    });
})