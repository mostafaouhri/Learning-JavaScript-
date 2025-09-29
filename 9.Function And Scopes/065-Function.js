/* 
Function :
- function inside function
- return function

*/
console.log("------------------");

// Example 1 :------------------------------------
// function sayMsg(fName, lName) {
//     let msg = `Hello`;
       // Nested Function
//     function concatMsg() {
//         msg = `${msg} ${fName} ${lName}`;
//     }
//     concatMsg();
//     return msg;
// }
// console.log(sayMsg("Mostafa", "Ouhri"));

// // Example 2 :------------------------------------
// function sayMsg(fName, lName) {
//     let msg = `Hello`;
       // Nested Function 
//     function concatMsg() {
//         return `${msg} ${fName} ${lName}`;
//     }
//     return concatMsg();
// }
// console.log(sayMsg("Mostafa", "Ouhri"));

// Example 3 :------------------------------------
function sayMsg(fName, lName) {
    let msg = `Hello`;
    // Nested Function
    function concatMsg() {
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${msg} ${getFullName()}`;
    }
    return concatMsg();
}
console.log(sayMsg("Mostafa", "Ouhri"));