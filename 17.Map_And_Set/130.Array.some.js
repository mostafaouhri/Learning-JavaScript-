console.log("%c===> [Map And Set] #130 <===", "color:darkorange");

/*
   |=========> Array Methods <=========|
   - Array.some
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 5;

// let check = nums.some(function (e) {
//     console.log("Test");
//     return e > 5;
// });

let check = nums.some(function (e) {
    console.log(this);
    return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
    return arr.some((e) => e === val);
};

console.log("checkValues:", checkValues(nums, 1));
console.log("checkValues:", checkValues(nums, 20));

let range = {
    min: 10,
    max: 20,
};

// let checkRange = nums.some((ele) => ele >= range.min && ele <= range.max )
let checkRange = nums.some(function (ele) {
    return ele >= this.min && ele <= this.max;
}, range)

console.log("checkRange:", checkRange);