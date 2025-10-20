console.log("%c===> [Map And Set] #126 <===", "color:darkorange");

/*
   =========> Map Data Type: <=========
   * Map Methods :
   ----------- set
   ----------- get
   ----------- delete
   ----------- clear
   ----------- has
   
   * Properties :
   ----------- Size
*/

let myMap2 = new Map([
   [50, "Number"],
   ["Name", "String"],
   [false, "Boolean"],
]);

myMap2.set(10, "Number");
// myMap2.set("Name", "ka");

console.log(myMap2);

console.log(myMap2.get(10));
console.log(myMap2.get("Name"));
console.log(myMap2.get(false));

console.log(myMap2.size);

console.log(myMap2.delete("Name"));
console.log(myMap2.delete("Names"));

console.log(myMap2.size);

console.log(myMap2.has(false));
console.log(myMap2.has("Star"));

myMap2.clear();
console.log(myMap2.size);
