
// Function  :
// - Return 
// - Automatic Semicolon Insertion 
// - Interruptting 

console.log("-----------");

function calc(num1, num2) {
    return num1 + num2;
}

console.log(calc(10, 20));

let result = calc(50, 150);

console.log(result);

//---------------

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
        if (i === 15) {
            return `Interruptting`;
        }
    }
}

generate(10, 20);
console.log(generate(10, 20));
let interValue = generate(10, 20);
console.log(interValue);
