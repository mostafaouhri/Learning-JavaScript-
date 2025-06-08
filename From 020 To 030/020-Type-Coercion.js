/*
=> Type Coercion (Type Casting):
-
 */

var a = '10';
var b = 20;
var c = true;

console.log(a + b); //1020 string
console.log(+a + b); // 30 number
console.log(Number(a) + b); // 30 number
console.log(a - b); // -10
console.log(""-2); // -2
console.log(false - true); // -1
console.log(a+b+c); // 1020true
console.log(+a+b+c); // 31
