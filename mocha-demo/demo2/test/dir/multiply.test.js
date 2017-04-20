var multiply = require('../../cal').multiply;
var expect = require('chai').expect;

describe('unit test of multiply', function() {
  it('0*0 = 0', function() {
    expect(multiply(0, 0).to.be.equal(0));
  });

  it('1*1 = 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });

  it('1*0 = 0', function() {
    expect(multiply(1, 0)).to.be.equal(0);
  });
});
