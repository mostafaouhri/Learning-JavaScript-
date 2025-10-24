console.log("%c===> [Regular Expressions] #136 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Ranges
*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-9]/g;
console.log(nums.match(numsRe));
console.log(nums.match(/[0-2]/g));
console.log(nums.match(/[^0-2]/g));

let specialNums = "1!2@3#4$5%6/78910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os10s Os2 Os8 Os8Os ";
let practiceRe = /Os[5-9]Os/ig;
console.log(practice.match(practiceRe));
