console.log("%c===> [20.Date_Generators_Modules] #165 <===", "color:darkgoldenrod;font-weight:bold");

// Generators
// *-* Delegate Generator


function* generateNums() {
    yield 1;
    yield 2;
    yield 3;
};

function* generateLetters() {
    yield "A";
    yield "B";
    yield "C";
};
function* generateAll() {
    yield* generateNums();
    yield* generateLetters();
    yield* [4, 5, 6];
};

let generator2 = generateAll();
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.return("Z"));
console.log(generator2.next());
console.log(generator2.next());
