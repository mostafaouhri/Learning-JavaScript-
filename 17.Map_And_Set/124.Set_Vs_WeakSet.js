console.log("%c===> [Map And Set] #124 <===", "color:darkorange");

/*
 =========> Set vs weakSet <=========
 Set     => can store any data values 
 weakSet => can store any data values 
-------------------------------------
Set     => have Size property
weakSet => does not have size property
-------------------------------------
Set     => have keys, values, Entries
weakSet => does not have clear, keys, values, Entries
-------------------------------------
Set     => can use forEach
weakSet => cannot use forEach
-------------------------------------
*/

// type of data 
let myset = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(myset);

// Size
console.log(myset.size, "==> Set Size");

// Values + Keys [Alias for values]
let iterator = myset.keys();

console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());

// forEach

myset.forEach((el) => console.log(el));

//-----------------------------------------

// type of data 
let myWeakSet = new WeakSet([{ A1: 100, A2: 200 }]);
console.log(myWeakSet);

