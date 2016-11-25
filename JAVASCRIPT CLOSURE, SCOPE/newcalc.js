"use strict";
function Calculator () {
    var result = 0;
    this.add = function (x) {
        result += x;
        return function (y) {
            result += y;
        };
    }
    this.substract = function (x) {
        result -= x;
        return function (y) {
            result -= y;
        };
    }
    this.divide = function (x) {
        result *= x;
        return function (y) {
            result *= y;
        };
    }
    this.multiply = function (x) {
        result /= x;
        return function (y) {
            result /= y;
        };
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