/*
 ==> Function Arrow Challenges :
 - [1] one statement in function 
 - [2] convert to arrow function
 - [3] print the output [arguments may change]
 */

console.log('----- Function Arrow Challenges 70 -------');

//regular 
// let names = function (...names) {
//     return "String [" + names.join("], [") + "] => Done !";
// };

//arrow function 
let names = (...names) => "String [" + names.join("], [") + "] => Done !";

console.log(names("Mostafa", "Mohamed", "Ali", "ibrahim", "Rania"));
//String [osama], [Mohamed], [Ali], [ibrahim] => Done !

/*=============================================================== */

/*
 - [1] replace ??? in return statement to get the output
 - [2] create the same function with regular syntax
 - [3] use array inside the arguments to get the output
 */

let myNumbers = [20, 50, 10, 60];

// let calc2 = (one, two, ...nums) => one + two + Number(nums); //arrow Function syntax
let calc2 = function (one, two, ...nums) { //regular syntax
    return one + two + Number(nums)
};

console.log(calc2(10, myNumbers[0], myNumbers[1]));//80