/**
 * Created by TettiS on 20.11.2016.
 */
"use strict";

// 1

var now = new Date(),
    one = new Date(2016, 11, 7),
    two = new Date(2016, 11, 8),
    tree = new Date(2016, 11, 9),
    four = new Date(2016, 11, 10),
    five = new Date(2016, 11, 11),
    six = new Date(2016, 11, 12),
    seven = new Date(2016, 11, 13),
    millennium = new Date(2000, 0, 1),
    arr = [2,1,5,43,"as","fa","dsh",23,35,"46s","67f","yhr","w",3,"wsfqf245"],
    arr3 = [2,2,2,5,2,5,3,7,4,3,3,7,5,2,3,5,7,7,2,3,2,7,5,4,3];
function nowDay(x) {
    switch( x.getDay()) {
        case 1:
            return "Today is: Monday!";
        case 2:
            return "Today is: Tuesday!";
        case 3:
            return "Today is: Wednesday!";
        case 4:
            return "Today is: Thursday!";
        case 5:
            return "Today is: Friday!";
        case 6:
            return "Today is: Saturday!";
        case 0:
            return "Today is: Sunday!";
    }
}
console.log (nowDay(now));
console.log (nowDay(one));
console.log (nowDay(two));
console.log (nowDay(tree));
console.log (nowDay(four));
console.log (nowDay(five));
console.log (nowDay(six));
console.log (nowDay(seven));

// 2

function Now() {
    return new Date();
}

console.log (Now());

// 3

function findDate() {
    var result = "1st January - Sunday in:";
    for ( var i = 2014; i <= 2050; i++ ) {
        var now = new Date(i, 1, 1);
        if (now.getDay() === 0) {
            result += " " + i + ",";
        }
    }
    return result;
}

console.log (findDate());

// 4

var thisYear = new Date(2016, 10, 13);
function toNewYear(x) {
    var nextYear = new Date(x.getFullYear()+1, 0, 1);
    return ((nextYear.getTime() - x.getTime()) /1000 /60 /60 /24).toFixed(0) + " days to next New Year!";
}

console.log(toNewYear(thisYear));
console.log(toNewYear(now));

// 5

function is_array (x) {
    return x instanceof Array;
}


console.log (is_array ('QWE'));
console.log (is_array ([1, 2, 4, 0]));

//function User() {}
//
//var user = new User();
//
//alert( user instanceof User ); // true

// 6

function clone (arr) {
    var arrResult = [];
    for( var i = 0 ; i < arr.length ; i++ ) {
        arrResult.push(arr[i]);
    }
    return arrResult;
}
var arr2 = clone(arr);

console.log(arr2);

// 7

function oftenRepeated (a) {
    var result = 0,
        sum,
        sum2 = 0;
    for ( var b = 0 ; b < a.length; b++ ) {
        sum = 0;
        for ( var i = 0; i < a.length; i++ ) {
            if ( a[b] === a[i] ) {
                sum += 1;
            }
        }
        if ( sum2 < sum ) {
            sum2 = sum;
            result = a[b];
        }
    }
    return result;
}

console.log(oftenRepeated(arr3));

// 8

function invertString(x) {
    var result = '';
    if (x !== x.toLowerCase()) {
        result = x.toLowerCase();
    } else {
        result = x.toUpperCase();
    }
    return result;
}

console.log(invertString("abracadabrua"));

// 9

var arr4 = ["a", "b", "e", "s", "d", "g", "h", "h", "s", "n", "b", "z"];

console.log(arr4);

function delCopy(arr){
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length;) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1)
            } else {
                j++;
            }
        }
    }
    return arr;
}

console.log(delCopy(arr4));

// 10

function randomSort (arr) {
    function y (a, b) {
        if (a > b) {
            return Math.random() - 0.5;
        } else {
            return Math.random() - 0.5;
        }
    }
    return arr.sort(y);
}

console.log(randomSort(arr));
console.log(randomSort(arr));
console.log(randomSort(arr3));
console.log(randomSort(arr3));

// 11


var badArr = [ 12, 15, 125312, "12452312", undefined, null, NaN, "NaN", '', "", '""', "abc", 0, "undefined", "null"];

function cleared (arr) {
    for ( var i = 0 ; i < arr.length ; ) {
        if (
             arr[i] === undefined ||
             arr[i] === null ||
             isNaN(arr[i]) ||
             arr[i] === "undefined" ||
             arr[i] === "null" ||
             arr[i] === "NaN" ||
             arr[i] === 0 ||
             arr[i] === "" ||
             arr[i] === '""'
            ) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}
cleared(badArr);

console.log(badArr);


// 12

var library = [
    {   author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254},
    {   author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264},
    {   author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245}
];


function sortForName(arr) {
    function y (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    }
    return arr.sort(y);
}

console.log(sortForName(library));

// 13

var arr11 = [1,2,3,4],
    arr12 = [4,5,6,7,8,9];
function mergeArr (arr1 , arr2) {
    var result = arr1;
    for ( var i = 0 ; i < arr2.length ; i++ ) {
        result.push(arr2[i]);
    }
    function delCopy(arr){
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; ) {
                if (arr[i] == arr[j]) {
                    arr.splice(j, 1)
                } else {
                    j++;
                }
            }
        }
        return arr;
    }
    return delCopy(result);
}

console.log(mergeArr(arr11,arr12));

// 14


function delThis (arr, elem) {
    var index = arr.indexOf(elem);
    while ( index != -1 ) {
        index = arr.indexOf(elem, pos + 1);
        arr.splice(index, 1);
    }
    return arr;
}

console.log(delThis(arr3, 2));

//15

function random (arr) {
    return arr[(Math.floor(Math.random() * arr.length))];
}

console.log(random(arr2));

// 16
// var arr = [2,1,5,43,"as","fa","dsh",23,35,"46s","67f","yhr","w",3,"wsfqf245"];

function toRandomIndex(arr, n) {
    var y = arr.indexOf(n),
        random = (Math.floor(Math.random() * arr.length)),
        z = arr.splice(y, 1);
    arr.splice(random, 0, z[0]);
    return arr;
}

console.log(toRandomIndex(arr, "w"));
console.log(toRandomIndex(arr, "w"));
console.log(toRandomIndex(arr, "w"));
console.log(toRandomIndex(arr, "w"));
console.log(toRandomIndex(arr, "w"));

// 17

function differenceInDays (date1, date2) {
    return (((date2.getTime() - date1.getTime()) /1000 /60 /60 /24).toFixed(0));
}

console.log(differenceInDays(millennium, now));

// 18

function MaxDate (arrDates) {
    var result = "";
    for ( var i = 0; i < arrDates.length ; i++ ) {
        if ( arrDates[i] > result ) {
            result = arrDates[i];
        } 
    }
    return result;
}

console.log (MaxDate ([ '2015/02/01', '2015/02/02', '2015/01/03']));// "2015/02/02"

// 19

var abraString = "abra Cadabrua Rabrua rish Arabra rabra rigra brooma brimma gira froof";
function strToArr (str) {
    return str.split(" ");
}

console.log(strToArr(abraString));

// 20

function firstUpper (str) {
    var str2 = str;
    str2 = str2.charAt(0).toUpperCase() + str2.substr(1);
    return str2;
}

console.log(firstUpper(abraString));

// 21


function camelize (str) {
    if (str.indexOf(" ") !== -1) {
        var arr1 = str.split(" ");
        for ( var i = 0 ; i < arr1.length ; i++ ) {
            arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].substr(1);
        }
        return arr1.join("");
    } else if (str.indexOf("-") !== -1) {
        var arr2 = str.split("-");
        for ( var i = 0 ; i < arr2.length ; i++ ) {
            arr2[i] = arr2[i].charAt(0).toUpperCase() + arr2[i].substr(1);
        }
        return arr2.join("");
    }
}

console.log(camelize("Java Script"));
console.log(camelize("java-script")); 
console.log(camelize("Java Script Exercises"));
/* for test:
"JavaScript"
"JavaScript"
"JavaScriptExercises"
*/

// 22

//var arr3 = [2,2,2,5,2,5,3,7,4,3,3,7,5,2,3,5,7,7,2,3,2,7,5,4,3];
function maxElem (arr) {
    var result = arr[1];
    for ( var i = 0 ; i < arr.length ; i++ ) {
        if ( result < arr[i] ) {
            result = arr[i];
        }
    }
    return result;
}

console.log(maxElem(arr3));

// 23

function minElem (arr) {
    var result = arr[1];
    for ( var i = 0 ; i < arr.length ; i++ ) {
        if ( result > arr[i] ) {
            result = arr[i];
        }
    }
    return result;
}

console.log(minElem(arr3));

// 24

var nNum = 0,
    notNum = "asdr";

function varIsNum (v) {
    return !isNaN(parseFloat(v)) && isFinite(v);
}

console.log(varIsNum(nNum));
console.log(varIsNum(notNum));



// 25 

// var arr3 = [2,2,2,5,2,5,3,7,4,3,3,7,5,2,3,5,7,7,2,3,2,7,5,4,3];
function sumOfValues (arrNumbers) {
    var result = 0;
    for ( var i = 0 ; i < arrNumbers.length ; i++ ) {
        result += arrNumbers[i];
    }
    return result;
}

console.log(sumOfValues(arr3));//"98"  

// 26


var obj1 = {   
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254},
    obj2 = {   
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264},
    obj3 = {   
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245};


function objLength (obj) {
    var result = 0;
    for ( var key in obj ) {
        result++;
    }
    return result;
}

console.log(objLength(obj1));
console.log(objLength(obj2));
console.log(objLength(obj3));

// 27

function propertiesList (obj) {
    var result = "";
    for (var key in obj) {
    result += obj[key]+"\n";
    }
    return result;
}

console.log(propertiesList(obj1));
console.log(propertiesList(obj2));
console.log(propertiesList(obj3));