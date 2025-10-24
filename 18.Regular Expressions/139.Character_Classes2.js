console.log("%c===> [Regular Expressions] #139 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Character Classes 2
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";

let re = /spam/ig;

console.log(names.match(re));
console.log(names.match(/\bspam/ig));
console.log(names.match(/spam\b/ig));
console.log(names.match(/(\bspam|spam\b)/ig));
console.log(names.match(/\bSpan\b/ig));

console.log(re.test(names));
console.log(/Omar/ig.test(names));
console.log(/Omar/ig.test("Osama"));
