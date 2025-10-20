console.log("%c===> [Map And Set] #123 <===", "color:darkorange");

// ===> set date type


let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
let myUniqueData = new Set().add(2).add(2).add(3).add(4).add("A");

console.log(myUniqueData);
console.log(myUniqueData.size);

console.log(myUniqueData[0]); // undefined

myUniqueData.delete(3);
console.log(myUniqueData.delete(30));

console.log(myUniqueData);

console.log(myUniqueData.has("A"));

myUniqueData.clear();
console.log(myUniqueData);

console.log(myUniqueData.has("A"));
