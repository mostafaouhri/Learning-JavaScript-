console.log("%c===> [Regular Expressions] #143 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Replace With Pattern
    --- replace
    --- replaceAll
*/

let txt = "We Love  Programming And @ because @ is Amazing";

console.log(txt.replace("@", "JS"));
console.log(txt.replaceAll("@", "JS"));

let re2 = /@/ig;
console.log(txt.replaceAll(re2, "Python"));
console.log(txt.replaceAll(/@/ig, "TS"));