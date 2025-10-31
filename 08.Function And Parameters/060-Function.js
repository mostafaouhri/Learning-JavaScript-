
// Function  :
// - default fanction parameters 
// - function parameters default 
// - old straregies [condition + logical or]
// - ES6 method 

console.log("-----------");

function sayHello(userName, age = "Unknown") {
    // if (age === undefined) {
    //     age = "Unknown";
    // }

    // age = age || "Unknown";
    return `Hello ${userName} Your Age Is ${age}`;
}

console.log(sayHello("Mostafa"));
console.log(sayHello("Saliha", 26));