console.log("%c===> [Regular Expressions] #138 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Character Classes 1
*/
let email = "o@@@g...com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";
let dot = /./g;
let w = /\w/g;
let valid = /\w@\w.(com|net)/g;

console.log(email.match(dot));
console.log(email.match(w));
console.log(email.match(/\W/g));
console.log(email.match(/\d/g));
console.log(email.match(/\D/g));
console.log(email.match(/\s/g));
console.log(email.match(/\S/g));
console.log(email.match(valid));
