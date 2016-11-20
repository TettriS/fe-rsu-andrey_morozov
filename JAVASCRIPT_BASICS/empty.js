/* 1 */

var a = 9;
var b = "Lives";
console.log(a);
console.log(b);

/* 2 */

function triangleArea (a, h) {
    return (0.5 * a) * h;
}
console.log ( triangleArea(12, 15) );

/* 3 */

var arri = [ 2, 6, 4, 6, 7, 2, 3, 6, 5, 23, 8 ];
function forReverse (arr) {
    var m = [];
    for( var i = arr.length - 1; i >= 0; i--) {
        var a = 0;
        m[a] = arr[i];
        a++;
    }
    return m;
}

console.log ( forReverse(arri) );

function whileReverse (arr) {
    var m = [];
    var i = arr.length - 1;
    while ( i >= 0 ) {
        var a = 0;
        m[a] = arr[i];
        a++;
        i--;
    }
    return m;
}

console.log ( whileReverse(arri) );

function doWhileReverse (arr) {
    var m = [];
    do {
        var i = arr.length - 1;
        var a = 0;
        m[a] = arr[i];
        a++;
        i--;
    }
    while ( i >= 0);
    return m;
}

console.log ( doWhileReverse(arri) );


/* 4 */

var poof = 10;
console.log ( poof++ );
console.log ( poof );
console.log ( ++poof );

/* 5 */

function proof( a ) {
    if ( a === 0 ) {
        return a;
    } else if ( a > 0 ) {
        return a + " - Positive number.";
    } else if ( a < 0 ) {
        return a + " - Negative number.";
    } else {
        return a + " - is Not a number."
    }
}
console.log ( proof( 2 ) );
console.log ( proof( "7" ) );
console.log ( proof ( 0 ) );
console.log ( proof ( "roof") );

/* 6 */

var name = prompt ("You name is : ");
console.log ( "You name is " + name);

/* 7 */

function factorial (a) {
    if ( a > 1 ) {
        return a * fa( a - 1 );
    } else {
        return 1;
    }
}
console.log (factorial(25));