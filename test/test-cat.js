var assert = require('assert')
  , expect = require('chai').expect
  , Cat = require('./../cat.es5.js');

describe('Cat', function () {
  it('should exist', function () {
    expect(Cat).to.exist;
  });

  it('should be a function', function () {
    expect(Cat).to.be.a.function;
  });
});

