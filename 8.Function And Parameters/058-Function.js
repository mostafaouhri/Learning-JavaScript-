
// Function Advanced Examples :
console.log("-----------");

function sayHello(userName, age) {
    if (age < 20) {
        console.log("App Is Not Suitable For You");
    }
    else {
        console.log(`Hello ${userName} Your Age Is ${age}`);
    }
}
sayHello("Mostafa", 22);
sayHello("Sarah", 44);
sayHello("Walid", 13);

//----------------------------

function generateYears(start, end, exclude) {
    for (start; start <= end; start++) {
        if (start === exclude) {
            continue;
        }
        console.log(start);
    }
}
generateYears(2000, 2005, 2003);
