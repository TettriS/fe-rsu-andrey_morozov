var a = 9;
var b = "Lives";
alert(a);
alert(b);

/* 1 */

function triangleArea (a, b, c) {
    return (a + b + c)/2;
}
alert( triangleArea(12, 15, 19) );

/* 2 */

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

alert( forReverse(arri) );

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

alert( whileReverse(arri) );

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

alert( doWhileReverse(arri) );

/* 3 */

var poof = 10;
alert ( poof++ );
alert ( poof );
alert ( ++poof );

/* 4 */

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
alert ( proof( 2 ) );
alert ( proof( "7" ) );
alert ( proof ( 0 ) );
alert ( proof ( "roof") );

/* 5 */

var name = prompt ("You name is : ");
alert( "You name is " + name);

/* 6 */

function factorial (a) {
    for ( var i = 1; i <= a; ++i ) {
        a *= i;
    }
    return a;
}
alert ( factorial(35) );

/* 7 */