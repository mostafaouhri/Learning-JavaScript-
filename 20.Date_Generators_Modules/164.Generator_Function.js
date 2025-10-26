console.log("%c===> [20.Date_Generators_Modules] #164 <===", "color:darkgoldenrod;font-weight:bold");

// ---- Generator Function
// ---- Generators


function* generateNumbers() {
    yield 1;
    console.log("hello after yield 1");
    yield 2;
    yield 3;
    yield 4;
};

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
    console.log(value);
};
// for (let value of generator) {
//     console.log(value);
// };
