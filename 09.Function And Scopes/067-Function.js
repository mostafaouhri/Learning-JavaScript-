/*
 Scope :
 - global and local scope
*/
console.log('----- Scope -------');

var a = 1;
let b = 2;

function show() {
    var a = 10;
    let b = 20;
    console.log(`function - from local ${a}`);
    console.log(`function - from local ${b}`);
}

console.log(`function - from global ${a}`);
console.log(`function - from global ${b}`);

show();