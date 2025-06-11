/*
=> String Methods 2 : 
- Access With Index
- indexOf
- lastIndexof
- slice
- repeat
- split
*/

var a = "Elzero Web School";

console.log(a.indexOf("Web")); // 7
console.log(a.indexOf("Web",8)); // -1

console.log(a.lastIndexOf("Web")); // 7 

console.log(a.indexOf("o"));// 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(0))
console.log(a.slice(2))
console.log(a.slice(0,6))
console.log(a.slice(-5)) // chool
console.log(a.slice(-5,-3)) // ch

console.log(a.repeat(2))

console.log(a.split())
console.log(a.split(""))
console.log(a.split(" "))
console.log(a.split(" ",2))
console.log(a.split("",5))
