"use strict";
function Calculator () {
    var result = 0;
    this.add = function (x) {
        result += x;
        return this.add;
    }
    this.substract = function (x) {
        result -= x;
        return this.substract;
    }
    this.divide = function (x) {
        result /= x;
        return this.divide;
    }
    this.multiply = function (x) {
        result *= x;
        return  this.multiply;
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