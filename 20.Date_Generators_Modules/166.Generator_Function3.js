console.log("%c===> [20.Date_Generators_Modules] #166 <===", "color:darkgoldenrod;font-weight:bold");

// Generators
// *-* Generate Infinite Numbers
// *-* Use Return Inside Generators


function* generateNumbers() {
    // yield 1;
    // yield 2;
    // return "A";
    // yield 3;
    // yield 4;
    let index = 0;
    while (true) {
        yield index++;
    }
};

let generator3 = generateNumbers();
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());