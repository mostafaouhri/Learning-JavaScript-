// Challenge 1 //
var a = 10;
var b = "20";
var c = 80;


console.log(++a + +b++ + +c++ - +a++); //a = 11
//           11  +  20   + 80  - 11 = 100
// a=12 b='21' c=81 update value after increment 
console.log( ++a + -b + +c++ - -a++ + +a );
//           13  + -21 + 81  - -13  + 14 // a=13 c=82 a=14


// console.log( --c + +b + --a * +b++ - +b * a + --a - +true);

/*
 ++a / ++b / ++c  => pre increment
 a-- / b-- / c--  => post increment
 a-- / b-- / c--  => post Decrement  
 +   => Unary Plus (return number if it's not number )
 -   => Unary Negation (return number if it's not number & Negates it )
*/

// Challenge 2 //
var d = "-100";
var e = "20";
var f = 30;
var g = true;

// console.log(-d * e); //2000
// console.log( ++f + ++e * ++g + -d); //173


