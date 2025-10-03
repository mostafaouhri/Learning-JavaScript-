/* 
- Filter 
--- method creates a new array
--- with all elements that pass the test implemented by the provided function.

  Syntax Filter :
*/

console.log('%c===> Higher Order Functions [Filter] 73 <===', "color:red;");

//get friends with name starts with A :
let friends = ["ahmed", "Sameh", "sayed", "asmaa", "amgad", "israa"];

let filterFriends = friends.filter(function (ele) {
    return ele.startsWith('a');
});
console.log(filterFriends);

//get even number only :
let numbers = [10, 20, 2, 5, 17, 10];
console.log(numbers);

// Test Map Vs Filter
let addMap = numbers.map(function (ele) {
    return ele + ele;
});
console.log(addMap);

// let addFilter = numbers.filter(function (ele) {
//     return ele + ele;
// }); //Error Use For Filter
// console.log(addFilter);

let evenNumbers = numbers.filter(function (ele) {
    return ele % 2 == 0;
})
console.log(evenNumbers);

