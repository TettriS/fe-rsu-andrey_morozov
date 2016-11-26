"use strict";
function Calculator () {
    this.result = 0;
    this.add = function (opr) {
        this.result += opr;
        return this;
    };
    this.subtract = function (opr) {
        this.result -= opr;
        return this;
    };
    this.divine = function (opr) {
        this.result /= opr;
        return this;
    };
	this.multiply = function (opr) {
		this.result *= opr;
        return this;
	};
	this.getResult = function () {
        return this.result;
    };
    this.resetTo = function (newResult) {
        this.result = newResult;
        return this;
    };
    this.reset = function () {
        this.result = 0;
        return this;
    };
}
// for (var prop in user) {
//   if (typeof user[prop] == 'function') {
//     user[prop] = user[prop].bind(user);
//   }
// }
function getInitialState(callback) {
    setTimeout(function () { 
    callback(5);
    console.log(calc.getResult());
    }, 500);
}
var calc = new Calculator();
console.log(calc.getResult());
calc.add(22);
calc.subtract(20);
calc.divine(2);
calc.multiply(4);
console.log(calc.getResult());
calc.reset();
console.log(calc.getResult());
calc.add(4).reset().add(1).getResult();
console.log(calc.getResult());
getInitialState(calc.resetTo.bind(calc));