var logAnalyzer = require('../log-and-notification'),
    expect      = require('chai').expect;

describe('isValidLogFile function', function() {
  it('abc is not valid log file name', function() {
    expect(logAnalyzer.isValidLogFile('abc')).to.be.not.ok;
  });

  it('a.slf is valid log file name', function() {
    expect(logAnalyzer.isValidLogFile('a.slf')).to.be.ok;
  });

  it('a.slfm is not valid log file name', function() {
    expect(logAnalyzer.isValidLogFile('a.slfm')).to.be.not.ok;
  });

  it('aslf is not valid log file name', function() {
    expect(logAnalyzer.isValidLogFile('aslf')).to.be.not.ok;
  });

  it('null is not valid log file name', function() {
    try {
      expect(logAnalyzer.isValidLogFile(null)).to.throw('file name empty!');
    } catch(e) {}
  });
});

describe('wasLastFileNameValid function', function() {
  it('abc was not last valid log file name', function() {
    logAnalyzer.isValidLogFile('abc');
    expect(logAnalyzer.wasLastFileNameValid()).to.be.false;
  });
});
