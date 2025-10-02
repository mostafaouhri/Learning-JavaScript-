/* 
==> Higher Order Functions :
---> is a function the accepts functions as parameters and/or return fanction.

- Map 
--- method creates a new array
--- populated with the results of calling a provided function on every element
--- in the calling array

- syntax map 
--- element
--- index
--- array

- Notes 
--- map return a new array

- Examples
--- anonymous function
--- Named function
*/

let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);

// same Idea with Map :==============================

let addSelf = myNums.map(function (element, index, array) {
    console.log(`${this}`);
    return element + element;

}, 10)

console.log(addSelf);

function addition(ele) {
    return ele + ele;
}
let add = myNums.map(addition);

console.log(add);
