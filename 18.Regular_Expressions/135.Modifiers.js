console.log("%c===> [Regular Expressions] #135 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Syntax
  - Modifiers => Flags [i,g,m]
  - Search methods => match(pattern)
  - match
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /Elzero/;

console.log(myString.match(regex));
console.log(myString.match(/elzero/));
console.log(myString.match(/elzero/i));
console.log(myString.match(/elzero/ig));
console.log(myString.match(/elzeros/ig)); //null

let Way2 = new RegExp(/hello/,"i");
console.log(myString.match(Way2));
