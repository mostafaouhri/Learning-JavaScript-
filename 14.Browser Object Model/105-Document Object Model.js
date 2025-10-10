console.log("%c===> [BOM] #105 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- setInterval(function, Millseconds, Additional params)
--- clearInterval(Identifier) 
*/

setInterval(function () {
    console.log(`Msg`);
}, 1000);

setInterval(sayHello, 3000, "Mostafa", 26);
function sayHello(user, age) {
    console.log(`Hello, ${user} His age is ${age}`);
};
let div = document.querySelector('div');

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML == 0) {
        clearInterval(counter2);
    }
}
let counter2 = setInterval(countdown, 1000);