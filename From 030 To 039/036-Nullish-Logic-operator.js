/*
 Logical or || 
 Nullish Coalescing operator ??

*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

var price = 0;

console.log(`The Price Is ${price || 200}`);
console.log(`The Price Is ${price ?? 200}`);