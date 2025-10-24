console.log("%c===> [Regular Expressions] #141 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Quantifiers 2
  n(x)       => number of
  n(x,y)     => range
  n(x,)      => at least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/S\d{3}S/ig));
console.log(serials.match(/S\d{4,5}S/ig));
console.log(serials.match(/S\d{4,}S/ig));