console.log("%c===> [Map And Set] #129 <===", "color:darkorange");

/*
   |=========> Array Methods <=========|
   - Array.copyWithin
*/

let myArray2 = [10, 20, 30, 40, 50, "A", "B"];

// myArray2.copyWithin(3) // [10, 20, 30, 10, 20, 30, 40]
// myArray2.copyWithin(4, 6) // [10, 20, 30, 40, "B", "A", "B"]
// myArray2.copyWithin(4, -1) // [10, 20, 30, 40, "B", "A", "B"]
// myArray2.copyWithin(1, -2) // [10, "A", "B", 40, 50, "A", "B"]
myArray2.copyWithin(1, -2, -1) // [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray2);
