var isValidLogFile = require('../log-and-notification'),
    expect         = require('chai').expect;

describe('isValidLogFile function', function() {
  it('a is not valid log file name', function() {
    expect(isValidLogFile('a')).to.be.not.ok;
  });

  it('a.slf is valid log file name', function() {
    expect(isValidLogFile('a.slf')).to.be.ok;
  });

  it('a.slfm is not valid log file name', function() {
    expect(isValidLogFile('a.slfm')).to.be.not.ok;
  });

  it('aslf is not valid log file name', function() {
    expect(isValidLogFile('aslf')).to.be.not.ok;
  });

  it('null is not valid log file name', function() {
    try {
      expect(isValidLogFile(null)).to.throw('file name empty!');
    } catch(e) {}
  });
});
