// Function 
// - arrow function :
// --- regular vs arrow [param + no param]
// --- multiple lines

console.log('==================');

// let print = function () {
//     return 10;
// };

// let print = _ => 10;

// let print = function (num) {
//     return num;
// };

let print = num => num;
let print2 = (num1 , num2) => num1 + num2;

console.log(print(100));
console.log(print2(100,50));