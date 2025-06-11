/*
=> String Methods 3 : 
- Substring
- Start > end => will swap
- Start < 0   => it start from 0
- Use Length to get last char
- substr 
- start >=  
-  negative start
- includes  [ES6]
- StartsWith (value ,start) [ES6]
- endsWith (value ,Length) [ES6]
*/

var a = "Elzero Web School";

console.log(a.substring(2));
console.log(a.substring(2, 6)); // zero
console.log(a.substring(6, 2)); // will swap
console.log(a.substring(-10));
console.log(a.substring(-10, 6)); // 0 > 6 // elzero

console.log(a.substring(a.length - 1)); // last char (l)
console.log(a.substring(a.length - 5)); // chool
console.log(a.substring(a.length - 5, a.length - 3)); // ch

// console.log(a.substr(0)); // deprecated
// console.log(a.substr(0, 6));  // deprecated
// console.log(a.substr(-3));  // deprecated
// console.log(a.substr(-5,2));  // deprecated

console.log(a.includes("Web"));
console.log(a.includes("Web",8));

console.log(a.startsWith("E")); //true
console.log(a.startsWith("E",2));//false
console.log(a.startsWith("z",2));//true

console.log(a.endsWith("o"));//false
console.log(a.endsWith("o",6));//true
console.log(a.endsWith("ro",6));//true
console.log(a.endsWith("l"));//true

