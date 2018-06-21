let Calculator = require('./calculator.js');
describe("Calculator", function() {

    var calculator;

    beforeEach(function() {
      calculator = new Calculator();
    });

    it("starts empty", function() {
        expect(calculator.value()).toEqual(null);
    });

    it("can have a value 'pushed' onto it", function() {
        calculator.push(2);
        expect(calculator.value()).toEqual(2);
    });

    it("adds two numbers", function() {
        calculator.push(2);
        calculator.push(3);
        calculator.plus();
    expect(calculator.value()).toEqual(5);
    });

    it("adds three numbers", function() {
        calculator.push(2);
        calculator.push(3);
        calculator.push(4);
        calculator.plus();
        expect(calculator.value()).toEqual(7);
        calculator.plus();
        expect(calculator.value()).toEqual(9);
    });

    it("adds and subtracts", function() {
        calculator.push(2);
        calculator.push(3);
        calculator.push(4);
        calculator.minus();
        expect(calculator.value()).toEqual(-1);
        calculator.plus();
        expect(calculator.value()).toEqual(1);
    });

    it("multiplies and divides", function() {
        calculator.push(2);
        calculator.push(3);
        calculator.push(4);
        calculator.divide();
        expect(calculator.value()).toEqual(0.75);
        calculator.times();
        expect(calculator.value()).toEqual(1.5);
    });

    it("fails informatively when there's not enough values stashed away", function() {
        expect(function() {
            calculator.plus();
        }).toThrow("calculator is empty");

        expect(function() {
            calculator.minus();
        }).toThrow("calculator is empty");

        expect(function() {
            calculator.times();
        }).toThrow("calculator is empty");

        expect(function() {
            calculator.divide();
        }).toThrow("calculator is empty");
    });
});