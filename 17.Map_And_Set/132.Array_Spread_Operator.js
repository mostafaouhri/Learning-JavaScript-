console.log("%c===> [Map And Set] #132 <===", "color:darkorange");

/*
//    |=========> Spread Operator => ...Iterable <=========|
*/

// Spread With String => Expand String
console.log("Mostafa");
console.log(..."Mostafa");
console.log(...["Mostafa"]);
console.log([..."Mostafa"]);

// Concatenate Arrays
let myArray11 = [1, 2, 3];
let myArray22 = [4, 5, 6];
console.log([...myArray11, ...myArray22]);

// Copy Array
let CopiedArray = [...myArray11];
console.log([...myArray11, ...myArray22]);

// push inside array
let allFriends = ["Osama", "Ahmed", "Jean"];
let thisYearFriends = ["Nada", "Asma", "Soumia"];
allFriends.push(...thisYearFriends);
console.log(allFriends);

// use with math object 
let myNums = [10, 20, -100, 200, 3000];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects
let objOne = {
    a: 1,
    b: 2,
};
let objTwo = {
    c: 3,
    d: 4,
};

console.log({ ...objOne, ...objTwo });

