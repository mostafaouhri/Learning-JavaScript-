/*
=> Object :
--- dig deeper
--- dot notation Vs bracket notation
--- dynamic property name
*/

console.log("%c========>  #80  <========", "color:red");
let myVar = "country"

let user2 = {
    theName: "Mostafa",
    country: "Morocco",
    "country of": "Iraq",

};

console.log(user2.theName);
console.log(user2["country of"]);
console.log(user2.country);
console.log(user2.myVar);
console.log(user2[myVar]);
