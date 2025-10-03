/* 
- Map 
--- Swap Cases
--- Inverted Numbers
--- Ignore boolean value
*/

console.log('%c===> Higher Order Functions [Map] 72 <===', "color:red;");


let swapingCases = "oUhrI";
// let sw = swapingCases.split('').map(function (ele, i, arr) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");

// arrow function
let sw = swapingCases.split('').map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");

console.log(sw);

///////////////////////////////////////////////////////////////////////////////
let invertedNumbers = [1, -10, -20, 100, -30];
console.log(invertedNumbers);
// let inv = invertedNumbers.map(function (ele) {
//     return -ele;
// });

let inv = invertedNumbers.map((ele) => -ele);

console.log(inv);

///////////////////////////////////////////////////////////////////////////////
let ignoreNumbers = "Ouh123r4i";
console.log(ignoreNumbers);

// let ign = ignoreNumbers.split("").map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

let ign = ignoreNumbers.split("").map((ele) => isNaN(parseInt(ele)) ? ele : "").join("");

console.log(ign);