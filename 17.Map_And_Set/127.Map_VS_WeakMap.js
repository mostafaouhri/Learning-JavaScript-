console.log("%c===> [Map And Set] #127 <===", "color:darkorange");

/*
   |=========> Map VS WeakMap <=========|
   
   Map     => key can be anything
   WeakMap => key can be object only
*/


let mapUser = { name: "Ouhri" };
let myMap3 = new Map();

myMap3.set(mapUser, "Object Value");

mapUser = null; // override the reference

console.log(myMap3);
console.log(mapUser);

console.log("#".repeat(20));

//----------- weakMap -----------
let wMapUser = { name: "Ouhri" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Obj Value");

myWeakMap = null; // override the reference

console.log(myWeakMap);