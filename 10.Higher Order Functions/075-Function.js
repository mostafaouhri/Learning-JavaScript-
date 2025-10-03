/* 
- Reduce 
--- method executes a reducer fanction on each element of the array 
--- resulting in a single output value.

  sytax :
*/

console.log('%c===> Higher Order Functions [Reduce] 75 <===', "color:red;");

let nums = [10, 20, 15, 30];

let add2 = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log("#############");
  return acc + current;
}, 5);
console.log(add2);