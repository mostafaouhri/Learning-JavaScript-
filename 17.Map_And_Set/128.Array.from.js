console.log("%c===> [Map And Set] #128 <===", "color:darkorange");

/*
   |=========> Array Methods <=========|
   - Array.from(Iterable, MapFunc, This)
   ---- Variable
   ---- String Numbers
   ---- Set
   ---- Using The Map Function
   ---- Arrow Function
   ---- Shorten The Method + Use Arguments
*/


console.log(Array.from("Mostafa"));
console.log(Array.from("12345", function (n) {
   return +n + +n;
}));
console.log(Array.from("12345", (n) => +n + +n));

//--------------------------------------
let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(mySet);
console.log(Array.from(mySet));

console.log([...new Set(myArray)]); // Future

function testArgs() {
   return arguments;
}
console.log(testArgs("Mostafa", "Osama", "Aziz", "Rachid"));

function fr() {
   return Array.from(arguments);
}
console.log(fr("Mostafa", "Osama", "Aziz", "Rachid"));
