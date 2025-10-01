/*
 Scope :
 - block scope [if, switch, for]
*/
console.log('----- Scope 68 -------');

var x = 10;

if (true) {
    var x = 50;
}

console.log(x);
