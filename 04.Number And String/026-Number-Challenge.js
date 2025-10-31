// Number-Challenge :

var a = 1_00;
var b = 2_00.5;
var c = 1e2;
var d = 2.4

console.log(Math.trunc(Math.min(a, b, c, d)));// min num + intger

//use a+d
console.log(Math.pow(a, Math.trunc(d))) //10_000

//Get Integer '2' from d var with 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));

// use vars "b + d" to get value :
console.log((200 / 3).toFixed(2)); //66.67 => string 
console.log(201 / 3); //67    => number 