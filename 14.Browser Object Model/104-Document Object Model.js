console.log("%c===> [BOM] #104 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- serTimeout(function, Timeout, Additional params)
--- clearTimeout(Identifier) 
*/

setTimeout(function () {
    console.log(`Msg`);
}, 3000);

setTimeout(sayHello, 3000, "Mostafa", 26);
function sayHello(user, age) {
    console.log(`Hello, ${user} His age is ${age}`);
};

let counter = setTimeout(go, 3000);
function go() {
    console.log(`Go Away`);
};

let btn = document.querySelector('button');

btn.onclick = function () {
    clearTimeout(counter);
};
