/* 
Function :
- anonymous function
- calling named function vs anonymous function
- argument to other function
- task without name
- setTimeout 

*/

let calc = function (num1, num2) {
    return num1 + num2;
}

console.log(calc(10, 20));//30

function sayHello() {
    console.log("%cHello Mostafa", "color:orange");
}

document.getElementById("show").onclick = sayHello;//Hello Mostafa

// document.getElementById("show").onclick = function () {
//     console.log("%cShow", "color:orange")
// }

setTimeout(function () {
    // console.log("Good");
}, 2000); //good // after 2sec