const expect = require('chai').expect;
const { oneUpperCaseRule } = require('../password-rules');

describe('one uppercase rule', () => {
  it('given no uppercase, it false', () => {
    const result = oneUpperCaseRule('abc');
    expect(result.passed).to.be.false;
  });

  it('given one uppercase, it true', () => {
    const result = oneUpperCaseRule('aBc');
    expect(result.passed).to.be.true;
  });

  it('given two uppercase, it true', () => {
    const result = oneUpperCaseRule('ABc');
    expect(result.passed).to.be.true;
  });
});
