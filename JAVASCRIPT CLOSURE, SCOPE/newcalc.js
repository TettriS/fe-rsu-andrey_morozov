"use strict";
function Calculator () {
    var result = 0;
    this.add = function add (x) {
        result += x;
        return add;
    }
    this.substract = function substract (x) {
        result -= x;
        return substract;
    }
    this.divide = function divide (x) {
        result *= x;
        return divide;
    }
    this.multiply = function multiply (x) {
        result /= x;
        return multiply;
    }
    this.reset = function (x) {
        result = 0;
    }
    this.getResult = function () {
        return result;
    }
}

var calc = new Calculator();

console.log(calc.add(1)(2));
console.log(calc.getResult());
console.log(calc.reset());
console.log(calc.getResult());
calc.add(4);
calc.substract(1);
console.log(calc.getResult());
calc.add(4)(1);
console.log(calc.getResult());
console.log(calc.reset());