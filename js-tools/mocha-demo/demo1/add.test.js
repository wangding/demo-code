var add = require('./add');
var expect = require('chai').expect;

describe('unit test of add', function() {
  it('1+1 = 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('1+0 = 1', function() {
    expect(add(1, 0)).to.be.equal(1);
  });

  it('1-1 = 0', function() {
    expect(add(1, -1)).to.be.equal(0);
  })
});
