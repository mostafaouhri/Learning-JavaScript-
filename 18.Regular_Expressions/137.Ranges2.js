console.log("%c===> [Regular Expressions] #137 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Ranges 2
*/
let myString2 = "AaBbcdefG123!234%^&*";
let azSmall = /[a-z]/g;
let notAzSmall = /[^a-z]/g;

console.log(myString2.match(notAzSmall));
console.log(myString2.match(/[A-Z]/g));
console.log(myString2.match(/[^A-Z]/g));
console.log(myString2.match(/[abc]/g));
console.log(myString2.match(/[^abc]/g));
console.log(myString2.match(/[a-z]/ig));
console.log(myString2.match(/[a-zA-Z]/g));
console.log(myString2.match(/[^a-zA-Z]/g));
console.log(myString2.match(/[^a-zA-Z1-9]/g));
console.log(myString2.match(/[^a-z^A-Z1-9]/g));