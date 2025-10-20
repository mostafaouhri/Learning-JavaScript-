console.log("%c===> [Map And Set] #125 <===", "color:darkorange");

/*
 =========> map vs object <=========
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);
console.log(myMap);

let myNewObject = {
    10: "number",
    "10": "string", // update value
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() { }, "function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("#".repeat(4));

console.log(myNewObject);
console.log(myNewMap);
