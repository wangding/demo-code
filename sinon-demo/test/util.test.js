var testMe = require('../util'),
    sinon  = require('sinon'),
    chai = require('chai');

chai.use(require('sinon-chai'));
var expect = chai.expect;


describe('testMe function', function() {
  it('should call the callback', function() {
    var cb = sinon.spy();
    testMe(cb);
    expect(cb).to.have.been.calledOnce;
  });
});

