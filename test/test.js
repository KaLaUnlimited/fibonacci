'use strict';

var expect = require('chai').expect;
var fib = require('../index');

describe('#fib', function() {
    it('should print out the first 2 fibonacci numbers including 0', function() {
        var result = fib(1);
        expect(result.toString()).to.equal('0,1');
    });

    it('should print out the first 13 fibonacci numbers including 0', function() {
        var result = fib(12);
        expect(result.toString()).to.equal('0,1,1,2,3,5,8,13,21,34,55,89,144');
    });

    it('should print out the first 17 fibonacci numbers including 0', function() {
        var result = fib(16);
        expect(result.toString()).to.equal('0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987');
    });

    it('should print out the first 21 fibonacci numbers including 0', function() {
        var result = fib(20);
        expect(result.toString()).to.equal(`0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765`);
    });

    ;

   
});