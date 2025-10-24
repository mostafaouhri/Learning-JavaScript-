console.log("%c===> [Regular Expressions] #142 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Quantifiers 3
    $   => End with  Something
    ^   => Start with  Something
    ?=  => Followed By  Something  
    ?!  => Not Followed By  Something 
*/

let myString3 = "We Love Programming";
let names3 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString3));
console.log(/^we/ig.test(myString3));
console.log(/lz$/ig.test(names3));
console.log(/^1/ig.test(names3));
console.log(/^\d/ig.test(names3));
console.log(/^\w/ig.test(names3));
console.log(/^\s/ig.test(names3));

console.log(names3.match(/\d\w{5}(?=z)/ig));
console.log(names3.match(/\d\w{8}(?!z)/ig));