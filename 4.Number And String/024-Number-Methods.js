/*
==> Number Methods :
-Two dots to call a Method
-toString()
-toFixed()
-parseInt()
-parseFloat()
-isInteger() [ES6]
-isNaN() [ES6]
*/

console.log((100).toString());
console.log(100.1.toString());
console.log(100..toString());

console.log(200.55555555555.toFixed(2));

console.log(Number("24mostafa"));
console.log(+("24mostafa"));
console.log(parseInt("24 mostafa"));
console.log(parseInt("24.56 mostafa"));

console.log(parseFloat("24.24 mostafa"));

console.log(Number.isInteger("24"));
console.log(Number.isInteger(24.24));
console.log(Number.isInteger(24));

console.log(Number.isNaN("Ouhri"));
console.log(Number.isNaN(24/'Mostafa')); // is not a number ?
