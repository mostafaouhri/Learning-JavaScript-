/*
=> Var :
- Redeclare (Yes)
- acces before declare (Undefined)
- variable scope drama [added to window] ()
- block or function scope 

=> Let :
- Redeclare (No => error)
- acces before declare (error)
- variable scope drama ()
- block or function scope 

=> Const :
- Redeclare (No => error)
- acces before declare (error)
- variable scope drama ()
- block or function scope 
 */

// Redeclare :
var a = 10;
var a = 17;
console.log(a);

let b = 20; // can't redeclare let 
// let b = 30 ; 
console.log(b);

const c = 50; // can't redeclare const 
// const c = 30 ; 
console.log(c);

// acces before declare  :
console.log(d);
var d = 100;

// console.log(j);
// let j = 100;

// console.log(m);
// const m = 100;

// variable scope drama :
var aa = 22;
let aaa = 333;
const aaaa = 4444;

