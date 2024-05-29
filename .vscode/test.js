const chai = require('chai');
const expect = chai.expect;
const Calculator = require('./Calculator');

describe('Calculator', function () {
    describe('divide', function () {
        it('divides two positive numbers', function () {
            const calculator = new Calculator();
            const result = calculator.divide(6, 3);
            expect(result).to.equal(2);
        });

        it('divides a positive number by a negative number', function () {
            const calculator = new Calculator();
            const result = calculator.divide(6, -3);
            expect(result).to.equal(-2);
        });

        it('divides a negative number by a positive number', function () {
            const calculator = new Calculator();
            const result = calculator.divide(-6, 3);
            expect(result).to.equal(-2);
        });

        it('divides two negative numbers', function () {
            const calculator = new Calculator();
            const result = calculator.divide(-6, -3);
            expect(result).to.equal(2);
        });

        it('throws an error when dividing by zero', function () {
            const calculator = new Calculator();
            expect(() => calculator.divide(6, 0)).to.throw("Cannot divide by zero");
        });
    });
});